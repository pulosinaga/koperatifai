
import React from 'react';

const HierarchyVisualizer: React.FC = () => {
  const nodes = [
    { role: 'FOUNDER', name: 'Budi Utama', icon: '👑', desc: 'Arsitek Visi & Pemegang Hak Kekayaan Intelektual (IP). Menerima Royalti Teknologi dari setiap detak transaksi.', color: 'bg-indigo-600', flow: 'Kontrol IP & Inovasi' },
    { role: 'GOVERNMENT', name: 'Kemenkop & Pemda', icon: '🏛️', desc: 'Partner Strategis (Regulator). Memantau transparansi kas & kepatuhan pajak secara real-time.', color: 'bg-slate-800', flow: 'Infrastruktur Legal' },
    { role: 'BOARD', name: 'Dewan Pengurus', icon: '👔', desc: 'Eksekutif yang dipilih Anggota. Bertanggung jawab atas likuiditas & otorisasi perbankan.', color: 'bg-slate-700', flow: 'Otoritas Dana' },
    { role: 'PROVINCE DUTA', name: 'Provincial Marshal', icon: '🦅', desc: 'Supervisor Regional. Mengelola distribusi Duta Desa & memantau penetrasi pasar regional.', color: 'bg-indigo-500', flow: 'Kekuatan Wilayah' },
    { role: 'LOCAL DUTA', name: 'Ujung Tombak Desa', icon: '🛵', desc: 'Verifikator Karakter. Menjemput setoran receh & mendampingi pedagang pasar secara fisik.', color: 'bg-emerald-600', flow: 'Kepercayaan Rakyat' },
    { role: 'ANGGOTA', name: 'Rakyat Berdaulat', icon: '👥', desc: 'Pemilik Sah Koperasi. Pengguna layanan sekaligus penerima Sisa Hasil Usaha (SHU).', color: 'bg-blue-600', flow: 'Pemilik Kedaulatan' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Anatomi Kedaulatan Rakyat</h2>
        <p className="text-slate-500 font-medium">Bapak Founder, inilah struktur yang memindahkan kekuasaan ekonomi ke tangan komunitas.</p>
      </div>

      <div className="relative p-12 bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-5">
           <div className="w-px h-full bg-indigo-600 border-dashed border-l-2"></div>
        </div>

        <div className="space-y-16 relative z-10 w-full max-w-2xl">
           {nodes.map((item, i) => (
             <div key={i} className="flex flex-col items-center group">
                <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl transition-all duration-500 group-hover:scale-110 border-4 border-white ${item.color} text-white z-20`}>
                   {item.icon}
                </div>
                <div className="text-center mt-6 space-y-2">
                   <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{item.role}</p>
                   <h4 className="text-xl font-black text-slate-800 uppercase tracking-tighter">{item.name}</h4>
                   <p className="text-xs text-slate-400 font-medium italic max-w-sm mx-auto">"{item.desc}"</p>
                </div>
                
                {i < nodes.length - 1 && (
                  <div className="flex flex-col items-center mt-8 space-y-2">
                    <div className="h-10 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent opacity-30"></div>
                    <span className="text-[8px] font-black text-indigo-400 uppercase tracking-[0.3em]">{item.flow}</span>
                    <div className="h-10 w-0.5 bg-gradient-to-t from-indigo-500 to-transparent opacity-30"></div>
                  </div>
                )}
             </div>
           ))}
        </div>
      </div>

      <div className="p-12 bg-[#020617] rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden border-b-8 border-indigo-600">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🏛️</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-3xl font-black italic">"Founder Adalah Sang Arsitek Jalan Tol."</h4>
            <p className="text-slate-400 text-lg leading-relaxed font-serif">
               "Bapak tidak perlu menjadi ketua koperasi selamanya. Dengan struktur ini, siapapun pengurusnya, mereka **wajib menggunakan sistem Bapak** (IP Licensing). Kesejahteraan Bapak terjamin lewat Royalti Teknologi, sementara rakyat tetap memegang kendali demokrasi."
            </p>
         </div>
      </div>
    </div>
  );
};

export default HierarchyVisualizer;
