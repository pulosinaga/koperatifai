
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

const CashWithdrawal: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  const [amountStr, setAmountStr] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const voluntaryBalance = user?.balances?.voluntary || 0;
  const amount = Number(amountStr) || 0;

  const handleWithdrawal = async () => {
    if (amount < 10000) { alert("Minimal Rp 10.000"); return; }
    if (otp !== '1234') { alert("OTP Salah! Cek HP Anggota."); return; }

    setIsProcessing(true);
    try {
       if (isLiveDatabase && user && supabase) {
          const newBalance = voluntaryBalance - amount;
          await supabase.from('balances').update({ voluntary: newBalance }).eq('user_id', user.id);
          await supabase.from('transactions').insert({
             user_id: user.id,
             type: 'withdrawal',
             description: `Tarik Tunai via Duta (SOP Verified)`,
             amount: amount,
             status: 'completed'
          });
          await refreshProfile();
       }
       setShowSuccess(true);
       setStep(4);
    } catch (e: any) {
       alert(`Gagal: ${e.message}`);
    } finally {
       setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto">
      {/* SOP Header */}
      <div className="bg-[#020617] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
         <h2 className="text-3xl font-black italic uppercase tracking-tighter">Prosedur Tarik Tunai</h2>
         <p className="text-slate-400 mt-2">Duta: Pastikan saldo anggota cukup sebelum memberikan uang fisik.</p>
         <div className="flex gap-4 mt-6">
            {[1, 2, 3].map(i => (
               <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${step >= i ? 'bg-indigo-600' : 'bg-white/10 opacity-30'}`}>{i}</div>
            ))}
         </div>
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 relative overflow-hidden">
         {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800 italic uppercase">1. Nominal Tarik</h3>
                  <p className="text-slate-500 text-sm">Saldo Anda: Rp {voluntaryBalance.toLocaleString()}</p>
               </div>
               <input 
                  type="number" 
                  value={amountStr}
                  onChange={(e) => setAmountStr(e.target.value)}
                  placeholder="Jumlah Tarik (Rp)"
                  className="w-full p-8 bg-slate-50 border-none rounded-[2.5rem] text-4xl font-black text-center text-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none"
               />
               <button onClick={() => setStep(2)} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">LANJUT KE VERIFIKASI</button>
            </div>
         )}

         {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800 italic uppercase">2. Masukkan OTP</h3>
                  <p className="text-slate-500 text-sm">"Minta kode 4 angka yang muncul di HP Anggota."</p>
               </div>
               <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.slice(0,4))}
                  placeholder="----"
                  className="w-full p-8 bg-slate-900 border-none rounded-[2.5rem] text-5xl font-black text-center text-white tracking-[0.5em] outline-none"
               />
               <button onClick={handleWithdrawal} disabled={isProcessing} className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">
                  {isProcessing ? 'SINKRONISASI DATA...' : 'KONFIRMASI PENCAIRAN'}
               </button>
            </div>
         )}

         {step === 4 && (
            <div className="space-y-10 animate-in zoom-in text-center">
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-lg">✓</div>
               <div>
                  <h3 className="text-3xl font-black text-slate-800 italic uppercase">Tugas Selesai!</h3>
                  <div className="mt-6 p-8 bg-indigo-900 rounded-[3rem] text-white space-y-4 shadow-xl rotate-1">
                     <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">INSTRUKSI PENYERAHAN:</p>
                     <p className="text-xl font-black">Serahkan Uang Tunai Senilai:</p>
                     <p className="text-4xl font-black text-emerald-400 italic">Rp {amount.toLocaleString()}</p>
                     <p className="text-[10px] italic text-indigo-200">"Pastikan anggota menghitung uang di depan Anda."</p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] shadow-lg">🖨️ CETAK STRUK</button>
                  <button onClick={() => setStep(1)} className="py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px]">TUTUP</button>
               </div>
            </div>
         )}
      </div>

      {/* JDIH Sidebar */}
      <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🏛️</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-bold text-indigo-900 italic">Dasar Hukum Penarikan (JDIH):</h4>
            <p className="text-indigo-700/70 text-sm leading-relaxed">
               "Sesuai Anggaran Dasar Pasal 12, Simpanan Sukarela dapat ditarik sewaktu-waktu. Duta bertindak sebagai kasir wilayah yang sah. Segala bentuk kecurangan audit kas akan diproses secara hukum perdata."
            </p>
         </div>
      </div>
    </div>
  );
};

export default CashWithdrawal;
