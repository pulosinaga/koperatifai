import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';

const AppDistribution: React.FC = () => {
  const { user } = useAppContext();
  const [activeDevice, setActiveDevice] = useState<'ANDROID' | 'IPHONE'>('ANDROID');
  const appUrl = "https://koperatifai.online";
  const shareText = `Halo! Saya mengajak Anda bergabung di KoperatifAI, Koperasi Digital masa depan. Tanpa bunga pinjol, 100% milik kita. Klik link ini: ${appUrl}?ref=${user?.memberId}`;

  const handleShareWA = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-5xl mx-auto">
      {/* Hero Header */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              PWA Deployment Engine
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Aplikasi di Saku, <br/>Kedaulatan di Tangan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
               Aplikasi KoperatifAI tidak perlu didownload dari toko aplikasi yang rumit. Cukup "Pasang di Layar Utama" (Install) untuk akses cepat seperti aplikasi biasa.
            </p>
          </div>
          <div className="w-64 h-64 bg-white/5 backdrop-blur-xl p-6 rounded-[3rem] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
             {/* Mock Phone with Icon */}
             <div className="w-24 h-48 bg-slate-800 rounded-3xl border-4 border-slate-700 p-2 relative">
                <div className="w-6 h-1 bg-slate-700 rounded-full mx-auto mb-2"></div>
                <div className="grid grid-cols-2 gap-2">
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className="w-full aspect-square bg-slate-700/50 rounded-lg"></div>
                   ))}
                   <div className="w-full aspect-square bg-indigo-600 rounded-lg flex items-center justify-center text-[10px] font-black shadow-[0_0_10px_#6366f1] animate-bounce">◈</div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-700"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Share QR Section */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col items-center text-center">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase">Scan Untuk Membuka</h3>
            <div className="w-64 h-64 bg-slate-900 rounded-[3rem] p-6 shadow-2xl relative group">
               <div className="w-full h-full bg-white rounded-2xl p-2 relative overflow-hidden">
                  {/* Mock QR */}
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-400 to-white opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg">◈</div>
                  </div>
               </div>
            </div>
            <div className="space-y-4">
               <p className="text-sm text-slate-500 font-medium max-w-xs italic">"Tunjukkan QR ini kepada warga. Mereka cukup scan pakai kamera HP dan aplikasi langsung terbuka."</p>
               <button 
                onClick={handleShareWA}
                className="w-full py-5 bg-[#25D366] text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-all"
               >
                  <span>📲</span> BAGIKAN LINK VIA WHATSAPP
               </button>
            </div>
         </div>

         {/* Installation Guide Section */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic uppercase">Cara Pasang di HP</h3>
               <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button onClick={() => setActiveDevice('ANDROID')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${activeDevice === 'ANDROID' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}>ANDROID</button>
                  <button onClick={() => setActiveDevice('IPHONE')} className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${activeDevice === 'IPHONE' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}>IPHONE</button>
               </div>
            </div>

            <div className="space-y-6">
               {activeDevice === 'ANDROID' ? (
                  <div className="space-y-6 animate-in slide-in-from-left">
                     {[
                       { s: 1, t: 'Buka di Chrome', d: 'Buka alamat koperatifai.online di browser Chrome.' },
                       { s: 2, t: 'Klik Titik Tiga', d: 'Ketuk ikon (⋮) di pojok kanan atas browser.' },
                       { s: 3, t: 'Pasang Aplikasi', d: 'Pilih menu "Instal Aplikasi" atau "Tambahkan ke Layar Utama".' },
                       { s: 4, t: 'Selesai!', d: 'Ikon KoperatifAI akan muncul di layar utama HP Anda.' },
                     ].map((item) => (
                       <div key={item.s} className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs shrink-0">{item.s}</span>
                          <div>
                             <h5 className="font-bold text-slate-800 text-sm">{item.t}</h5>
                             <p className="text-xs text-slate-500 mt-1">{item.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               ) : (
                  <div className="space-y-6 animate-in slide-in-from-right">
                     {[
                       { s: 1, t: 'Buka di Safari', d: 'Wajib menggunakan browser Safari di iPhone.' },
                       { s: 2, t: 'Klik Ikon Share', d: 'Ketuk ikon kotak dengan panah ke atas (⎋) di bawah layar.' },
                       { s: 3, t: 'Add to Home Screen', d: 'Scroll ke bawah dan pilih "Add to Home Screen".' },
                       { s: 4, t: 'Selesai!', d: 'Aplikasi siap digunakan dari layar depan iPhone Anda.' },
                     ].map((item) => (
                       <div key={item.s} className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs shrink-0">{item.s}</span>
                          <div>
                             <h5 className="font-bold text-slate-800 text-sm">{item.t}</h5>
                             <p className="text-xs text-slate-500 mt-1">{item.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Psychology Tip */}
      <div className="p-12 bg-indigo-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden border border-white/5">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse opacity-30">📱</div>
         <div className="space-y-6 z-10">
            <h4 className="text-3xl font-black italic text-emerald-400">"Katakan Kepada Mereka: Ini Bukan Website."</h4>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl font-serif">
               "Duta, saat membantu warga, pastikan mereka melakukan instalasi ke layar utama. Jelaskan bahwa ini adalah **Kantor Koperasi Pribadi** mereka yang bisa dibuka meskipun tanpa sinyal internet (Offline Mode). Jika ikon sudah ada di layar HP, mereka akan merasa benar-benar memiliki koperasi ini."
            </p>
         </div>
      </div>
    </div>
  );
};

export default AppDistribution;