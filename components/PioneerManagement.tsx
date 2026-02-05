
import React, { useState } from 'react';

const PioneerManagement: React.FC = () => {
  const [selectedPioneer, setSelectedPioneer] = useState<number | null>(null);

  const pioneers = [
    { id: 1, name: 'Pak Slamet', business: 'Warung Kelontong', progress: 85, status: 'Healthy', days: 72 },
    { id: 2, name: 'Ibu Marni', business: 'Penjahit Rumahan', progress: 92, status: 'Healthy', days: 68 },
    { id: 3, name: 'Andi Saputra', business: 'Sol Sepatu', progress: 45, status: 'Caution', days: 45 },
    { id: 4, name: 'Pak RT Bambang', business: 'Budidaya Lele', progress: 78, status: 'Healthy', days: 60 },
  ];

  const pilotTimeline = [
    { day: '01', title: 'Onboarding & Setoran Awal', status: 'COMPLETED', icon: '📝' },
    { day: '30', title: 'Cair Pinjaman Mikro Pertama', status: 'COMPLETED', icon: '💸' },
    { day: '60', title: 'Evaluasi Usaha & Cashback Jasa', status: 'ACTIVE', icon: '📈' },
    { day: '90', title: 'Klaim SHU Pionir & Testimoni', status: 'PENDING', icon: '🎤' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Pioneer Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Pioneer Success Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Manajemen Kelompok Pionir: <br/>Kawal 10 Orang Penentu.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl font-medium">
              Jika 10 orang ini sukses dan bangga, seluruh desa akan mengikuti. Duta wajib memastikan mereka mendapatkan pelayanan 101%.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-center">
             <div className="text-6xl mb-4">🥇</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pilot Project Status</p>
             <p className="text-2xl font-black text-indigo-600 mt-1 italic">ACTIVE: DAY 62</p>
             <p className="text-[9px] text-slate-400 mt-2 uppercase">Village: Desa Sukatani, Jabar</p>
          </div>
        </div>
      </div>

      {/* Pioneer List & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-2xl font-black text-slate-800 italic">Daftar 10 Pionir Pertama</h3>
               <div className="space-y-4">
                  {pioneers.map((p) => (
                    <button 
                      key={p.id}
                      onClick={() => setSelectedPioneer(p.id)}
                      className={`w-full p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                        selectedPioneer === p.id ? 'bg-indigo-50 border-indigo-600 shadow-lg scale-102' : 'bg-white border-slate-50 hover:border-indigo-100'
                      }`}
                    >
                       <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-xl">👤</div>
                          <div className="text-left">
                             <h4 className="font-bold text-slate-800">{p.name}</h4>
                             <p className="text-[10px] text-slate-400 uppercase font-black">{p.business}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                             <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'Healthy' ? 'bg-emerald-500' : 'bg-rose-500'} animate-pulse`}></span>
                             <p className={`text-[10px] font-black uppercase ${p.status === 'Healthy' ? 'text-emerald-600' : 'text-rose-600'}`}>{p.status}</p>
                          </div>
                          <div className="h-1 w-24 bg-slate-100 rounded-full overflow-hidden">
                             <div className={`h-full ${p.status === 'Healthy' ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: `${p.progress}%` }}></div>
                          </div>
                       </div>
                    </button>
                  ))}
               </div>
            </div>

            {/* Selected Pioneer Detail */}
            {selectedPioneer && (
               <div className="bg-slate-900 rounded-[4rem] p-10 text-white space-y-8 animate-in slide-in-from-bottom duration-300">
                  <div className="flex justify-between items-start">
                     <div>
                        <h3 className="text-3xl font-black italic">Misi Pendampingan: {pioneers.find(x => x.id === selectedPioneer)?.name}</h3>
                        <p className="text-slate-400 mt-2">Duta wajib melakukan visit mingguan untuk menjaga skor integritas.</p>
                     </div>
                     <button className="text-slate-500 hover:text-white" onClick={() => setSelectedPioneer(null)}>✕ Close</button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Tugas Duta Hari Ini:</p>
                        <ul className="space-y-4">
                           <li className="flex gap-3 text-sm">
                              <span className="text-emerald-400">✅</span>
                              <span>Verifikasi stok {pioneers.find(x => x.id === selectedPioneer)?.business}.</span>
                           </li>
                           <li className="flex gap-3 text-sm">
                              <span className="text-emerald-400">✅</span>
                              <span>Bantu ambil testimoni video pendek.</span>
                           </li>
                           <li className="flex gap-3 text-sm">
                              <span className="text-indigo-400">⏳</span>
                              <span>Review pembayaran angsuran minggu depan.</span>
                           </li>
                        </ul>
                     </div>
                     <div className="flex flex-col justify-center space-y-4">
                        <button className="w-full py-4 bg-indigo-600 rounded-2xl font-black uppercase text-xs shadow-xl">Input Laporan Visit AI</button>
                        <button className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl font-black uppercase text-xs">Ajak Belanja di Marketplace</button>
                     </div>
                  </div>
               </div>
            )}
         </div>

         {/* Pilot Timeline Sidebar */}
         <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-xl font-black text-slate-800 italic">90-Day Success Path</h3>
               <div className="space-y-8 relative">
                  <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-50"></div>
                  {pilotTimeline.map((step, i) => (
                    <div key={i} className="relative flex gap-6 items-start">
                       <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm z-10 shadow-sm border ${
                         step.status === 'COMPLETED' ? 'bg-emerald-500 text-white border-emerald-600' : 
                         step.status === 'ACTIVE' ? 'bg-indigo-600 text-white border-indigo-700 animate-pulse' : 
                         'bg-slate-100 text-slate-400 border-slate-200'
                       }`}>
                          {step.icon}
                       </div>
                       <div>
                          <p className={`text-[10px] font-black uppercase ${
                            step.status === 'COMPLETED' ? 'text-emerald-600' : 
                            step.status === 'ACTIVE' ? 'text-indigo-600' : 'text-slate-400'
                          }`}>Day {step.day}</p>
                          <h4 className={`text-sm font-bold leading-tight ${step.status === 'PENDING' ? 'text-slate-400' : 'text-slate-800'}`}>{step.title}</h4>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-4">
               <div className="text-4xl text-center">🎤</div>
               <h4 className="font-bold text-indigo-900 text-center">"Suara Pionir Adalah Iklan Terbaik."</h4>
               <p className="text-xs text-indigo-700/70 leading-relaxed text-center italic">
                  "Satu kata jujur dari Pak RT di depan warganya jauh lebih kuat daripada poster tercanggih kita."
               </p>
               <button className="w-full py-3 bg-white text-indigo-600 rounded-2xl font-black uppercase text-[10px] border border-indigo-200 shadow-sm">Generate Poster Testimoni</button>
            </div>
         </div>
      </div>

      {/* Strategy Motivation Section */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12 text-white relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
         <div className="text-7xl shrink-0 animate-bounce">🛡️</div>
         <div className="flex-1 space-y-4 relative z-10">
            <h4 className="text-3xl font-black italic">Satu Gagal, Semua Gagal.</h4>
            <p className="text-slate-400 text-lg leading-relaxed">
               Jangan pernah membiarkan Pionir merasa ditinggalkan. Jika ada 1 orang dari 10 orang ini yang macet bayar, AI akan segera memberi notifikasi kepada Duta untuk melakukan **Musyawarah Keluarga Digital** sebelum saldo ditarik dari cadangan.
            </p>
            <div className="flex gap-4 pt-4">
               <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-indigo-700 transition-all">Lihat Panduan Mediasi AI</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PioneerManagement;
