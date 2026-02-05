
import React from 'react';

const Membership: React.FC = () => {
  const badges = [
    { name: 'Platinum Active', icon: '💎', color: 'bg-indigo-100 text-indigo-700', desc: 'Status tertinggi: Memiliki saldo simpanan > Rp 10jt dan aktif di seluruh fitur.' },
    { name: 'Anggota Aktif', icon: '✅', color: 'bg-emerald-100 text-emerald-700', desc: 'Telah menjadi anggota selama > 3 bulan dengan setoran wajib tanpa putus.' },
    { name: 'Peminjam Disiplin', icon: '⚡', color: 'bg-blue-100 text-blue-700', desc: 'Memiliki catatan pembayaran angsuran tepat waktu 100%.' },
    { name: 'Literasi Finansial', icon: '📚', color: 'bg-amber-100 text-amber-700', desc: 'Menyelesaikan 5+ modul edukasi AI di Smart Education.' },
    { name: 'Saksi Terpercaya', icon: '🤝', color: 'bg-rose-100 text-rose-700', desc: 'Telah memverifikasi integritas 10+ anggota baru di wilayahnya.' },
    { name: 'Pemilih e-RAT', icon: '🗳️', color: 'bg-purple-100 text-purple-700', desc: 'Selalu berpartisipasi dalam setiap voting pengambilan keputusan koperasi.' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto pb-20">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Virtual ID Card */}
        <div className="relative w-full lg:w-96 h-64 bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden border border-white/20 group shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/20 rounded-full -ml-12 -mb-12 blur-2xl"></div>
          
          <div className="relative h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-black text-xl tracking-tight italic">KoperatifAI</h3>
                <p className="text-indigo-200 text-[8px] uppercase tracking-[0.2em] font-black">Digital Ownership Card</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold">◈</div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl shadow-inner">👤</div>
              <div>
                <p className="text-white font-black text-lg">Budi Utama</p>
                <p className="text-indigo-200 text-xs font-mono">ID: CU-202406001</p>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-indigo-300 text-[8px] uppercase font-black tracking-widest">Valid Thru</p>
                <p className="text-white text-xs font-bold">12 / 2028</p>
              </div>
              <div className="text-right">
                <p className="text-indigo-300 text-[8px] uppercase font-black tracking-widest">Global Status</p>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-emerald-400 text-[10px] font-black uppercase tracking-tighter">PLATINUM ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-8">
          <div className="flex justify-between items-center border-b border-slate-50 pb-6">
            <h4 className="text-xl font-black text-slate-800 italic">Informasi Profil Pemilik</h4>
            <div className="flex items-center gap-3">
              <div className="text-right">
                 <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Skor Reputasi</p>
                 <p className="text-sm font-black text-indigo-600 tracking-tighter">2,450 XP</p>
              </div>
              <button className="px-4 py-2 bg-slate-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-all border border-indigo-100">
                 Edit Profil
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Nama Lengkap</p>
              <p className="text-slate-700 font-bold">Budi Utama, S.T.</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Email Terverifikasi</p>
              <p className="text-slate-700 font-bold">budi.utama@email.com</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Nomor WhatsApp</p>
              <p className="text-slate-700 font-bold">+62 812-3456-7890</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Level Keaktifan</p>
              <p className="text-emerald-600 font-black italic">Platinum Pioneer</p>
            </div>
          </div>

          {/* Expanded Contribution Badges Section */}
          <div className="pt-8 border-t border-slate-50">
             <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                   <span className="text-lg">🏆</span>
                   <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Lencana Kontribusi & Achievement</h5>
                </div>
                <span className="text-[9px] font-bold text-indigo-400 italic">6 dari 12 Lencana Terkumpul</span>
             </div>
             <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                   <div 
                    key={i} 
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl border border-current/10 shadow-sm transition-all hover:scale-105 hover:shadow-md cursor-help group relative ${badge.color}`}
                   >
                      <span className="text-lg">{badge.icon}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{badge.name}</span>
                      
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-slate-900 text-white text-[10px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl z-20 border border-white/10 leading-relaxed">
                         <p className="font-black text-indigo-400 mb-1 uppercase tracking-tighter">{badge.name}</p>
                         {badge.desc}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
                      </div>
                   </div>
                ))}
                {/* Locked Badge Example */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 text-slate-300 border border-slate-200 opacity-50 grayscale cursor-not-allowed">
                   <span className="text-lg">🛡️</span>
                   <span className="text-[10px] font-black uppercase tracking-widest">Pengawas AI</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-indigo-900 p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-all"></div>
           <h4 className="font-black text-indigo-300 text-xs uppercase tracking-widest mb-2">Ekuitas Kepemilikan</h4>
           <p className="text-sm text-indigo-100/70 mb-6 leading-relaxed">Simpanan pokok dan wajib yang menjamin hak suara Anda di e-RAT.</p>
           <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black italic tracking-tighter">Rp 4.200.000</span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Sovereign Asset</span>
           </div>
        </div>
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-emerald-100 transition-all"></div>
           <h4 className="font-black text-emerald-600 text-xs uppercase tracking-widest mb-2">Imbal Hasil (SHU) Akumulatif</h4>
           <p className="text-sm text-slate-500 mb-6 leading-relaxed">Total keuntungan yang Anda terima berkat keaktifan bertransaksi.</p>
           <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-slate-800 italic tracking-tighter">Rp 2.450.000</span>
              <span className="text-[10px] font-bold text-indigo-600 uppercase">+12.5% Growth</span>
           </div>
        </div>
      </div>

      <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
         <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm border border-slate-100">🛡️</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-xl font-bold text-slate-800 italic">"Lencana Anda Meningkatkan Kepercayaan AI."</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
               Sistem AI kami memantau lencana yang Anda kumpulkan. Status <strong>Anggota Aktif</strong> dan <strong>Literasi Finansial</strong> secara otomatis menurunkan margin bunga pinjaman Anda sebesar <strong>0.2%</strong> dan menaikkan limit kredit tanpa agunan.
            </p>
         </div>
         <div className="flex flex-col gap-3">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-lg whitespace-nowrap">
               Klaim Reward Lencana
            </button>
            <button className="px-8 py-3 bg-white text-indigo-600 border border-indigo-100 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-50 transition-all whitespace-nowrap">
               Cara Mendapat Lencana
            </button>
         </div>
      </div>
    </div>
  );
};

export default Membership;
