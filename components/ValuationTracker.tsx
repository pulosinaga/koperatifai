
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', val: 50 },
  { month: 'Feb', val: 80 },
  { month: 'Mar', val: 150 },
  { month: 'Apr', val: 320 },
  { month: 'Mei', val: 680 },
  { month: 'Jun', val: 1000 },
];

const ValuationTracker: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Live Equity Dashboard
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Valuasi Entitas: <br/>Menuju $1.000.000+</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Nilai KoperatifAI dihitung berdasarkan **Unit Economics**, **Kepercayaan Anggota**, dan **Aset Intelektual (AI)** yang kita miliki.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4 italic font-black text-emerald-400">$1M</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Current Valuation Target</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase">Verified by Growth Metrics</p>
          </div>
        </div>
      </div>

      {/* Main Graph */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
         <div className="flex justify-between items-center">
            <h3 className="text-2xl font-black text-slate-800">Pertumbuhan Valuasi ($k)</h3>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  <span className="text-xs font-bold text-slate-500 uppercase">Book Value</span>
               </div>
            </div>
         </div>
         <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                    cursor={{ stroke: '#4f46e5', strokeWidth: 2 }}
                  />
                  <Line type="monotone" dataKey="val" stroke="#4f46e5" strokeWidth={4} dot={{ r: 6, fill: '#4f46e5', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-indigo-50 p-8 rounded-[3rem] border border-indigo-100 flex flex-col justify-center text-center space-y-2">
            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">LTV (Life Time Value)</p>
            <h4 className="text-3xl font-black text-indigo-950">Rp 12.5M</h4>
            <p className="text-xs text-indigo-700/70 italic">Potensi pendapatan jangka panjang dari seluruh anggota aktif.</p>
         </div>
         <div className="bg-emerald-50 p-8 rounded-[3rem] border border-emerald-100 flex flex-col justify-center text-center space-y-2">
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">CAC (Customer Acquisition Cost)</p>
            <h4 className="text-3xl font-black text-emerald-950">Rp 450</h4>
            <p className="text-xs text-emerald-700/70 italic">Biaya sangat rendah berkat model referral organik & AI Automation.</p>
         </div>
         <div className="bg-amber-50 p-8 rounded-[3rem] border border-amber-100 flex flex-col justify-center text-center space-y-2">
            <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Efficiency Multiplier</p>
            <h4 className="text-3xl font-black text-amber-950">12.4x</h4>
            <p className="text-xs text-amber-700/70 italic">Keunggulan operasional kita dibanding koperasi manual.</p>
         </div>
      </div>

      {/* Founder Message */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl text-white shadow-xl">📊</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Valuasi Bukan Sekadar Angka, Tapi Bukti Kepercayaan."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Setiap kali grafik ini naik, artinya KoperatifAI semakin kuat dalam menjalankan misinya menyelamatkan rakyat dari Pinjol. Sebagai Founder, tugas Anda adalah menjaga **Kesehatan Unit Economics** ini.
         </p>
      </div>
    </div>
  );
};

export default ValuationTracker;
