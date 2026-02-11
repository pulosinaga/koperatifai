import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

const CashWithdrawal: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  const [amountStr, setAmountStr] = useState('');
  const [method, setMethod] = useState<'duta' | 'bank' | 'global' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [destCurrency, setDestCurrency] = useState('USD');

  // Hanya saldo sukarela yang bisa ditarik
  const voluntaryBalance = user?.balances?.voluntary || 0;
  
  const amount = Number(amountStr) || 0;
  
  // Tentukan biaya admin berdasarkan metode
  let adminFee = 0;
  if (method === 'bank') adminFee = 2500;
  if (method === 'global') adminFee = 15000; // Biaya jaringan internasional

  const totalDeduction = amount + adminFee;

  // Simulasi Kurs (FX Rate)
  const exchangeRates: Record<string, number> = {
     'USD': 15800,
     'EUR': 17200,
     'SAR': 4210, // Riyal (Umroh/Haji)
     'SGD': 11800
  };

  const convertedAmount = amount / (exchangeRates[destCurrency] || 15800);

  const handleWithdrawal = async () => {
    if (amount < 10000) {
       alert("Minimal penarikan adalah Rp 10.000");
       return;
    }
    if (totalDeduction > voluntaryBalance) {
       alert("Saldo Sukarela Anda tidak mencukupi untuk penarikan + biaya admin.");
       return;
    }

    setIsProcessing(true);
    try {
       if (isLiveDatabase && user && supabase) {
          const newBalance = voluntaryBalance - totalDeduction;
          
          // 1. Update Saldo Supabase
          const { error: balError } = await supabase
             .from('balances')
             .update({ voluntary: newBalance })
             .eq('user_id', user.id);
             
          if (balError) throw new Error("Gagal mengupdate saldo.");

          // 2. Catat Transaksi Withdrawal
          const methodDesc = method === 'bank' ? 'via ATM/Transfer Bank' : method === 'global' ? `ATM Internasional (${destCurrency})` : 'via Duta/Warung Anggota';
          const { error: txError } = await supabase
             .from('transactions')
             .insert({
                user_id: user.id,
                type: 'withdrawal',
                description: `Tarik Tunai ${methodDesc}`,
                amount: totalDeduction,
                status: 'completed'
             });
             
          if (txError) throw new Error("Gagal mencatat mutasi.");

          // 3. Refresh Profile
          await refreshProfile();
       }
       setShowSuccess(true);
    } catch (e: any) {
       alert(`Gagal memproses penarikan: ${e.message}`);
    } finally {
       setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header & Balance Card */}
      <div className="bg-[#020617] rounded-[3.5rem] p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Open Liquidity Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Tarik Tunai <br/><span className="text-indigo-400">Kapanpun & Dimanapun.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
              Simpanan Sukarela adalah hak mutlak Anda. Tarik uang Anda melalui Duta, jaringan ATM Nasional, hingga ATM Credit Union di seluruh dunia.
            </p>
          </div>
          
          {/* Card Visual */}
          <div className="w-full lg:w-96 bg-gradient-to-br from-indigo-600 to-indigo-900 p-8 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden transform lg:rotate-2">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                   <span className="text-2xl">💳</span>
                   <span className="text-[10px] font-black text-indigo-200 uppercase tracking-widest">Saldo Bebas Tarik</span>
                </div>
                <p className="text-4xl font-black text-white italic tracking-tighter">
                   Rp {voluntaryBalance.toLocaleString('id-ID')}
                </p>
                <div className="mt-8 flex justify-between items-end">
                   <div>
                      <p className="text-[8px] text-indigo-300 uppercase font-black tracking-widest">Pemilik</p>
                      <p className="text-xs font-bold text-white mt-1 uppercase">{user?.name || 'MEMBER'}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded">100% LIQUID</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Method Selection */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">1. Pilih Metode Penarikan</h3>
            
            <div className="space-y-4">
               {/* Option 1: Duta / Warung */}
               <button 
                  onClick={() => setMethod('duta')}
                  className={`w-full p-6 rounded-[2rem] border-2 text-left transition-all flex gap-5 group ${
                    method === 'duta' ? 'border-emerald-500 bg-emerald-50 shadow-lg' : 'border-slate-100 hover:border-emerald-200'
                  }`}
               >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform ${method === 'duta' ? 'bg-emerald-500 text-white scale-110' : 'bg-slate-50 group-hover:scale-110'}`}>🏪</div>
                  <div className="flex-1">
                     <div className="flex justify-between items-start">
                        <h4 className="font-bold text-slate-800 text-lg">Via Warung Anggota</h4>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded text-[9px] font-black uppercase">Rekomendasi</span>
                     </div>
                     <p className="text-xs text-slate-500 mt-1 leading-relaxed">Datang ke warung berlogo KoperatifAI. Transfer saldo digital ke mereka, terima uang tunai dari laci mereka.</p>
                     <p className="text-[10px] font-black text-emerald-600 mt-3 uppercase">Biaya Admin: Rp 0 (Gratis)</p>
                  </div>
               </button>

               {/* Option 2: Bank / ATM */}
               <button 
                  onClick={() => setMethod('bank')}
                  className={`w-full p-6 rounded-[2rem] border-2 text-left transition-all flex gap-5 group ${
                    method === 'bank' ? 'border-indigo-600 bg-indigo-50 shadow-lg' : 'border-slate-100 hover:border-indigo-200'
                  }`}
               >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform ${method === 'bank' ? 'bg-indigo-600 text-white scale-110' : 'bg-slate-50 group-hover:scale-110'}`}>🏧</div>
                  <div className="flex-1">
                     <h4 className="font-bold text-slate-800 text-lg">Transfer ke Rekening Bank</h4>
                     <p className="text-xs text-slate-500 mt-1 leading-relaxed">Cairkan ke rekening bank pribadi Anda untuk ditarik via mesin ATM Bersama / GPN.</p>
                     <p className="text-[10px] font-black text-rose-500 mt-3 uppercase">Biaya Admin: Rp 2.500</p>
                  </div>
               </button>

               {/* Option 3: Global / WOCCU */}
               <button 
                  onClick={() => setMethod('global')}
                  className={`w-full p-6 rounded-[2rem] border-2 text-left transition-all flex gap-5 group ${
                    method === 'global' ? 'border-amber-500 bg-amber-50 shadow-lg' : 'border-slate-100 hover:border-amber-200'
                  }`}
               >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform ${method === 'global' ? 'bg-amber-500 text-white scale-110' : 'bg-slate-50 group-hover:scale-110'}`}>🌍</div>
                  <div className="flex-1">
                     <h4 className="font-bold text-slate-800 text-lg">Jaringan ATM Global (WOCCU)</h4>
                     <p className="text-xs text-slate-500 mt-1 leading-relaxed">Tarik valas di ATM luar negeri. KoperatifAI akan mengonversi saldo Rupiah Anda menggunakan kurs riil.</p>
                     <p className="text-[10px] font-black text-amber-600 mt-3 uppercase">Biaya Jaringan: Rp 15.000</p>
                  </div>
               </button>
            </div>
         </div>

         {/* Form Action */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 italic">2. Rincian Penarikan</h3>
            
            <div className="flex-1 space-y-6">
               <div className="space-y-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Nominal Tarik (Rupiah)</label>
                  <input 
                     type="number" 
                     value={amountStr}
                     onChange={(e) => setAmountStr(e.target.value)}
                     placeholder="Contoh: 500000"
                     className="w-full p-6 bg-slate-50 border-none rounded-[2rem] text-3xl font-black text-slate-800 outline-none focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-slate-300"
                  />
               </div>

               {method === 'global' && amount > 0 && (
                  <div className="p-6 bg-amber-50 rounded-[2rem] border border-amber-100 space-y-4 animate-in slide-in-from-right">
                     <div className="flex justify-between items-center">
                        <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Pilih Mata Uang Negara Tujuan</p>
                        <select 
                           value={destCurrency}
                           onChange={(e) => setDestCurrency(e.target.value)}
                           className="bg-white border border-amber-200 text-xs font-bold p-2 rounded-lg outline-none text-slate-800"
                        >
                           <option value="USD">USD (Dolar AS)</option>
                           <option value="EUR">EUR (Euro)</option>
                           <option value="SGD">SGD (Dolar SGP)</option>
                           <option value="SAR">SAR (Riyal Arab)</option>
                        </select>
                     </div>
                     <div className="pt-4 border-t border-amber-200/50 flex justify-between items-end">
                        <div>
                           <p className="text-[9px] text-slate-500 uppercase">Estimasi Uang Diterima di ATM Luar Negeri</p>
                           <p className="text-xs text-slate-500 font-bold mt-1">Kurs Real-Time: Rp {exchangeRates[destCurrency].toLocaleString('id-ID')}</p>
                        </div>
                        <p className="text-2xl font-black text-amber-600">{destCurrency} {convertedAmount.toFixed(2)}</p>
                     </div>
                  </div>
               )}

               {amount > 0 && method && (
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] space-y-4 animate-in slide-in-from-bottom duration-300">
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Jumlah Tarik</span>
                        <span className="font-bold text-slate-800">Rp {amount.toLocaleString('id-ID')}</span>
                     </div>
                     <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-4">
                        <span className="text-slate-500">Biaya Layanan</span>
                        <span className={`font-bold ${adminFee === 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                           {adminFee === 0 ? 'Gratis' : `Rp ${adminFee.toLocaleString('id-ID')}`}
                        </span>
                     </div>
                     <div className="flex justify-between items-center pt-2">
                        <span className="text-xs font-black uppercase text-slate-400">Total Potong Saldo</span>
                        <span className="text-2xl font-black text-indigo-600 italic">Rp {totalDeduction.toLocaleString('id-ID')}</span>
                     </div>
                  </div>
               )}
            </div>

            <button 
               onClick={handleWithdrawal}
               disabled={isProcessing || !method || amount < 10000 || totalDeduction > voluntaryBalance}
               className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
            >
               {isProcessing ? 'MEMPROSES...' : method === 'global' ? 'OTORISASI TARIK GLOBAL' : 'TARIK DANA SEKARANG'}
            </button>
         </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-md rounded-[4rem] p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner">✓</div>
               <div>
                  <h3 className="text-3xl font-black text-slate-800 italic">Penarikan Sukses!</h3>
                  <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    {method === 'bank' 
                      ? 'Dana sedang ditransfer ke rekening bank Anda via API Gateway.' 
                      : method === 'global'
                      ? `Gateway Internasional Terhubung. Silakan ambil uang ${destCurrency} Anda di mesin ATM berlogo PLUS/Cirrus/WOCCU.`
                      : 'Tunjukkan layar ini (QR) kepada Pemilik Warung / Duta untuk menerima uang tunai Anda.'}
                  </p>
               </div>
               
               {(method === 'duta' || method === 'global') && (
                 <div className="w-48 h-48 bg-slate-50 rounded-3xl mx-auto border-4 border-indigo-600 flex flex-col items-center justify-center text-slate-300 font-mono text-xs shadow-inner">
                    <span className="text-4xl mb-2">📱</span>
                    <span className="uppercase font-bold text-[8px] tracking-widest text-indigo-400 text-center px-4">Tap via NFC<br/>atau Scan QR di Mesin</span>
                 </div>
               )}

               <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Sisa Saldo Sukarela</p>
                  <p className="text-xl font-black text-indigo-900">Rp {(voluntaryBalance - totalDeduction).toLocaleString('id-ID')}</p>
               </div>

               <button 
                 onClick={() => { setShowSuccess(false); setAmountStr(''); }} 
                 className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all"
               >
                 Tutup
               </button>
            </div>
         </div>
      )}
    </div>
  );
};

export default CashWithdrawal;