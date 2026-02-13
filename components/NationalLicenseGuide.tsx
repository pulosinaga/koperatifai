
import React from 'react';

const NationalLicenseGuide: React.FC = () => {
  const requirements = [
    { title: 'Modal Sendiri', target: 'Rp 500 Juta', status: 'WAITING_DEPOSIT', icon: '💰', desc: 'Sesuai regulasi KSP Nasional terbaru.' },
    { title: 'Sebaran Domisili', target: 'Min. 3 Provinsi', status: 'ACTIVE', icon: '🗺️', desc: 'Duta sudah ada di Jabar, Jatim, dan Sumut.' },
    { title: 'Sertifikasi Kompetensi', target: 'Manajer KSP', status: 'IN_PROGRESS', icon: '🎓', desc: 'Pengurus sedang mengikuti diklat.' },
    { title: 'Pendaftaran PSE', target: 'Kominfo RI', status: 'READY', icon: '📡', desc: 'Dokumen teknis aplikasi sudah siap ekspor.' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-[#1e293b] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 space-y-6">
          <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
            Strategic Expansion Protocol
          </span>
          <h2 className="text-4xl font-black leading-tight italic font-serif">Peta Jalan Lisensi Nasional.</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
             Bapak Founder, ini adalah daftar periksa (checklist) agar KoperatifAI sah melayani seluruh rakyat Indonesia dari Sabang sampai Merauke.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {requirements.map((req, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{req.icon}</div>
              <h4 className="font-black text-slate-800 text-sm">{req.title}</h4>
              <p className="text-indigo-600 font-black text-lg mt-2">{req.target}</p>
              <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">"{req.desc}"</p>
              <div className="mt-6">
                 <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                   req.status === 'ACTIVE' || req.status === 'READY' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                 }`}>{req.status}</span>
              </div>
           </div>
        ))}
      </div>

      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Syarat PSE Kominfo:</h4>
            <p className="text-slate-500 leading-relaxed">
               Karena KoperatifAI mengelola dana masyarakat secara digital, negara mewajibkan kita mendaftar sebagai **Penyelenggara Sistem Elektronik (PSE)**. Ini sangat penting untuk menjamin bahwa data anggota disimpan di server yang aman dan patuh pada UU Perlindungan Data Pribadi (PDP).
            </p>
         </div>
      </div>
    </div>
  );
};

export default NationalLicenseGuide;
