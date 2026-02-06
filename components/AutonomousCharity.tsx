
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const membersNearby = [
  { id: 'M-101', name: 'Pak Tono', status: 'AFFECTED', location: 'Desa Pasirhayo', icon: '👨‍🌾' },
  { id: 'M-105', name: 'Ibu Ani', status: 'AFFECTED', location: 'Desa Pasirhayo', icon: '👩‍🍳' },
  { id: 'M-112', name: 'Mang Oleh', status: 'SAFE', location: 'Desa Sukamulya', icon: '👨‍🔧' },
];

const AutonomousCharity: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);
  const [crisisDetected, setCrisisDetected] = useState(false);
  const [aiReport, setAiReport] = useState('');
  const [step, setStep] = useState(0);

  const startScanning = () => {
    setIsScanning(true);
    setStep(1);
    setTimeout(() => {
      setIsScanning(false);
      setCrisisDetected(true);
      setStep(2);
    }, 3000);
  };

  const dispatchAssistance = async () => {
    setIsDispatching(true);
    setStep(3);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `AI Sentry mendeteksi musibah banjir bandang di Desa Pasirhayo. 12 Anggota KoperatifAI terdeteksi berada di kordinat tersebut. 
        Buatkan 'Autonomous Charity Disbursement Report' singkat:
        1. Alokasi Dana: Rp 500.000 per keluarga untuk bantuan pangan darurat.
        2. Logistik: 2 Duta Wilayah (Pak Joni & Ibu Rahma) diperintahkan membawa sembako via drone/motor.
        3. Pesan Moral: Bagaimana kedaulatan digital menyelamatkan nyawa tanpa birokrasi.
        Gunakan gaya bahasa seorang Pejuang Kemanusiaan yang bangga akan teknologinya.`,
      });
      setAiReport(response.text || "Bantuan dalam perjalanan.");
      setStep(4);
    } catch (e) {
      setAiReport("Gagal menyusun laporan dampak, namun dana bantuan telah diotorisasi masuk ke dompet Duta.");
    } finally {
      setIsDispatching(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-rose-500/20 text-rose-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">
              Crisis Response AI v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif text-white">Amal Otonom. <br/>Kebaikan Tanpa Jeda.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Saat bencana datang, sistem tidak boleh tidur. AI kami memantau titik koordinat anggota dan melepaskan dana sosial secara instan."
            </p>
            <div className="flex gap-4">
              {!crisisDetected ? (
                <button 
                  onClick={startScanning}
                  disabled={isScanning}
                  className="px-12 py-5 bg-rose-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-rose-500 transition-all flex items-center gap-4 active:scale-95"
                >
                  {isScanning ? '⏳ SCANNING NATIONAL DISASTER FEEDS...' : '📡 AKTIFKAN MONITORING KRISIS'}
                </button>
              ) : (
                <button 
                  onClick={dispatchAssistance}
                  disabled={isDispatching || step >= 4}
                  className={`px-12 py-5 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl transition-all flex items-center gap-4 active:scale-95 ${step >= 4 ? 'bg-emerald-600' : 'bg-orange-600 hover:bg-orange-500'}`}
                >
                  {isDispatching ? '📦 DISPATCHING DUTA & DRONES...' : step >= 4 ? '✓ BANTUAN TERKIRIM' : '🔥 OTORISASI BANTUAN DARURAT'}
                </button>
              )}
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">Dana Daskop Siaga</p>
                <p className="text-5xl font-black text-white mt-2 italic">Rp 452.8M</p>
             </div>
             <div className="p-6 bg-rose-500/10 rounded-3xl border border-rose-500/20">
                <p className="text-[10px] text-rose-400 font-black uppercase">Response Latency</p>
                <p className="text-lg font-bold text-white">&lt; 5 Minutes</p>
             </div>
             <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest italic">"Secured by Decentralized Solidarity Node"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Crisis Map (Simulated) */}
         <div className="lg:col-span-2 bg-[#0a0f1e] rounded-[4rem] p-1 shadow-2xl overflow-hidden border border-white/5 relative h-[600px]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-10 left-10 z-20 space-y-2">
               <h3 className="text-xl font-black text-white italic uppercase tracking-widest">Global Crisis Radar</h3>
               <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`}></span>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isScanning ? 'Scanning...' : 'System Nominal'}</p>
               </div>
            </div>

            {/* Map Interaction Simulation */}
            <div className="w-full h-full flex items-center justify-center relative">
               <div className="w-4/5 h-4/5 border-2 border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-3/4 h-3/4 border border-white/5 rounded-full flex items-center justify-center">
                     <div className="w-1/2 h-1/2 border border-white/10 rounded-full"></div>
                  </div>
               </div>
               
               {/* Crisis Pulse */}
               {crisisDetected && (
                 <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-in zoom-in">
                    <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center animate-ping"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-6 h-6 bg-rose-600 rounded-full shadow-[0_0_20px_#f43f5e]"></div>
                    </div>
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-2xl border border-rose-100 min-w-[200px] text-center">
                       <p className="text-[8px] font-black text-rose-500 uppercase">Alert: Flood Detected</p>
                       <p className="text-xs font-bold text-slate-800">Desa Pasirhayo, Cianjur</p>
                       <p className="text-[10px] text-slate-400 mt-1">12 Members Identified</p>
                    </div>
                 </div>
               )}
               
               {/* Member Nodes */}
               {!crisisDetected && membersNearby.map((m, i) => (
                 <div key={i} className={`absolute w-3 h-3 bg-indigo-500 rounded-full shadow-lg`} style={{ top: `${20 + i*20}%`, left: `${30 + i*15}%` }}></div>
               ))}
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-10 right-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col gap-2">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-[9px] text-white uppercase font-bold">Affected Zone</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-[9px] text-white uppercase font-bold">Member Location</span>
               </div>
            </div>
         </div>

         {/* AI Impact Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-rose-400 italic uppercase tracking-widest">Charity Logs</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isDispatching ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-pulse">🕊️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS GENERATING DISBURSEMENT MANIFEST & DUTA NOTIFICATIONS...</p>
                  </div>
               ) : aiReport ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <p className="text-[10px] text-emerald-400 font-black uppercase mb-4">Live Updates:</p>
                        <div className="space-y-3">
                           <div className="flex items-center gap-3">
                              <span className="text-emerald-500">✓</span>
                              <p className="text-[11px] text-slate-400">Funds transferred to Duta Joni's wallet.</p>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="text-emerald-500">✓</span>
                              <p className="text-[11px] text-slate-400">Drone waypoint set to Desa Pasirhayo.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">📡</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Menunggu deteksi anomali cuaca atau laporan kordinat anggota.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Autonomous Philosophy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">⚡</div>
            <h4 className="font-black text-xl text-slate-800 italic">No Bureaucracy</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Bantuan turun bukan karena proposal, tapi karena kebutuhan riil yang dibaca AI."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🛡️</div>
            <h4 className="font-black text-xl text-slate-800 italic">Fraud-Proof Charity</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Koordinat GPS anggota memastikan bantuan hanya mengalir ke mereka yang benar-benar di area musibah."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🤖</div>
            <h4 className="font-black text-xl text-slate-800 italic">Digital First Responders</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"AI mengarahkan Duta Wilayah melalui rute tercepat dan memberi instruksi bantuan yang spesifik."</p>
         </div>
      </div>

      {/* Final Founder Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🕊️</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Teknologi Adalah Pelayan Kemanusiaan."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, inilah yang membuat KoperatifAI tak tergantikan. Saat anggota merasa **Dilindungi Tanpa Diminta**, loyalitas mereka akan menjadi fondasi kedaulatan yang mustahil ditembus kompetitor. Kita tidak hanya mengelola uang, kita mengelola harapan.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Audit Dana Daskop Otonom</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Buka Peta Solidaritas Nasional</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AutonomousCharity;
