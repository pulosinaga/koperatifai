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
              KoperatifAI menggunakan teknologi **PWA (Progressive Web App)** yang berjalan di dalam browser resmi. Kami tidak meminta Anda mengunduh file berbahaya yang bisa mencuri data Anda.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🛡️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Security Status</p>
             <p className="text-xl font-black text-emerald-400 mt-1 uppercase">VERIFIED SAFE</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter italic">Powered by Browser Sandboxing</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Danger Side */}
         <div className="bg-rose-50 border-2 border-rose-100 rounded-[3rem] p-10 space-y-6 shadow-sm">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg">⚠️</div>
               <h3 className="text-xl font-black text-rose-900 uppercase italic">Bahaya File APK</h3>
            </div>
            <p className="text-sm text-rose-700 italic">"APK di luar Play Store seringkali berbahaya karena:"</p>
            <ul className="space-y-4">
               <li className="flex gap-4 items-start">
                  <span className="text-rose-600 font-bold">✕</span>
                  <p className="text-xs text-rose-800"><b>Akses SMS:</b> Bisa membaca kode OTP Bank Anda secara diam-diam.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-rose-600 font-bold">✕</span>
                  <p className="text-xs text-rose-800"><b>Akses Kontak:</b> Mengambil data nomor HP teman-teman Anda untuk diteror.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-rose-600 font-bold">✕</span>
                  <p className="text-xs text-rose-800"><b>File System:</b> Bisa menanam virus yang merusak HP Anda selamanya.</p>
               </li>
            </ul>
         </div>

         {/* Safe Side */}
         <div className="bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] p-10 space-y-6 shadow-sm">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg">✅</div>
               <h3 className="text-xl font-black text-emerald-900 uppercase italic">PWA KoperatifAI</h3>
            </div>
            <p className="text-sm text-emerald-700 italic">"Aplikasi masa depan yang mengutamakan privasi:"</p>
            <ul className="space-y-4">
               <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <p className="text-xs text-emerald-800"><b>Sandbox Browser:</b> Aplikasi terisolasi, tidak bisa menyentuh SMS atau sistem luar.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <p className="text-xs text-emerald-800"><b>Tanpa Instalasi Berkas:</b> Hanya jalan lewat web resmi, tidak membebani memori HP.</p>
               </li>
               <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <p className="text-xs text-emerald-800"><b>Update Otomatis:</b> Perbaikan keamanan terjadi di server, bukan di HP Anda.</p>
               </li>
            </ul>
         </div>
      </div>

      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4 text-center md:text-left">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">"Keamanan Anda Adalah Reputasi Kami."</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "KoperatifAI tidak butuh izin masuk ke rumah (HP) Bapak/Ibu. Kami cukup berada di teras (Browser) untuk melayani transaksi secara aman dan jujur."
            </p>
         </div>
      </div>
    </div>
  );
};

export default SecurityProtocol;