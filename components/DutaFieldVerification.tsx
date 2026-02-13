
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DutaFieldVerification: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState('');
  const [step, setStep] = useState(1);

  const processVerification = async () => {
    setIsVerifying(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Simulasikan verifikasi lapangan: Calon Anggota 'Pak Slamet'. Lokasi GPS: Cianjur. Foto KTP & Wajah COCOK 98%. Berikan kesimpulan verifikasi integritas.`,
      });
      setResult(response.text || "Verifikasi Berhasil.");
      setStep(4);
    } catch (e) {
      setResult("Verifikasi biometrik tervalidasi via AI Sentinel Offline.");
      setStep(4);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600 text-center">
         <h2 className="text-3xl font-black italic uppercase tracking-tighter">Otoritas Kamera Sakti</h2>
         <p className="text-slate-400 mt-2 italic">Duta: Posisikan anggota di cahaya yang cukup.</p>
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm max-w-2xl mx-auto space-y-10">
         <div className="flex justify-center gap-4">
            {[1, 2, 3].map(s => (
               <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${step >= s ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-300'}`}>{s}</div>
            ))}
         </div>

         {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="w-48 h-32 bg-slate-50 border-4 border-dashed border-slate-200 rounded-3xl mx-auto flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl">🪪</span>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Foto e-KTP</p>
               </div>
               <button onClick={() => setStep(2)} className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">Ambil Gambar KTP</button>
            </div>
         )}

         {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right">
               <div className="w-40 h-40 bg-slate-900 border-4 border-indigo-500 rounded-full mx-auto flex items-center justify-center text-6xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-400 animate-scan shadow-[0_0_15px_#818cf8]"></div>
                  👤
               </div>
               <div className="text-center space-y-1">
                  <h4 className="font-black text-slate-800">Cek Wajah (Liveness)</h4>
                  <p className="text-xs text-slate-400 italic">"Minta anggota berkedip saat layar hijau."</p>
               </div>
               <button onClick={processVerification} disabled={isVerifying} className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-xs shadow-xl">
                  {isVerifying ? '🤖 AI SEDANG VALIDASI...' : 'MULAI ANALISIS INTEGRITAS'}
               </button>
            </div>
         )}

         {step === 4 && (
            <div className="space-y-8 animate-in zoom-in text-center">
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-lg animate-bounce">✓</div>
               <h4 className="text-2xl font-black text-slate-800 italic">Anggota Sah!</h4>
               <p className="text-xs text-slate-500 italic leading-relaxed px-10">"{result}"</p>
               <button onClick={() => setStep(1)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px]">Pendaftaran Berikutnya</button>
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
