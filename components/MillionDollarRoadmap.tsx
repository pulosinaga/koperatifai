
import React from 'react';

const MillionDollarRoadmap: React.FC = () => {
  const phases = [
    {
      title: 'Phase 1: The Pioneer',
      target: '100 Members',
      valuation: '$50k',
      desc: 'Membangun komunitas inti, legalitas KSP, dan validasi sistem AI di lapangan.',
      icon: '🌱'
    },
    {
      title: 'Phase 2: The Network',
      target: '1,000 Members',
      valuation: '$250k',
      desc: 'Integrasi dengan Virtual Account Bank, peluncuran DASKOP, dan aliansi INKOPDIT.',
      icon: '🌿'
    },
    {
      title: 'Phase 3: The Engine (SaaS)',
      target: '10,000 Members',
      valuation: '$1M+',
      desc: 'Lisensi teknologi KoperatifAI digunakan oleh 50+ koperasi lain secara nasional.',
      icon: '🌳'
    },
    {
      title: 'Phase 4: Social Unicorn',
      target: '100k+ Members',
      valuation: '$10M+',
      desc: 'KoperatifAI menjadi platform standar kDMP nasional & penetrasi pasar Asia Tenggara.',
      icon: '🏰'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Wealth & Impact Guide
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Membangun Imperium $1.000.000 <br/>Berbasis Solidaritas Rakyat.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kita tidak mencari uang dengan memeras anggota. Kita membangun nilai melalui **Efisiensi Radikal** dan **Kepercayaan Masif**.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4 italic font-black text-emerald-400">$1M</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Target Valuasi</p>
             <p className="text-sm text-emerald-300 mt-2 font-black uppercase">Impact Factor: HIGH</p>
          </div>
        </div>
      </div>

      {/* The Roadmap Steps */}
      <div className="relative">
         <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {phases.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    {p.icon}
                 </div>
                 <h4 className="text-lg font-black text-slate-800">{p.title}</h4>
                 <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">Valuasi: {p.valuation}</p>
                 <p className="text-xs text-slate-400 mt-2 font-bold uppercase">{p.target}</p>
                 <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">{p.desc}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Revenue Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-black italic">3 Pilar Pendapatan (Revenue)</h3>
            <div className="space-y-6">
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl">🏦</div>
                  <div>
                     <h5 className="font-bold">Spread Jasa Pinjaman (5-8%)</h5>
                     <p className="text-xs text-indigo-200 mt-1">Selisih bunga antara pinjaman dan simpanan wajib yang dikelola 100% secara digital.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl">💻</div>
                  <div>
                     <h5 className="font-bold">Lisensi SaaS Koperasi</h5>
                     <p className="text-xs text-indigo-200 mt-1">Menjual akses teknologi KoperatifAI ke ribuan koperasi lain yang masih manual.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl">💸</div>
                  <div>
                     <h5 className="font-bold">Transaction Fees (Micro-payments)</h5>
                     <p className="text-xs text-indigo-200 mt-1">Biaya admin sangat kecil (Rp 500 - 1.000) per transaksi yang menjadi volume raksasa saat anggota mencapai jutaan.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center space-y-8">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">"The Social Unicorn Formula"</h3>
               <p className="text-slate-500 text-sm italic">"Valuasi kita tinggi karena kita adalah solusi pengganti Pinjol."</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                  <p className="text-3xl font-black text-indigo-600">80%</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Lower Overhead</p>
               </div>
               <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                  <p className="text-3xl font-black text-emerald-600">5x</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Faster Growth</p>
               </div>
            </div>
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center italic text-sm text-emerald-800 font-medium">
               "Saat koperasi manual butuh 20 orang untuk mengelola 1.000 anggota, kita hanya butuh 1 orang dan 1 asisten AI."
            </div>
         </div>
      </div>

      {/* Founder's Wealth Strategy */}
      <div className="p-12 bg-emerald-600 border border-emerald-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">👔</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Bekerja Untuk Rakyat, Dihargai Oleh Dunia."</h4>
         <p className="text-emerald-100 max-w-2xl text-lg leading-relaxed">
            Menjadi jutawan melalui KoperatifAI adalah hasil sampingan dari misi menyelamatkan rakyat. Investor global sangat menyukai startup yang memiliki **Social Impact** dan **Unit Economics** yang sehat seperti kita.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-white text-emerald-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl">Buka Pitch Deck Founder</button>
         </div>
      </div>
    </div>
  );
};

export default MillionDollarRoadmap;
