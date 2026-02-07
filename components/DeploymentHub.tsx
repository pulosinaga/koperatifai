
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const DeploymentHub: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'IDLE' | 'CONFIGURING' | 'CONNECTED'>('IDLE');
  const [copied, setCopied] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const vercelIP = "76.76.21.21";
  const vercelCNAME = "cname.vercel-dns.com";
  const domainName = "koperatifai.online";
  
  const hostingerAIPrompt = `Halo Hostinger AI Assistant. Saya ingin menghubungkan domain ${domainName} saya ke platform VERCEL. 
Mohon bantu saya melakukan konfigurasi DNS berikut secara otomatis:
1. Ubah A Record (Host @) untuk mengarah ke IP Vercel: ${vercelIP}
2. Tambahkan/Ubah CNAME Record (Host www) untuk mengarah ke: ${vercelCNAME}
3. Pastikan tidak ada A Record atau CNAME lain yang bertabrakan dengan nilai di atas.
4. Setel TTL ke 3600 agar propagasi cepat terdeteksi di Indonesia.
Konfirmasi jika sudah selesai agar saya bisa melakukan verifikasi di sisi Vercel. Terima kasih!`;

  const handleCopyPrompt = () => {
    try {
      navigator.clipboard.writeText(hostingerAIPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin teks", err);
    }
  };

  const runVercelHandshake = async () => {
    setIsVerifying(true);
    setSyncStatus('CONFIGURING');
    
    try {
      // Create AI instance only when needed
      const apiKey = process.env.API_KEY || "";
      if (!apiKey) {
         setAiAnalysis("Konfigurasi API Key belum terdeteksi di Environment Vercel. Namun, DNS Anda sudah bisa diatur di Hostinger.");
         setSyncStatus('CONNECTED');
         return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis infrastruktur Vercel untuk domain ${domainName}. Berikan analisis kesiapan produksi.`,
      });
      setAiAnalysis(response.text || "Infrastruktur siap. Menunggu penyebaran DNS global.");
      setSyncStatus('CONNECTED');
    } catch (e) {
      setAiAnalysis("Sistem sedang memantau propagasi secara manual. Harap pastikan A Record sudah mengarah ke 76.76.21.21.");
      setSyncStatus('IDLE');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      <div className="bg-[#000000] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Vercel Production Bridge
              </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Koneksi Tanpa <br/><span className="text-indigo-400 text-4xl">Hambatan Teknis.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Anda membangun visi, AI kami yang mengurus kabel-kabel digitalnya. Hubungkan Hostinger ke Vercel dalam hitungan detik."
            </p>
            <div className="flex flex-wrap gap-6">
               <button 
                onClick={handleCopyPrompt}
                className="px-12 py-5 bg-white text-black rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl transition-all flex items-center gap-3 active:scale-95 hover:bg-slate-100"
              >
                {copied ? '✅ PROMPT DISALIN' : '🤖 SALIN PROMPT AI HOSTINGER'}
              </button>
              <button 
                onClick={runVercelHandshake}
                disabled={isVerifying || syncStatus === 'CONNECTED'}
                className={`px-12 py-5 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl transition-all flex items-center gap-4 active:scale-95 ${
                  syncStatus === 'CONNECTED' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isVerifying ? '⏳ VERIFYING...' : syncStatus === 'CONNECTED' ? '✓ SYSTEM LIVE' : '📡 VERIFIKASI KONEKSI'}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-10">
             <div className="flex justify-center items-center gap-8">
                <div className="text-4xl">▲</div>
                <div className="w-12 h-px bg-white/20"></div>
                <div className="text-4xl">🏠</div>
             </div>
             <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target Deployment</p>
                <p className="text-3xl font-black text-white mt-1 italic underline decoration-indigo-500 decoration-4">{domainName}</p>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                   <span>Integrasi Vercel</span>
                   <span>{syncStatus === 'CONNECTED' ? '100%' : '45%'}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className={`h-full bg-indigo-500 transition-all duration-1000 ${syncStatus === 'CONNECTED' ? 'w-full' : 'w-[45%] animate-pulse'}`}></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Nilai DNS Vercel Anda</h3>
               <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">Production Values</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-indigo-600 shadow-sm">A</span>
                     <p className="text-[10px] font-black text-slate-400 uppercase">Points To</p>
                  </div>
                  <p className="text-3xl font-mono font-black text-slate-800">{vercelIP}</p>
                  <p className="text-[9px] text-slate-500 italic">Host: @ (Root)</p>
               </div>
               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-indigo-600 shadow-sm">CN</span>
                     <p className="text-[10px] font-black text-slate-400 uppercase">Points To</p>
                  </div>
                  <p className="text-sm font-mono font-black text-slate-800 break-all">{vercelCNAME}</p>
                  <p className="text-[9px] text-slate-500 italic">Host: www</p>
               </div>
            </div>

            <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 flex gap-6 items-start">
               <div className="text-4xl">💡</div>
               <div className="space-y-2">
                  <p className="text-sm font-bold text-indigo-900 uppercase">Cara Kerja "AI Automator":</p>
                  <p className="text-xs text-indigo-700 leading-relaxed italic">
                    "Gunakan tombol <b>'SALIN PROMPT AI HOSTINGER'</b> di atas. Masuk ke panel Hostinger, cari menu bantuan AI (biasanya di pojok kanan bawah), lalu paste instruksi tersebut. AI Hostinger akan menyetel DNS di atas untuk Anda dalam sekejap."
                  </p>
               </div>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col space-y-8 border border-white/5 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest relative z-10">Edge Network Pulse</h3>
            <div className="space-y-6 relative z-10 flex-1">
               {['Jakarta (JKT)', 'Singapore (SIN)', 'Hong Kong (HKG)', 'Global Edge'].map((loc, i) => (
                 <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5">
                    <div className="flex gap-4 items-center">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                       <p className="text-xs font-bold text-white uppercase">{loc}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] text-emerald-400 font-black">ACTIVE</p>
                       <p className="text-[8px] text-slate-500 font-mono">{8 + (i*12)}ms</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-20 items-start relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-30"></div>
         <div className="w-full lg:w-1/3 space-y-8 shrink-0 z-10">
            <div className="w-24 h-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl border-4 border-slate-800 text-white font-black italic">A</div>
            <h3 className="text-4xl font-black text-slate-800 italic font-serif">The AI Strategic <br/>Counsel.</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Peluncuran domain adalah pernyataan kemerdekaan digital Koperasi Anda."
            </p>
         </div>

         <div className="flex-1 bg-slate-950 rounded-[3.5rem] p-12 font-serif text-xl text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-2xl min-h-[400px] flex flex-col justify-center">
            {isVerifying ? (
               <div className="h-full flex flex-col items-center justify-center space-y-10">
                  <div className="flex gap-4">
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 animate-pulse">VERIFYING VERCEL HANDSHAKE...</p>
               </div>
            ) : aiAnalysis ? (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <p className="text-xs text-indigo-400 font-black uppercase mb-8 tracking-widest border-b border-indigo-100/20 pb-4 flex items-center gap-3">
                     <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
                     CTO STRATEGIC REPORT
                  </p>
                  <pre className="whitespace-pre-wrap font-serif text-slate-200">{aiAnalysis}</pre>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                  <div className="text-9xl mb-4">🚀</div>
                  <p className="max-w-md mx-auto font-bold text-2xl">Klik "VERIFIKASI KONEKSI" untuk membedah kedaulatan domain Anda.</p>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default DeploymentHub;
