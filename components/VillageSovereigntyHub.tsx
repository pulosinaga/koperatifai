import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../contexts/AppContext.tsx';

const impactData = [
  { month: 'Bln 1', rescued: 5, savings: 2000000 },
  { month: 'Bln 2', rescued: 12, savings: 5500000 },
  { month: 'Bln 3', rescued: 28, savings: 12800000 },
  { month: 'Bln 4', rescued: 45, savings: 24500000 },
];

const VillageSovereigntyHub: React.FC = () => {
  const { user } = useAppContext();
  const [activeTab, setActiveTab] = useState<'ID' | 'IMPACT'>('ID');

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">Kedaulatan Desa Hub.</h2>
        <p className="text-slate-500 font-medium">Identitas resmi dan bukti nyata pengabdian Anda bagi masyarakat desa.</p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center">
         <div className="bg-white p-1.5 rounded-3xl border border-slate-100 shadow-sm inline-flex">
            <button 
              onClick={() => setActiveTab('ID')}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'ID' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
            >
               🪪 ID Card Duta
            </button>
            <button 
              onClick={() => setActiveTab('IMPACT')}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'IMPACT' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
            >
               🌱 Dampak Rakyat
            </button>
         </div>
      </div>

      {activeTab === 'ID' ? (
         <div className="flex flex-col items-center py-10 animate-in zoom-in duration-500">
            {/* Front of ID Card */}
            <div className="w-full max-w-sm aspect-[1.6/1] bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-900 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden border border-white/20 group">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
               
               <div className="relative h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <div>
                        <h3 className="text-white font-black text-xl italic tracking-tighter">KoperatifAI</h3>
                        <p className="text-indigo-200 text-[7px] font-black uppercase tracking-[0.3em]">Ambassador of Sovereignty</p>
                     </div>
                     <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center text-white font-black">◈</div>
                  </div>

                  <div className="flex gap-4 items-center">
                     <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-2xl border-2 border-indigo-400 overflow-hidden relative">
                        👤
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500"></div>
                     </div>
                     <div>
                        <p className="text-white font-black text-lg italic">{user?.name || 'NAMA DUTA'}</p>
                        <p className="text-indigo-200 text-[9px] font-bold uppercase tracking-widest">ID: {user?.memberId || 'D-000-001'}</p>
                        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                           <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                           <span className="text-[7px] font-black text-emerald-300 uppercase">OFFICIALLY AUTHORIZED</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-white/10 pt-4">
                     <div>
                        <p className="text-[7px] font-black text-indigo-300 uppercase">Wilayah Tugas</p>
                        <p className="text-xs font-bold text-white uppercase italic">Pasirhayo, Cianjur</p>
                     </div>
                     <div className="text-right">
                        <div className="w-12 h-12 bg-white p-1 rounded-lg">
                           <div className="w-full h-full bg-slate-900 rounded flex items-center justify-center text-white text-[5px] font-bold leading-none text-center">SCAN TO<br/>VERIFY</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-widest italic">Tunjukkan kartu ini saat berhadapan dengan Tokoh Masyarakat atau Pejabat Desa.</p>
         </div>
      ) : (
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in slide-in-from-bottom duration-500">
            {/* Stats Breakdown */}
            <div className="lg:col-span-1 space-y-6">
               <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
                  <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest">Village Vital Signs</h3>
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-black uppercase">
                           <span className="text-slate-400">Rakyat Terbebas Pinjol</span>
                           <span className="text-emerald-600">45 Orang</span>
                        </div>
                        <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 shadow-inner">
                           <div className="h-full bg-emerald-500 animate-pulse" style={{ width: '75%' }}></div>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-black uppercase">
                           <span className="text-slate-400">Modal Desa Terselamatkan</span>
                           <span className="text-indigo-600">Rp 124.5 Juta</span>
                        </div>
                        <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 shadow-inner">
                           <div className="h-full bg-indigo-600" style={{ width: '60%' }}></div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-slate-900 p-8 rounded-[3rem] text-white space-y-4">
                  <div className="text-4xl">🕊️</div>
                  <h4 className="text-xl font-black italic text-emerald-400">Wealth Re-routing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    "Setiap rupiah angsuran anggota Anda hari ini, tidak lagi membiayai apartemen mewah bos pinjol, tapi kembali membiayai anak sekolah di desa kita."
                  </p>
               </div>
            </div>

            {/* Growth Graph */}
            <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col">
               <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black text-slate-800 italic">Pertumbuhan Kedaulatan Desa</h3>
                  <div className="flex gap-4">
                     <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="text-[9px] font-black uppercase text-slate-400">Penyelamatan Rakyat</span>
                     </div>
                  </div>
               </div>
               <div className="flex-1 min-h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={impactData}>
                        <defs>
                           <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                        <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                        <Area type="monotone" dataKey="rescued" stroke="#10b981" strokeWidth={5} fillOpacity={1} fill="url(#colorImpact)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
               <div className="p-6 bg-indigo-900 rounded-3xl text-white text-center">
                  <p className="text-[10px] font-black uppercase text-indigo-300">Estimasi Tambahan SHU Wilayah</p>
                  <p className="text-2xl font-black text-emerald-400">Rp 4.250.000 <span className="text-xs text-white opacity-50">/ Akhir Tahun</span></p>
               </div>
            </div>
         </div>
      )}

      {/* Psychology Tip */}
      <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col md:flex-row items-center gap-10 shadow-inner">
         <div className="text-6xl animate-bounce">🏛️</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-bold text-indigo-900 italic">Prinsip "Kehormatan Desa":</h4>
            <p className="text-indigo-700/70 text-sm leading-relaxed">
               "Saat Anda menunjukkan Dashboard Dampak ini ke Kepala Desa, Anda sedang membuktikan bahwa KoperatifAI bekerja nyata membantu program desa. Ini akan mempermudah Anda mendapatkan izin penggunaan balai desa untuk edukasi massa."
            </p>
         </div>
      </div>
    </div>
  );
};

export default VillageSovereigntyHub;