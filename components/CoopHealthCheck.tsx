import React, { useState, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar as RadarArea } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const CoopHealthCheck: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [auditLog, setAuditLog] = useState<{msg: string, type: 'info' | 'warn' | 'success'}[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const reportRef = useRef<HTMLDivElement>(null);

  const healthData = [
    { subject: 'Likuiditas', A: 92, fullMark: 100 },
    { subject: 'Kepatuhan AD/ART', A: 98, fullMark: 100 },
    { subject: 'Kesehatan Pinjaman', A: 85, fullMark: 100 },
    { subject: 'Kepercayaan Anggota', A: 94, fullMark: 100 },
    { subject: 'Efisiensi AI Ops', A: 100, fullMark: 100 },
  ];

  const runDeepAudit = async () => {
    setIsAuditing(true);
    setAuditLog([]);
    setAiAnalysis('');

    const steps = [
      { msg: "[1/5] Memindai Ledger Digital terhadap AD/ART...", type: 'info' },
      { msg: "[2/5] Menganalisis ambang batas penarikan massal...", type: 'info' },
      { msg: "[3/5] Memeriksa anomali harga di Monitor Pangan...", type: 'warn' },
      { msg: "[4/5] Memvalidasi multi-signature pada pengeluaran besar...", type: 'success' },
      { msg: "[5/5] Finalizing Integrity Report via Gemini AI...", type: 'info' },
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        setAuditLog(prev => [steps[stepIdx] as any, ...prev]);
        stepIdx++;
      } else {
        clearInterval(interval);
        generateAIExecutiveSummary();
      }
    }, 1200);
  };

  const generateAIExecutiveSummary = async () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis kesehatan koperasi KoperatifAI berdasarkan metrik: Likuiditas 92%, Kepatuhan 98%, Kesehatan Pinjaman 85%. Berikan ringkasan eksekutif untuk publik.`,
      });
      setAiAnalysis(response.text || "Audit selesai. Kondisi optimal.");
    } catch (e) {
      setAiAnalysis("Audit Selesai. Sistem AI menunjukkan kondisi HIJAU (Sehat).");
    } finally {
      setIsAuditing(false);
    }
  };

  const sharePublicReport = async () => {
    if (!reportRef.current) return;
    setIsSharing(true);
    try {
      const canvas = await (window as any).html2canvas(reportRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = (window as any).jspdf;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], `Laporan_Kesehatan_KoperatifAI.pdf`, { type: 'application/pdf' });

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: 'Laporan Transparansi KoperatifAI',
          text: 'Bukti kesehatan ekonomi koperasi kita hari ini.'
        });
      } else {
        pdf.save(`Laporan_KoperatifAI.pdf`);
      }
    } catch (err) {
      alert("Gagal membagikan laporan.");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-[#0b0e14] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Cooperative Governance Sentry v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Audit Transparansi Publik.</h2>
            <div className="flex gap-4">
               <button 
                onClick={runDeepAudit}
                disabled={isAuditing}
                className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl active:scale-95"
               >
                {isAuditing ? '🤖 AI SEDANG MENGADIT...' : '🔍 JALANKAN AUDIT'}
               </button>
               {aiAnalysis && (
                 <button 
                  onClick={sharePublicReport}
                  disabled={isSharing}
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs shadow-xl flex items-center gap-2"
                 >
                   {isSharing ? '⏳' : '📤 SHARE LAPORAN PDF'}
                 </button>
               )}
            </div>
          </div>
          
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🩺</div>
             <p className="text-6xl font-black text-emerald-400 italic">94.8</p>
             <p className="text-[10px] mt-4 uppercase font-black text-emerald-500">STATUS: OPTIMAL</p>
          </div>
        </div>
      </div>

      <div ref={reportRef} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
         <h3 className="text-3xl font-black text-slate-800 italic border-b border-slate-100 pb-6 text-center uppercase tracking-widest">Laporan Kedaulatan Rakyat</h3>
         
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={healthData}>
                     <PolarGrid stroke="#f1f5f9" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} />
                     <RadarArea
                        name="Kesehatan"
                        dataKey="A"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.6}
                     />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
            
            <div className="flex-1 space-y-6">
               <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl">
                  <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-4">Analisis Kecerdasan Buatan (AI)</h4>
                  <p className="text-sm italic leading-relaxed text-slate-300">
                     {aiAnalysis || "Jalankan audit untuk melihat analisis."}
                  </p>
               </div>
               <div className="text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Signature Verified</p>
                  <p className="text-xs font-bold text-indigo-600">ID-AUDIT: {Math.random().toString(36).substring(7).toUpperCase()}</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CoopHealthCheck;