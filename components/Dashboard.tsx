
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AppView } from '../types';

interface DashboardProps {
  setView: (view: AppView) => void;
}

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'Mei', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const COLORS = ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'];

const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Ringkasan Keuangan</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-slate-500">Selamat datang kembali, Budi.</p>
            <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100 uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Sistem Sinkron
            </span>
          </div>
        </div>
        <div className="bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="text-right border-r border-slate-100 pr-4">
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Anggota Aktif</p>
            <p className="text-sm font-black text-slate-800">1,248</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">SHU Berjalan</p>
            <p className="text-sm font-black text-emerald-600">Rp 2.450.000</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-all cursor-default">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tabungan Sukarela</p>
          <h3 className="text-2xl font-black mt-1 text-slate-900 group-hover:text-indigo-600 transition-colors">Rp 15.400.000</h3>
          <div className="mt-4 flex items-center gap-2 text-[10px] text-emerald-600 font-black">
            <span className="px-2 py-0.5 bg-emerald-50 rounded-lg border border-emerald-100 tracking-tighter">↑ 12%</span>
            <span className="uppercase opacity-70">vs bulan lalu</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Wajib & Pokok</p>
          <h3 className="text-2xl font-black mt-1 text-slate-900">Rp 4.200.000</h3>
          <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 font-bold">
            <span className="uppercase tracking-tight tracking-tighter">Aktif Sejak Jan 2024</span>
          </div>
        </div>
        <div className="bg-rose-50/50 p-6 rounded-3xl shadow-sm border border-rose-100/50 flex flex-col justify-between">
          <div>
            <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">Sisa Pinjaman</p>
            <h3 className="text-2xl font-black mt-1 text-rose-600">Rp 8.750.000</h3>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <button 
              onClick={() => setView(AppView.LOAN_HISTORY)}
              className="w-full py-2 bg-rose-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all shadow-md shadow-rose-200"
            >
              Lihat Riwayat
            </button>
          </div>
        </div>
        <div className="bg-indigo-600 p-6 rounded-3xl shadow-xl border border-indigo-700 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer" onClick={() => setView(AppView.LOAN_SIMULATOR)}>
          <div className="absolute -right-4 -bottom-4 text-white/10 text-8xl transition-transform group-hover:scale-125 duration-500">🧮</div>
          <div>
            <p className="text-xs text-indigo-200 font-bold uppercase tracking-wider">Butuh Modal?</p>
            <h3 className="text-xl font-black mt-1 leading-tight">Simulator Pinjaman</h3>
          </div>
          <div className="mt-4 relative z-10">
             <p className="text-[10px] text-indigo-100/80 mb-2">Simulasikan bunga rendah kami.</p>
             <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-lg border border-white/10 group-hover:bg-white/30 transition-colors">
                Mulai Kalkulasi →
             </div>
          </div>
        </div>
      </div>

      {/* Dynamic News Widget Integrated to Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-80 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">Pertumbuhan Tabungan</h4>
              <select className="text-[10px] font-bold bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none">
                <option>6 Bulan Terakhir</option>
                <option>1 Tahun Terakhir</option>
              </select>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fontWeight: 600, fill: '#94a3b8'}}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: '#f8fafc', radius: 4}}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={32}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight mb-6">Aktivitas Terbaru</h4>
            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { type: 'Setoran', desc: 'Tabungan Wajib - Juni', date: '02 Jun 2024', amount: 'Rp 100.000', color: 'text-emerald-600' },
                { type: 'Setoran', desc: 'Tabungan Sukarela', date: '28 Mei 2024', amount: 'Rp 500.000', color: 'text-emerald-600' },
                { type: 'Angsuran', desc: 'Pinjaman Renovasi #04', date: '15 Mei 2024', amount: '- Rp 1.250.000', color: 'text-rose-600' },
                { type: 'Bunga', desc: 'Kapitalisasi Bunga Mei', date: '01 Mei 2024', amount: 'Rp 45.300', color: 'text-indigo-600' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 group cursor-pointer hover:bg-slate-50 px-2 rounded-xl transition-all">
                  <div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{item.desc}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{item.date}</p>
                  </div>
                  <p className={`text-sm font-black ${item.color}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setView(AppView.TRANSACTIONS)}
              className="w-full mt-6 text-center text-xs text-indigo-600 font-black py-3 bg-indigo-50/50 rounded-2xl hover:bg-indigo-100 transition-all uppercase tracking-widest"
            >
              Lihat Semua Aktivitas
            </button>
          </div>
        </div>

        {/* Sidebar News Widget */}
        <div className="space-y-6">
           <div className="bg-indigo-950 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden flex flex-col h-full border-b-8 border-indigo-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              <div className="flex justify-between items-center mb-6">
                 <h4 className="font-black italic text-indigo-400 uppercase tracking-widest text-xs">Berita Terbaru</h4>
                 <button onClick={() => setView(AppView.NEWS_UPDATES)} className="text-[9px] font-bold text-slate-400 hover:text-white underline">Lihat Semua</button>
              </div>
              
              <div className="space-y-6">
                 {[
                   { t: 'Pencairan SHU Tahap 1', d: 'AI mulai mendistribusikan dividen bulan Juni ke 1.200+ anggota.', icon: '💰' },
                   { t: 'Pemberlakuan Bunga 0.9%', d: 'Suku bunga pinjaman mikro diturunkan khusus anggota Platinum.', icon: '📉' },
                   { t: 'Kemitraan kDMP Nasional', d: 'KoperatifAI resmi menjadi pilot project koperasi digital RI.', icon: '🇮🇩' }
                 ].map((news, i) => (
                   <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:bg-indigo-500 transition-all">{news.icon}</div>
                      <div>
                         <h5 className="text-sm font-bold leading-tight group-hover:text-indigo-300 transition-colors">{news.t}</h5>
                         <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">{news.d}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <p className="text-[10px] font-bold text-indigo-400 uppercase mb-2">Pencapaian Komunitas</p>
                    <p className="text-xl font-black">1 Juta Transaksi</p>
                    <p className="text-[9px] text-slate-500 mt-1">Berhasil tercapai hari ini!</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
