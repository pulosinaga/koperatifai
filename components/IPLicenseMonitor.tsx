
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '08:00', val: 45000 },
  { time: '10:00', val: 120000 },
  { time: '12:00', val: 245000 },
  { time: '14:00', val: 180000 },
  { time: '16:00', val: 450000 },
  { time: '18:00', val: 320000 },
  { time: '20:00', val: 150000 },
];

const IPLicenseMonitor: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* IP Hero */}
      <div className="bg-slate-950 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Intellectual Property Royalty Engine
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Monitoring Lisensi IP. <br/>Aset Tak Berwujud, Pendapatan Nyata.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Setiap penggunaan teknologi KoperatifAI oleh Koperasi merupakan royalti bagi entitas teknologi Anda. Uang bekerja untuk Anda melalui lisensi.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🔑</div>
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Total Royalti (Harian)</p>
             <p className="text-4xl font-black text-white mt-1 italic">Rp 1.450.000</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase">Accumulated from 12.4k Transactions</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic">Arus Pendapatan Lisensi (Real-time)</h3>
         <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data}>
                  <defs>
                     <linearGradient id="colorRoyalty" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                     </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                  <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorRoyalty)" />
               </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-4">
            <div className="text-4xl">🧾</div>
            <h4 className="font-black text-lg text-slate-800 italic">Beban Operasional: Rp 0</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Royalti adalah pendapatan bersih setelah dikurangi iuran operasional server yang sangat efisien."</p>
         </div>
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-4">
            <div className="text-4xl">🌍</div>
            <h4 className="font-black text-lg text-slate-800 italic">Skala Global</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"IP ini bisa dilisensikan ke negara lain (Vietnam/Filipina) untuk pendapatan Dollar."</p>
         </div>
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-4">
            <div className="text-4xl">⚖️</div>
            <h4 className="font-black text-lg text-slate-800 italic">Kontrak Terkunci</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Hak royalti terikat secara hukum pada Akta Notaris Pendirian Koperasi sebagai biaya sewa sistem."</p>
         </div>
      </div>
    </div>
  );
};

export default IPLicenseMonitor;
