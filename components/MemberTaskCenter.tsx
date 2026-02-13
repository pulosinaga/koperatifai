
import React from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { AppView } from '../types.ts';

const MemberTaskCenter: React.FC = () => {
  const { navigate } = useAppContext();

  const tasks = [
    { title: 'Nabung Receh', desc: 'Isi Celengan Digital minimal Rp 1.000 hari ini.', icon: '🪙', impact: 'Integritas +2', view: AppView.DIGITAL_PASSBOOK },
    { title: 'Belanja Teman', desc: 'Beli 1 produk anggota di marketplace desa.', icon: '🛒', impact: 'SHU +Rp 100', view: AppView.MEMBER_MARKETPLACE },
    { title: 'Cek Perisai', desc: 'Pastikan iuran Daskop Rp 5.000 sudah terbayar.', icon: '🛡️', impact: 'Aman Hukum', view: AppView.MEMBER_HEALTH_SHIELD },
    { title: 'Belajar AI', desc: 'Selesaikan 1 modul literasi keuangan malam ini.', icon: '🧠', impact: 'Poin XP +10', view: AppView.SMART_EDUCATION },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Misi Kedaulatan Saya</h2>
        <p className="text-slate-500 text-lg">Bapak/Ibu adalah Pemilik. Mari kita jaga aset kita bersama.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tasks.map((task, i) => (
          <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg text-white group-hover:scale-110 transition-transform">
                {task.icon}
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">{task.impact}</span>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black text-slate-800 italic">{task.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed italic">"{task.desc}"</p>
              <button 
                onClick={() => navigate(task.view)}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-all shadow-lg"
              >
                Laksanakan Misi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberTaskCenter;
