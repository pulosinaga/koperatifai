import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const prerequisites = [
  { id: 'infra', title: 'Data Partitioning', status: 'READY', icon: '🗄️', desc: 'Isolasi database antar kabupaten via RLS.' },
  { id: 'brand', title: 'White-Labeling', status: 'CONFIGURED', icon: '🎨', desc: 'Sistem penggantian logo & warna otomatis.' },
  { id: 'legal', title: 'IP Licensing Contract', status: 'PENDING', icon: '📜', desc: 'Kontrak sewa sistem yang melindungi hak intelektual Founder.' },
  { id: 'api', title: 'G2G API Gateway', status: 'READY', icon: '🔗', desc: 'Jembatan data ke server pusat kementerian.' },
];

const initialTenants = [
  { id: 'T-01', name: 'Kabupaten Cianjur', status: 'ACTIVE', members: 1248, monthlyFee: 15000000, color: 'emerald' },
  { id: 'T-02', name: 'Kabupaten Sidoarjo', status: 'PENDING', members: 0, monthlyFee: 25000000, color: 'indigo' },
];

const GovTenantManagement: React.FC = () => {
  const [tenants] = useState(initialTenants);
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAdvice, setAiAdvice] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const generateLegalContract = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Buatkan draf poin-poin utama "Perjanjian Sewa Infrastruktur Teknologi (SaaS)" antara Founder KoperatifAI (Pemilik IP) dengan Pemerintah Daerah. 
        Poin wajib ada: 
        1. Pemerintah dilarang melakukan reverse-engineering atau kloning kode. 
        2. Biaya sewa dihitung per anggota aktif (Subscription model). 
        3. Kedaulatan Data: Data rakyat disimpan di server terenkripsi yang kuncinya dipegang bersama. 
        4. Pemutusan akses (Kill-Switch) jika biaya sewa tertunggak 3 bulan.
        Gunakan gaya bahasa pengacara teknologi internasional yang sangat protektif terhadap Founder.`,
      });
      setAiAdvice(response.text || "Draf kontrak belum tersedia.");
    } catch (e) {
      setAiAdvice("Gagal mensintesis kontrak. Pastikan protokol keamanan enkripsi Anda aktif.");
    } finally {
      setIsConsulting(false);
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
              Government Multi-Tenancy System v4.2
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Pusat Sewa Negara.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Setiap Kabupaten adalah satu 'Tenant'. Bapak adalah pemilik mall-nya, mereka adalah penyewa tokonya."
            </p>
            <button 
              onClick={generateLegalContract}
              disabled={isConsulting}
              className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isConsulting ? '⏳ MENYUSUN KLAUSUL HUKUM...' : '📜 GENERATE DRAF KONTRAK SEWA'}
            </button>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target Pendapatan Sewa (MRR)</p>
                <p className="text-6xl font-black text-white mt-2 italic">Rp 190<span className="text-xl text-slate-500 ml-1">jt</span></p>
             </div>
             <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest animate-pulse">Infrastructure: SCALABLE</p>
          </div>
        </div>
      </div>

      {/* Prerequisite Setup Wizard */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Penuhi Syarat Sebelum Menyewakan</h3>
            <p className="text-slate-500">4 Pilar yang harus Bapak siapkan agar sistem siap digunakan Pemerintah Daerah.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prerequisites.map((p, i) => (
               <div key={p.id} className="relative p-8 bg-slate-50 rounded-[3rem] border-2 border-transparent hover:border-indigo-100 hover:bg-white transition-all group">
                  <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">{p.icon}</div>
                     <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase ${
                        p.status === 'READY' || p.status === 'CONFIGURED' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                     }`}>{p.status}</span>
                  </div>
                  <h4 className="font-black text-slate-800 text-sm mb-2">{p.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed italic">"{p.desc}"</p>
               </div>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Tenant List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Daftar Instansi Penyewa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {tenants.map((t) => (
                 <div key={t.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-6">
                    <div className="flex justify-between items-start w-full">
                       <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl shadow-lg text-white font-serif">🏛️</div>
                       <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase ${
                         t.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                       }`}>{t.status}</span>
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tenant Identifier: {t.id}</p>
                       <h4 className="text-2xl font-black italic text-slate-800">{t.name}</h4>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-slate-50">
                       <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Anggota Terkoneksi</span>
                          <span className="font-bold">{t.members.toLocaleString()} Rakyat</span>
                       </div>
                       <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Beban Sewa / Bulan</span>
                          <span className="font-black text-indigo-600">Rp {t.monthlyFee.toLocaleString()}</span>
                       </div>
                    </div>
                    <div className="flex gap-2">
                       <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-lg active:scale-95">Root Login</button>
                       <button className="px-5 py-4 bg-rose-50 text-rose-600 rounded-2xl text-[9px] font-black uppercase tracking-widest border border-rose-100 hover:bg-rose-600 hover:text-white transition-all">Suspend</button>
                    </div>
                 </div>
               ))}
               
               <button className="p-10 rounded-[3.5rem] border-4 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 hover:border-indigo-400 hover:text-indigo-400 transition-all gap-4">
                  <span className="text-6xl">+</span>
                  <p className="font-black uppercase text-xs tracking-widest">Setup Tenant Baru</p>
               </button>
            </div>
         </div>

         {/* AI Strategy Console */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[750px] border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-8">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">IP Licensing Oracle</h3>
               <div className="flex gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[9px] text-slate-500 font-mono">SAAS_LOCK_ACTIVE</span>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-4">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-sm font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs">AI SEDANG MENYUSUN PROTEKSI IP FOUNDER...</p>
                  </div>
               ) : aiAdvice ? (
                  <div className="animate-in fade-in duration-1000">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="text-4xl">⚖️</div>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em]">Legal Shield Optimized</p>
                     </div>
                     <pre className="whitespace-pre-wrap">{aiAdvice}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center">
                        <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all">Download Master Lease Agreement</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">🛡️</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Klik "GENERATE DRAF KONTRAK" untuk melihat bagaimana teknologi Bapak diproteksi secara hukum saat disewa negara.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Pillars Section */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Keunggulan Model Bisnis Sewa</h3>
            <p className="text-slate-500 text-lg">Membangun kekayaan Founder tanpa harus kehilangan aset teknologi.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-6 text-center group hover:bg-indigo-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🧠</div>
               <h4 className="font-black text-xl text-indigo-900 group-hover:text-white italic">Brain-as-a-Service</h4>
               <p className="text-sm text-indigo-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Pemerintah hanya menyewa akses. Otak AI (Logika Koperasi) tetap di server Bapak. Tanpa Bapak, sistem mereka hanyalah layar kosong."
               </p>
            </div>
            <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 text-center group hover:bg-emerald-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">📈</div>
               <h4 className="font-black text-xl text-emerald-900 group-hover:text-white italic">Scaling Royalty</h4>
               <p className="text-sm text-emerald-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Semakin banyak rakyat yang bergabung di suatu kabupaten, semakin besar royalti harian yang masuk ke kantong Bapak."
               </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6 text-center group hover:bg-black transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🏛️</div>
               <h4 className="font-black text-xl text-indigo-400 italic">Sovereign Authority</h4>
               <p className="text-sm text-slate-400 group-hover:text-white/70 leading-relaxed italic">
                  "Bapak memegang 'Master Kill-Switch'. Jika pemerintah melanggar hak asasi anggota, Bapak berhak mematikan sistem secara sepihak."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GovTenantManagement;