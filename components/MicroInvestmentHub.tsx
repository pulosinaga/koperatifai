
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const projects = [
  {
    id: 1,
    owner: 'Ibu Siti Aminah',
    title: 'Ekspansi 5 Gerobak Bakso Sapi',
    target: 25000000,
    collected: 18450000,
    roi: '15-18% p.a',
    risk: 'LOW (A)',
    icon: '🍜',
    desc: 'Memperluas jangkauan warung bakso legendaris ke 5 titik strategis di wilayah Duta Cianjur.',
    radar: [
      { subject: 'History', A: 95 },
      { subject: 'Character', A: 100 },
      { subject: 'Cashflow', A: 85 },
      { subject: 'Market', A: 90 },
      { subject: 'Vouching', A: 100 },
    ]
  },
  {
    id: 2,
    owner: 'Kelompok Tani Makmur',
    title: 'Drone Penyiram Pupuk Otomatis',
    target: 15000000,
    collected: 4200000,
    roi: '12-20% p.a',
    risk: 'MEDIUM (B)',
    icon: '🛸',
    desc: 'Pengadaan drone pertanian untuk efisiensi pemupukan lahan padi anggota seluas 20 Hektar.',
    radar: [
      { subject: 'History', A: 70 },
      { subject: 'Character', A: 85 },
      { subject: 'Cashflow', A: 60 },
      { subject: 'Market', A: 95 },
      { subject: 'Vouching', A: 80 },
    ]
  }
];

const MicroInvestmentHub: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const runProjectAudit = async (project: any) => {
    setIsAnalyzing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis risiko mendalam untuk proyek investasi mikro koperasi: '${project.title}' oleh '${project.owner}'. 
        Tujuan: Membantu anggota lain memutuskan apakah akan berinvestasi.
        Jelaskan: 
        1. Mengapa skor jaminan sosial (vouching) orang ini sangat kuat.
        2. Proyeksi ekonomi sirkular: Bagaimana keuntungan proyek ini akan kembali memutar SHU seluruh anggota.
        3. Mitigasi risiko: Apa peran Duta Wilayah jika proyek ini mengalami kendala.
        Gunakan gaya bahasa profesional, jujur, dan berorientasi pada kemakmuran bersama.`,
      });
      setAiAnalysis(response.text || "Audit tidak tersedia.");
    } catch (e) {
      setAiAnalysis("Sistem audit AI sedang melakukan sinkronisasi data lapangan.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Investment Hero */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Community Capital Hub v1.5
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pusat Investasi Mikro: <br/>Modal Anda, Kejayaan Tetangga.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Gunakan saldo sukarela Anda untuk mendanai ide hebat sesama anggota. Transparan, produktif, dan diawasi oleh AI serta Duta Wilayah.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">💎</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Dana Tersalurkan</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">Rp 842.5 Juta</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black tracking-widest">Default Rate: 0.02%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Projects List */}
         <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Peluang Investasi Aktif</h3>
            <div className="space-y-6">
               {projects.map((project) => {
                 const progress = (project.collected / project.target) * 100;
                 return (
                   <div key={project.id} className={`bg-white rounded-[3rem] border-2 transition-all overflow-hidden flex flex-col ${selectedProjectId === project.id ? 'border-indigo-600 shadow-2xl scale-102' : 'border-slate-100 shadow-sm'}`}>
                      <div className="p-8 space-y-6">
                         <div className="flex justify-between items-start">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner">{project.icon}</div>
                            <div className="text-right">
                               <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${project.risk.includes('LOW') ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>Risk: {project.risk}</span>
                            </div>
                         </div>
                         <div>
                            <h4 className="text-xl font-black text-slate-800 leading-tight">{project.title}</h4>
                            <p className="text-[10px] font-bold text-indigo-600 uppercase mt-1">Owner: {project.owner}</p>
                         </div>
                         <p className="text-xs text-slate-500 leading-relaxed italic">"{project.desc}"</p>
                         
                         <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-black uppercase">
                               <span className="text-slate-400">Terkumpul: Rp {project.collected.toLocaleString()}</span>
                               <span className="text-indigo-600">{progress.toFixed(0)}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                               <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                            </div>
                         </div>

                         <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                            <div>
                               <p className="text-[8px] font-black text-slate-400 uppercase">Estimasi Bagi Hasil</p>
                               <p className="text-sm font-black text-emerald-600">{project.roi}</p>
                            </div>
                            <button 
                              onClick={() => { setSelectedProjectId(project.id); runProjectAudit(project); }}
                              className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg"
                            >
                               Detail & Investasi
                            </button>
                         </div>
                      </div>
                   </div>
                 );
               })}
            </div>
         </div>

         {/* AI Project Analysis Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[700px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            
            {selectedProject ? (
               <div className="space-y-8 relative z-10 animate-in slide-in-from-right duration-500 flex flex-col h-full">
                  <div className="flex justify-between items-center">
                     <h3 className="text-xl font-black text-indigo-400 italic uppercase">AI Deep Analysis</h3>
                     <button onClick={() => setSelectedProjectId(null)} className="text-slate-500 hover:text-white">✕ Close</button>
                  </div>

                  <div className="flex justify-center h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedProject.radar}>
                        <PolarGrid stroke="#ffffff20" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                        <Radar name="Scoring" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic border border-white/5 shadow-inner">
                     {isAnalyzing ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-6">
                           <div className="text-5xl animate-spin">🧠</div>
                           <p className="text-slate-400 text-xs animate-pulse uppercase tracking-widest">AI sedang membedah profitabilitas & integritas...</p>
                        </div>
                     ) : (
                        <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                     )}
                  </div>

                  <div className="pt-6 space-y-4">
                     <div className="flex gap-4">
                        <input type="number" placeholder="Nominal Invest (Min Rp 10rb)" className="flex-1 p-4 bg-white/10 rounded-2xl text-white outline-none border border-white/10 focus:border-indigo-500" />
                        <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:bg-emerald-500 transition-all">DANAI SEKARANG</button>
                     </div>
                     <p className="text-[9px] text-slate-500 text-center uppercase tracking-widest">Dana diambil dari Saldo Tabungan Sukarela Anda.</p>
                  </div>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                  <div className="text-8xl">📈</div>
                  <p className="text-slate-400 font-bold max-w-xs mx-auto">Pilih proyek di sebelah kiri untuk melihat hasil audit kelayakan AI secara mendalam.</p>
               </div>
            )}
         </div>
      </div>

      {/* Trust & Reward Explanation */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Keamanan Investasi Mikro</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               Di bank, Anda hanya dipinjamkan uangnya. Di KoperatifAI, Anda meminjamkan modal kepada **Manusia Nyata** yang Anda kenal. Setiap proyek dijamin oleh dana cadangan risiko sebesar 15% untuk melindungi modal pokok investor jika terjadi kendala bisnis.
            </p>
         </div>
      </div>

      {/* Call to Action for Founder */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">📢</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Demokratisasi Permodalan Rakyat."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Jadilah Founder yang memberikan panggung bagi ide-ide kecil untuk tumbuh besar. Aktifkan **AI Project Onboarding** untuk mulai menerima proposal ide dari seluruh anggota Anda.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Buka Dashboard Review Proposal
         </button>
      </div>
    </div>
  );
};

export default MicroInvestmentHub;
