
import React from 'react';

const HierarchyVisualizer: React.FC = () => {
  const nodes = [
    { role: 'RAPAT ANGGOTA (RAT)', name: 'Kekuasaan Tertinggi', icon: '👥', desc: 'Pemegang mandat mutlak sesuai Pasal 22 UU 25/1992.', color: 'bg-indigo-600' },
    { role: 'FOUNDER (SaaS IP)', name: 'Budi Utama', icon: '👑', desc: 'Penyedia Infrastruktur Teknologi & Integritas AI.', color: 'bg-slate-900' },
    { role: 'DEWAN PENGAWAS', name: 'Otoritas Kontrol', icon: '⚖️', desc: 'Audit independen atas kebijakan pengurus (Pasal 38).', color: 'bg-rose-600' },
    { role: 'DEWAN PENGURUS', name: 'Otoritas Eksekutif', icon: '👔', desc: 'Pelaksana operasional harian mandat anggota (Pasal 29).', color: 'bg-emerald-600' },
    { role: 'DUTA WILAYAH', name: 'Garda Depan', icon: '🛵', desc: 'Ujung tombak pelayanan & verifikasi kejujuran.', color: 'bg-amber-500' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Struktur Kedaulatan Rakyat</h2>
        <p className="text-slate-500">Kepatuhan Total Terhadap UU No. 25/1992 & Sinkronisasi JDIH.</p>
      </div>

      <div className="relative p-12 bg-white rounded-[4rem] border border-slate-100 shadow-2xl flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 via-indigo-600 to-emerald-500"></div>
        {nodes.map((item, i) => (
          <div key={i} className="flex flex-col items-center w-full max-w-md group">
             <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl transition-all duration-500 group-hover:scale-110 border-4 border-white ${item.color} text-white z-20`}>
                {item.icon}
             </div>
             <div className="text-center mt-4 mb-8 space-y-1 px-6">
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{item.role}</p>
                <h4 className="text-xl font-black text-slate-800 italic">{item.name}</h4>
                <p className="text-[11px] text-slate-400 italic max-w-xs mx-auto leading-relaxed">"{item.desc}"</p>
             </div>
             {i < nodes.length - 1 && (
               <div className="h-16 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent opacity-20 mb-4"></div>
             )}
          </div>
        ))}
      </div>
      
      <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 flex gap-6 items-center">
        <div className="text-4xl">📜</div>
        <p className="text-xs text-indigo-900 leading-relaxed font-bold italic">
          "KoperatifAI mematuhi azas demokrasi koperasi. Setiap Anggota memiliki 1 suara yang sama. Dewan Pengawas memiliki akses audit 'Read-Only' ke seluruh ledger AI untuk menjamin tidak ada penyelewengan oleh Pengurus."
        </p>
      </div>
    </div>
  );
};

export default HierarchyVisualizer;
