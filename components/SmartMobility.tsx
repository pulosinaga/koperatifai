import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';
import { GoogleGenAI } from "@google/genai";

const SmartMobility: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  const [plateNumber, setPlateNumber] = useState('B 1234 KOP');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [transactionType, setTransactionType] = useState<'TOL' | 'BANDARA' | 'TIKET' | null>(null);
  const [txDetails, setTxDetails] = useState({ name: '', amount: 0, cashback: 0 });
  const [aiTip, setAiTip] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const voluntaryBalance = user?.balances?.voluntary || 0;

  const handleTransaction = async (type: 'TOL' | 'BANDARA' | 'TIKET', name: string, amount: number, cashback: number = 250) => {
    if (voluntaryBalance < amount) {
      alert(`Saldo Anda tidak mencukupi untuk pembayaran ini.\nButuh: Rp ${amount.toLocaleString('id-ID')}`);
      return;
    }

    setIsProcessing(true);
    setTransactionType(type);
    setTxDetails({ name, amount, cashback });

    try {
      if (isLiveDatabase && user && supabase) {
         const newBalance = voluntaryBalance - amount;
         const { error: balError } = await supabase
            .from('balances')
            .update({ voluntary: newBalance })
            .eq('user_id', user.id);
            
         if (balError) throw new Error("Gagal memotong saldo Anda.");

         const { error: txError } = await supabase
            .from('transactions')
            .insert({
               user_id: user.id,
               type: 'withdrawal',
               description: `${type === 'TOL' ? 'Auto-Toll MLFF' : type === 'BANDARA' ? 'Airport Gate' : 'Tiket Perjalanan'}: ${name}`,
               amount: amount,
               status: 'completed'
            });
            
         if (txError) throw new Error("Gagal mencatat transaksi.");
         await refreshProfile();
      }
      setShowSuccess(true);
    } catch (e: any) {
      alert(`Gagal memproses transaksi: ${e.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const generateAITip = async () => {
    setIsAiLoading(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan 1 tips singkat (maksimal 2 kalimat) tentang betapa nyamannya bepergian lewat tol, bandara, atau beli tiket pesawat jika bayarnya tidak pakai bank, tapi dipotong langsung dari tabungan koperasi. Jelaskan bahwa komisi agen (agent fee) kembali ke SHU anggota. Gunakan nada bahagia dan modern.`,
      });
      setAiTip(response.text || "Tips tidak tersedia.");
    } catch (e) {
      setAiTip("Setiap tap di gerbang dan pembelian tiket adalah tabungan masa depan Anda. Komisi agen berputar kembali untuk SHU komunitas kita!");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero Header */}
      <div className="bg-[#0b0e14] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.2)] transform -skew-y-3"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Borderless Mobility Gateway
            </span>
            <h2 className="text-5xl font-black leading-tight italic">Mobilitas Pintar. <br/>Jalan Terus, Biar Saldo Yang Mengurus.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Aplikasi KoperatifAI kini terintegrasi dengan <b>Tol MLFF</b>, <b>Gate Bandara</b>, hingga <b>Sistem Tiket Nasional (KAI, PELNI, Pesawat)</b>. Lupakan antrean top-up kartu.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">💳</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Saldo Mobilitas (Sukarela)</p>
             <p className="text-4xl font-black text-white mt-1 italic">Rp {voluntaryBalance.toLocaleString('id-ID')}</p>
             <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-emerald-400 uppercase">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Open API Ready
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Toll MLFF Section */}
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl transition-all group-hover:scale-150"></div>
            <div className="relative z-10 flex justify-between items-center border-b border-slate-100 pb-6">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🚗</div>
                  <div>
                     <h3 className="text-xl font-black text-slate-800 italic">Jalan Tol (MLFF)</h3>
                     <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Multi Lane Free Flow</p>
                  </div>
               </div>
            </div>

            <div className="relative z-10 space-y-6">
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nomor Kendaraan Terdaftar</label>
                  <div className="flex bg-slate-900 rounded-2xl p-2 items-center text-white border-2 border-slate-800 focus-within:border-indigo-500 transition-colors">
                     <span className="px-4 text-slate-500 font-bold border-r border-slate-700">RI</span>
                     <input 
                        type="text" 
                        value={plateNumber}
                        onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                        className="bg-transparent border-none outline-none font-black text-2xl px-4 w-full text-center tracking-widest"
                     />
                  </div>
               </div>
               
               <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                  <p className="text-xs text-indigo-900 leading-relaxed font-bold italic">
                     "Kamera ANPR Gerbang Tol akan membaca pelat Anda tanpa perlu berhenti. Saldo Koperasi akan terpotong otomatis via API."
                  </p>
               </div>

               <button 
                  onClick={() => handleTransaction('TOL', 'Gerbang Tol Dalam Kota (Simulasi)', 15000, 250)}
                  disabled={isProcessing}
                  className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-black transition-all active:scale-95 disabled:opacity-50"
               >
                  {isProcessing && transactionType === 'TOL' ? 'MEMPROSES GATE...' : 'SIMULASI LEWAT GERBANG TOL (Rp 15.000)'}
               </button>
            </div>
         </div>

         {/* Airport Section */}
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl transition-all group-hover:scale-150"></div>
            <div className="relative z-10 flex justify-between items-center border-b border-slate-100 pb-6">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">✈️</div>
                  <div>
                     <h3 className="text-xl font-black text-slate-800 italic">Akses Bandara & Transit</h3>
                     <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">NFC & Virtual Ticket</p>
                  </div>
               </div>
            </div>

            <div className="relative z-10 space-y-6">
               <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center hover:border-amber-300 transition-colors">
                     <div>
                        <p className="font-bold text-slate-800">Kereta Bandara (Railink)</p>
                        <p className="text-[10px] text-slate-500 uppercase">Tap NFC di Gate</p>
                     </div>
                     <button 
                        onClick={() => handleTransaction('BANDARA', 'Kereta Bandara Express', 70000, 500)}
                        disabled={isProcessing}
                        className="px-4 py-2 bg-amber-500 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:bg-amber-600"
                     >
                        Tap (Rp 70rb)
                     </button>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center hover:border-amber-300 transition-colors">
                     <div>
                        <p className="font-bold text-slate-800">Airport Lounge Access</p>
                        <p className="text-[10px] text-slate-500 uppercase">Scan QRIS Koperasi</p>
                     </div>
                     <button 
                        onClick={() => handleTransaction('BANDARA', 'Premium Airport Lounge', 150000, 2000)}
                        disabled={isProcessing}
                        className="px-4 py-2 bg-amber-500 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:bg-amber-600"
                     >
                        Scan (Rp 150rb)
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Intercity Tickets (Pesawat, KAI, PELNI) */}
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8 lg:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 w-64 h-64 bg-emerald-50 rounded-full blur-3xl transition-all group-hover:scale-150 transform -translate-x-1/2 -mt-10"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 pb-6 gap-4">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">🗺️</div>
                  <div>
                     <h3 className="text-2xl font-black text-slate-800 italic">Tiket Perjalanan Nasional</h3>
                     <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Pesawat • KAI • PELNI</p>
                  </div>
               </div>
               <div className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100 text-right">
                  <p className="text-[8px] font-black text-emerald-600 uppercase">Komisi Agen Masuk Ke:</p>
                  <p className="text-sm font-black text-emerald-900">SHU Koperasi</p>
               </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Pesawat */}
               <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-200 flex flex-col hover:border-emerald-300 transition-colors">
                  <div className="text-4xl mb-4">✈️</div>
                  <h4 className="font-bold text-slate-800 text-lg">Tiket Pesawat</h4>
                  <p className="text-[10px] text-slate-500 mb-6 flex-1">Rute: Jakarta (CGK) ➔ Bali (DPS)</p>
                  <div className="flex justify-between items-end border-t border-slate-200 pt-4 mb-4">
                     <p className="font-black text-slate-800">Rp 850.000</p>
                     <div className="text-right">
                        <p className="text-[8px] uppercase font-bold text-slate-400">Cashback SHU</p>
                        <p className="text-xs font-black text-emerald-600">+ Rp 25.000</p>
                     </div>
                  </div>
                  <button 
                     onClick={() => handleTransaction('TIKET', 'Tiket Pesawat CGK-DPS', 850000, 25000)}
                     disabled={isProcessing}
                     className="w-full py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:bg-emerald-700"
                  >
                     Beli via Saldo
                  </button>
               </div>

               {/* KAI */}
               <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-200 flex flex-col hover:border-emerald-300 transition-colors">
                  <div className="text-4xl mb-4">🚂</div>
                  <h4 className="font-bold text-slate-800 text-lg">Tiket Kereta Api</h4>
                  <p className="text-[10px] text-slate-500 mb-6 flex-1">Rute: Gambir (GMR) ➔ Bandung (BD)</p>
                  <div className="flex justify-between items-end border-t border-slate-200 pt-4 mb-4">
                     <p className="font-black text-slate-800">Rp 150.000</p>
                     <div className="text-right">
                        <p className="text-[8px] uppercase font-bold text-slate-400">Cashback SHU</p>
                        <p className="text-xs font-black text-emerald-600">+ Rp 7.500</p>
                     </div>
                  </div>
                  <button 
                     onClick={() => handleTransaction('TIKET', 'Tiket KAI GMR-BD', 150000, 7500)}
                     disabled={isProcessing}
                     className="w-full py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:bg-emerald-700"
                  >
                     Beli via Saldo
                  </button>
               </div>

               {/* PELNI */}
               <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-200 flex flex-col hover:border-emerald-300 transition-colors">
                  <div className="text-4xl mb-4">🚢</div>
                  <h4 className="font-bold text-slate-800 text-lg">Tiket Kapal PELNI</h4>
                  <p className="text-[10px] text-slate-500 mb-6 flex-1">Rute: Tj. Priok ➔ Makassar</p>
                  <div className="flex justify-between items-end border-t border-slate-200 pt-4 mb-4">
                     <p className="font-black text-slate-800">Rp 420.000</p>
                     <div className="text-right">
                        <p className="text-[8px] uppercase font-bold text-slate-400">Cashback SHU</p>
                        <p className="text-xs font-black text-emerald-600">+ Rp 15.000</p>
                     </div>
                  </div>
                  <button 
                     onClick={() => handleTransaction('TIKET', 'Tiket PELNI JKT-MKS', 420000, 15000)}
                     disabled={isProcessing}
                     className="w-full py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:bg-emerald-700"
                  >
                     Beli via Saldo
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* AI Tips Banner */}
      <div className="bg-slate-900 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
         <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center text-4xl shrink-0 border border-white/20 relative z-10">🤖</div>
         <div className="flex-1 space-y-4 relative z-10">
            <h4 className="text-xl font-black text-indigo-400 italic">Tips Mobilitas AI</h4>
            <div className="text-sm text-slate-300 italic font-serif leading-relaxed">
               {isAiLoading ? (
                  <div className="flex gap-2">
                     <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                     <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></span>
                     <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></span>
                  </div>
               ) : aiTip ? (
                  <p>{aiTip}</p>
               ) : (
                  <p>Klik tombol di samping untuk saran perjalanan cerdas.</p>
               )}
            </div>
         </div>
         <button 
            onClick={generateAITip}
            disabled={isAiLoading}
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl relative z-10"
         >
            Tanya AI
         </button>
      </div>

      {/* Success Modal */}
      {showSuccess && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-sm rounded-[3.5rem] p-10 text-center space-y-8 shadow-2xl border-4 border-emerald-500/20">
               <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center text-5xl mx-auto shadow-[0_0_40px_rgba(16,185,129,0.4)] animate-bounce">✓</div>
               <div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Perjalanan Mulus!</h3>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Transaksi {transactionType === 'TOL' ? 'Tol MLFF' : transactionType === 'BANDARA' ? 'Bandara' : 'Pembelian Tiket'} berhasil divalidasi.
                  </p>
               </div>
               
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-left space-y-3">
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                     <span>Layanan</span>
                     <span className="text-slate-800 truncate max-w-[120px] text-right">{txDetails.name}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                     <span>Nominal Potong</span>
                     <span className="text-rose-600">- Rp {txDetails.amount.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                     <span className="text-[10px] font-black text-emerald-600 uppercase">Cashback ke Kas SHU</span>
                     <span className="text-xs font-bold text-emerald-600">+ Rp {txDetails.cashback.toLocaleString('id-ID')}</span>
                  </div>
               </div>

               <button 
                 onClick={() => setShowSuccess(false)} 
                 className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all"
               >
                 Tutup & Lanjutkan Perjalanan
               </button>
            </div>
         </div>
      )}
    </div>
  );
};

export default SmartMobility;