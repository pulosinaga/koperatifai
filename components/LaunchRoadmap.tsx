
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const LaunchRoadmap: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [simLogs, setSimLogs] = useState<{ day: number, msg: string, type: 'success' | 'info' | 'warn' }[]>([]);
  const [isGeneratingPhaseReport, setIsGeneratingPhaseReport] = useState(false);
  const [phaseReport, setPhaseReport] = useState('');

  const roadmapPhases = [
    {
      title: 'Fase 1: Fondasi & Legalitas',
      days: [1, 25],
      tasks: [
        'Penyusunan AD/ART Digital.',
        'Pendaftaran Akta Notaris KSP.',
        'Pembukaan Rekening Escrow.',
        'IP Protection & Copyright.'
      ],
      icon: '⚖️',
      color: 'bg-indigo-600',
      border: 'border-indigo-500'
    },
    {
      title: 'Fase 2: Tech Deployment',
      days: [26, 50],
      tasks: [
        'Setup Serverless Cloud.',
        'Integrasi API SNAP Bank.',
        'Training Model AI Guard.',
        'Peluncuran PWA Beta.'
      ],
      icon: '☁️',
      color: 'bg-blue-600',
      border: 'border-blue-500'
    },
    {
      title: 'Fase 3: Pioneer Acquisition',
      days: [51, 85],
      tasks: [
        'Onboarding 100 Pionir.',
        'Aktivasi Marketplace.',
        'Uji Coba Pinjaman Mikro.',
        'Social Proof Gathering.'
      ],
      icon: '👥',
      color: 'bg-emerald-600',
      border: 'border-emerald-500'
    },
    {
      title: 'Fase 4: Grand Launch',
      days: [86, 100],
      tasks: [
        'PR Nasional "Antidote Pinjol".',
        'Distribusi SHU Perdana.',
        'Scaling 1.000+ Anggota.',
        'Series Seed Funding.'
      ],
      icon: '🚀',
      color: 'bg-rose-600',
      border: 'border-rose-500'
    }
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    setCurrentDay(1);
    setSimLogs([{ day: 1, msg: "Inisiasi Proyek KoperatifAI: Hari Pertama Dimulai!", type: 'info' }]);
    setPhaseReport('');
  };

  useEffect(() => {
    let timer: any;
    if (isSimulating && currentDay < 100) {
      timer = setTimeout(() => {
        const nextDay = currentDay + 1;
        setCurrentDay(nextDay);

        // Check for phase transitions
        if (nextDay === 26) {
          setActivePhaseIndex(1);
          setSimLogs(prev => [{ day: 26, msg: "Fase 1 Selesai: Legalitas Terjamin. Memasuki Fase Teknologi.", type: 'success' }, ...prev]);
        } else if (nextDay === 51) {
          setActivePhaseIndex(2);
          setSimLogs(prev => [{ day: 51, msg: "Fase 2 Selesai: Server & AI Online. Mencari 100 Pionir Pertama.", type: 'success' }, ...prev]);
        } else if (nextDay === 86) {
          setActivePhaseIndex(3);
          setSimLogs(prev => [{ day: 86, msg: "Fase 3 Selesai: Pionir Terverifikasi. Persiapan Peluncuran Nasional!", type: 'success' }, ...prev]);
        }

        // Random milestone events
        if (nextDay % 15 === 0) {
           const milestones = [
             "Audit Internal AI menunjukkan integritas 100%.",
             "Mitra Bank menyetujui limit Escrow Rp 10 Miliar.",
             "Permintaan gabung dari Duta Wilayah meningkat 40%.",
             "Protokol Kedaulatan Data berhasil diuji coba (Failover)."
           ];
           setSimLogs(prev => [{ day: nextDay, msg: milestones[Math.floor(Math.random() * milestones.length)], type: 'info' }, ...prev]);
        }

      }, 200); // Speed of simulation
    } else if (currentDay === 100) {
      setIsSimulating(false);
      setSimLogs(prev => [{ day: 100, msg: "MISSION ACCOMPLISHED: KoperatifAI Resmi Menjadi Imperium Ekonomi Rakyat!", type: 'success' }, ...prev]);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, currentDay]);

  const generatePhaseStatus = async () => {
    setIsGeneratingPhaseReport(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const currentPhase = roadmapPhases[activePhaseIndex];
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Berikan laporan status eksekutif singkat (2 paragraf) untuk Founder KoperatifAI yang saat ini berada di hari ke-${currentDay} (${currentPhase.title}). Jelaskan pencapaian teknis dan dampak sosial yang telah dirasakan oleh calon anggota pionir. Gunakan gaya bahasa profesional, optimis, dan visioner.`,
      });
      setPhaseReport(response.text || "Gagal menyusun laporan.");
    } catch (e) {
      setPhaseReport("Error: Sistem AI sedang sibuk.");
    } finally {
      setIsGeneratingPhaseReport(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Simulation Master Header */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Launch Simulator Engine v1.0
            </span>
            <h2 className="text-5xl font-black leading-tight italic">Eksekusi 100 Hari <br/>Menuju Kedaulatan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Lihat bagaimana strategi Anda berubah menjadi kenyataan. Tekan tombol simulasi untuk memicu pertumbuhan eksponensial.
            </p>
            <div className="flex gap-4">
              {!isSimulating && currentDay === 0 && (
                <button 
                  onClick={startSimulation}
                  className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all transform active:scale-95"
                >
                  MULAI SIMULASI PELUNCURAN
                </button>
              )}
              {currentDay === 100 && (
                 <button 
                  onClick={() => {setCurrentDay(0); setActivePhaseIndex(0); setSimLogs([]);}}
                  className="px-10 py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-emerald-700 transition-all"
                >
                  RESET SIMULASI
                </button>
              )}
            </div>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Progress Peluncuran</p>
                <p className="text-7xl font-black text-indigo-400 mt-2 italic">{currentDay}<span className="text-2xl ml-1 text-slate-500">/100</span></p>
                <div className="mt-8 h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                   <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.5)]" 
                    style={{ width: `${currentDay}%` }}
                   ></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-4 uppercase font-black tracking-widest">
                  {currentDay < 100 ? 'SYSTEM GROWING...' : 'ENTITIES ESTABLISHED'}
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Phase Cards View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {roadmapPhases.map((phase, i) => {
           const isActive = activePhaseIndex === i;
           const isDone = activePhaseIndex > i;
           return (
             <div key={i} className={`p-8 rounded-[3rem] border-2 transition-all duration-500 ${
               isActive ? 'bg-white border-indigo-600 shadow-2xl scale-105 ring-8 ring-indigo-50' : 
               isDone ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-100 opacity-60'
             }`}>
                <div className={`w-14 h-14 rounded-2xl ${isDone ? 'bg-emerald-500' : phase.color} flex items-center justify-center text-3xl mb-6 shadow-lg text-white`}>
                   {isDone ? '✅' : phase.icon}
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fase 0{i+1}</p>
                <h4 className="text-lg font-black text-slate-800 leading-tight mt-1 mb-6">{phase.title}</h4>
                <ul className="space-y-4">
                   {phase.tasks.map((task, idx) => (
                     <li key={idx} className="flex gap-3 items-start">
                        <span className={`${isActive ? 'text-indigo-600' : 'text-slate-300'} font-bold text-[10px]`}>●</span>
                        <p className={`text-[11px] leading-relaxed font-medium ${isDone ? 'line-through text-slate-400' : 'text-slate-500'}`}>{task}</p>
                     </li>
                   ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                   <span className={`text-[9px] font-black uppercase ${isActive ? 'text-indigo-600 animate-pulse' : isDone ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {isActive ? 'IN PROGRESS' : isDone ? 'COMPLETED' : 'LOCKED'}
                   </span>
                </div>
             </div>
           );
         })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Simulation Logs */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[3.5rem] p-10 shadow-2xl h-[500px] flex flex-col border border-white/5 overflow-hidden">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-6">
               <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${isSimulating ? 'bg-indigo-500 animate-ping' : 'bg-slate-700'}`}></span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Real-time Deployment Logs</p>
               </div>
               <span className="text-[9px] text-indigo-400 font-mono italic">NODE: FOUNDER_SECURE_01</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-4 font-mono text-[11px]">
               {simLogs.map((log, i) => (
                 <div key={i} className={`p-4 rounded-2xl border transition-all animate-in slide-in-from-left ${
                    log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                    log.type === 'info' ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : 
                    'bg-amber-500/10 text-amber-400 border-amber-500/20'
                 }`}>
                    <span className="opacity-40 mr-2">[DAY {log.day < 10 ? `0${log.day}` : log.day}]</span>
                    {log.msg}
                 </div>
               ))}
               {simLogs.length === 0 && (
                 <div className="h-full flex flex-col items-center justify-center text-slate-700 italic space-y-4">
                    <div className="text-6xl opacity-10">🚀</div>
                    <p>Tekan "MULAI SIMULASI" untuk melihat roadmap berjalan.</p>
                 </div>
               )}
            </div>
         </div>

         {/* AI Phase Report Side */}
         <div className="flex flex-col space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
               <div className="flex justify-between items-center mb-8 relative z-10">
                  <h3 className="text-xl font-black text-slate-800 italic">Laporan AI Fase {activePhaseIndex + 1}</h3>
                  <button 
                    onClick={generatePhaseStatus}
                    disabled={isGeneratingPhaseReport || currentDay === 0}
                    className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all disabled:opacity-30"
                  >
                    {isGeneratingPhaseReport ? '⏳' : '🤖'}
                  </button>
               </div>

               <div className="flex-1 bg-slate-50 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar relative z-10 text-sm italic text-slate-600 leading-relaxed font-serif">
                  {isGeneratingPhaseReport ? (
                    <div className="h-full flex items-center justify-center">
                       <div className="flex gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                       </div>
                    </div>
                  ) : phaseReport ? (
                    <pre className="whitespace-pre-wrap">{phaseReport}</pre>
                  ) : (
                    <p className="text-center opacity-40 py-10">"AI akan menganalisis keberhasilan fase ini setelah simulasi berjalan. Klik ikon robot di atas."</p>
                  )}
               </div>
               
               <div className="mt-8 pt-6 border-t border-slate-100 text-center relative z-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Confidence Score</p>
                  <p className="text-lg font-black text-emerald-600 mt-1">98.2%</p>
               </div>
            </div>
         </div>
      </div>

      {/* Founder's Execution Wisdom */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">🚩</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">"Momentum Adalah Segalanya."</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Simulasi ini membuktikan bahwa 100 hari adalah waktu yang sangat cukup untuk membangun sebuah institusi keuangan rakyat jika dipandu oleh teknologi. Fokuslah pada **Hari 51-85 (Pioneer Acquisition)**, karena di situlah nasib koperasi Anda ditentukan oleh 100 orang pertama."
            </p>
         </div>
      </div>

      {/* Success Callout */}
      {currentDay === 100 && (
        <div className="p-16 bg-emerald-600 rounded-[4rem] text-white text-center space-y-8 animate-in zoom-in duration-700 shadow-2xl">
           <div className="text-9xl mb-4">🏆</div>
           <h3 className="text-5xl font-black italic">SELAMAT, FOUNDER!</h3>
           <p className="text-emerald-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Anda telah berhasil melewati 100 hari penuh tantangan. KoperatifAI kini telah memiliki fondasi legal, teknologi, dan komunitas yang siap mengguncang dominasi perbankan lama.
           </p>
           <div className="pt-8 flex justify-center gap-6">
              <button className="px-10 py-5 bg-white text-emerald-700 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Klaim Gelar "Founder Pioneer"</button>
              <button className="px-10 py-5 bg-emerald-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Siapkan Ekspansi Fase 5</button>
           </div>
        </div>
      )}
    </div>
  );
};

export default LaunchRoadmap;
