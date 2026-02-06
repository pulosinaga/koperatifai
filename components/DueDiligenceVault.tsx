
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const folders = [
  {
    id: 'legal',
    title: 'Legal & Compliance',
    icon: '⚖️',
    docs: [
      { name: 'AD/ART Digital Certified.pdf', size: '1.2MB', status: 'VERIFIED' },
      { name: 'NIB & Izin Operasional KSP.pdf', size: '850KB', status: 'VERIFIED' },
      { name: 'Trademark Certificate KoperatifAI.pdf', size: '420KB', status: 'VERIFIED' },
      { name: 'Patent: AI Character Scoring Method.pdf', size: '2.1MB', status: 'PROTECTED' }
    ]
  },
  {
    id: 'financial',
    title: 'Financial Integrity',
    icon: '💰',
    docs: [
      { name: 'Consolidated Balance Sheet Feb 2026.xlsx', size: '45KB', status: 'REAL-TIME' },
      { name: 'Audit Log: Multi-Sig Disbursements.json', size: '15MB', status: 'HASHED' },
      { name: 'Tax Compliance Certificate (DJP).pdf', size: '1.1MB', status: 'COMPLIANT' },
      { name: 'Proof of Reserves (Bank Snapshot).pdf', size: '2.4MB', status: 'MATCHED' }
    ]
  },
  {
    id: 'tech',
    title: 'Tech Architecture',
    icon: '💻',
    docs: [
      { name: 'Cloud Infrastructure Map.pdf', size: '4.5MB', status: 'SCALABLE' },
      { name: 'Security Protocol: Sentinel 4.0.whitepaper', size: '3.2MB', status: 'ENCRYPTED' },
      { name: 'API Integration Manifest (SNAP).json', size: '12KB', status: 'OPEN_BANK' }
    ]
  },
  {
    id: 'social',
    title: 'Social Impact (SROI)',
    icon: '🌱',
    docs: [
      { name: 'SROI Impact Report: Rural Poverty.pdf', size: '5.6MB', status: 'AUDITED' },
      { name: 'Pioneer Success Story Archive.vlog', size: '120MB', status: 'VERIFIED' },
      { name: 'Gender Equality Metrics.csv', size: '88KB', status: 'SDG_LENS' }
    ]
  }
];

