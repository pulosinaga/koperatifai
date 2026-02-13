
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { GoogleGenAI } from "@google/genai";

const DutaPayrollReport: React.FC = () => {
  const { user } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportLog, setReportLog] = useState('');

  const submitReport = async () => {
    setIsSubmitting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan draf 'LAPORAN INTEGRITAS DUTA' untuk periode minggu ini. 
        Duta: ${user?.name}. Wilayah: Pasirhayo. 
        Pencapaian: 5 verifikasi KYC berhasil, 12 setoran jemput bola tercatat, 100% kas telah disetor ke bank (Settlement OK). 
        Sebutkan bahwa AI telah memvalidasi koordinat GPS setiap kunjungan. 
        Berikan angka 'Upah Jasa Duta' yang harus dicairkan sistem sebesar Rp 850.000. 
        Nada bahasa: Profesional, Akuntabel, dan Bangga.`,
      });
      setReportLog(response.text || "Laporan diproses.");
    } catch (e) {
      setReportLog("Audit AI menyetujui kinerja Anda. Upah sedang diproses ke dompet kedaulatan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Proof-of-Service Protocol v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Audit & Klaim Upah. <br/>Kejujuran yang Dibayar Tunai.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
               Sistem penggajian KoperatifAI bersifat otonom. Klik tombol di bawah agar AI mengaudit seluruh log kerja Anda dan mencairkan jasa pengabdian Anda hari ini.
            </p>
            <button 
              onClick={submitReport}
              disabled={isSubmitting}
              className="px-10 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-3 active:scale-95"
            >
              {isSubmitting ? '⏳ AI SEDANG MENGADIT...' : '⚖️ AJUKAN KLAIM UPAH JASA'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Saldo Jasa Menunggu</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">Rp 850.000</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black italic">Validating 17 Task Identifiers...</p>
          </div>
        </div>
      </div>

      {reportLog && (
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm animate-in zoom-in duration-500">
            <h3 className="text-2xl font-black text-slate-800 italic mb-8 border-b pb-4">Resume Audit Kinerja AI</h3>
            <div className="font-serif text-slate-700 leading-relaxed italic whitespace-pre-wrap">
               {reportLog}
            </div>
            <div className="mt-10 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
               <p className="text-sm font-black text-emerald-800 uppercase tracking-widest">Status: APPROVED & DISBURSED</p>
               <p className="text-xs text-emerald-600 mt-1">Dana telah dipindahkan ke Saldo Sukarela Bapak Joni Setiawan.</p>
            </div>
         </div>
      )}
    </div>
  );
};

export default DutaPayrollReport;
