
import React from 'react';

const ServerInfrastructure: React.FC = () => {
  const securityFeatures = [
    { title: 'Enkripsi End-to-End', desc: 'Data keuangan Anda diacak sehingga hanya pemilik akun yang bisa melihatnya.', icon: '🔐' },
    { title: 'Server Terdistribusi', desc: 'Data tidak disimpan di satu tempat, tapi menyebar di ribuan server cloud global.', icon: '☁️' },
    { title: 'Backup Otomatis', desc: 'Sistem mencadangkan data setiap 10 menit ke lokasi aman yang berbeda.', icon: '🔄' },
    { title: 'Audit Bot AI', desc: 'AI kami memantau aktivitas mencurigakan 24 jam sehari secara otomatis.', icon: '🛡️' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black leading-tight">Mengenal "Otak" KoperatifAI</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Anda tidak perlu pusing memikirkan kabel atau komputer fisik. Kami menggunakan teknologi <strong>Serverless Cloud</strong> yang memungkinkan koperasi tumbuh tanpa batas dengan biaya operasional yang sangat rendah.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                 <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Status Server</p>
                 <p className="text-xl font-bold flex items-center gap-2">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> 
                   Aktif & Stabil
                 </p>
              </div>
              <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                 <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Lokasi Data</p>
                 <p className="text-xl font-bold">Global Cloud</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96 aspect-square bg-indigo-600/10 rounded-[2.5rem] border border-white/10 flex items-center justify-center">
             <div className="grid grid-cols-3 gap-4 p-8">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-12 h-12 rounded-lg bg-indigo-500/20 animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityFeatures.map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {f.icon}
            </div>
            <h4 className="font-bold text-slate-800 text-lg leading-tight">{f.title}</h4>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🏢</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-indigo-900 italic">"Gedung Kami adalah Data, Satpam Kami adalah Enkripsi."</h4>
            <p className="text-indigo-700/70 mt-2 leading-relaxed">
               Tanpa gedung fisik yang mahal, bunga pinjaman anggota bisa ditekan dan bagi hasil (SHU) bisa dimaksimalkan. Inilah inti dari efisiensi server di KoperatifAI.
            </p>
         </div>
      </div>

      <div className="bg-white p-10 rounded-[3rem] border border-slate-100">
         <h3 className="text-2xl font-black text-slate-800 mb-8">Bagaimana Data Anda Bergerak?</h3>
         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center space-y-2">
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-2xl mx-auto">📱</div>
               <p className="text-xs font-bold text-slate-500 uppercase">Input Anggota</p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-slate-100 via-indigo-200 to-slate-100"></div>
            <div className="text-center space-y-2">
               <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg shadow-indigo-100 text-white">⚙️</div>
               <p className="text-xs font-bold text-slate-800 uppercase">Validasi AI & Server</p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-slate-100 via-indigo-200 to-slate-100"></div>
            <div className="text-center space-y-2">
               <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mx-auto">📊</div>
               <p className="text-xs font-bold text-slate-500 uppercase">Buku Besar Digital</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ServerInfrastructure;
