
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
        contents: `Simulasikan proses verifikasi lapangan oleh Duta Wilayah. 
        Konteks: Calon Anggota 'Bpk. Ahmad', Pedagang Sayur. 
        Data Duta: Lokasi terdeteksi GPS Pasirhayo (VALID). 
        Data KTP: 3275XXXXXXXX (VALID). 
        Data Wajah: Liveness Detection OK.
        
        Berikan 'AI Verification Summary':
        1. Konfirmasi kecocokan wajah dengan KTP.
        2. Analisis kelayakan usaha berdasarkan interview singkat (Pedagang sudah jualan 12 tahun).
        3. Berikan 'Vouch Status' dari Duta.
        Gunakan gaya bahasa yang profesional namun penuh rasa kemanusiaan.`,
      });
      setResult(response.text || "Verifikasi selesai.");
      setStep(4);
    } catch (e) {
      setResult("Koneksi gagal. Pastikan sinyal internet stabil untuk verifikasi biometrik.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Duta Hero */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Field Agent Mobile Toolkit
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Verifikasi Masa Depan. <br/>Membangun Kepercayaan Kolektif.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-xl">
               Gunakan alat ini untuk memvalidasi identitas dan kejujuran calon anggota secara langsung di lokasi mereka.
            </p>
          </div>
          <div className="w-64 h-64 bg-white/10 backdrop-blur-xl rounded-full border-4 border-white/20 flex items-center justify-center text-7xl shadow-2xl animate-pulse">
             📸
          </div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12 text-center">
         <div className="flex justify-center gap-4">
            {[1, 2, 3, 4].map(s => (
               <div key={s} className={`w-12 h-12 rounded-full flex items-center justify-center font-black transition-all ${step >= s ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
                  {step > s ? '✓' : s}
               </div>
            ))}
         </div>

         <div className="max-w-md mx-auto space-y-8">
            {step === 1 && (
               <div className="space-y-6 animate-in slide-in-from-right">
                  <div className="w-32 h-32 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-5xl mx-auto shadow-inner border border-slate-100">🪪</div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Scan e-KTP Anggota</h3>
                  <button onClick={() => setStep(2)} className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl">Buka Kamera KTP</button>
               </div>
            )}
            {step === 2 && (
               <div className="space-y-6 animate-in slide-in-from-right">
                  <div className="w-32 h-32 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-5xl mx-auto shadow-inner border border-slate-100">🤳</div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Selfie Liveness Check</h3>
                  <button onClick={() => setStep(3)} className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl">Ambil Foto Wajah</button>
               </div>
            )}
            {step === 3 && (
               <div className="space-y-6 animate-in slide-in-from-right">
                  <div className="w-32 h-32 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center text-5xl mx-auto shadow-inner border border-indigo-100 animate-spin-slow">🧠</div>
                  <h3 className="text-2xl font-black text-slate-800 italic">AI Cross-Checking...</h3>
                  <button onClick={processVerification} disabled={isVerifying} className="w-full py-5 bg-emerald-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl">
                     {isVerifying ? 'SEDANG MENGANALSIS...' : 'SINKRONKAN DATA'}
                  </button>
               </div>
            )}
            {step === 4 && (
               <div className="space-y-8 animate-in zoom-in text-left bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                  <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                     <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl shadow-md">✓</div>
                     <h4 className="font-black text-slate-800 uppercase tracking-widest">Verification Result</h4>
                  </div>
                  <div className="font-serif text-sm text-slate-700 leading-relaxed italic">
                     <pre className="whitespace-pre-wrap">{result}</pre>
                  </div>
                  <button onClick={() => setStep(1)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]">Verifikasi Anggota Lain</button>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default DutaFieldVerification;
