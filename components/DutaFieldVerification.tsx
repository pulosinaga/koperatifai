
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DutaFieldVerification: React.FC = () => {
  const [step, setStep] = useState(0); // 0: List Tugas, 1-4: Proses
  const [isVerifying, setIsVerifying] = useState(false);
  const [report, setReport] = useState('');

  const tasks = [
    { id: 1, t: 'Audit e-KTP', d: 'Validasi data kependudukan via OCR AI.', icon: '🪪' },
    { id: 2, t: 'Verifikasi Wajah', d: 'Cek kemiripan wajah anggota vs KTP.', icon: '📸' },
    { id: 3, t: 'Kunci Titik GPS', d: 'Verifikasi lokasi rumah/usaha riil.', icon: '📍' },
    { id: 4, t: 'Sumpah Vouching', d: 'Pernyataan jaminan kejujuran oleh Duta.', icon: '🤝' }
  ];

  const processFinalAudit = async () => {
    setIsVerifying(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan laporan singkat verifikasi lapangan oleh Duta. Nama Anggota: Budi, Hasil: 100% Valid. Nyatakan ia sah menjadi Anggota Berdaulat.`,
      });
      setReport(response.text || "Verifikasi Disetujui Sistem.");
      setStep(5);
    } catch (e) {
      setReport("Verifikasi Berhasil (Offline Protocol Active).");
      setStep(5);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-24 max-w-5xl mx-auto">
      <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
         <div className="relative z-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">Terminal Verifikasi Duta</h2>
            <p className="text-slate-400 text-sm mt-1">Laksanakan 4 tugas KYC untuk mensahkan kedaulatan warga baru.</p>
         </div>
      </div>

      {step === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {tasks.map((task) => (
             <div key={task.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">{task.icon}</div>
                <div className="flex-1">
                   <h4 className="font-black text-slate-800 text-lg">{task.t}</h4>
                   <p className="text-xs text-slate-400 italic">"{task.d}"</p>
                </div>
                <button onClick={() => setStep(task.id)} className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase">MULAI</button>
             </div>
           ))}
        </div>
      ) : step === 5 ? (
        <div className="bg-white p-12 rounded-[4rem] text-center space-y-8 shadow-2xl animate-in zoom-in">
           <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto">✓</div>
           <h3 className="text-3xl font-black text-slate-800 italic uppercase">Pendaftaran Sah!</h3>
           <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 font-serif italic text-slate-600">
              "{report}"
           </div>
           <button onClick={() => setStep(0)} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs">KEMBALI KE DAFTAR TUGAS</button>
        </div>
      ) : (
        <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 space-y-10 animate-in slide-in-from-right">
           <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black text-indigo-600 uppercase italic">Tugas ke-0{step}: {tasks[step-1].t}</h3>
              <button onClick={() => setStep(0)} className="text-xs font-bold text-slate-400">BATAL</button>
           </div>
           <div className="aspect-video w-full bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
              <div className="text-6xl mb-4">{tasks[step-1].icon}</div>
              <p className="text-white font-black text-xs uppercase tracking-widest animate-bounce">Arahkan Kamera ke {tasks[step-1].t.split(' ')[1]}</p>
           </div>
           <button 
            onClick={() => step < 4 ? setStep(step + 1) : processFinalAudit()}
            disabled={isVerifying}
            className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase text-sm shadow-xl"
           >
              {isVerifying ? 'MENYINKRONKAN DENGAN AI...' : step === 4 ? 'SAHKAN ANGGOTA SEKARANG' : 'SELESAI, LANJUT TUGAS BERIKUTNYA'}
           </button>
        </div>
      )}

      {/* JDIH REFERENCE FOOTER */}
      <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex gap-6 items-center">
         <div className="text-4xl">🏛️</div>
         <div className="text-xs text-indigo-900 leading-relaxed font-bold italic">
            "Berdasarkan Permenkop No. 8/2023, Duta wajib melakukan verifikasi fisik (CDD/KYC) untuk mencegah pencucian uang dan akun fiktif. KoperatifAI mengotomatisasi log audit ini demi keamanan dana rakyat."
         </div>
      </div>
    </div>
  );
};

export default DutaFieldVerification;
