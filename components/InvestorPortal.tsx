
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const growthData = [
  { month: 'Jan', val: 50, impact: 20 },
  { month: 'Feb', val: 120, impact: 45 },
  { month: 'Mar', val: 300, impact: 110 },
  { month: 'Apr', val: 650, impact: 280 },
  { month: 'Mei', val: 850, impact: 420 },
  { month: 'Jun', val: 1050, impact: 580 },
];

const economicMetrics = [
  { name: 'CAC', value: 450, label: 'Cost to Acquire (Rp)', color: '#6366f1' },
  { name: 'LTV', value: 2500000, label: 'Life Time Value (Rp)', color: '#10b981' },
  { name: 'Efficiency', value: 92, label: 'OpEx Savings (%)', color: '#f59e0b' },
];

const InvestorPortal: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Investor Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Institutional & Partner Portal
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Membangun Masa Depan <br/>Ekonomi Sirkular Indonesia.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              KoperatifAI menggabungkan **Efisiensi Fintech** dengan **Solidaritas Koperasi**. Kami bukan sekadar aplikasi, kami adalah infrastruktur pemerataan kekayaan.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Est. Market Valuation</p>
             <p className="text-5xl font-black text-emerald-400 mt-2">$1.05M</p>
             <div className="mt-6 flex justify-center gap-2">
                <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase">Post-Revenue</span>
                <span className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-[10px] font-black uppercase">Series Seed</span>
             </div>
          </div>
        </div>
      </div>

      {/* Key Investment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SROI (Social ROI)</p>
            <h4 className="text-3xl font-black text-indigo-600">Rp 12.4 : 1</h4>
            <p className="text-xs text-slate-500">Setiap Rp 1 investasi menghasilkan Rp 12.4 penghematan bunga bagi rakyat.</p>
         </div>
         <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly GTV Growth</p>
            <h4 className="text-3xl font-black text-emerald-600">+28.5%</h4>
            <p className="text-xs text-slate-500">Pertumbuhan volume transaksi di marketplace internal koperasi.</p>
         </div>
         <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Retention (D30)</p>
            <h4 className="text-3xl font-black text-amber-500">94.2%</h4>
            <p className="text-xs text-slate-500">Loyalitas ekstrem karena status anggota sebagai Pemilik (Owner).</p>
         </div>
      </div>

      {/* Growth Visualization */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-black text-slate-800 italic">Projected Scalability ($k)</h3>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Valuation</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Social Impact</span>
               </div>
            </div>
         </div>
         <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={growthData}>
                  <defs>
                     <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                     </linearGradient>
                     <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                     </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                  <YAxis hide />
                  <Tooltip 
                     contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorVal)" />
                  <Area type="monotone" dataKey="impact" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorImpact)" />
               </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>

      {/* Unit Economics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8">
            <h3 className="text-2xl font-black italic text-indigo-400">Unit Economics Analysis</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
               Mengapa model koperasi digital jauh lebih efisien daripada Bank Legacy? Kami memangkas biaya gedung dan birokrasi, mengalihkan 90% margin ke pertumbuhan ekosistem.
            </p>
            <div className="space-y-4">
               {economicMetrics.map((m, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                       <span>{m.label}</span>
                       <span style={{ color: m.color }}>{m.value.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div 
                        className="h-full transition-all duration-1000" 
                        style={{ width: `${(m.value / (m.name === 'LTV' ? 5000000 : 100)) * 100}%`, backgroundColor: m.color }}
                       ></div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center space-y-8 shadow-sm">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">"The Moat" (Benteng Bisnis)</h3>
               <p className="text-slate-500 text-sm">Kekuatan yang tidak bisa ditiru oleh raksasa Fintech.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
               <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-4 items-start">
                  <span className="text-2xl">🤝</span>
                  <div>
                     <h5 className="font-bold text-indigo-900">Decentralized Trust</h5>
                     <p className="text-xs text-indigo-700/70">Vouching system kami menurunkan tingkat fraud hingga 0.2%, jauh di bawah rata-rata industri 2-3%.</p>
                  </div>
               </div>
               <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4 items-start">
                  <span className="text-2xl">🔄</span>
                  <div>
                     <h5 className="font-bold">Circular Multiplier</h5>
                     <p className="text-xs text-emerald-700/70">Setiap rupiah yang dipinjamkan berputar minimal 4x di dalam marketplace internal sebelum ditarik keluar.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Due Diligence Hub */}
      <div className="bg-indigo-600 rounded-[4rem] p-12 text-white flex flex-col items-center text-center space-y-8 shadow-xl">
         <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-5xl border border-white/20">📂</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Buka Kotak Transparansi Kami."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Pemerintah dan Calon Investor berhak melihat bagaimana algoritma AI kami menjaga amanah rakyat. Akses audit trail lengkap tersedia di bawah Protokol NDA.
         </p>
         <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all">Download Pitch Deck</button>
            <button className="px-10 py-4 bg-indigo-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all">Request Due Diligence Access</button>
         </div>
      </div>

      {/* Social Impact Disclaimer */}
      <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl grayscale opacity-30">🇮🇩</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-xl font-bold text-slate-800 italic leading-tight">Visi Kedaulatan Nasional</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
               "KoperatifAI bertujuan untuk menjadi <b>The World's Most Valuable Social Cooperative</b>. Kami membuktikan bahwa teknologi AI bisa digunakan untuk mempersempit jurang kaya-miskin, bukan memperlebarnya."
            </p>
         </div>
      </div>
    </div>
  );
};

export default InvestorPortal;
