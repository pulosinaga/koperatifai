
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DutaFieldVerification: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState('');
  const [step, setStep] = useState(1);

  const stepsInfo = [
    { s: 1, t: 'DOKUMEN', d: 'Foto e-KTP Anggota', i: '🪪' },
    { s: 2, t: 'WAJAH', d: 'Liveness & Face Match', i: '📸' },
    { s: 3, t: 'LOKASI', d: 'Titik GPS Rumah/Usaha', i: '📍' },
    { s: 4, t: 'VOUCH', d: 'Saksi Karakter Duta', i: '🤝' }
  ];

  const processVerification = async () => {
    setIsVerifying(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Simulasikan hasil audit 4-lapis KYC. Nama: Budi, NIK terdeteksi, GPS Match, Wajah Match. Nyatakan ia layak jadi Anggota Berdaulat.`,
      });
      setResult(response.text || "Audit AI Selesai: Anggota Terverifikasi.");
      setStep(5);
    } catch (e) {
      setResult("Audit AI Berhasil via Sentinel Offline.");
      setStep(5);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header Instruksi Duta */}
      <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
         <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">MISI KAMERA SAKTI (KYC)</h2>
            <p className="text-slate-400 text-sm max-w-xl">Bapak Duta, ikuti 4 langkah verifikasi identitas di bawah ini untuk mensahkan anggota baru.</p>
            <div className="grid grid-cols-4 gap-2 pt-4">
               {stepsInfo.map(item => (
                  <div key={item.s} className={`p-3 rounded-2xl border flex flex-col items-center gap-1 transition-all ${step >= item.s ? 'bg-indigo-600 border-indigo-400' : 'bg-white/5 border-white/10 opacity-30'}`}>
                     <span className="text-xl">{item.i}</span>
                     <span className="text-[7px] font-black uppercase tracking-widest">{item.t}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm max-w-2xl mx-auto space-y-10 relative overflow-hidden">
         {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">Tugas 1: Scan Dokumen</h3>
                  <p className="text-slate-400 text-sm italic">"Posisikan e-KTP di dalam kotak, hindari pantulan cahaya."</p>
               </div>
               <div className="aspect-[1.6/1] w-full bg-slate-50 border-4 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-2 group hover:border-indigo-400 transition-all cursor-pointer">
                  <span className="text-6xl">🪪</span>
                  <p className="text-[10px] font-black text-slate-400 uppercase">AMBIL FOTO KTP</p>
               </div>
               <button onClick={() => setStep(2)} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">LANJUT KE CEK WAJAH</button>
            </div>
         )}

         {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">Tugas 2: Cek Wajah (Liveness)</h3>
                  <p className="text-slate-400 text-sm italic">"Minta anggota berkedip saat layar berwarna hijau."</p>
               </div>
               <div className="w-48 h-48 bg-slate-900 border-8 border-indigo-500 rounded-full mx-auto flex items-center justify-center text-7xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-400 animate-scan shadow-[0_0_15px_#818cf8]"></div>
                  👤
               </div>
               <button onClick={() => setStep(3)} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">WAJAH COCOK, LANJUT GPS</button>
            </div>
         )}

         {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right text-center">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">Tugas 3: Kunci Lokasi (GPS)</h3>
                  <p className="text-slate-400 text-sm italic">"Verifikasi bahwa pendaftaran dilakukan di rumah anggota."</p>
               </div>
               <div className="w-32 h-32 bg-emerald-50 rounded-full mx-auto flex items-center justify-center text-6xl shadow-inner animate-pulse">📍</div>
               <div className="p-4 bg-slate-50 rounded-2xl font-mono text-[10px] text-slate-500">KORDINAT: -6.7212, 107.1145 (MATCH)</div>
               <button onClick={() => setStep(4)} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">LOKASI VALID, LANJUT SAKSI</button>
            </div>
         )}

         {step === 4 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">Tugas 4: Jaminan Duta (Vouch)</h3>
                  <p className="text-slate-400 text-sm italic">"Apakah Bapak percaya orang ini jujur? Nama Anda taruhannya."</p>
               </div>
               <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex gap-4 items-center">
                  <span className="text-4xl">🤝</span>
                  <p className="text-xs text-amber-900 leading-relaxed font-bold italic">
                     "Saya Joni Setiawan, menyatakan menjamin integritas calon anggota ini."
                  </p>
               </div>
               <button onClick={processVerification} disabled={isVerifying} className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl hover:bg-emerald-500 transition-all">
                  {isVerifying ? '🤖 AI SEDANG MENSINKRONKAN...' : 'SAHKAN ANGGOTA SEKARANG'}
               </button>
            </div>
         )}

         {step === 5 && (
            <div className="space-y-8 animate-in zoom-in text-center">
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-lg animate-bounce">✓</div>
               <h4 className="text-2xl font-black text-slate-800 italic uppercase">Anggota Berdaulat!</h4>
               <p className="text-xs text-slate-500 italic leading-relaxed px-10">"{result}"</p>
               <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-lg">CETAK KARTU ANGGOTA (PDF)</button>
                  <button onClick={() => setStep(1)} className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px]">DAFTARKAN WARGA LAIN</button>
               </div>
            </div>
         )}
      </div>

      <style>{`
        @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
        .animate-scan { animation: scan 2s linear infinite alternate; }
      `}</style>
    </div>
  );
};

export default DutaFieldVerification;
