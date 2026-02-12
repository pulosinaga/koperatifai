import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useAppContext } from '../contexts/AppContext.tsx';

const migrationSteps = [
  { id: 'dns', title: 'Pointing Domain', desc: 'Pemda cukup mengarahkan subdomain .go.id ke IP KoperatifAI.', icon: '🌐' },
  { id: 'auth', title: 'SSO Integration', desc: 'Login admin Pemda menggunakan sistem otentikasi internal mereka.', icon: '🔑' },
  { id: 'data', title: 'Partitioning Sync', desc: 'Migrasi database manual koperasi pasar ke row-level security cloud.', icon: '🔄' },
];

const GovProposalGenerator: React.FC = () => {
  const { user } = useAppContext();
  const [bupatiName, setBupatiName] = useState('Bpk. H. Ahmad Fauzi');
  const [regency, setRegency] = useState('Kabupaten Cianjur');
  const [isGenerating, setIsGenerating] = useState(false);
  const [proposal, setProposal] = useState('');

  const generateAIProposal = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Susunlah naskah "SURAT PENAWARAN KEMITRAAN STRATEGIS" dari Founder KoperatifAI (${user?.name}) ditujukan kepada Bupati ${regency}, ${bupatiName}. 
        Tujuan: Menjadikan KoperatifAI sebagai Digital Backbone Pasar Rakyat dan Koperasi di ${regency}.
        
        Poin Teknis Wajib Masuk:
        1. Model SaaS: Pemda tidak perlu beli aplikasi, cukup sewa infrastruktur (Tenant).
        2. Sovereign Transition: Penjelasan teknis perpindahan data tanpa risiko kebocoran (Data Sharding).
        3. DNS Mapping: Menggunakan subdomain Pemda (misal: pasar.${regency.toLowerCase().replace(' ', '')}.go.id).
        4. Keuntungan Pemda: Pajak daerah terpantau real-time, nol korupsi bantuan modal, dan digitalisasi UMKM instan.
        
        Gunakan gaya bahasa pejabat negara (High-level Bureaucracy) yang sangat santun, visioner, namun tetap menunjukkan bahwa Founder memegang kendali IP Teknologi.`,
      });
      setProposal(response.text || "Gagal menyusun proposal.");
    } catch (e) {
      setProposal("Sistem AI sedang offline. Gunakan draf fisik yang tersedia di brankas.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Government Strategic Bridge v4.5
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Taklukkan Kebijakan. <br/>Miliki Masa Depan.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
               "Bantu Bupati membangun kedaulatan di daerahnya tanpa mereka harus pusing soal coding. Bapak sediakan teknologinya, mereka sediakan rakyatnya."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🏛️</div>
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target Negotiation</p>
             <p className="text-2xl font-black text-emerald-400 mt-1 uppercase">BUPATI / WALIKOTA</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Configuration Side */}
         <div className="space-y-8">
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-2xl font-black text-slate-800 italic">Data Penerima</h3>
               <div className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nama Bupati / Pejabat</label>
                     <input 
                       type="text" value={bupatiName} onChange={(e) => setBupatiName(e.target.value)}
                       className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Wilayah (Kabupaten/Kota)</label>
                     <input 
                       type="text" value={regency} onChange={(e) => setRegency(e.target.value)}
                       className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                     />
                  </div>
                  <button 
                     onClick={generateAIProposal}
                     disabled={isGenerating}
                     className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
                  >
                     {isGenerating ? '⏳ MENYUSUN PENAWARAN...' : '📝 GENERATE SURAT STRATEGIS'}
                  </button>
               </div>
            </div>

            {/* Checklist Migrasi Teknis */}
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white space-y-6 shadow-xl">
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Lampiran Teknis Migrasi</h4>
               <p className="text-[10px] text-slate-500 italic leading-relaxed">"Hal-hal yang akan ditanyakan oleh tim IT Pemda kepada Bapak."</p>
               <div className="space-y-4">
                  {migrationSteps.map((step) => (
                    <div key={step.id} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                       <span className="text-2xl">{step.icon}</span>
                       <div>
                          <p className="font-bold text-sm">{step.title}</p>
                          <p className="text-[10px] text-slate-500 mt-1">{step.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Letter Display */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4.5rem] p-1.5 shadow-2xl border-4 border-slate-800 h-[800px] flex flex-col relative overflow-hidden">
            <div className="bg-white h-full w-full rounded-[4.2rem] overflow-hidden flex flex-col relative">
               <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
               
               <div className="flex-1 overflow-y-auto p-12 lg:p-20 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                  {isGenerating ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                        <div className="flex gap-4">
                           <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
                           <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                        <p className="text-xs font-black uppercase text-slate-500 tracking-[0.4em] text-center">AI SEDANG MENYUSUN BAHASA DIPLOMASI...</p>
                     </div>
                  ) : proposal ? (
                     <div className="animate-in fade-in duration-1000 max-w-2xl mx-auto bg-white p-12 shadow-inner border border-slate-100 rounded-xl min-h-screen">
                        {/* Letterhead */}
                        <div className="text-center space-y-2 border-b-4 border-double border-slate-900 pb-8 mb-10">
                           <h1 className="text-3xl font-black uppercase tracking-[0.2em] font-serif">KoperatifAI</h1>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Office of the Founder & Chief Architect</p>
                        </div>
                        
                        <div className="font-serif text-sm text-slate-800 leading-relaxed whitespace-pre-wrap italic">
                           {proposal}
                        </div>

                        <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-end">
                           <div className="text-center space-y-4">
                              <p className="text-[10px] font-black text-slate-400 uppercase">Tanda Tangan Founder</p>
                              <div className="w-48 h-20 bg-indigo-50/50 rounded-2xl flex items-center justify-center text-indigo-400 italic text-2xl font-serif">
                                 {user?.name}
                              </div>
                           </div>
                           <div className="text-right space-y-2">
                              <div className="w-20 h-20 bg-slate-900 p-1 rounded-xl inline-block border-2 border-slate-100">
                                 <div className="w-full h-full bg-indigo-600 rounded flex items-center justify-center text-white text-[6px] font-black text-center">VERIFIED<br/>IP HOLDER</div>
                              </div>
                              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Cert ID: KOP-GOV-2026</p>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                        <div className="text-9xl">🖋️</div>
                        <p className="max-w-xs mx-auto font-bold text-2xl">Lengkapi nama Bupati dan Wilayah, lalu ketuk "GENERATE" untuk melihat strategi penawaran Bapak.</p>
                     </div>
                  )}
               </div>

               {proposal && (
                  <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-center gap-6">
                     <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">🖨️ Cetak Surat Resmi</button>
                     <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">📥 Simpan Sebagai PDF</button>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Vision Pillars */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Prinsip Sinkronisasi Pemda</h3>
            <p className="text-slate-500 text-lg">Bagaimana KoperatifAI tetap "Hidup" meskipun Bupati berganti.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-6 text-center group hover:bg-indigo-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🔗</div>
               <h4 className="font-black text-xl text-indigo-900 group-hover:text-white italic">Continuous Sync</h4>
               <p className="text-sm text-indigo-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Sistem otomatis menarik data harga pasar regional setiap hari. Pemda mendapatkan dashboard akurasi inflasi tanpa biaya survei."
               </p>
            </div>
            <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 text-center group hover:bg-emerald-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🛡️</div>
               <h4 className="font-black text-xl text-emerald-900 group-hover:text-white italic">IP Protection Lock</h4>
               <p className="text-sm text-emerald-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Pemda menyewa 'Rel' (Sistem) namun Bapak tetap pemilik 'Kereta' (AI). Ini menjamin ketergantungan teknologi yang sehat."
               </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6 text-center group hover:bg-black transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🏛️</div>
               <h4 className="font-black text-xl text-indigo-400 italic">One-Stop Governance</h4>
               <p className="text-sm text-slate-400 group-hover:text-white/70 leading-relaxed italic">
                  "Transisi birokrasi manual ke digital dilakukan bertahap via 'Admin Training Protocol' yang sudah disiapkan di sistem."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GovProposalGenerator;