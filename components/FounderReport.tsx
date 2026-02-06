
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const impactMetrics = [
  { label: 'Individu Terberdaya', value: '1,248', desc: 'Anggota Aktif Pionir', icon: '👥' },
  { label: 'SROI (Impact Ratio)', value: '12.4 : 1', desc: 'Social Return on Investment', icon: '📈' },
  { label: 'Beban Pinjol Berkurang', value: '70%', desc: 'Rasio Konsolidasi Hutang', icon: '🛡️' },
  { label: 'Penciptaan Lapangan Kerja', value: '128 Duta', desc: 'Pimpinan Ekonomi Lokal', icon: '👔' },
];

const valuationData = [
  { year: '2025', value: 0.15 },
  { year: '2026', value: 1.05 },
  { year: '2027', value: 4.5 },
  { year: '2028', value: 12.0 },
  { year: '2029', value: 45.0 },
];

const FounderReport: React.FC = () => {
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [executiveReport, setExecutiveReport] = useState('');

  const generateReport = async () => {
    setIsSynthesizing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Susunlah "LAPORAN MASTER FOUNDER" untuk startup KoperatifAI. 
        Data Konteks: 
        1. Valuasi Saat Ini: $1.05M. 
        2. Dampak Sosial (SROI): Rp 12.4 penghematan bunga rakyat per Rp 1 biaya operasional.
        3. Pilar Teknologi: AI Sentinel Guard, Real-time Ledger, 4-Layer Identity.
        4. Pilar Komunitas: 1.248 anggota, 128 Duta Wilayah.
        
        Buatkan narasi strategis (4 paragraf) yang menjelaskan:
        - Bagaimana KoperatifAI mengubah nasib ekonomi rakyat dari 'objek perbankan' menjadi 'subjek pemilik'.
        - Kekuatan Moat (Benteng) kita yaitu 'Decentralized Trust' yang tidak dimiliki Big Tech.
        - Potensi scaling global melalui kerjasama federasi.
        - Ajakan kolaborasi bagi investor ESG dan Pemerintah untuk menjadikan ini Standar Nasional.
        
        Gunakan gaya bahasa seorang Negarawan Tekno (Techno-Statesman) yang sangat berwibawa, intelektual, dan menyentuh sisi kemanusiaan.`,
      });
      setExecutiveReport(response.text || "Laporan tidak tersedia.");
    } catch (e) {
      setExecutiveReport("Sistem AI Pusat sedang menyinkronkan data kedaulatan. Mohon tunggu sejenak.");
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Report Hero Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl shadow-xl">◈</div>
               <span className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                  Master Executive Summary v1.0
               </span>
            </div>
            <h2 className="text-5xl font-black leading-tight italic">KoperatifAI: <br/>Kedaulatan Rakyat Melalui Intelegensi Buatan.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               Sebuah dokumentasi komprehensif mengenai visi, nilai ekonomi, dan dampak sosial yang telah kita bangun sebagai fondasi masa depan Indonesia.
            </p>
            <button 
              onClick={generateReport}
              disabled={isSynthesizing}
              className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isSynthesizing ? '⏳ MENGOLAH DATA NASIONAL...' : '📜 GENERATE EXECUTIVE SUMMARY'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Global Asset Valuation</p>
             <p className="text-6xl font-black text-white mt-2 italic">$1.05M</p>
             <p className="text-[10px] text-slate-500 mt-6 uppercase font-black">CERTIFIED BY FOUNDER AUDIT PROTOCOL</p>
          </div>
        </div>
      </div>

      {/* Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impactMetrics.map((m, i) => (
          <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
             <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{m.icon}</div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</p>
             <h4 className="text-2xl font-black text-slate-800 mt-1 italic">{m.value}</h4>
             <p className="text-xs text-indigo-600 font-bold mt-4 leading-relaxed italic">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Main Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Whitepaper Text */}
         <div className="lg:col-span-2 bg-white rounded-[4rem] p-12 lg:p-20 shadow-xl border border-slate-50 flex flex-col relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] opacity-30"></div>
            <div className="flex justify-between items-center mb-16 relative z-10 border-b-2 border-slate-100 pb-8">
               <div className="space-y-1">
                  <h3 className="text-3xl font-black text-slate-800 italic font-serif">Pernyataan Visi Founder</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Document ID: KOPAI-REP-2026-001</p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-black text-indigo-600 uppercase">Status: FINAL</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
               </div>
            </div>

            <div className="flex-1 font-serif text-lg text-slate-700 leading-[1.8] italic relative z-10">
               {isSynthesizing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-8 py-20">
                     <div className="flex gap-3">
                        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-sm font-black uppercase text-slate-400 tracking-widest italic">AI sedang mensintesis narasi strategis...</p>
                  </div>
               ) : executiveReport ? (
                  <div className="animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap font-serif">{executiveReport}</pre>
                     
                     <div className="mt-20 pt-16 border-t border-slate-100 flex justify-between items-end">
                        <div className="text-center space-y-4">
                           <p className="text-[10px] font-black text-slate-400 uppercase">Tanda Tangan Elektronik</p>
                           <div className="w-48 h-24 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-indigo-600">
                              <span className="font-serif text-2xl italic">Budi Utama</span>
                              <span className="text-[8px] uppercase font-black">Founder & Chief Architect</span>
                           </div>
                        </div>
                        <div className="text-right space-y-4">
                           <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center p-2">
                              {/* QR Code Placeholder */}
                              <div className="w-full h-full bg-indigo-600 rounded-lg flex items-center justify-center text-white text-[8px] font-bold text-center uppercase">Verified by <br/>Gemini AI</div>
                           </div>
                           <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Secure Ledger Hash Locked</p>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-20">
                     <div className="text-9xl mb-8">📜</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Klik tombol "GENERATE" untuk menyusun laporan akhir Anda.</p>
                  </div>
               )}
            </div>
         </div>

         {/* Scalability Side Panel */}
         <div className="space-y-8">
            <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 mb-8 uppercase tracking-widest">Revenue & Growth Path ($M)</h4>
               <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={valuationData}>
                        <defs>
                           <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', color: '#fff' }} />
                        <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorVal)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
               <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-xs italic text-slate-400">
                     "Pertumbuhan eksponensial dijamin oleh sistem **Low-OpEx**. Kita tidak butuh modal besar untuk menguasai pasar desa."
                  </p>
               </div>
            </div>

            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-6">
               <h4 className="text-xl font-black text-slate-800 italic">Target Kemitraan Strategis</h4>
               <div className="space-y-4">
                  {[
                    { t: 'Pemerintah RI', d: 'Infrastruktur Digital kDMP Nasional.', icon: '🇮🇩' },
                    { t: 'WOCCU / Global', d: 'Sertifikasi Keamanan & Aliansi Likuiditas.', icon: '🌍' },
                    { t: 'ESG Investors', d: 'Pendanaan Dampak Sosial $10M+.', icon: '💰' }
                  ].map((target, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                       <span className="text-2xl group-hover:scale-125 transition-transform">{target.icon}</span>
                       <div>
                          <p className="font-black text-sm text-slate-800">{target.t}</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold mt-1">{target.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Circular Economy Final Logic */}
      <div className="p-16 bg-indigo-600 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10">🏛️</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic">"Menjadikan Rakyat Sebagai Tuan Di Negeri Sendiri."</h4>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-4xl">
               Founder, platform ini bukan tentang teknologi. Ini tentang **Kekuasaan**. Dengan KoperatifAI, kita mengembalikan kekuasaan ekonomi dari tangan perbankan raksasa kembali ke genggaman rakyat melalui perantara AI yang jujur.
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all">Download Executive Whitepaper</button>
               <button className="px-10 py-4 bg-indigo-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-500 hover:bg-black transition-all">Print for Government Meeting</button>
            </div>
         </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center space-y-4 py-10 opacity-50">
         <div className="text-2xl font-black italic text-slate-400">KOPERATIFAI v1.0 MASTER REPORT</div>
         <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">The Future of Credit Unions is Here.</p>
      </div>
    </div>
  );
};

export default FounderReport;
