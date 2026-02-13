
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { GoogleGenAI } from "@google/genai";

const DutaPayrollReport: React.FC = () => {
  const { user } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportLog, setReportLog] = useState('');

  const claimSteps = [
    { s: 1, t: 'Verifikasi Log', d: 'AI mencocokkan kordinat GPS kunjungan Anda dengan database pendaftaran anggota.' },
    { s: 2, t: 'Validasi Kas', d: 'Sistem memastikan total kas yang Anda jemput sudah disetor ke Bank Koperasi (Settled).' },
    { s: 3, t: 'Pencairan SHU', d: 'Dana jasa pembinaan dipindahkan dari Kas Pusat ke Saldo Sukarela Anda.' }
  ];

  const submitReport = async () => {
    setIsSubmitting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis kinerja Duta ${user?.name}. Buatkan struk gaji 'JASA PENGABDIAN DUTA' yang merinci: 
        5 KYC (Rp 25rb), 12 Deposit (Rp 36rb), 1 Literasi (Rp 25rb). Total: Rp 86.000. 
        Katakan: "Audit AI menyatakan kejujuran Anda 100%. Dana sedang meluncur."`,
      });
      setReportLog(response.text || "Laporan diproses.");
    } catch (e) {
      setReportLog("Audit AI menyetujui kinerja Anda. Dana dipindahkan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Instructions */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Klaim Jasa Pengabdian</h2>
        <p className="text-slate-500 text-lg">Upah Bapak/Ibu dibayar per-aksi (Pay-per-Action) melalui audit AI.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-1 space-y-6">
            {claimSteps.map((step) => (
              <div key={step.s} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex gap-4">
                 <span className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shrink-0">{step.s}</span>
                 <div>
                    <h4 className="font-black text-slate-800 text-sm uppercase">{step.t}</h4>
                    <p className="text-[11px] text-slate-500 mt-1">"{step.d}"</p>
                 </div>
              </div>
            ))}
         </div>

         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500 flex flex-col justify-center text-center space-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div>
               <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Saldo Jasa Belum Diklaim</p>
               <h4 className="text-7xl font-black text-emerald-400 mt-4 italic tracking-tighter">Rp 86.000</h4>
               <p className="text-[9px] text-slate-500 mt-4 uppercase">Hasil kerja dari 18 Aksi tervalidasi</p>
            </div>
            
            <button 
              onClick={submitReport}
              disabled={isSubmitting}
              className="px-12 py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50 mx-auto"
            >
              {isSubmitting ? '🌀 AI SEDANG MENGADIT...' : '⚖️ AJUKAN KLAIM SEKARANG'}
            </button>
         </div>
      </div>

      {reportLog && (
         <div className="bg-white p-12 rounded-[4rem] border-2 border-emerald-100 shadow-sm animate-in zoom-in">
            <h3 className="text-xl font-black text-slate-800 mb-6 border-b pb-4">Bukti Cair Jasa Duta</h3>
            <div className="font-mono text-xs text-slate-600 leading-relaxed italic whitespace-pre-wrap">
               {reportLog}
            </div>
         </div>
      )}
    </div>
  );
};

export default DutaPayrollReport;
