
import React from 'react';

const DigitalPassbook: React.FC = () => {
  const equityAccounts = [
    { title: 'Simpanan Pokok (Equity)', balance: 100000, color: 'bg-indigo-600', icon: '🎫', note: 'Modal Kepemilikan' },
    { title: 'Simpanan Wajib (Equity)', balance: 1200000, color: 'bg-indigo-500', icon: '📈', note: 'Iuran Kemandirian' },
    { title: 'Simpanan Sukarela (Liquid)', balance: 15400000, color: 'bg-amber-500', icon: '🪙', note: 'Bebas Tarik Kapan Saja' },
    { title: 'Akumulasi SHU (Dividen)', balance: 2450000, color: 'bg-emerald-500', icon: '✨', note: 'Bagi Hasil Anda' },
  ];

  const liveEarnings = [
    { source: 'Marketplace Shared Fee', detail: 'Anggota A belanja Beras', amount: '+ Rp 25', time: '2m lalu', icon: '🛒' },
    { source: 'QRIS Distribution', detail: 'Scan QRIS Warung B', amount: '+ Rp 10', time: '15m lalu', icon: '🤳' },
    { source: 'Loan Interest Sharing', detail: 'Angsuran Pinjaman Member C', amount: '+ Rp 120', time: '1j lalu', icon: '💸' },
    { source: 'Referral Passive Jasa', detail: 'Aktivitas Downline D', amount: '+ Rp 50', time: '2j lalu', icon: '🔗' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Hero Passbook */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Live Membership Ledger
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Buku Digital Anda: <br/>Kekayaan yang Bergerak.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Bukan sekadar angka statis. Di KoperatifAI, Anda melihat setiap rupiah surplus komunitas mengalir ke akun Anda secara proporsional.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Wealth In KoperatifAI</p>
             <p className="text-4xl font-black text-white mt-2">Rp 19.150.000</p>
             <div className="mt-6 flex justify-center gap-2">
                <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase">Asset Owner</span>
             </div>
          </div>
        </div>
      </div>

      {/* Account Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {equityAccounts.map((acc, i) => (
           <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-12 h-12 ${acc.color} rounded-2xl flex items-center justify-center text-2xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                 {acc.icon}
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{acc.title}</p>
              <h4 className="text-xl font-black text-slate-800 mt-1 italic">Rp {acc.balance.toLocaleString('id-ID')}</h4>
              <p className="text-[10px] text-indigo-600 font-bold mt-4 uppercase italic">{acc.note}</p>
           </div>
         ))}
      </div>

      {/* The "Growth Ledger" - Real Time Earnings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Live Earnings Stream</h3>
               <span className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black animate-pulse">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> LIVE FEED
               </span>
            </div>
            
            <div className="space-y-4">
               {liveEarnings.map((log, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all group">
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">{log.icon}</div>
                       <div>
                          <h5 className="font-bold text-slate-800 text-sm">{log.source}</h5>
                          <p className="text-[10px] text-slate-400 uppercase font-black">{log.detail}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-lg font-black text-emerald-600 italic">{log.amount}</p>
                       <p className="text-[9px] text-slate-400 font-bold uppercase">{log.time}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="pt-4 text-center">
               <p className="text-[10px] text-slate-400 italic">"Dividen real-time dialokasikan berdasarkan rasio saldo Simpanan Wajib & keaktifan belanja Anda."</p>
            </div>
         </div>

         {/* Individual Growth Target */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-6 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">SHU Target 2024</h4>
               <div className="space-y-4">
                  <div className="flex justify-between items-end">
                     <p className="text-xs text-slate-400 font-bold uppercase">Progres Saat Ini</p>
                     <p className="text-2xl font-black text-white italic">72%</p>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-600 w-[72%] animate-pulse"></div>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Selesaikan 2 modul edukasi lagi untuk membuka booster dividen +5%.</p>
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-all shadow-lg">Buka Booster AI</button>
               </div>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">📜</div>
               <h4 className="font-bold text-indigo-900">Sertifikat Digital Saham</h4>
               <p className="text-xs text-indigo-700/70 leading-relaxed italic">
                  "Klik di bawah untuk melihat rincian kepemilikan aset legal Anda yang dijamin oleh sistem audit AI."
               </p>
               <button className="text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:underline">Lihat Sertifikat →</button>
            </div>
         </div>
      </div>

      {/* Philosophy of Ownership */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">⚖️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800">Kenapa bank tidak bisa melakukan ini?</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Bank konvensional dirancang untuk memisahkan **Nasabah** dan **Pemilik**. Keuntungan belanja Anda di mal diambil oleh pemilik bank. Di KoperatifAI, Anda adalah bankirnya. Setiap rupiah transaksi di komunitas kita memperkuat saku Anda sendiri."
            </p>
         </div>
      </div>

      {/* Integration Message */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🚀</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Ubah Pengeluaran Menjadi Investasi."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Teruslah bertransaksi di dalam ekosistem KoperatifAI. Semakin aktif komunitas kita, semakin besar nilai aset yang Anda miliki.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Download Laporan Wealth Management Saya
         </button>
      </div>
    </div>
  );
};

export default DigitalPassbook;
