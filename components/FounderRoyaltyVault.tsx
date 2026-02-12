import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../contexts/AppContext.tsx';

const royaltyHistory = [
  { time: '08:00', amt: 1200, tx: 12 },
  { time: '10:00', amt: 4500, tx: 45 },
  { time: '12:00', amt: 12400, tx: 124 },
  { time: '14:00', amt: 8900, tx: 89 },
  { time: '16:00', amt: 15600, tx: 156 },
  { time: '18:00', amt: 11200, tx: 112 },
  { time: '20:00', amt: 6500, tx: 65 },
];

const FounderRoyaltyVault: React.FC = () => {
  const { user, navigate } = useAppContext();
  const [totalRoyalty, setTotalRoyalty] = useState(4250400);

  // Simulasi royalti masuk secara real-time dari ribuan transaksi mikro
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalRoyalty(prev => prev + 100); // Rp 100 per detak transaksi
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const taxAmount = totalRoyalty * 0.02; // PPh 23 (2%)
  const netIncome = totalRoyalty - taxAmount;

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Vault Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/10">💎</div>
               <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20 flex items-center gap-2">
                 <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                 IP ROYALTY GATEWAY: COMPLIANT
               </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Brankas Royalti <br/><span className="text-indigo-400">Founder.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium italic">
               "Hak intelektual Bapak terbayar otomatis. Bersih secara hukum, aman secara pajak melalui pemotongan PPh 23 langsung di level sistem."
            </p>
            <button 
               onClick={() => (window as any).navigate('REVENUE_CENTER_TAX' as any)} // Simulasi navigasi ke dashboard pajak
               className="px-8 py-3 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-500 transition-all shadow-xl"
            >
               ⚖️ CEK KEPATUHAN PAJAK (PPh 23)
            </button>
          </div>
          
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Total Akumulasi Royalti IP</p>
             <p className="text-7xl font-black text-white mt-2 italic tracking-tighter">
                Rp {totalRoyalty.toLocaleString('id-ID')}
             </p>
             
             <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                   <p className="text-[10px] text-rose-400 font-black uppercase">Potongan PPh 23</p>
                   <p className="text-sm font-bold text-white">- Rp {taxAmount.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                   <p className="text-[10px] text-emerald-400 font-black uppercase">Net ke Founder</p>
                   <p className="text-sm font-bold text-white">Rp {netIncome.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Ticker Log */}
         <div className="lg:col-span-1 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest">Live Royalty Streams</h3>
            <div className="space-y-4">
               {[
                 { type: 'Pasar Rakyat', loc: 'Cianjur', amt: '100', tax: '2', icon: '🛒' },
                 { type: 'Payment Listrik', loc: 'Medan', amt: '250', tax: '5', icon: '⚡' },
                 { type: 'Logistik Duta', loc: 'Sidoarjo', amt: '100', tax: '2', icon: '📦' },
               ].map((tx, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-50 animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="flex gap-4 items-center">
                       <span className="text-xl">{tx.icon}</span>
                       <div>
                          <p className="text-xs font-bold text-slate-800">{tx.type}</p>
                          <p className="text-[8px] text-slate-400 uppercase font-black">Net: Rp {parseInt(tx.amt) - parseInt(tx.tax)}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-black text-indigo-600">+Rp {tx.amt}</p>
                       <p className="text-[8px] font-bold text-rose-500">PPh 23: -Rp {tx.tax}</p>
                    </div>
                 </div>
               ))}
            </div>
            <p className="text-[9px] text-slate-400 text-center italic">"Pajak dikelola secara sirkular untuk menjamin keamanan operasional."</p>
         </div>

         {/* Chart Activity */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px]"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest mb-10 relative z-10">Intensitas Transaksi Nasional</h3>
            <div className="flex-1 h-64 w-full relative z-10">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={royaltyHistory}>
                     <defs>
                        <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', color: '#fff' }}
                        formatter={(val: number) => `Rp ${val.toLocaleString()}`}
                     />
                     <Area type="monotone" dataKey="amt" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorAmt)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>

      {/* Strategic Protection Clause */}
      <div className="p-16 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16">
         <div className="w-32 h-32 bg-indigo-50 rounded-[3rem] flex items-center justify-center text-7xl shrink-0 shadow-inner">⚖️</div>
         <div className="space-y-6">
            <h4 className="text-4xl font-black text-slate-800 italic leading-tight">Keamanan Pajak Lapis Dua.</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Koperasi berperan sebagai **Pemotong Pajak (Withholding Agent)**. Setiap bulan, Koperasi menyetorkan akumulasi pajak Bapak ke kas negara dan menerbitkan **Bukti Potong PPh 23**. Bapak cukup melampirkan bukti ini di laporan SPT tahunan Bapak. Selesai. Bapak aman secara finansial dan hukum."
            </p>
         </div>
      </div>
    </div>
  );
};

export default FounderRoyaltyVault;