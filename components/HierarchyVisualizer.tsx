
import React from 'react';

const HierarchyVisualizer: React.FC = () => {
  const nodes = [
    { role: 'FOUNDER', name: 'Budi Utama', icon: '👑', desc: 'Arsitek Visi & Pemilik IP Teknologi.', color: 'bg-indigo-600' },
    { role: 'PENGAWAS', name: 'Dewan Pengawas', icon: '⚖️', desc: 'Otoritas audit & pengawasan sesuai UU 25/1992.', color: 'bg-rose-600' },
    { role: 'PENGURUS', name: 'Dewan Pengurus', icon: '👔', desc: 'Eksekutif pilihan anggota. Pemegang mandat legal.', color: 'bg-slate-800' },
    { role: 'DUTA', name: 'Duta Desa', icon: '🛵', desc: 'Ujung tombak lapangan & verifikator karakter.', color: 'bg-emerald-600' },
    { role: 'MEMBER', name: 'Anggota', icon: '👥', desc: 'Pemilik sah & penerima manfaat koperasi.', color: 'bg-blue-600' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Struktur Kedaulatan Rakyat</h2>
        <p className="text-slate-500">Kepatuhan Terhadap UU No. 25/1992 & Standar Digital JDIH Nasional.</p>
      </div>

      <div className="relative p-12 bg-white rounded-[4rem] border border-slate-100 shadow-2xl flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 via-indigo-600 to-emerald-500"></div>
        {nodes.map((item, i) => (
          <div key={i} className="flex flex-col items-center w-full max-w-md group">
             <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl transition-all duration-500 group-hover:scale-110 border-4 border-white ${item.color} text-white z-20`}>
                {item.icon}
             </div>
             <div className="text-center mt-4 mb-8 space-y-1">
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{item.role}</p>
                <h4 className="text-xl font-black text-slate-800">{item.name}</h4>
                <p className="text-[11px] text-slate-400 italic max-w-xs mx-auto">"{item.desc}"</p>
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
          "Sesuai Pasal 21 UU 25/1992, Perangkat Koperasi terdiri dari Rapat Anggota, Pengurus, dan Pengawas. Sistem KoperatifAI mendigitalkan seluruh interaksi ini agar transparan 100%."
        </p>
      </div>
    </div>
  );
};

export default HierarchyVisualizer;
