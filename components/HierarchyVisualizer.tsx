import React, { useState } from 'react';

const HierarchyVisualizer: React.FC = () => {
  const [mode, setMode] = useState<'TRADITIONAL' | 'TOLL_ROAD'>('TOLL_ROAD');

  const traditionalRoles = [
    { role: 'FOUNDER', icon: '👤', desc: 'Bapak sendiri, mencari pengurus.' },
    { role: 'PENGURUS', icon: '👔', desc: 'Mencari staf & kantor.' },
    { role: 'DUTA DESA', icon: '🛵', desc: 'Mencari anggota satu per satu.' },
    { role: 'ANGGOTA', icon: '👥', desc: 'Rakyat yang diajak manual.' }
  ];

  const tollRoadRoles = [
    { role: 'SOVEREIGN ARCHITECT', icon: '👑', desc: 'Bapak memegang kendali IP Nasional.' },
    { role: 'GOV PARTNER (PEMDA)', icon: '🏛️', desc: 'Menyediakan "Rel" jalan tol (instruksi resmi).' },
    { role: 'PROVINCIAL MARSHAL', icon: '🦅', desc: 'Tokoh besar yang membawahi ribuan pimpinan lokal.' },
    { role: 'VIRTUAL NODES', icon: '🛰️', desc: 'Jutaan rakyat masuk lewat integrasi sistem.' }
  ];

  const currentRoles = mode === 'TRADITIONAL' ? traditionalRoles : tollRoadRoles;

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Anatomi Kekuasaan Digital</h2>
        <p className="text-slate-500 font-medium">Bapak ingin menjadi pemimpin koperasi biasa, atau **Arsitek Kedaulatan Nasional**?</p>
        
        <div className="flex justify-center pt-6">
          <div className="bg-slate-100 p-2 rounded-[2.5rem] flex gap-2 border-2 border-slate-200">
            <button 
              onClick={() => setMode('TRADITIONAL')}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase transition-all ${mode === 'TRADITIONAL' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400'}`}
            >
              Jalur Tradisional (Lambat)
            </button>
            <button 
              onClick={() => setMode('TOLL_ROAD')}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase transition-all ${mode === 'TOLL_ROAD' ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-400'}`}
            >
              Jalur Tol Digital (TURBO)
            </button>
          </div>
        </div>
      </div>

      <div className="relative p-12 bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden min-h-[500px] flex flex-col items-center">
        {/* Connection Lines Background */}
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-5">
           <div className="w-px h-full bg-indigo-600"></div>
        </div>

        <div className="space-y-16 relative z-10 w-full max-w-2xl">
           {currentRoles.map((item, i) => (
             <div key={i} className="flex flex-col items-center group">
                <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl transition-all duration-500 group-hover:scale-110 border-4 border-white ${mode === 'TOLL_ROAD' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-white'}`}>
                   {item.icon}
                </div>
                <div className="text-center mt-6 space-y-2">
                   <h4 className="text-xl font-black text-slate-800 uppercase tracking-tighter">{item.role}</h4>
                   <p className="text-sm text-slate-400 font-medium italic">"{item.desc}"</p>
                </div>
                {i < currentRoles.length - 1 && (
                  <div className="h-12 w-1 bg-gradient-to-b from-indigo-500 to-transparent mt-8 opacity-30"></div>
                )}
             </div>
           ))}
        </div>

        {mode === 'TOLL_ROAD' && (
           <div className="absolute bottom-10 right-10 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 animate-bounce">
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Efficiency Status</p>
              <p className="text-2xl font-black text-emerald-900">+1.000% SPEED</p>
           </div>
        )}
      </div>

      <div className="p-12 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🦅</div>
         <div className="space-y-6 z-10">
            <h4 className="text-3xl font-black italic">"Founder Tidak Perlu Mencari Rakyat."</h4>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl font-serif">
               "Jalur Tol berarti Bapak mencari **Sistem yang sudah memegang Rakyat**. Jika Bapak bermitra dengan satu Bank Pembangunan Daerah (BPD) atau satu Koperasi Pegawai BUMN, Bapak mendapatkan 100.000 anggota hanya dengan menandatangani satu dokumen. Perannya tetap sebagai Duta (Leader), tapi skalanya adalah **Skala Negara**."
            </p>
         </div>
      </div>
    </div>
  );
};

export default HierarchyVisualizer;