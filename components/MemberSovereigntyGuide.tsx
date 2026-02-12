
import React, { useState } from 'react';
// Import AppView from types.ts
import { AppView } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const MemberSovereigntyGuide: React.FC = () => {
  const { navigate } = useAppContext();
  const [activeStep, setActiveStep] = useState(0);

  const guideSteps = [
    {
      id: 'sms',
      title: 'Pesan Selamat Datang',
      icon: '📱',
      desc: 'Inilah pesan yang Bapak/Ibu terima setelah didaftarkan Duta.',
      content: (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-[2rem] border-4 border-slate-800 shadow-inner">
             <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-black">K</div>
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-[11px] leading-relaxed text-slate-200 italic">
                   "Selamat Budi Utama! Anda resmi menjadi PEMILIK KoperatifAI. Silakan akses koperatifai.online pakai NIK Anda. Mari bangun desa bersama!"
                </div>
             </div>
          </div>
          <p className="text-sm text-slate-500 font-medium">💡 Jangan hapus pesan ini. Ini adalah bukti legal kepemilikan Anda.</p>
        </div>
      )
    },
    {
      id: 'saving',
      title: 'Nabung Sesuka Hati',
      icon: '🐔',
      desc: 'Selain Simpanan Wajib (SW), Bapak/Ibu punya Celengan Ayam Digital.',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 text-center">
                <p className="text-[10px] font-black text-amber-600 uppercase">SW (WAJIB)</p>
                <p className="text-xs font-bold text-slate-400 mt-1 italic">"Rp 20.000 sebulan untuk modal desa."</p>
             </div>
             <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
                <p className="text-[10px] font-black text-emerald-600 uppercase">CELENGAN (BEBAS)</p>
                <p className="text-xs font-bold text-slate-800 mt-1 italic">"Mulai Rp 1.000. Sisa belanja masuk sini."</p>
             </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
             <p className="text-xs text-indigo-700 leading-relaxed font-bold">"Semakin rajin isi celengan, AI akan semakin percaya untuk kasih pinjaman modal usaha."</p>
          </div>
        </div>
      )
    },
    {
      id: 'market',
      title: 'Beli di Warung Teman',
      icon: '🧺',
      desc: 'Uang kita jangan sampai keluar desa.',
      content: (
        <div className="space-y-6">
          <div className="flex gap-4 items-center">
             <div className="text-4xl">🛒</div>
             <div className="text-sm text-slate-600 leading-relaxed">
                Gunakan aplikasi untuk beli beras ke toko <b>Pak Slamet</b> atau pulsa ke <b>Mbak Lilis</b> (sesama anggota).
             </div>
          </div>
          <div className="p-6 bg-slate-900 rounded-[2.5rem] text-white">
             <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] font-black text-emerald-400 uppercase">Keuntungan Anda:</p>
                <span className="text-xs">✨</span>
             </div>
             <p className="text-xs italic leading-relaxed text-slate-300">
                "Beli di tetangga = Memberi rezeki teman = Meningkatkan laba koperasi = Menambah SHU (Bagi Hasil) Anda sendiri!"
             </p>
          </div>
        </div>
      )
    },
    {
      id: 'qris',
      title: 'Kamera Sakti (Bayar)',
      icon: '🤳',
      desc: 'Cara bayar paling gampang sedunia.',
      content: (
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-6">
             <div className="w-32 h-32 border-4 border-dashed border-indigo-200 rounded-3xl flex items-center justify-center text-4xl animate-pulse">
                📸
             </div>
             <div className="space-y-2 text-center">
                <h4 className="font-black text-slate-800">Cukup Bidik Kotak</h4>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                   Arahkan kamera ke gambar kotak di warung. Masukkan jumlah bayar. HP Anda akan berteriak "PEMBAYARAN BERHASIL!". Gampang kan?
                </p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'daskop',
      title: 'Patungan Perisai (Daskop)',
      icon: '🛡️',
      desc: 'Rp 5.000 untuk payung saat hujan.',
      content: (
        <div className="space-y-6">
          <div className="bg-rose-50 p-6 rounded-[2.5rem] border border-rose-100 flex gap-4 items-start">
             <span className="text-3xl">🕊️</span>
             <div>
                <h4 className="font-bold text-rose-900">Dana Sosial Bersama</h4>
                <p className="text-xs text-rose-700 leading-relaxed mt-1 italic">
                   "Ini bukan asuransi orang kaya. Ini patungan warga. Kalau ada anggota duka, hutangnya kita lunasi bersama dan keluarganya kita beri santunan."
                </p>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-slate-50 rounded-2xl text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase">Iuran Anda</p>
                <p className="text-sm font-bold text-slate-800">Rp 5.000 / bln</p>
             </div>
             <div className="p-4 bg-slate-50 rounded-2xl text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase">Santunan Cair</p>
                <p className="text-sm font-bold text-emerald-600">Rp 15.000.000</p>
             </div>
          </div>
        </div>
      )
    }
  ];

  const currentStep = guideSteps[activeStep];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
         
         <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Steps List */}
            <div className="w-full lg:w-1/3 space-y-4">
               <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-tighter mb-8">Pusat Belajar Anggota</h3>
               <div className="space-y-3">
                  {guideSteps.map((s, i) => (
                    <button 
                      key={s.id}
                      onClick={() => setActiveStep(i)}
                      className={`w-full p-6 rounded-[2.5rem] border-2 transition-all text-left flex items-center gap-4 ${activeStep === i ? 'bg-indigo-600 border-indigo-500 shadow-xl' : 'bg-white border-slate-50 hover:border-indigo-100'}`}
                    >
                       <span className="text-2xl">{s.icon}</span>
                       <span className={`text-xs font-black uppercase tracking-widest ${activeStep === i ? 'text-white' : 'text-slate-400'}`}>{s.title}</span>
                    </button>
                  ))}
               </div>
            </div>

            {/* Step Content */}
            <div className="flex-1 space-y-10 py-4">
               <div className="space-y-4">
                  <div className="w-20 h-20 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-inner animate-bounce">
                     {currentConfig().icon}
                  </div>
                  <h2 className="text-4xl font-black text-slate-800 italic leading-tight">{currentStep.title}</h2>
                  <p className="text-slate-500 text-lg font-medium italic">"{currentStep.desc}"</p>
               </div>

               <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-100 animate-in slide-in-from-right duration-300">
                  {currentStep.content}
               </div>

               <div className="flex justify-between items-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Informasi Terverifikasi AI Sentinel</p>
                  <button 
                    onClick={() => activeStep < guideSteps.length - 1 ? setActiveStep(activeStep + 1) : navigate(AppView.DASHBOARD)}
                    className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
                  >
                     {activeStep < guideSteps.length - 1 ? 'PAHAM, LANJUT →' : 'MULAI KEDAULATAN SAYA'}
                  </button>
               </div>
            </div>
         </div>
      </div>

      <div className="p-10 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-12 text-center md:text-left shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
         <div className="text-7xl shrink-0">🤝</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black italic text-indigo-400">"Kedaulatan Bukan Cuma Mimpi."</h4>
            <p className="text-slate-400 leading-relaxed italic">
               Di KoperatifAI, Bapak/Ibu bukan nasabah yang diperas. Bapak/Ibu adalah **Pemilik Sistem**. Jika Bapak/Ibu disiplin dan jujur, sistem AI kami akan menjamin kesejahteraan Bapak/Ibu sampai masa tua nanti.
            </p>
         </div>
      </div>
    </div>
  );

  function currentConfig() {
     return guideSteps[activeStep];
  }
};

export default MemberSovereigntyGuide;
