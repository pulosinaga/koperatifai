
import React, { useState } from 'react';

const PromotionKit: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://koperatif.ai/join?ref=BUDI_UTAMA_2024";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const marketingAssets = [
    { title: 'Poster "Merdeka Pinjol"', icon: '🛡️', color: 'bg-rose-50 text-rose-600', type: 'WhatsApp Status' },
    { title: 'Kartu SHU 2024', icon: '💰', color: 'bg-emerald-50 text-emerald-600', type: 'Instagram Story' },
    { title: 'Visi KoperatifAI', icon: '🌐', color: 'bg-indigo-50 text-indigo-600', type: 'Feed Post' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-emerald-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Growth & Referral Machine
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Sebarkan Kebaikan, <br/>Panen Keuntungan.</h2>
            <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl">
              Setiap 1 orang yang Anda ajak bergabung adalah **1 langkah menuju kedaulatan ekonomi rakyat**. Dapatkan bonus SHU spesial untuk setiap anggota aktif baru.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-slate-800 text-center">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bonus Referral Anda</p>
             <p className="text-3xl font-black text-emerald-600 mt-1">Rp 450.000</p>
             <p className="text-[10px] text-slate-400 mt-2 uppercase">Total: 9 Anggota Baru</p>
             <button className="mt-6 w-full py-3 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-700 transition-all">Klaim Ke Tabungan</button>
          </div>
        </div>
      </div>

      {/* Referral Link Card */}
      <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic text-center">Link Undangan Pribadi Anda</h3>
         <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4 items-center bg-slate-50 p-4 rounded-[2.5rem] border border-slate-200">
            <code className="flex-1 text-sm font-mono text-indigo-600 px-4 py-2 bg-white rounded-xl border border-slate-100 overflow-hidden text-ellipsis whitespace-nowrap">
               {referralLink}
            </code>
            <button 
              onClick={handleCopy}
              className={`px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2 ${
                copied ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
              }`}
            >
               {copied ? '✅ Berhasil!' : '📋 Salin Link'}
            </button>
         </div>
         <p className="text-center text-xs text-slate-400 italic">
            "Kirimkan link ini ke grup WhatsApp keluarga, rekan kerja, atau komunitas pasar Anda."
         </p>
      </div>

      {/* Visual Marketing Assets */}
      <div className="space-y-8">
         <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-800 italic">Download Aset Promosi AI</h3>
            <p className="text-slate-500">Poster yang dipersonalisasi dengan nama dan reputasi Anda.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingAssets.map((asset, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all">
                 <div className={`h-40 ${asset.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500`}>
                    {asset.icon}
                 </div>
                 <div className="p-8 flex flex-col flex-1">
                    <h4 className="font-bold text-slate-800 text-lg">{asset.title}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase mt-1">{asset.type}</p>
                    <button className="mt-8 w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all">
                       Download & Bagikan
                    </button>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* The Impact Logic for Founders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-black italic text-emerald-400">Strategi Pertumbuhan Organik</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
               Di KoperatifAI, kita tidak membayar iklan di Google atau Facebook. Kita membayar **Anggota Kita Sendiri** sebagai bentuk apresiasi atas loyalitas mereka membangun komunitas.
            </p>
            <div className="space-y-4">
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-2xl">⚡</span>
                  <div>
                     <h5 className="font-bold">Viralitas Berbasis Kepercayaan</h5>
                     <p className="text-[10px] text-slate-500">Orang lebih percaya pada ajakan teman dekat daripada iklan TV.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-2xl">🔄</span>
                  <div>
                     <h5 className="font-bold">Siklus Modal Berkelanjutan</h5>
                     <p className="text-[10px] text-slate-500">Referral reward diambil dari efisiensi operasional AI yang sangat murah.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl mx-auto">📣</div>
            <h4 className="text-2xl font-black text-slate-800 italic">"Guerilla Marketing" Digital</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto italic">
               "Saat anggota membagikan sertifikat saham atau laporan SHU mereka, mereka sebenarnya sedang melakukan **Public Relation** gratis bagi koperasi Anda."
            </p>
            <div className="flex justify-center gap-4">
               <div className="bg-slate-50 px-4 py-2 rounded-xl text-[10px] font-black uppercase text-slate-400">CAC: Rp 50.000</div>
               <div className="bg-slate-50 px-4 py-2 rounded-xl text-[10px] font-black uppercase text-slate-400">LTV: Rp 2.500.000</div>
            </div>
         </div>
      </div>

      {/* Call to Action */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl">🚀</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Bantu Teman Anda Merdeka Finansial."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            KoperatifAI adalah milik kita bersama. Semakin banyak yang bergabung, semakin kuat daya tawar kita di hadapan raksasa keuangan dunia. Mulailah perjalanan promosi Anda hari ini.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl">Kirim Undangan Sekarang</button>
      </div>
    </div>
  );
};

export default PromotionKit;
