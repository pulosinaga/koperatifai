import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';

const WalletIntegration: React.FC = () => {
  const { user } = useAppContext();
  const [showToken, setShowToken] = useState(false);
  const [tokenValue, setTokenValue] = useState('882-991-XXX');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState('');

  const voluntaryBalance = user?.balances?.voluntary || 0;

  const generateToken = (merchant: string) => {
    setSelectedMerchant(merchant);
    setIsGenerating(true);
    setTimeout(() => {
      setTokenValue(Math.floor(Math.random() * 899999 + 100000).toString().replace(/(\d{3})(\d{3})/, '$1-$2'));
      setIsGenerating(false);
      setShowToken(true);
    }, 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-24 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Kedaulatan di Kasir</h2>
         <p className="text-slate-500 text-lg italic">"Belanja kebutuhan rumah pakai Saldo Sukarela Koperasi."</p>
      </div>

      <div className="flex flex-col items-center">
         {/* The Payment App Interface */}
         <div className="w-full max-w-md bg-white rounded-[4rem] shadow-2xl overflow-hidden border-[12px] border-slate-900 p-8 lg:p-10 flex flex-col items-center space-y-10 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
            
            <div className="w-full text-center space-y-1 border-b border-slate-50 pb-6">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Saldo Belanja Anda</p>
               <h4 className="text-4xl font-black text-slate-900 italic">Rp {voluntaryBalance.toLocaleString('id-ID')}</h4>
            </div>

            {!showToken ? (
               <div className="text-center space-y-10 py-10 animate-in zoom-in w-full">
                  <div className="w-32 h-32 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center text-6xl shadow-inner mx-auto">🏪</div>
                  <div className="space-y-3 px-4">
                     <h3 className="text-2xl font-black text-slate-800 uppercase italic">Pilih Toko</h3>
                     <p className="text-slate-400 text-sm italic">"Tunjukkan kode bayar ke kasir untuk memotong saldo."</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <button onClick={() => generateToken('INDOMARET')} disabled={isGenerating} className="p-4 bg-indigo-50 rounded-2xl border-2 border-indigo-100 hover:border-indigo-600 transition-all flex flex-col items-center gap-2 active:scale-95">
                        <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">INDOMARET</span>
                     </button>
                     <button onClick={() => generateToken('ALFAMART')} disabled={isGenerating} className="p-4 bg-rose-50 rounded-2xl border-2 border-rose-100 hover:border-rose-600 transition-all flex flex-col items-center gap-2 active:scale-95">
                        <span className="text-xs font-black text-rose-600 uppercase tracking-widest">ALFAMART</span>
                     </button>
                  </div>
               </div>
            ) : (
               <div className="w-full space-y-8 animate-in fade-in">
                  <div className="p-8 bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center space-y-8 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                     <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] relative z-10">TOKEN {selectedMerchant}</p>
                     
                     <div className="text-5xl font-black text-white tracking-[0.2em] font-mono bg-black/40 px-6 py-6 rounded-3xl border border-white/10 shadow-inner relative z-10">
                        {tokenValue}
                     </div>

                     <div className="w-56 h-12 bg-white rounded-lg flex flex-col justify-center items-center gap-0.5 p-1 relative z-10 overflow-hidden">
                        <div className="flex w-full gap-0.5 h-full">
                           {[...Array(40)].map((_, i) => (
                             <div key={i} className={`flex-1 bg-black`} style={{ width: `${Math.random()*4 + 1}px`, height: '100%' }}></div>
                           ))}
                        </div>
                     </div>
                     
                     <div className="text-center relative z-10">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">BERLAKU 5 MENIT</p>
                        <div className="mt-4 flex gap-1 justify-center">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-100"></div>
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                     </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowToken(false)}
                    className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-rose-50 hover:text-rose-600 transition-all border border-slate-200"
                  >
                     TUTUP / BATAL
                  </button>
               </div>
            )}

            {isGenerating && (
               <div className="absolute inset-0 bg-white/90 backdrop-blur-md z-30 flex flex-col items-center justify-center space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center animate-spin">
                     <span className="text-white text-3xl font-black">◈</span>
                  </div>
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] animate-pulse">Menghubungkan Jaringan {selectedMerchant}...</p>
               </div>
            )}
         </div>

         {/* Steps Guide */}
         <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { s: '1', t: 'Pilih Toko', d: 'Klik Indomaret atau Alfamart saat Anda sudah di depan kasir.' },
               { s: '2', t: 'Tunjukkan Kode', d: 'Berikan 6 angka atau scan barcode ke alat kasir.' },
               { s: '3', t: 'Selesai', d: 'Saldo sukarela Anda terpotong otomatis & bonus SHU bertambah.' },
            ].map((step) => (
               <div key={step.s} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-black shrink-0 shadow-lg">{step.s}</span>
                  <div>
                     <h5 className="font-black text-slate-800 text-xs uppercase tracking-tight">{step.t}</h5>
                     <p className="text-[10px] text-slate-500 italic mt-1 leading-relaxed">{step.d}</p>
                  </div>
               </div>
            ))}
         </div>

         {/* Trust Note */}
         <div className="mt-12 p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] text-center max-w-xl shadow-inner">
            <p className="text-xs text-indigo-900 leading-relaxed font-bold italic">
               "Setiap belanja di minimarket melalui KoperatifAI, Bapak/Ibu mendapatkan **Cashback SHU Rp 250** per transaksi. Rakyat berdaulat, ekonomi bergulir."
            </p>
         </div>
      </div>
    </div>
  );
};

export default WalletIntegration;