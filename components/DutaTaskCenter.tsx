
import React from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { AppView } from '../types.ts';

const DutaTaskCenter: React.FC = () => {
  const { navigate } = useAppContext();

  const tasks = [
    { title: 'Verifikasi KYC', desc: 'Validasi e-KTP & Wajah anggota baru di lokasi.', icon: '🪪', status: 'Wajib', point: '+5.000', view: AppView.MEMBERSHIP_PROFILE },
    { title: 'Jemput Setoran', desc: 'Terima kas tunai anggota & kirim resi SMS.', icon: '🛵', status: 'Harian', point: '+3.000', view: AppView.DIGITAL_PASSBOOK },
    { title: 'Edukasi Literasi', desc: 'Sosialisasi fitur marketplace & anti-pinjol.', icon: '📢', status: 'Mingguan', point: '+25.000', view: AppView.SMART_EDUCATION },
    { title: 'Settlement Kas', desc: 'Setor total kas wilayah ke bank partner.', icon: '🏦', status: 'Kritis', point: 'Plafon Sync', view: AppView.TRANSACTIONS },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Pusat Tugas Duta</h2>
        <p className="text-slate-500 text-lg">Setiap aksi Anda adalah pengabdian yang bernilai rezeki.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tasks.map((task, i) => (
          <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg text-white group-hover:scale-110 transition-transform">
                {task.icon}
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">{task.status}</span>
                <p className="text-xl font-black text-indigo-600 mt-2">{task.point}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black text-slate-800 italic">{task.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed italic">"{task.desc}"</p>
              <button 
                onClick={() => navigate(task.view)}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-600 transition-all shadow-lg"
              >
                Kerjakan Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DutaTaskCenter;
