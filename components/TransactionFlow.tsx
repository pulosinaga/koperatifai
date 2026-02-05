
import React, { useState } from 'react';

const TransactionFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const roadmapSteps = [
    {
      title: 'Akad Kepemilikan (SP)',
      action: 'Setor Simpanan Pokok',
      nominal: 'Rp 100.000 (Sekali)',
      desc: 'Langkah hukum pertama. Anda menanam saham dan resmi menjadi "Pemilik" koperasi.',
      rule: 'Tidak bisa ditarik selama masih menjadi anggota.',
      icon: '🏛️',
      color: 'bg-indigo-600'
    },
    {
      title: 'Iuran Kemandirian (SW)',
      action: 'Setor Simpanan Wajib',
      nominal: 'Rp 20.000 (Bulanan)',
      desc: 'Membangun modal kerja bersama. Dana ini adalah "Otot" koperasi untuk membiayai usaha anggota.',
      rule: 'Wajib setiap bulan. Keterlambatan menurunkan skor kredit AI.',
      icon: '📈',
      color: 'bg-blue-600'
    },
    {
      title: 'Aktivitas Harian (SS)',
      action: 'Isi Celengan Digital',
      nominal: 'Bebas (Mulai Rp 1.000)',
      desc: 'Gunakan simpanan sukarela untuk kebutuhan likuiditas. Menabung receh sisa belanja.',
      rule: 'Bebas ditarik kapan saja via HP.',
      icon: '🪙',
      color: 'bg-amber-500'
    },
    {
      title: 'Ekonomi Produktif',
      action: 'Belanja di Marketplace',
      nominal: 'Sesuai Harga Produk',
      desc: 'Membeli produk teman sesama anggota. Uang berputar di dalam komunitas kita sendiri.',
      rule: 'Tanpa biaya admin perbankan yang mahal.',
      icon: '🛒',
      color: 'bg-emerald-600'
    },
    {
      title: 'Akses Permodalan',
      action: 'Ajukan Pinjaman Mikro',
      nominal: 'Hingga 5x Simpanan',
      desc: 'Mendapat modal usaha berdasarkan kejujuran & skor AI Anda. Tanpa agunan tanah/surat.',
      rule: 'Bunga adil 0.9% - 1.5%. Wajib untuk tujuan produktif.',
      icon: '💸',
      color: 'bg-rose-500'
    },
    {
      title: 'Panen Kesejahteraan',
      action: 'Terima SHU & Dividen',
      nominal: 'Proporsional Keaktifan',
      desc: 'Menerima bagi hasil dari seluruh keuntungan operasional koperasi di akhir periode.',
      rule: 'Semakin aktif bertransaksi, semakin besar SHU yang diterima.',
      icon: '✨',
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Roadmap Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Member Journey Map v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Jalur Kemakmuran Anggota: <br/>Dari Pengguna Menjadi Tuan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Pahami setiap langkah transaksi Anda. Di KoperatifAI, setiap rupiah yang Anda setorkan memiliki **Tujuan Strategis** untuk kesejahteraan kolektif.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🛣️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Roadmap Step</p>
             <p className="text-3xl font-black text-indigo-400 mt-1 italic">{activeStep + 1} / 6</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter italic">Verified by KoperatifAI Logic</p>
          </div>
        </div>
      </div>

      {/* Visual Roadmap Path */}
      <div className="relative pt-10">
         {/* Line Background */}
         <div className="absolute top-24 left-10 right-10 h-1 bg-slate-100 hidden lg:block"></div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {roadmapSteps.map((step, i) => (
              <button 
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex flex-col items-center text-center space-y-4 group transition-all duration-500 ${
                  activeStep === i ? 'scale-110 opacity-100' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-70'
                }`}
              >
                 <div className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-4xl shadow-xl border-4 border-white transition-all ${
                    activeStep === i ? step.color + ' text-white ring-8 ring-indigo-50' : 'bg-white text-slate-300'
                 }`}>
                    {step.icon}
                 </div>
                 <div className="space-y-1">
                    <p className={`text-[8px] font-black uppercase tracking-widest ${activeStep === i ? 'text-indigo-600' : 'text-slate-400'}`}>TAHAP 0{i + 1}</p>
                    <h4 className={`text-xs font-black leading-tight ${activeStep === i ? 'text-slate-800' : 'text-slate-500'}`}>{step.title}</h4>
                 </div>
              </button>
            ))}
         </div>
      </div>

      {/* Detail Content Card */}
      <div className="bg-white p-10 lg:p-16 rounded-[4rem] border border-slate-100 shadow-sm animate-in slide-in-from-bottom duration-300 relative overflow-hidden">
         <div className={`absolute top-0 right-0 w-64 h-64 ${roadmapSteps[activeStep].color} opacity-5 blur-[120px]`}></div>
         
         <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8">
               <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-800 italic">{roadmapSteps[activeStep].title}</h3>
                  <p className="text-indigo-600 font-black uppercase text-sm tracking-widest">{roadmapSteps[activeStep].action}</p>
               </div>
               
               <p className="text-slate-500 text-lg leading-relaxed italic">"{roadmapSteps[activeStep].desc}"</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Nominal Acuan:</p>
                     <p className="text-xl font-black text-slate-800">{roadmapSteps[activeStep].nominal}</p>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                     <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Aturan Main:</p>
                     <p className="text-xs font-bold text-indigo-900 leading-relaxed">{roadmapSteps[activeStep].rule}</p>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-80 space-y-6 shrink-0">
               <div className={`p-8 rounded-[3rem] text-white shadow-2xl ${roadmapSteps[activeStep].color}`}>
                  <h4 className="font-bold text-sm mb-4 uppercase tracking-widest opacity-80">Misi Anda:</h4>
                  <p className="text-sm font-medium leading-relaxed italic">
                    {activeStep === 0 && "Pastikan Anda menerima Sertifikat Saham Digital setelah menyetor SP."}
                    {activeStep === 1 && "Simpanan Wajib adalah disiplin. Jangan biarkan terputus agar limit pinjaman Anda aman."}
                    {activeStep === 2 && "Jadikan ini kebiasaan. Rp 1.000 lebih baik daripada nol."}
                    {activeStep === 3 && "Selalu scan QRIS Anggota saat jajan. Ini membantu teman dan menaikkan SHU Anda."}
                    {activeStep === 4 && "Gunakan hanya untuk hal produktif. AI akan memantau keberhasilan usaha Anda."}
                    {activeStep === 5 && "Nikmati hasil kejujuran kita bersama. SHU adalah gaji Anda sebagai pemilik."}
                  </p>
               </div>
               <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-xl">
                  Lakukan Transaksi Sekarang →
               </button>
            </div>
         </div>
      </div>

      {/* Sequence Logic Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-black italic text-indigo-400">Kenapa Urutan Ini Wajib?</h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="text-3xl shrink-0">🛡️</div>
                  <div>
                     <h5 className="font-bold">Keamanan Modal (Liquidity Shield)</h5>
                     <p className="text-xs text-indigo-200 mt-1 leading-relaxed">
                        Kami tidak bisa mencairkan pinjaman (Tahap 5) jika Tahap 1 dan 2 belum kuat. Uang yang dipinjamkan anggota berasal dari simpanan anggota lain. Kita saling menjaga.
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="text-3xl shrink-0">🧠</div>
                  <div>
                     <h5 className="font-bold">Validasi Karakter AI</h5>
                     <p className="text-xs text-indigo-200 mt-1 leading-relaxed">
                        AI memantau kedisiplinan di Tahap 2 dan 3 untuk menentukan apakah Anda layak mendapatkan bunga rendah di Tahap 5.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center space-y-8 shadow-sm">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-4xl mx-auto border border-emerald-100">⚖️</div>
            <h4 className="text-2xl font-black text-slate-800 italic">"Koperasi Adalah Sekolah Ekonomi."</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto italic">
               "Kami melatih anggota untuk disiplin membedakan mana modal abadi, mana tabungan cair, dan mana hutang produktif. Jika semua anggota tertib, koperasi ini tidak akan pernah runtuh."
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Sifat Transaksi</p>
                  <p className="text-lg font-black text-indigo-600 uppercase">BERJENJANG</p>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Kepastian SHU</p>
                  <p className="text-lg font-black text-indigo-600 uppercase">REAL-TIME</p>
               </div>
            </div>
         </div>
      </div>

      {/* Integration Message */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl">🚀</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Mulai Langkah Pertama Anda Hari Ini."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Jangan pusing dengan nominal besar. Mulailah dari **Simpanan Pokok**. Itulah tiket Anda untuk menikmati seluruh 'Keajaiban Koperasi' ini.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Buka Form Setoran Pokok</button>
            <button className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Lihat Video Edukasi</button>
         </div>
      </div>
    </div>
  );
};

export default TransactionFlow;
