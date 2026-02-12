import React from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { AppView } from '../types.ts';

const MemberEarningHub: React.FC = () => {
  const { navigate } = useAppContext();

  const incomeWays = [
    {
      id: 'referral',
      title: 'Ajak Tetangga',
      reward: 'Rp 5.000 / orang',
      desc: 'Dapatkan saldo setiap kali teman yang Anda ajak setor simpanan pokok.',
      icon: '🤝',
      action: 'Dapatkan Link Ajak'
    },
    {
      id: 'courier',
      title: 'Jadi Kurir Desa',
      reward: 'Rp 2.000 - 5.000 / antar',
      desc: 'Bantu antar belanjaan tetangga di marketplace saat Anda pergi ke pasar.',
      icon: '🛵',
      action: 'Aktifkan Mode Kurir'
    },
    {
      id: 'merchant',
      title: 'Jualan Produk',
      reward: 'Laba 100% Milik Anda',
      desc: 'Buka toko digital gratis dan jual hasil bumi atau jasa ke ribuan anggota.',
      icon: '🧺',
      action: 'Buka Toko Saya'
    },
    {
      id: 'shu',
      title: 'Dividen (SHU) Belanja',
      reward: 'Bonus Akhir Tahun',
      desc: 'Semakin sering belanja di sesama anggota, semakin besar bonus uang Anda.',
      icon: '✨',
      action: 'Cek Estimasi SHU'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-emerald-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Member Profit Center v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pusat Rezeki Anggota.</h2>
            <p className="text-emerald-50 text-lg leading-relaxed max-w-xl">
               Aplikasi ini bukan pengeluaran, tapi sumber penghasilan. Lihat semua cara mendapatkan uang tambahan di sini.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-center">
             <div className="text-6xl mb-4">💰</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dompet Pendapatan</p>
             <p className="text-3xl font-black text-emerald-600 mt-1 italic">Rp 0</p>
             <p className="text-[8px] text-slate-400 mt-4 uppercase">Mulai lakukan misi di bawah!</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {incomeWays.map((way) => (
           <div key={way.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-16 h-16 bg-slate-50 rounded-[2rem] flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">
                    {way.icon}
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-black text-emerald-600 uppercase">Potensi Rezeki:</p>
                    <p className="text-sm font-black text-slate-800 italic">{way.reward}</p>
                 </div>
              </div>
              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4 italic">{way.title}</h3>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed italic">"{way.desc}"</p>
              
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg group-hover:bg-indigo-600 transition-colors">
                {way.action}
              </button>
           </div>
         ))}
      </div>
    </div>
  );
};

export default MemberEarningHub;