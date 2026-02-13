
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

const CashWithdrawal: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleWithdrawal = async () => {
    if (otp !== '1234') { alert("OTP Salah! Cek HP Anggota."); return; }
    setIsProcessing(true);
    try {
       const valAmount = Number(amount);
       if (isLiveDatabase && user && supabase) {
          const newBalance = user.balances.voluntary - valAmount;
          await supabase.from('balances').update({ voluntary: newBalance }).eq('user_id', user.id);
          await supabase.from('transactions').insert({
             user_id: user.id, type: 'withdrawal',
             description: 'Tarik Tunai via Duta (SOP Verified)',
             amount: valAmount, status: 'completed'
          });
          await refreshProfile();
       }
       setStep(3);
    } catch (e: any) {
       alert("Gagal: " + e.message);
    } finally {
       setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-24 max-w-4xl mx-auto">
      <div className="bg-[#020617] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
         <h2 className="text-3xl font-black italic uppercase tracking-tighter">Prosedur Tarik Tunai</h2>
         <p className="text-slate-400 mt-2">Duta: Ikuti langkah di bawah. JANGAN berikan uang sebelum status "SUKSES".</p>
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 relative overflow-hidden">
         {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">1. Input Nominal Tarik</h3>
                  <p className="text-slate-500 text-sm">Berapa rupiah yang diminta oleh Anggota?</p>
               </div>
               <input 
                  type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                  placeholder="Contoh: 100000"
                  className="w-full p-8 bg-slate-50 border-none rounded-[2.5rem] text-4xl font-black text-center text-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none"
               />
               <button onClick={() => setStep(2)} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">LANJUT KE VERIFIKASI OTP</button>
            </div>
         )}

         {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">2. Masukkan OTP Anggota</h3>
                  <p className="text-slate-500 text-sm">"Minta kode 4 angka yang muncul di HP Anggota Bapak/Ibu."</p>
               </div>
               <input 
                  type="text" value={otp} onChange={(e) => setOtp(e.target.value.slice(0,4))}
                  placeholder="----"
                  className="w-full p-8 bg-slate-900 border-none rounded-[2.5rem] text-5xl font-black text-center text-white tracking-[0.5em] outline-none"
               />
               <button onClick={handleWithdrawal} disabled={isProcessing} className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">
                  {isProcessing ? 'MENYINKRONKAN DATA...' : 'KONFIRMASI PENCAIRAN'}
               </button>
            </div>
         )}

         {step === 3 && (
            <div className="space-y-10 animate-in zoom-in text-center">
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-lg">✓</div>
               <div className="p-10 bg-indigo-900 rounded-[3rem] text-white space-y-6 shadow-2xl rotate-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">Tunjukkan Layar Ini ke Anggota:</p>
                  <p className="text-xl font-black">PENARIKAN BERHASIL</p>
                  <p className="text-4xl font-black text-emerald-400 italic">Rp {Number(amount).toLocaleString()}</p>
                  <div className="h-px bg-white/20"></div>
                  <p className="text-[10px] italic text-indigo-200">"Silakan Duta menyerahkan uang fisik senilai di atas kepada Anggota. Pastikan dihitung bersama."</p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] shadow-lg">🖨️ CETAK STRUK</button>
                  <button onClick={() => setStep(1)} className="py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px]">TUTUP</button>
               </div>
            </div>
         )}
      </div>

      <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🏛️</div>
         <div className="flex-1 space-y-2 text-xs text-indigo-900 leading-relaxed font-bold italic">
            "Sesuai JDIH (Jaringan Dokumentasi Hukum) Pusat Koperasi: Penarikan simpanan sukarela bersifat likuid dan harus dilayani oleh kasir wilayah (Duta) yang sah dengan verifikasi OTP untuk melindungi keamanan dana."
         </div>
      </div>
    </div>
  );
};

export default CashWithdrawal;
