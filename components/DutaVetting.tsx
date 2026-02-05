
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DutaVetting: React.FC = () => {
  const [isVetting, setIsVetting] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [aiReport, setAiReport] = useState('');

  const candidates = [
    { 
      id: 'C-01', 
      name: 'Ibu Hajah Salamah', 
      profession: 'Tokoh Majelis Taklim', 
      reputation: 94, 
      vouchers: 12, 
      savings: 'Rp 4.5jt', 
      slikStatus: 'Kolektibilitas 1 (Lancar)',
      ktpStatus: 'E-KTP VALID (OCR Match)',
      gpsStatus: 'GPS MATCH (Domisili Cianjur)',
      bioStatus: 'FACE MATCH 98% (Liveness OK)',
      bioColor: 'text-emerald-500',
      status: 'High Trust', 
      icon: '🧕',
      location: 'Cianjur, Jabar'
    },
    { 
      id: 'C-02', 
      name: 'Pak Andi Wijaya', 
      profession: 'Ketua Karang Taruna', 
      reputation: 82, 
      vouchers: 7, 
      savings: 'Rp 2.1jt', 
      slikStatus: 'Kolektibilitas 2 (Dalam Perhatian)',
      ktpStatus: 'E-KTP VALID (Address Sync)',
      gpsStatus: 'GPS MATCH (Domisili Sidoarjo)',
      bioStatus: 'FACE MATCH 92% (Liveness OK)',
      bioColor: 'text-indigo-400',
      status: 'Recommended', 
      icon: '👨‍💼',
      location: 'Sidoarjo, Jatim'
    },
    { 
      id: 'C-03', 
      name: 'Rian Prasetyo', 
      profession: 'Driver Ojol Pioneer', 
      reputation: 45, 
      vouchers: 2, 
      savings: 'Rp 500rb', 
      slikStatus: 'Kolektibilitas 5 (Macet - Pinjol)',
      ktpStatus: 'E-KTP SUSPECT (Manual Check)',
      gpsStatus: 'GPS MISMATCH (KTP Medan, Lok Jakarta)',
      bioStatus: 'FACE MISMATCH (Potential Spoof)',
      bioColor: 'text-rose-500',
      status: 'Risk: Identity Suspect', 
      icon: '🛵',
      location: 'Medan, Sumut'
    }
  ];

  const generateAICharacterAudit = async (candidate: any) => {
    setIsVetting(true);
    setSelectedCandidate(candidate);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis karakter calon Duta bernama ${candidate.name}. 
        Status Biometrik: ${candidate.bioStatus}.
        Data Identitas: ${candidate.ktpStatus}. 
        Data Lokasi (GPS Sync): ${candidate.gpsStatus}. 
        Data Perbankan (SLIK): ${candidate.slikStatus}. 
        
        Berikan AI Integrity Score (0-100). Jelaskan risiko jika Biometric Mismatch ditemukan bersamaan dengan GPS Mismatch. Apakah ini indikasi penipuan akun fiktif? Berikan rekomendasi akhir untuk pelantikan Duta.`,
      });
      setAiReport(response.text || "Audit tidak tersedia.");
    } catch (e) {
      setAiReport("Error: Koneksi AI terputus.");
    } finally {
      setIsVetting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Vetting Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Identity Vetting Protocol v3.5
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Quadrilateral Trust Selection. <br/>KTP x SLIK x GPS x BIOMETRIC.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Sistem audit kami kini mencakup **Validasi Biometrik** untuk memastikan Duta Anda adalah manusia nyata yang jujur.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🤳</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Vetting Status</p>
             <p className="text-4xl font-black text-emerald-400 mt-1 italic">SECURE+</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Biometric Liveness Active</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Candidate List */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Dashboard Seleksi</h3>
            
            <div className="space-y-4">
               {candidates.map((c) => (
                 <button 
                  key={c.id}
                  onClick={() => generateAICharacterAudit(c)}
                  className={`w-full p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                    selectedCandidate?.id === c.id ? 'bg-indigo-50 border-indigo-600 shadow-lg' : 'bg-white border-slate-50 hover:border-indigo-100'
                  }`}
                 >
                    <div className="flex gap-4 items-center">
                       <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">{c.icon}</div>
                       <div className="text-left">
                          <h4 className="font-bold text-slate-800">{c.name}</h4>
                          <p className={`text-[9px] font-black uppercase ${c.bioColor}`}>{c.bioStatus}</p>
                          <p className="text-[8px] text-slate-400 mt-1 uppercase">GPS: {c.gpsStatus}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className={`text-xs font-black uppercase ${c.reputation > 80 ? 'text-emerald-600' : 'text-rose-500'}`}>{c.status}</p>
                       <p className="text-[10px] text-slate-400 mt-1">Audit Score 90+</p>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Integrity Audit Side */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            
            {selectedCandidate ? (
               <div className="space-y-8 relative z-10 animate-in slide-in-from-right duration-500">
                  <div className="flex justify-between items-center">
                     <h4 className="text-xl font-black text-indigo-400 italic">AI Character Audit Result</h4>
                     <span className="text-[9px] font-black text-slate-500 uppercase">Comprehensive Scan...</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <p className="text-[9px] text-slate-500 uppercase font-black">Biometric Match</p>
                        <p className={`text-xs font-bold ${selectedCandidate.bioColor}`}>{selectedCandidate.bioStatus}</p>
                     </div>
                     <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <p className="text-[9px] text-slate-500 uppercase font-black">GPS Legitimacy</p>
                        <p className={`text-xs font-bold text-white`}>{selectedCandidate.gpsStatus}</p>
                     </div>
                  </div>

                  <div className="flex-1 bg-white p-8 rounded-[3rem] shadow-inner font-serif text-sm text-slate-700 leading-relaxed italic overflow-y-auto max-h-[300px] custom-scrollbar">
                     {isVetting ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-4 py-10">
                           <div className="flex gap-2">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                           </div>
                           <p className="text-[10px] font-black uppercase text-slate-400">AI membedah integritas wajah...</p>
                        </div>
                     ) : (
                        <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <button className="py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-emerald-700 transition-all">Loloskan Calon</button>
                     <button className="py-4 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] border border-white/10 hover:bg-white/10 transition-all">Tolak / Blacklist</button>
                  </div>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                  <div className="text-7xl">📸</div>
                  <p className="text-slate-400 font-bold max-w-xs mx-auto">Pilih calon untuk melakukan audit 4 lapis (KTP, SLIK, GPS, BIOMETRIK) secara mendalam.</p>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default DutaVetting;
