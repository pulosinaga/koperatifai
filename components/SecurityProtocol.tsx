
import React from 'react';

const SecurityProtocol: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Trust Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Zero-Virus Trust Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Keamanan 100% Terjamin. <br/>Bukan APK, Bukan Virus.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              KoperatifAI menggunakan teknologi **PWA (Progressive Web App)** yang berjalan di dalam browser resmi. Kami tidak meminta Anda mengunduh file berbahaya.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center">
             <div className="text-6xl mb-4">🛡️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Security Status</p>
             <p className="text-xl font-black text-emerald-400 mt-1">VERIFIED SAFE</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Powered by Browser Sandboxing</p>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Danger Side */}
         <div className="bg-rose-50 border-2 border-rose-100 rounded-[3rem] p-10 space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg">⚠️</div>
               <h3 className="text-xl font-black text-rose-900 uppercase">Bahaya File APK</h3>
            </div>
            <p className="text-sm text-rose-700 italic">"APK di luar Play Store seringkali berbahaya karena:"</p>
            <ul className="space-y-4">
               <li className="flex gap-4 items-start">
                  <span className="text-rose-600 font-bold">✕</span>
                  <p className="text-xs text-rose-800"><b>Akses SMS:</b> Bisa membaca kode OTP Bank Anda secara diam-diam.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-rose-600 font-bold">✕</span>
                  <p className="text-xs text-rose-800"><b>Akses Kontak:</b> Mengambil data nomor HP teman-teman Anda.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-rose-600 font-bold">✕</span>
                  <p className="text-xs text-rose-800"><b>File System:</b> Bisa menanam virus di folder sistem HP Anda.</p>
               </li>
            </ul>
         </div>

         {/* Safe Side */}
         <div className="bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] p-10 space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg">✅</div>
               <h3 className="text-xl font-black text-emerald-900 uppercase">PWA KoperatifAI</h3>
            </div>
            <p className="text-sm text-emerald-700 italic">"Aplikasi masa depan yang mengutamakan privasi:"</p>
            <ul className="space-y-4">
               <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <p className="text-xs text-emerald-800"><b>Sandbox Browser:</b> Aplikasi terisolasi, tidak bisa menyentuh SMS atau sistem luar.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <p className="text-xs text-emerald-800"><b>Tanpa Instalasi Berkas:</b> Hanya shortcut website, tidak membebani memori HP.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <p className="text-xs text-emerald-800"><b>Update Otomatis:</b> Perbaikan keamanan terjadi di server, bukan di HP Anda.</p>
               </li>
            </ul>
         </div>
      </div>

      {/* Deep Tech Layers */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">4 Lapis Pertahanan Digital</h3>
            <p className="text-slate-500">Membangun trust anggota melalui transparansi teknis.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'End-to-End Encryption', d: 'Data keuangan Anda diacak sehingga hanya Anda yang bisa melihatnya.', icon: '🔐' },
              { t: 'SSL/TLS Secured', d: 'Jalur komunikasi antara HP dan Cloud diproteksi sertifikat keamanan global.', icon: '🌐' },
              { t: 'AI Sentinel Guard', d: 'Sistem pendeteksi anomali yang memblokir login mencurigakan otomatis.', icon: '🛡️' },
              { t: 'Immutable Ledger', d: 'Setiap transaksi dicatat permanen dan tidak bisa dihapus, mencegah korupsi.', icon: '⛓️' }
            ].map((layer, i) => (
               <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-indigo-100 hover:shadow-xl transition-all group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{layer.icon}</div>
                  <h4 className="text-sm font-black text-slate-800 leading-tight uppercase tracking-tighter">{layer.t}</h4>
                  <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">{layer.d}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Educational Callout */}
      <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-sm shrink-0 border border-indigo-100">💡</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-xl font-bold text-indigo-900 italic">"Info Penting Untuk Anggota:"</h4>
            <p className="text-indigo-700/70 text-sm leading-relaxed">
               Jika Anda menerima file bernama **KoperatifAI.apk** melalui WhatsApp, abaikan dan segera hapus. Aplikasi resmi kami **TIDAK PERNAH** dikirim melalui file. Kami hanya menggunakan link URL resmi **koperatif.ai**.
            </p>
         </div>
      </div>

      {/* Founder Message */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl">🛡️</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Keamanan Anda Adalah Reputasi Kami."</h4>
         <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Dalam membangun koperasi digital, **Kepercayaan (Trust)** adalah aset yang lebih berharga daripada modal uang. Kami menggunakan standar keamanan bank internasional untuk menjaga kedaulatan ekonomi rakyat Indonesia.
         </p>
         <button className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Baca Dokumen Sertifikasi Keamanan</button>
      </div>
    </div>
  );
};

export default SecurityProtocol;
