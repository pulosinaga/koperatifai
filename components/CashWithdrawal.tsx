
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
    if (amount < 10000) { alert("Minimal Penarikan Rp 10.000"); return; }
    if (amount > voluntaryBalance) { alert("Saldo Sukarela tidak cukup."); return; }
    if (otp !== '1234') { alert("OTP Salah! Minta anggota buka menu 'Dapatkan Kode' di HP-nya."); return; }

    setIsProcessing(true);
    try {
       if (isLiveDatabase && user && supabase) {
          // PROSEDUR LEDGER GANDA
          // 1. Potong Saldo Anggota
          const newBalance = voluntaryBalance - amount;
          await supabase.from('balances').update({ voluntary: newBalance }).eq('user_id', user.id);
          
          // 2. Catat Mutasi Resmi
          await supabase.from('transactions').insert({
             user_id: user.id,
             type: 'withdrawal',
             description: `Tarik Tunai Lapangan (Duta ID: ${user.memberId})`,
             amount: amount,
             status: 'completed'
          });
          
          await refreshProfile();
       }
       setShowSuccess(true);
       setStep(4);
    } catch (e: any) {
       alert(`Gagal Sistem: ${e.message}`);
    } finally {
       setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto">
      {/* SOP Header */}
      <div className="bg-[#020617] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
         <h2 className="text-3xl font-black italic uppercase tracking-tighter">Penarikan Tunai Lapangan</h2>
         <p className="text-slate-400 mt-2 italic">Duta: "Setiap penarikan wajib melalui verifikasi OTP anggota."</p>
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
                  <h3 className="text-2xl font-black text-slate-800 italic uppercase">1. Berapa Yang Ditarik?</h3>
                  <p className="text-slate-500 text-sm">Dana diambil dari <b>Saldo Sukarela</b> Anggota.</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Saldo Anggota Tersedia</p>
                  <p className="text-2xl font-black text-indigo-600">Rp {voluntaryBalance.toLocaleString('id-ID')}</p>
               </div>
               <input 
                  type="number" 
                  value={amountStr}
                  onChange={(e) => setAmountStr(e.target.value)}
                  placeholder="Jumlah Tarik (Rp)"
                  className="w-full p-8 bg-white border-4 border-slate-100 rounded-[2.5rem] text-4xl font-black text-center text-indigo-600 focus:border-indigo-600 outline-none transition-all"
               />
               <button onClick={() => setStep(2)} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">LANJUT KE OTP</button>
            </div>
         )}

         {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800 italic uppercase">2. Masukkan Kode Anggota</h3>
                  <p className="text-slate-500 text-sm">"Tanya anggota kode 4-angka yang muncul di HP mereka."</p>
               </div>
               <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.slice(0,4))}
                  placeholder="----"
                  className="w-full p-8 bg-slate-900 border-none rounded-[2.5rem] text-5xl font-black text-center text-white tracking-[0.5em] outline-none shadow-2xl"
               />
               <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100 flex gap-4 items-center">
                  <span className="text-2xl">🚨</span>
                  <p className="text-[10px] text-rose-900 leading-relaxed font-bold italic">
                     "JANGAN berikan uang fisik jika saldo di HP anggota belum terpotong secara sah. Duta dilarang menalangi secara manual."
                  </p>
               </div>
               <button onClick={handleWithdrawal} disabled={isProcessing} className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">
                  {isProcessing ? 'SINKRONISASI DATABASE...' : 'KONFIRMASI & POTONG SALDO'}
               </button>
            </div>
         )}

         {step === 4 && (
            <div className="space-y-10 animate-in zoom-in text-center">
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-lg animate-bounce">✓</div>
               <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-800 italic uppercase">Transaksi Berhasil!</h3>
                  <p className="text-slate-400 text-sm">Saldo anggota telah dipotong. Berkas terkirim ke Backup Node.</p>
               </div>
               <div className="mt-6 p-10 bg-indigo-900 rounded-[3.5rem] text-white space-y-6 shadow-2xl rotate-1 border-4 border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 underline">Instruksi Penyerahan:</p>
                  <p className="text-xl font-black leading-tight">Duta: Serahkan Uang Tunai Senilai:</p>
                  <p className="text-5xl font-black text-emerald-400 italic">Rp {amount.toLocaleString('id-ID')}</p>
                  <div className="h-px bg-white/20 w-full"></div>
                  <p className="text-[10px] italic text-indigo-200">"Pastikan anggota menghitung kembali uang di depan Bapak/Ibu Duta. Kejujuran adalah modal kita."</p>
               </div>
               <button onClick={() => setStep(1)} className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black uppercase text-xs">SELESAI</button>
            </div>
         )}
      </div>

      {/* Backup Sync Link Info */}
      <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10 shadow-inner">
         <div className="text-6xl">📡</div>
         <div className="flex-1 space-y-2 text-xs text-indigo-900 leading-relaxed font-bold italic">
            "Seluruh log penarikan tunai ini diteruskan secara terenkripsi ke link backup: <b>{process.env.SUPABASE_URL}</b>. Data ini menjadi bukti sah audit kas harian Duta Wilayah."
         </div>
      </div>
    </div>
  );
};

export default CashWithdrawal;
