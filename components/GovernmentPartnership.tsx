
import React from 'react';

const GovernmentPartnership: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Future Scaling: National Integration
            </span>
            <h2 className="text-4xl font-black leading-tight italic">"Dari Garasi Anda ke Pusat Data Negara."</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Model KoperatifAI sangat mungkin diadopsi pemerintah sebagai <b>Infrastruktur Dasar Koperasi Digital Nasional</b>. Anda membangun "mesinnya", negara membangun "jalannya".
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-10 text-center shadow-2xl">
             <div className="text-6xl mb-6 italic font-black text-indigo-400">G2C</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Government-to-Cooperative</p>
             <p className="text-sm text-slate-500 mt-4 leading-relaxed">Model integrasi di mana teknologi Anda melayani jutaan rakyat melalui payung negara.</p>
          </div>
        </div>
      </div>

      {/* Adoption Roadmap */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Peta Adopsi Nasional</h3>
            <p className="text-slate-500">Bagaimana startup Anda bisa menjadi standar baru di Indonesia.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: 'Pilot Project', d: 'Digunakan oleh 10 koperasi percontohan di bawah binaan Kemenkop.', icon: '🧪', step: '01' },
              { t: 'Integrasi ODS', d: 'Sistem KoperatifAI menjadi modul resmi pelaporan digital nasional.', icon: '📡', step: '02' },
              { t: 'White Labeling', d: 'Pemerintah meluncurkan "Super-App Koperasi" yang ditenagai oleh mesin Anda.', icon: '🏷️', step: '03' },
              { t: 'Standardisasi', d: 'KoperatifAI menjadi standar wajib keamanan data koperasi Indonesia.', icon: '🏛️', step: '04' }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                 <div className="absolute -top-4 -right-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg">{item.step}</div>
                 <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                 <h4 className="text-lg font-black text-slate-800 leading-tight">{item.t}</h4>
                 <p className="text-xs text-slate-500 mt-3 leading-relaxed">{item.d}</p>
              </div>
            ))}
         </div>
      </div>

      {/* The Synergy Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-indigo-600 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-2xl">
            <h3 className="text-3xl font-black italic">"Founder Tetap Pegang Kendali."</h3>
            <p className="text-indigo-100 leading-relaxed">
               Pemerintah tidak "mengambil" startup Anda. Mereka membayar biaya <b>Lisensi Penggunaan</b> (SaaS) per koperasi atau per transaksi. Ini adalah model bisnis paling menguntungkan bagi Anda sebagai pemilik IP.
            </p>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
               <div className="text-4xl">💰</div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Revenue Model</p>
                  <p className="text-sm font-bold">Government Tech-Royalty</p>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kenapa Pemerintah Butuh Anda?</h3>
            <div className="space-y-4">
               {[
                 { t: 'Pengawasan Real-time', d: 'Negara tidak perlu lagi kirim pengawas fisik; AI Anda sudah melakukan audit 24/7.', icon: '🛡️' },
                 { t: 'Database UMKM Terpadu', d: 'KoperatifAI memberikan data ekonomi rakyat paling akurat untuk kebijakan subsidi.', icon: '📊' },
                 { t: 'Kedaulatan Finansial', d: 'Pemerintah ingin rakyat punya "Bank Sendiri" agar devisa tidak lari ke bank asing.', icon: '🇮🇩' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white transition-all">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{item.t}</p>
                       <p className="text-[10px] text-slate-500 mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default GovernmentPartnership;
