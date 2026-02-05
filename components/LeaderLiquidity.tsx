
import React, { useState } from 'react';

const LeaderLiquidity: React.FC = () => {
  const [usage, setUsage] = useState(1500000); // 1.5jt used
  const [totalLimit] = useState(5000000); // 5jt trust limit
  
  const metrics = [
    { label: 'Trust Quota (Limit)', value: 'Rp 5.000.000', icon: '💎', desc: 'Diberikan AI berdasarkan integritas.' },
    { label: 'Pemakaian Aktif', value: `Rp ${usage.toLocaleString('id-ID')}`, icon: '📉', desc: 'Total dana tunai yang Anda pegang.' },
    { label: 'Sisa Plafon', value: `Rp ${(totalLimit - usage).toLocaleString('id-ID')}`, icon: '🛡️', desc: 'Kapasitas transfer yang tersisa.' },
  ];

  const usagePercent = (usage / totalLimit) * 100;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Liquidity Hero */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Zero-Deposit Remittance Model
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Likuiditas Tanpa Deposit: <br/>Modal Anda adalah Nama Baik.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl font-medium">
              Duta tidak perlu menyetor deposit uang di awal. AI memberikan <b>Plafon Transaksi</b> sebagai bentuk modal kepercayaan.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="w-32 h-32 relative mb-6">
                <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                   <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-100" strokeWidth="3" />
                   <circle cx="18" cy="18" r="16" fill="none" className="stroke-indigo-600" strokeWidth="3" strokeDasharray={`${usagePercent} 100`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-2xl font-black text-slate-800">{usagePercent.toFixed(0)}%</span>
                   <span className="text-[8px] font-black text-slate-400 uppercase">USED</span>
                </div>
             </div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sisa Plafon Transfer</p>
             <p className="text-2xl font-black text-indigo-900 mt-1 italic">Rp {(totalLimit - usage).toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
             <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">{m.icon}</div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</p>
             <h4 className="text-xl font-black text-slate-800 mt-1 italic">{m.value}</h4>
             <p className="text-[10px] text-slate-400 mt-4 leading-relaxed italic">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* How it works visualization */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Mekanisme "Plafon Kepercayaan"</h3>
            <p className="text-slate-500">Bagaimana Duta melayani transfer tanpa keluar modal pribadi.</p>
         </div>

         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center space-y-4">
               <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner border border-emerald-100">💵</div>
               <h5 className="font-bold text-slate-800 uppercase text-xs">1. Terima Tunai</h5>
               <p className="text-[10px] text-slate-500 italic">Anggota serahkan Rp 1jt tunai ke Duta untuk dikirim ke kota.</p>
            </div>
            <div className="text-slate-200 text-3xl hidden lg:block">→</div>
            <div className="flex-1 p-8 bg-slate-900 rounded-[3rem] text-white text-center space-y-4 shadow-2xl relative">
               <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mx-auto">☁️</div>
               <h5 className="font-bold uppercase text-xs text-indigo-300">2. AI Release Fund</h5>
               <p className="text-[10px] text-slate-400">Sistem memindahkan Rp 1jt saldo digital Koperasi ke rekening tujuan secara instan.</p>
            </div>
            <div className="text-slate-200 text-3xl hidden lg:block">→</div>
            <div className="flex-1 text-center space-y-4">
               <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner border border-indigo-100">⚖️</div>
               <h5 className="font-bold text-slate-800 uppercase text-xs">3. Rebalancing</h5>
               <p className="text-[10px] text-slate-500 italic">Duta memegang uang Rp 1jt tunai. Uang ini disetor ke bank sore hari untuk memulihkan plafon.</p>
            </div>
         </div>
      </div>

      {/* Rebalancing Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-xl">
            <h3 className="text-2xl font-black italic text-indigo-400">Strategi "Zero-Travel" Settlement</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
               Duta tidak perlu selalu ke bank untuk setor tunai jika ekosistem sirkular berjalan.
            </p>
            <div className="space-y-4">
               <div className="flex gap-4 items-start p-5 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-2xl">🔄</span>
                  <div>
                     <h5 className="font-bold text-emerald-400">Pencairan (Withdrawal)</h5>
                     <p className="text-xs text-slate-400">Jika ada anggota lain yang ingin Tarik Tunai Rp 1jt, Duta berikan uang tunai di tangan tadi. Plafon Duta kembali penuh otomatis tanpa harus ke ATM.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start p-5 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-2xl">🏪</span>
                  <div>
                     <h5 className="font-bold text-indigo-300">Belanja Merchant</h5>
                     <p className="text-xs text-slate-400">Uang tunai bisa digunakan untuk membayar stok barang anggota warung lain, menciptakan sirkulasi internal yang sehat.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center space-y-8">
            <div className="text-center space-y-2">
               <div className="text-5xl mb-4">🛡️</div>
               <h3 className="text-2xl font-black text-slate-800 italic">Risiko Dikelola AI</h3>
               <p className="text-slate-500 text-sm italic">"Apa yang terjadi jika Duta nakal?"</p>
            </div>
            <ul className="space-y-4">
               <li className="flex gap-4 items-start">
                  <span className="text-rose-500 font-bold">●</span>
                  <p className="text-xs text-slate-600 leading-relaxed"><b>Lockdown Otomatis:</b> Jika setoran tunai (settlement) tertunda > 24 jam, Plafon Transaksi menjadi Rp 0 seketika.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-rose-500 font-bold">●</span>
                  <p className="text-xs text-slate-600 leading-relaxed"><b>Jaminan Karakter:</b> Setiap Duta wajib memiliki 5 penjamin (Anggota Platinum). Jika Duta lari, sisa plafon ditanggung bersama simpanan penjamin.</p>
               </li>
            </ul>
         </div>
      </div>

      {/* Founder Logic Footer */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Demokratisasi Likuiditas Rakyat."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Sistem Plafon Kepercayaan ini memungkinkan KoperatifAI menjangkau pelosok terdalam tanpa butuh investasi deposit raksasa. Kita menggunakan **Integritas Masyarakat** sebagai mesin pertumbuhan likuiditas.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Tinjau Algoritma Plafon Dinamis
         </button>
      </div>
    </div>
  );
};

export default LeaderLiquidity;
