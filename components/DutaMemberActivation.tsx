import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DutaMemberActivation: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);
  const [memberPhone, setMemberPhone] = useState('0812-3456-XXXX');

  const triggerActivation = async () => {
    setIsProcessing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      // Simulasi trigger SMS dan Sinkronisasi Database
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan naskah SMS/WhatsApp sambutan hangat dari KoperatifAI untuk anggota baru yang baru didaftarkan oleh Duta Wilayah. 
        SMS harus berisi: 
        1. Ucapan selamat datang di Kedaulatan Ekonomi. 
        2. Link untuk akses aplikasi (https://koperatifai.online). 
        3. Instruksi bahwa bulan depan ia bisa mulai menabung mandiri via Virtual Account atau tetap melalui Duta.
        4. Kata-kata penyemangat bahwa ia kini adalah "PEMILIK" koperasi.`,
      });
      setStep(3);
    } catch (e) {
      alert("Gagal memicu aktivasi. Cek koneksi.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Field-to-App Handshake Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Serah Terima Kedaulatan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
               Setelah verifikasi fisik selesai, Duta wajib memicu tombol aktivasi agar anggota mendapatkan kunci akses ke aplikasi mandiri mereka.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🔑</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Activation Gateway</p>
             <p className="text-2xl font-black text-emerald-400 mt-1">READY TO SYNC</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm max-w-2xl mx-auto space-y-10">
         {step === 1 ? (
            <div className="space-y-8 animate-in slide-in-from-left">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">Langkah Terakhir Duta</h3>
                  <p className="text-slate-500 text-sm">Pastikan nomor HP anggota benar untuk menerima kunci akses.</p>
               </div>
               <div className="space-y-4">
                  <input 
                    type="text" value={memberPhone} onChange={(e) => setMemberPhone(e.target.value)}
                    className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] text-2xl font-black text-center text-indigo-600 focus:border-indigo-500 outline-none transition-all"
                  />
                  <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 flex gap-4 items-start">
                     <span className="text-2xl">📱</span>
                     <p className="text-xs text-indigo-900 leading-relaxed font-bold italic">
                        "Dengan menekan tombol di bawah, anggota akan otomatis terdaftar di database pusat dan mendapatkan profil mandiri di HP mereka bulan depan."
                     </p>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all"
                  >
                     KONFIRMASI NOMOR HP
                  </button>
               </div>
            </div>
         ) : step === 2 ? (
            <div className="space-y-8 animate-in zoom-in">
               <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl mx-auto border-4 border-white shadow-inner animate-spin-slow">📡</div>
               <div className="text-center space-y-2">
                  <h4 className="text-xl font-black text-slate-800">Menyinkronkan Kedaulatan...</h4>
                  <p className="text-slate-400 text-xs italic">AI sedang mendaftarkan tenant_id dan profil anggota ke server utama.</p>
               </div>
               <button 
                  onClick={triggerActivation}
                  disabled={isProcessing}
                  className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl"
               >
                  {isProcessing ? 'MEMPROSES DATABASE...' : 'SAHKAN & KIRIM AKSES APP'}
               </button>
            </div>
         ) : (
            <div className="space-y-8 animate-in zoom-in text-center">
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-lg animate-bounce">✓</div>
               <div>
                  <h4 className="text-2xl font-black text-slate-800 italic">Anggota Telah Aktif!</h4>
                  <p className="text-slate-500 text-sm mt-2">Kunci akses telah dikirim ke {memberPhone}.</p>
               </div>
               <div className="p-6 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Informasi Untuk Duta:</p>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                     "Mulai bulan depan, Bpk/Ibu ini akan muncul di dashboard Duta Anda sebagai 'Anggota Mandiri'. Anda tetap mendapat komisi meskipun ia menabung sendiri via HP."
                  </p>
               </div>
               <button onClick={() => setStep(1)} className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px]">Daftarkan Anggota Lagi</button>
            </div>
         )}
      </div>
    </div>
  );
};

export default DutaMemberActivation;