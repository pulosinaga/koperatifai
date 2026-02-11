import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { UserRole } from '../types.ts';
import { supabase } from '../services/supabaseClient.ts';
import { GoogleGenAI } from "@google/genai";

const BillPayments: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [coopDailyRevenue, setCoopDailyRevenue] = useState(145500);
  const [transactionCount, setTransactionCount] = useState(84);
  const [aiAdvice, setAiAdvice] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const billTypes = [
    { id: 'bpjstk', label: 'BPJS Ketenagakerjaan', icon: '👷‍♂️', marketFee: 'Rp 3.500', ourFee: 'Rp 1.500', ourFeeNum: 1500, bonus: '500', color: 'bg-emerald-50 text-emerald-600', sub: 'Pekerja Mandiri/BPU' },
    { id: 'asuransi', label: 'Premi Asuransi Swasta', icon: '🛡️', marketFee: 'Rp 5.000', ourFee: 'Rp 2.500', ourFeeNum: 2500, bonus: '1000', color: 'bg-indigo-50 text-indigo-600', sub: 'Prudential, Allianz, Jiwasraya' },
    { id: 'pulsa', label: 'Pulsa & Data', icon: '📱', marketFee: 'Rp 2.000', ourFee: 'Rp 1.000', ourFeeNum: 1000, bonus: '300', color: 'bg-blue-50 text-blue-600' },
    { id: 'pln', label: 'PLN Token', icon: '⚡', marketFee: 'Rp 3.000', ourFee: 'Rp 1.500', ourFeeNum: 1500, bonus: '500', color: 'bg-amber-50 text-amber-600', promo: 'HOT' },
    { id: 'pdam', label: 'Air PDAM', icon: '💧', marketFee: 'Rp 2.500', ourFee: 'Rp 1.200', ourFeeNum: 1200, bonus: '400', color: 'bg-cyan-50 text-cyan-600' },
    { id: 'bpjskes', label: 'BPJS Kesehatan', icon: '🏥', marketFee: 'Rp 2.500', ourFee: 'Rp 1.000', ourFeeNum: 1000, bonus: '250', color: 'bg-rose-50 text-rose-600' },
  ];

  const currentCategory = billTypes.find(x => x.id === selectedCategory);

  const getAiInsuranceAdvice = async () => {
    if (!selectedCategory) return;
    setIsAiLoading(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Berikan 1 paragraf nasihat singkat (maksimal 3 kalimat) tentang pentingnya membayar ${currentCategory?.label} tepat waktu bagi anggota koperasi. Jelaskan bahwa setiap rupiah biaya admin di aplikasi ini kembali ke anggota sebagai SHU. Gunakan nada bicara yang peduli dan profesional.`,
      });
      setAiAdvice(response.text || "");
    } catch (e) {
      setAiAdvice("Perlindungan Anda adalah aset terpenting keluarga. Bayar tepat waktu untuk ketenangan jiwa.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const handlePay = async () => {
    if (!currentCategory || inputValue.length < 4) return;
    setIsProcessing(true);
    
    try {
      const basePrice = 16800; // Contoh harga BPJSTK BPU
      const totalCost = basePrice + currentCategory.ourFeeNum;

      if (isLiveDatabase && user && supabase) {
         if (user.balances.voluntary < totalCost) {
            throw new Error(`Saldo Sukarela tidak cukup!\nButuh: Rp ${totalCost.toLocaleString('id-ID')}\nSaldo: Rp ${user.balances.voluntary.toLocaleString('id-ID')}`);
         }
         const newBalance = user.balances.voluntary - totalCost;
         await supabase.from('balances').update({ voluntary: newBalance }).eq('user_id', user.id);
         await supabase.from('transactions').insert({
            user_id: user.id,
            type: 'withdrawal',
            description: `Payment: ${currentCategory.label} (${inputValue})`,
            amount: totalCost,
            status: 'completed'
         });
         await refreshProfile();
      }

      setShowSuccess(true);
      setCoopDailyRevenue(prev => prev + currentCategory.ourFeeNum);
      setTransactionCount(prev => prev + 1);
    } catch (err: any) {
      alert(`⚠️ Gagal: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      
      {/* Header Monetisasi */}
      <div className="bg-[#020617] rounded-[4rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              National Social Protection Gateway
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Proteksi Rakyat AI. <br/><span className="text-emerald-400">BPJSTK & Premi Asuransi.</span></h2>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Pastikan hari tua dan keselamatan kerja Anda terjamin. Bayar BPJSTK (BPU) dan Premi Asuransi swasta Anda langsung dari **Saldo Sukarela**. Admin tetap murah, SHU tetap bertambah.
            </p>
          </div>
          
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/20 text-center shadow-inner">
             <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Keuntungan Kas SHU Hari Ini</p>
             <p className="text-4xl font-black text-white italic transition-all duration-500">
               Rp {coopDailyRevenue.toLocaleString('id-ID')}
             </p>
             <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-300 font-bold uppercase">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                {transactionCount} Pembayaran Berhasil
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Categories Grid */}
         <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Pilih Kategori Proteksi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {billTypes.map((bill) => (
                 <button 
                  key={bill.id}
                  onClick={() => { setSelectedCategory(bill.id); setShowSuccess(false); setInputValue(''); setAiAdvice(''); }}
                  className={`p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-6 group relative overflow-hidden ${
                    selectedCategory === bill.id ? 'bg-indigo-600 border-indigo-500 shadow-2xl scale-[1.02]' : 'bg-white border-slate-100 hover:border-indigo-200'
                  }`}
                 >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-all shrink-0 ${
                      selectedCategory === bill.id ? 'bg-white/20 text-white' : bill.color
                    }`}>
                       {bill.icon}
                    </div>
                    <div className="text-left flex-1 relative z-10">
                       <h4 className={`font-black text-sm uppercase tracking-tighter ${selectedCategory === bill.id ? 'text-white' : 'text-slate-800'}`}>{bill.label}</h4>
                       {bill.sub && <p className={`text-[8px] font-bold ${selectedCategory === bill.id ? 'text-indigo-200' : 'text-slate-400'}`}>{bill.sub}</p>}
                       <div className="flex flex-col gap-1 mt-2">
                          <span className={`text-[10px] font-black ${selectedCategory === bill.id ? 'text-emerald-300' : 'text-emerald-600'}`}>
                             Admin Koperasi: {bill.ourFee}
                          </span>
                       </div>
                    </div>
                 </button>
               ))}
            </div>

            {/* AI Insight Box */}
            {selectedCategory && (
               <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-xl animate-in slide-in-from-bottom duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
                  <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl shrink-0 border border-white/10">🤖</div>
                     <div className="flex-1 space-y-4">
                        <h4 className="text-xl font-black italic text-indigo-400">Nasihat Proteksi AI</h4>
                        <div className="text-sm text-slate-300 italic font-serif leading-relaxed min-h-[40px]">
                           {isAiLoading ? "AI sedang meninjau manfaat polis Anda..." : aiAdvice || "Klik 'Tanya AI' untuk mendapatkan tips perlindungan masa depan."}
                        </div>
                     </div>
                     {!aiAdvice && (
                       <button onClick={getAiInsuranceAdvice} className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-indigo-700">Tanya AI</button>
                     )}
                  </div>
               </div>
            )}
         </div>

         {/* Payment Panel */}
         <div className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-xl flex flex-col relative overflow-hidden h-fit">
            <h3 className="text-2xl font-black text-slate-800 italic mb-8">Data Pembayaran</h3>
            
            {selectedCategory ? (
               <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       {selectedCategory === 'bpjstk' ? 'Nomor NIK / Kartu Peserta' : 'Nomor Polis / ID Pelanggan'}
                     </label>
                     <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value.replace(/\D/g, ''))}
                        placeholder="Ketik nomor di sini..." 
                        className="w-full p-5 bg-slate-50 border border-slate-200 rounded-3xl text-xl font-black outline-none focus:border-indigo-500 transition-all text-slate-800"
                     />
                  </div>

                  <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-4 shadow-inner">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">Rincian Transparansi</p>
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Harga Dasar Premi</span>
                        <span className="font-bold">Rp 16.800</span>
                     </div>
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Admin Koperasi</span>
                        <span className="font-bold text-emerald-400">+{currentCategory?.ourFee}</span>
                     </div>
                     <div className="h-px bg-white/10 my-2"></div>
                     <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase">Potong Saldo</span>
                        <span className="text-xl font-black text-white italic">Rp {(16800 + (currentCategory?.ourFeeNum || 0)).toLocaleString('id-ID')}</span>
                     </div>
                     <div className="mt-4 p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                        <span className="text-[9px] text-emerald-300 font-bold uppercase">Reward SHU Aktif</span>
                        <span className="text-sm font-black text-emerald-400">+Rp {currentCategory?.bonus}</span>
                     </div>
                  </div>

                  <button 
                    onClick={handlePay}
                    disabled={isProcessing || inputValue.length < 4}
                    className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:bg-slate-100 disabled:text-slate-300"
                  >
                     {isProcessing ? 'SISTEM MEMPROSES...' : 'BAYAR PREMI SEKARANG'}
                  </button>
               </div>
            ) : (
               <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-5xl">🛡️</div>
                  <p className="text-slate-500 font-bold italic max-w-[200px] text-sm">Pilih BPJSTK atau Asuransi Swasta di samping untuk mulai memproteksi diri.</p>
               </div>
            )}

            {showSuccess && (
               <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in zoom-in duration-300">
                  <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-5xl shadow-lg text-white animate-bounce">✓</div>
                  <div>
                     <h4 className="text-3xl font-black text-slate-800 italic">Pembayaran Sukses!</h4>
                     <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                       Premi {currentCategory?.label} berhasil didebet. Proteksi Anda aktif untuk 1 bulan ke depan.
                     </p>
                  </div>
                  <button onClick={() => { setShowSuccess(false); setInputValue(''); }} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all">Selesai</button>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default BillPayments;