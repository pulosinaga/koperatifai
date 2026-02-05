
import React, { useState } from 'react';

const LoanReadiness: React.FC = () => {
  const [daysRemaining, setDaysRemaining] = useState(42); // Standard wait is 90 days, user has 42 left
  const [readinessScore, setReadinessScore] = useState(65);
  const [activeBoosters, setActiveBoosters] = useState<string[]>(['Vouching Complete']);

  const boosters = [
    { id: 'edu', title: 'Smart Education', desc: 'Selesaikan 3 Modul Keuangan.', boost: '-15 Hari', icon: '🎓', color: 'text-indigo-600 bg-indigo-50' },
    { id: 'referral', title: 'Ajak 3 Teman', desc: 'Bangun jaringan solidaritas.', boost: '-10 Hari', icon: '🤝', color: 'text-emerald-600 bg-emerald-50' },
    { id: 'saving', title: 'Nabung Harian', desc: 'Setoran Sukarela 7 hari beruntun.', boost: '-7 Hari', icon: '🪙', color: 'text-amber-600 bg-amber-50' },
  ];

  const applyBooster = (id: string, days: number) => {
    if (activeBoosters.includes(id)) return;
    setDaysRemaining(prev => Math.max(prev - days, 0));
    setReadinessScore(prev => Math.min(prev + 10, 100));
    setActiveBoosters(prev => [...prev, id]);
  };

  const tiers = [
    { label: 'Mikro Darurat', limit: 'Rp 2jt', time: '1 Bln', icon: '🚨' },
    { label: 'Modal Usaha', limit: 'Rp 10jt', time: '3 Bln', icon: '🚜' },
    { label: 'Ekspansi UMKM', limit: 'Rp 50jt', time: '6 Bln', icon: '🏢' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Readiness Hero */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Loan Maturity Engine
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Kapan Saya Bisa Pinjam? <br/>Kendali Ada di Tangan Anda.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Kami tidak menggunakan sistem "satu ukuran untuk semua". Semakin aktif Anda berkontribusi, semakin cepat AI membuka akses permodalan Anda.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-indigo-500/20 animate-pulse"></div>
             <div className="relative z-10">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Sisa Waktu Tunggu</p>
                <p className="text-6xl font-black text-white mt-2 italic">{daysRemaining} <span className="text-xl">Hari</span></p>
                <div className="mt-6 h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-emerald-500 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                    style={{ width: `${readinessScore}%` }}
                   ></div>
                </div>
                <p className="text-[9px] text-slate-500 mt-4 uppercase font-bold tracking-widest">Readiness Score: {readinessScore}%</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Acceleration Section */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">Percepat Waktu Tunggu (Booster)</h3>
               <p className="text-sm text-slate-500">Lakukan aksi ini untuk membuktikan integritas Anda kepada AI.</p>
            </div>
            
            <div className="space-y-4">
               {boosters.map((b) => (
                 <button 
                  key={b.id}
                  onClick={() => applyBooster(b.id, parseInt(b.boost.replace(/\D/g, '')))}
                  disabled={activeBoosters.includes(b.id)}
                  className={`w-full p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                    activeBoosters.includes(b.id) ? 'bg-slate-50 border-slate-100 opacity-50 grayscale' : 'bg-white border-slate-50 hover:border-indigo-600 hover:shadow-xl'
                  }`}
                 >
                    <div className="flex gap-4 items-center">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${b.color}`}>{b.icon}</div>
                       <div className="text-left">
                          <h4 className="font-bold text-slate-800">{b.title}</h4>
                          <p className="text-[10px] text-slate-400 font-black uppercase">{b.desc}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className={`font-black text-sm ${activeBoosters.includes(b.id) ? 'text-slate-400' : 'text-indigo-600'}`}>
                          {activeBoosters.includes(b.id) ? 'Aktif' : b.boost}
                       </p>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* Tier Evolution */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col justify-center space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 mb-2 uppercase tracking-widest italic relative z-10">Evolusi Limit Pinjaman</h3>
            
            <div className="space-y-8 relative z-10">
               {tiers.map((t, i) => (
                 <div key={i} className="flex gap-6 items-center group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/10 ${i === 0 ? 'bg-indigo-600' : 'bg-white/5 opacity-50'}`}>
                       {t.icon}
                    </div>
                    <div className="flex-1">
                       <div className="flex justify-between items-center">
                          <h5 className="font-bold text-white text-sm">{t.label}</h5>
                          <span className="text-[10px] font-black text-indigo-400 uppercase">{t.time}</span>
                       </div>
                       <p className="text-2xl font-black text-white mt-1 italic">{t.limit}</p>
                       {i === 0 && <p className="text-[8px] text-emerald-400 font-bold uppercase mt-1">AVAILABLE SOON</p>}
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 italic text-[10px] text-slate-400 leading-relaxed relative z-10">
               "Limit di atas adalah estimasi awal. AI akan menaikkan limit secara otomatis jika riwayat angsuran Anda tepat waktu 100%."
            </div>
         </div>
      </div>

      {/* Logic Breakdown */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center text-5xl shrink-0">⏳</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic">Filosofi "Masa Tunggu" di KoperatifAI</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               Masa tunggu bukan hukuman, tapi **Masa Perkenalan**. Koperasi adalah soal rasa saling percaya. Kami butuh waktu untuk melihat karakter ekonomi Anda, dan Anda butuh waktu untuk memahami cara kerja modal solidaritas ini.
            </p>
         </div>
      </div>

      {/* Founder Call to Action */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🌍</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Sistem Yang Mendidik, Bukan Memanjakan."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Berbeda dengan Pinjol yang memberikan uang instan tapi bunga mencekik, KoperatifAI melatih Anda untuk **Berdaya Secara Bertahap**. Karena kekayaan yang instan akan habis secara instan, namun kekayaan yang dipupuk akan bertahan selamanya.
         </p>
         <div className="flex gap-4 z-10">
            <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Ajukan Percepatan (Skip Queue)</button>
            <button className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">Lihat Tabel Limit Lengkap</button>
         </div>
      </div>
    </div>
  );
};

export default LoanReadiness;
