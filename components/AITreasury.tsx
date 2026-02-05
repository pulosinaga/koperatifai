
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const AITreasury: React.FC = () => {
  const allocation = [
    { name: 'Member Loans (70%)', value: 70, color: '#6366f1', desc: 'Dana produktif yang sedang dipinjam anggota.' },
    { name: 'Liquidity Buffer (15%)', value: 15, color: '#10b981', desc: 'Kas siap tarik untuk kebutuhan mendadak anggota.' },
    { name: 'Safe Reserves (10%)', value: 10, color: '#f59e0b', desc: 'Investasi di Sukuk/SBN untuk cadangan keamanan.' },
    { name: 'Operational (5%)', value: 5, color: '#94a3b8', desc: 'Biaya pengembangan IT & infrastruktur server.' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Treasury Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              AI Asset Management
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Treasury Pintar: <br/>Kekuatan Likuiditas Tanpa Batas.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              AI kami mengelola **Aliran Kas Kolektif** secara otomatis. Memastikan dana selalu tersedia saat Anda butuh, dan selalu bertumbuh saat Anda tidur.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 animate-pulse">💎</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Cooperatives Net Asset</p>
             <p className="text-4xl font-black text-white mt-1">Rp 12.420.000.000</p>
             <div className="mt-6 px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-black text-[10px] uppercase tracking-widest border border-emerald-500/20">
                Liquidity Status: OPTIMAL
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Allocation Chart */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 italic">Distribusi Portofolio AI</h3>
            <div className="flex-1 h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={allocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {allocation.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                     />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {allocation.map((item, i) => (
                 <div key={i} className="space-y-1">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                       <p className="text-[10px] font-black text-slate-500 uppercase">{item.name}</p>
                    </div>
                    <p className="text-[9px] text-slate-400 leading-tight italic">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Rebalancing Actions */}
         <div className="bg-slate-900 p-10 rounded-[4rem] shadow-xl space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-xl font-black text-indigo-400 uppercase tracking-widest italic">Live Rebalancing Log</h3>
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
            </div>
            
            <div className="space-y-4">
               {[
                 { action: 'Auto-Allocation', desc: 'Menambahkan Rp 50jt ke Dana Cadangan (Sukuk) karena likuiditas di atas 20%.', time: '10m ago', icon: '⚖️' },
                 { action: 'Yield Optimization', desc: 'Menaikkan bunga simpanan sukarela sebesar 0.1% karena surplus marketplace meningkat.', time: '2h ago', icon: '📈' },
                 { action: 'Risk Adjustment', desc: 'Menurunkan limit pinjaman untuk sektor "Ritel" sementara karena volatilitas pasar.', time: '5h ago', icon: '🛡️' },
                 { action: 'Dividen Preview', desc: 'Proyeksi SHU tahunan meningkat menjadi 12% p.a berdasarkan putaran modal saat ini.', time: 'Yesterday', icon: '💸' },
               ].map((log, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="text-2xl">{log.icon}</div>
                    <div className="flex-1">
                       <div className="flex justify-between items-center">
                          <p className="text-xs font-bold text-white">{log.action}</p>
                          <span className="text-[8px] text-slate-500 font-mono">{log.time}</span>
                       </div>
                       <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{log.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
               <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg">Lihat Analisis Mendalam</button>
            </div>
         </div>
      </div>

      {/* Philosophy of Resilience */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-center">
         <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-black text-slate-800">Kenapa KoperatifAI Tidak Bisa "Bangkrut"?</h3>
            <div className="space-y-4">
               <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                  <h5 className="font-bold text-indigo-900">1. Alokasi 15% Likuiditas</h5>
                  <p className="text-sm text-indigo-700/70 mt-1 leading-relaxed">
                     Sistem secara paksa menjaga 15% dana anggota dalam bentuk tunai/kas di bank. AI tidak akan mengizinkan pencairan pinjaman jika saldo ini tersentuh.
                  </p>
               </div>
               <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                  <h5 className="font-bold text-emerald-900">2. Diversifikasi Modal Kolektif</h5>
                  <p className="text-sm text-emerald-700/70 mt-1 leading-relaxed">
                     Uang tidak dipinjamkan ke 1 orang besar, tapi ke ribuan orang kecil. Jika 1 orang gagal bayar, sistem masih memiliki 999 orang lain yang membayar lancar.
                  </p>
               </div>
            </div>
         </div>
         <div className="w-full lg:w-80 aspect-square bg-slate-100 rounded-[3rem] flex flex-col items-center justify-center p-12 text-center space-y-4 border border-slate-200 shadow-inner">
            <div className="text-7xl">🏰</div>
            <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter">The Fort Knox of Community</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed italic">"Keamanan dana Anda adalah perintah tertinggi bagi AI kami."</p>
         </div>
      </div>

      {/* Final Call to Action */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🌍</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Uang Yang Berdaulat Adalah Uang Yang Terkelola."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            KoperatifAI memberikan transparansi penuh kepada Anda sebagai pemilik. Anda bisa memantau kesehatan aset kita setiap detik, langsung dari ponsel Anda.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Unduh Laporan Portofolio
         </button>
      </div>
    </div>
  );
};

export default AITreasury;