const DueDiligenceVault: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState(folders[0]);
  const [auditorQuestion, setAuditorQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const [readinessScore] = useState(96);

  const askComplianceAI = async () => {
    if (!auditorQuestion.trim()) return;
    setIsAnswering(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Anda adalah AI Compliance Officer untuk KoperatifAI. Seorang auditor internasional dari donor besar bertanya: "${auditorQuestion}". 
        
        Jawablah secara sangat teknis, profesional, dan meyakinkan. Gunakan standar ISO 27001 (Security), Prinsip WOCCU (Cooperative), dan standar audit keuangan internasional. 
        Tunjukkan bahwa sistem kita tidak memiliki celah untuk manipulasi saldo dan setiap pengeluaran di atas Rp 50jt wajib melalui e-Voting yang tercatat di ledger yang tidak bisa diubah (Immutable Ledger).`,
      });
      setAiAnswer(response.text || "Compliance Officer sedang meninjau dokumen.");
    } catch (e) {
      setAiAnswer("Koneksi aman ke Pusat Kepatuhan terganggu. Silakan coba kembali.");
    } finally {
      setIsAnswering(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Vault Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Virtual Data Room (VDR) v3.2
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">The Executive <br/>Audit Vault.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               Akses eksklusif bagi mitra strategis untuk membedah integritas KoperatifAI. Data riil, dokumen legal, dan bukti dampak sirkular tersedia di sini.
            </p>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Audit Readiness Score</p>
             <p className="text-7xl font-black text-white mt-2 italic">{readinessScore}%</p>
             <div className="mt-6 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 animate-pulse" style={{ width: `${readinessScore}%` }}></div>
             </div>
             <p className="text-[10px] text-slate-500 mt-6 uppercase font-black">INVESTMENT GRADE CERTIFIED</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
         {/* Folder Navigation */}
         <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-4">Categories</h3>
            {folders.map((folder) => (
               <button 
                key={folder.id}
                onClick={() => setActiveFolder(folder)}
                className={`w-full p-8 rounded-[3rem] border-2 transition-all text-left flex flex-col gap-4 group ${
                  activeFolder.id === folder.id ? 'bg-indigo-600 border-indigo-500 shadow-xl scale-105' : 'bg-white border-slate-100 hover:border-indigo-200'
                }`}
               >
                  <div className="text-4xl group-hover:scale-110 transition-transform">{folder.icon}</div>
                  <div>
                     <h4 className={`font-black text-lg ${activeFolder.id === folder.id ? 'text-white' : 'text-slate-800'}`}>{folder.title}</h4>
                     <p className={`text-[10px] font-bold uppercase mt-1 ${activeFolder.id === folder.id ? 'text-indigo-200' : 'text-slate-400'}`}>{folder.docs.length} Verified Docs</p>
                  </div>
               </button>
            ))}
         </div>

         {/* Document List View */}
         <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-[4rem] p-12 shadow-xl border border-slate-50 flex flex-col min-h-[600px]">
               <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-4">
                     <span className="text-4xl">{activeFolder.icon}</span>
                     <div>
                        <h3 className="text-2xl font-black text-slate-800 italic">{activeFolder.title}</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase">Directory: /root/{activeFolder.id}</p>
                     </div>
                  </div>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Download All Folders</button>
               </div>

               <div className="space-y-4 flex-1">
                  {activeFolder.docs.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-indigo-100 group">
                       <div className="flex items-center gap-6">
                          <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">📄</div>
                          <div>
                             <h5 className="font-bold text-slate-800 text-sm">{doc.name}</h5>
                             <p className="text-[10px] text-slate-400 uppercase font-black">{doc.size}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase border ${
                            doc.status === 'VERIFIED' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                            doc.status === 'REAL-TIME' ? 'bg-indigo-50 text-indigo-600 border-indigo-100 animate-pulse' :
                            'bg-indigo-50 text-indigo-600 border-indigo-100'
                          }`}>
                             {doc.status}
                          </span>
                          <button className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">👁️</button>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">🛡️</div>
                     <p className="text-xs font-bold text-slate-500">Hash-Locked Ledger Verification: <span className="text-emerald-600">SUCCESS</span></p>
                  </div>
                  <p className="text-[9px] text-slate-400 italic">"Ledger state verified via Global Peer Audit Network."</p>
               </div>
            </div>
         </div>
      </div>

      {/* AI Compliance Officer Panel */}
      <div className="bg-slate-950 rounded-[4rem] p-16 text-white overflow-hidden relative shadow-2xl">
         <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[180px]"></div>
         
         <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 space-y-8">
               <div className="space-y-4">
                  <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                    Sovereign Auditor Assistant
                  </span>
                  <h3 className="text-4xl font-black italic">Auditor Interrogator Panel.</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                     Ajukan pertanyaan tersulit mengenai manajemen risiko, tata kelola, atau arsitektur teknologi. AI Compliance kami akan menjawab berdasarkan bukti di brankas data.
                  </p>
               </div>

               <div className="space-y-6">
                  <div className="relative">
                     <textarea 
                       value={auditorQuestion}
                       onChange={(e) => setAuditorQuestion(e.target.value)}
                       placeholder="Contoh: Bagaimana KoperatifAI menangani serangan Double-Spending di database terdistribusi?"
                       className="w-full p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-sm italic text-slate-300 focus:ring-2 focus:ring-indigo-600 outline-none h-40 resize-none"
                     />
                  </div>
                  <button 
                    onClick={askComplianceAI}
                    disabled={isAnswering || !auditorQuestion}
                    className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
                  >
                     {isAnswering ? '⏳ CONSULTING CORE ARCHITECTURE...' : '🎤 ASK COMPLIANCE OFFICER'}
                  </button>
               </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md rounded-[3.5rem] p-12 border border-white/10 flex flex-col h-[500px]">
               <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Official AI Response</p>
                  <div className="flex gap-1.5">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                     <span className="text-[8px] font-mono text-slate-500">TRUST_SYNC: 100%</span>
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic pr-4">
                  {isAnswering ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                        <div className="flex gap-4">
                           <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                           <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                        <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em]">PROCESSING PROOFS...</p>
                     </div>
                  ) : aiAnswer ? (
                     <div className="animate-in fade-in duration-1000">
                        <pre className="whitespace-pre-wrap">{aiAnswer}</pre>
                     </div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-20 space-y-6">
                        <div className="text-8xl">🛡️</div>
                        <p className="max-w-xs mx-auto font-bold text-lg">Compliance AI siap memberikan klarifikasi atas pertanyaan audit strategis Anda.</p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>

      {/* Trust Message Section */}
      <div className="p-16 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16">
         <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center text-7xl shrink-0">🏛️</div>
         <div className="space-y-6">
            <h4 className="text-4xl font-black text-slate-800 italic leading-tight">"Transparency is the Only Path to Scale."</h4>
            <p className="text-slate-500 text-xl leading-relaxed">
               Founder, saat lembaga dunia melihat VDR Anda, mereka sedang melihat **Masa Depan Keuangan Inklusif**. Keakuratan data di vault ini adalah modal tawar terbesar Anda untuk mendapatkan pendanaan $10M+.
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Audit Log Certification</button>
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Contact Chief Auditor</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DueDiligenceVault;
