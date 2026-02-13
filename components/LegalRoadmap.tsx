
import React from 'react';

const LegalRoadmap: React.FC = () => {
  const steps = [
    { title: 'Pre-Cooperative Community', status: 'COMPLETED', desc: 'Membangun aplikasi, merekrut 20 pendiri, mengumpulkan iuran awal.', icon: '🧪' },
    { title: 'KSP Skala Kabupaten', status: 'READY', desc: 'Mengajukan akta ke Notaris (NPAK). Izin domisili di satu kota.', icon: '🏘️' },
    { title: 'KSP Skala Provinsi', status: 'LOCKED', desc: 'Setelah mencapai 1.000 anggota. Izin operasional lintas kota.', icon: '🏙️' },
    { title: 'KSP Skala Nasional', status: 'LOCKED', desc: 'Modal terkumpul Rp 500jt. Izin melayani seluruh Indonesia.', icon: '🇮🇩' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase">Peta Jalan Hukum</h2>
        <p className="text-slate-500 text-lg">"Tumbuh Besar Melalui Kejujuran Rakyat, Bukan Pinjaman Bank."</p>
      </div>

      <div className="relative space-y-8">
         {steps.map((step, i) => (
           <div key={i} className="flex gap-8 items-start group">
              <div className="flex flex-col items-center">
                 <div className={`w-16 h-16 rounded-[2rem] border-2 flex items-center justify-center text-3xl shadow-xl transition-all ${
                   step.status === 'COMPLETED' ? 'bg-emerald-500 border-emerald-400 text-white' : 
                   step.status === 'READY' ? 'bg-indigo-600 border-indigo-500 text-white animate-pulse' : 
                   'bg-white border-slate-100 text-slate-300'
                 }`}>
                    {step.icon}
                 </div>
                 {i < steps.length - 1 && <div className="w-1 h-20 bg-slate-100 rounded-full mt-4"></div>}
              </div>
              <div className="flex-1 pt-2">
                 <div className="flex items-center gap-4">
                    <h4 className={`text-2xl font-black italic ${step.status === 'LOCKED' ? 'text-slate-300' : 'text-slate-800'}`}>{step.title}</h4>
                    <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-lg ${
                      step.status === 'COMPLETED' ? 'bg-emerald-50 text-emerald-600' : 
                      step.status === 'READY' ? 'bg-indigo-50 text-indigo-600' : 
                      'bg-slate-100 text-slate-400'
                    }`}>{step.status}</span>
                 </div>
                 <p className={`mt-2 text-sm italic ${step.status === 'LOCKED' ? 'text-slate-200' : 'text-slate-500'}`}>"{step.desc}"</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default LegalRoadmap;
