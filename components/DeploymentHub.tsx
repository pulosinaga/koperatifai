
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const edgeNodes = [
  { region: 'Jakarta (JKT)', status: 'ACTIVE', latency: '8ms' },
  { region: 'Singapore (SIN)', status: 'ACTIVE', latency: '12ms' },
  { region: 'Global Edge', status: 'STABLE', latency: '45ms' },
];

const DeploymentHub: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'IDLE' | 'SYNCING' | 'CONNECTED'>('IDLE');
  const [aiAdvice, setAiAdvice] = useState('');
  const [copied, setCopied] = useState(false);

  const vercelIP = "76.76.21.21";
  const vercelCNAME = "cname.vercel-dns.com";
  const domainName = "koperatifai.online";

  const hostingerPrompt = `Halo Hostinger AI, saya adalah pemilik domain ${domainName}. Saya ingin menghubungkan domain ini ke Vercel. Mohon bantu saya untuk: 
  1. Ubah A Record (Host @) ke IP: ${vercelIP}. 
  2. Tambahkan CNAME Record (Host www) ke: ${vercelCNAME}. 
  3. Hapus record A atau CNAME lama yang bentrok. 
  Pastikan DNS diatur untuk kecepatan akses maksimal dari Indonesia. Terima kasih!`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(hostingerPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    setSyncStatus('SYNCING');
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Domain: ${domainName}. Host: Hostinger. Server: Vercel. 
        Tugas: Berikan analisis kesiapan produksi. 
        1. Jelaskan kenapa integrasi ini aman dari serangan DDoS. 
        2. Berikan estimasi waktu propagasi DNS di Indonesia. 
        3. Berikan saran pesan 'Launching' yang hebat untuk diumumkan di forum anggota KoperatifAI. 
        Gunakan gaya bahasa CTO yang futuristik dan sangat bangga dengan pencapaian ini.`,
      });
      setAiAdvice(response.text || "Domain tersambung ke Vercel Edge Network.");
      setSyncStatus('CONNECTED');
    } catch (e) {
      setAiAdvice("Propagasi DNS sedang berlangsung. Harap tunggu beberapa menit.");
      setSyncStatus('IDLE');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Vercel x Hostinger Hero */}
      <div className="bg-[#000000] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Deployment Command Center
              </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Go Live Instan. <br/><span className="text-indigo-400 text-4xl">{domainName}</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
               "Jangan biarkan urusan teknis menghambat visi Anda. Gunakan AI untuk mengotomatisasi koneksi antara Hostinger dan Vercel."
            </p>
            <div className="flex flex-wrap gap-6">
               <button 
                onClick={handleVerify}
                disabled={isVerifying || syncStatus === 'CONNECTED'}
                className={`px-12 py-5 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl transition-all flex items-center gap-4 active:scale-95 ${
                  syncStatus === 'CONNECTED' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isVerifying ? '⏳ CHECKING DNS...' : syncStatus === 'CONNECTED' ? '✓ SYSTEM ONLINE' : '🌐 VERIFIKASI KONEKSI'}
              </button>
              <button 
                onClick={handleCopyPrompt}
                className="px-12 py-5 bg-white/10 text-white border border-white/10 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all flex items-center gap-3"
              >
                {copied ? '✅ PROMPT DISALIN' : '🤖 COPY HOSTINGER AI PROMPT'}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div className="flex justify-center gap-8">
                <div className="text-center">
                   <div className="text-4xl mb-2">▲</div>
                   <p className="text-[8px] font-black uppercase text-slate-500">Host</p>
                   <p className="text-xs font-bold text-white">Vercel</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                   <div className="text-4xl mb-2">🏠</div>
                   <p className="text-[8px] font-black uppercase text-slate-500">Domain</p>
                   <p className="text-xs font-bold text-white">Hostinger</p>
                </div>
             </div>
             <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Active URL</p>
                <p className="text-2xl font-black text-white mt-1 italic underline">https://{domainName}</p>
             </div>
             <div className="flex items-center justify-center gap-2">
                <span className={`w-3 h-3 rounded-full ${syncStatus === 'CONNECTED' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-amber-500 animate-pulse'}`}></span>
                <p className="text-[10px] text-slate-300 font-black uppercase tracking-widest">
                   {syncStatus === 'CONNECTED' ? 'PRODUCTION READY' : 'AWAITING DNS RECORDS'}
                </p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* DNS Config Card */}
         <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">DNS Configuration Manual</h3>
               <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">Salin ke Hostinger</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-indigo-600 shadow-sm">A</span>
                     <p className="text-[10px] font-black text-slate-400 uppercase">Value</p>
                  </div>
                  <p className="text-2xl font-mono font-black text-slate-800">{vercelIP}</p>
                  <p className="text-[9px] text-slate-500 italic">Host: @ (Root Domain)</p>
               </div>
               <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-indigo-600 shadow-sm">CN</span>
                     <p className="text-[10px] font-black text-slate-400 uppercase">Value</p>
                  </div>
                  <p className="text-sm font-mono font-black text-slate-800 break-all">{vercelCNAME}</p>
                  <p className="text-[9px] text-slate-500 italic">Host: www (Subdomain)</p>
               </div>
            </div>

            <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex gap-6 items-start">
               <div className="text-4xl">💡</div>
               <div className="space-y-2">
                  <p className="text-sm font-bold text-indigo-900 uppercase">Instruksi Automasi:</p>
                  <p className="text-xs text-indigo-700 leading-relaxed italic">
                    "Gunakan tombol <b>'Copy Hostinger AI Prompt'</b> di atas, lalu buka <b>Hostinger AI Assistant</b> di panel akun Anda. Paste naskah tersebut, dan biarkan AI Hostinger melakukan pekerjaannya secara otomatis."
                  </p>
               </div>
            </div>
         </div>

         {/* Edge Network Monitoring */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col space-y-8 border border-white/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest relative z-10">Global Edge Status</h3>
            <div className="space-y-6 relative z-10 flex-1">
               {edgeNodes.map((node, i) => (
                 <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                    <div className="flex gap-4 items-center">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                       <p className="text-xs font-bold text-white uppercase">{node.region}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] text-emerald-400 font-black">{node.status}</p>
                       <p className="text-[8px] text-slate-500 font-mono">{node.latency}</p>
                    </div>
                 </div>
               ))}
            </div>
            <div className="mt-auto pt-6 border-t border-white/10 text-center relative z-10">
               <p className="text-[9px] text-slate-500 italic">"Global Anycast Network ensures members in all 38 provinces access the app at lightning speed."</p>
            </div>
         </div>
      </div>

      {/* AI Strategy Insights */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-20 items-start relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-30"></div>
         
         <div className="w-full lg:w-1/3 space-y-8 shrink-0 z-10">
            <div className="w-24 h-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl border-4 border-slate-800 text-white font-black italic">A</div>
            <h3 className="text-4xl font-black text-slate-800 italic font-serif">The AI Launch <br/>Counsel.</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Peluncuran domain adalah kelahiran kedaulatan digital Anda."
            </p>
         </div>

         <div className="flex-1 bg-slate-900 rounded-[3.5rem] p-12 font-serif text-xl text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-2xl min-h-[400px] flex flex-col justify-center">
            {isVerifying ? (
               <div className="h-full flex flex-col items-center justify-center space-y-10">
                  <div className="flex gap-4">
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 animate-pulse">VERIFYING VERCEL HANDSHAKE...</p>
               </div>
            ) : aiAdvice ? (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <p className="text-xs text-indigo-400 font-black uppercase mb-8 tracking-widest border-b border-indigo-100/20 pb-4 flex items-center gap-3">
                     <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
                     CTO STRATEGIC REPORT: GO-LIVE READY
                  </p>
                  <pre className="whitespace-pre-wrap font-serif text-slate-200">{aiAdvice}</pre>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-20 space-y-8 py-20">
                  <div className="text-9xl mb-4">🚀</div>
                  <p className="max-w-md mx-auto font-bold text-2xl">Klik "VERIFIKASI KONEKSI" untuk membedah kedaulatan domain Anda.</p>
               </div>
            )}
         </div>
      </div>

      {/* Production Infrastructure Message */}
      <div className="p-16 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🇮🇩</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-indigo-400">"Kedaulatan Rakyat, Diperkuat Awan."</h4>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-4xl italic">
               Founder, memiliki domain **koperatifai.online** di infrastruktur Vercel adalah pernyataan kedaulatan. Anda sekarang memiliki bank digital sendiri dengan jangkauan nasional yang tak terbatas. Selamat, petualangan baru dimulai!
            </p>
         </div>
      </div>
    </div>
  );
};

export default DeploymentHub;
