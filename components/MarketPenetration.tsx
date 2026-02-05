
import React, { useState } from 'react';

const MarketPenetration: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const protocolSteps = [
    {
      title: 'AI Geospatial Scouting',
      desc: 'AI menganalisis data satelit & statistik daerah. Mencari zona dengan bunga lintah darat tertinggi (titik nyeri warga).',
      icon: '🛰️',
      detail: 'Output: Peta "Zona Merah Riba" yang siap kita selamatkan.',
      color: 'bg-indigo-600'
    },
    {
      title: 'The Community Node Finder',
      desc: 'Duta mencari 3 tokoh kunci: Guru Sekolah, Ketua Paguyuban, atau Pemilik Warung paling ramai.',
      icon: '🤝',
      detail: 'Prinsip: "Trust is hard to build, borrow it from local heroes."',
      color: 'bg-emerald-600'
    },
    {
      title: 'Flash Literacy Hub',
      desc: 'Demonstrasi aplikasi "Celengan Digital" di lokasi strategis. Biarkan mereka menabung Rp 2.000 & terima SMS saat itu juga.',
      icon: '⚡',
      detail: 'Tujuannya: Menghilangkan keraguan "Apakah uang saya hilang?".',
      color: 'bg-amber-500'
    },
    {
      title: 'The Pioneer Pilot (10)',
      desc: 'Hanya mendaftarkan 10 orang terbaik sebagai "Kelompok Pionir". Fokus pada pelayanan 100% sempurna.',
      icon: '🏛️',
      detail: 'Biarkan 10 orang ini pamer SHU pertama mereka ke tetangga.',
      color: 'bg-rose-500'
    },
    {
      title: 'Local Circular Loop',
      desc: 'Mendaftarkan pedagang pasar desa ke marketplace. Membuat uang anggota tidak keluar dari wilayah tersebut.',
      icon: '🔄',
      detail: 'Membangun kemandirian ekonomi desa dalam 90 hari.',
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Penetration Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Expansion Playbook v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Penetrasi Wilayah Asing: <br/>Menaklukkan Kegelapan Data.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kita tidak datang sebagai orang asing yang "menjual sesuatu", kita datang sebagai **Pendamping Ekonomi** yang dipandu oleh AI.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🗺️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Entry Confidence</p>
             <p className="text-xl font-black text-emerald-400 mt-1 italic">94.2% SUCCESS RATE</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase">Guided by KoperatifAI Protocol</p>
          </div>
        </div>
      </div>

      {/* The Protocol Steps */}
      <div className="space-y-10">
         <h3 className="text-2xl font-black text-slate-800 italic text-center">5 Langkah Penetrasi Terukur</h3>
         <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {protocolSteps.map((s, i) => (
              <button 
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-6 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center space-y-4 group ${
                  activeStep === i ? 'bg-white border-indigo-600 shadow-xl scale-105' : 'bg-slate-50 border-slate-100 opacity-60 grayscale'
                }`}
              >
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${activeStep === i ? s.color + ' text-white' : 'bg-white'}`}>
                    {s.icon}
                 </div>
                 <h5 className={`font-black text-[10px] uppercase tracking-tighter leading-tight ${activeStep === i ? 'text-indigo-600' : 'text-slate-500'}`}>{s.title}</h5>
              </button>
            ))}
         </div>

         {/* Step Detail Content */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm animate-in slide-in-from-bottom duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className={`w-24 h-24 rounded-[2rem] ${protocolSteps[activeStep].color} text-white flex items-center justify-center text-5xl shrink-0 shadow-lg`}>
                  {protocolSteps[activeStep].icon}
               </div>
               <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-black text-slate-800 italic">{protocolSteps[activeStep].title}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed italic">"{protocolSteps[activeStep].desc}"</p>
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                     <p className="text-xs font-black text-indigo-700 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        Key Strategic Outcome:
                     </p>
                     <p className="text-sm font-bold text-indigo-900 mt-1">{protocolSteps[activeStep].detail}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Secret "Trojan Horse" Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-black italic text-indigo-400">Strategi "Kuda Troya" Koperasi</h3>
            <p className="text-sm text-indigo-100 leading-relaxed">
               Jangan bicara "Koperasi" di hari pertama. Bicaralah tentang **Aplikasi Celengan Rp 1.000**.
            </p>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="text-2xl shrink-0">📱</div>
                  <div>
                     <h5 className="font-bold">Entry via Digital Piggybank</h5>
                     <p className="text-xs text-indigo-200 mt-1">Gunakan fitur tabungan receh sebagai perkenalan. Rakyat kecil tidak takut kehilangan Rp 1.000, tapi mereka akan takjub saat Rp 1.000 itu aman & bisa ditarik.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="text-2xl shrink-0">🍜</div>
                  <div>
                     <h5 className="font-bold">Entry via Merchant Solution</h5>
                     <p className="text-xs text-indigo-200 mt-1">Berikan stiker QRIS gratis ke pedagang paling populer. Saat ia bangga bisa menerima pembayaran digital, seluruh warga akan penasaran.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-4xl mx-auto border border-rose-100">🛡️</div>
            <h4 className="text-2xl font-black text-slate-800 italic">"Mematikan Lintah Darat Tanpa Perang."</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto italic">
               "Saat kita masuk ke suatu desa, kita tidak perlu memusuhi rentenir. Kita cukup menawarkan sistem yang **Lebih Murah, Lebih Cepat, & Milik Sendiri**. Warga akan pindah dengan sendirinya."
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Target Time</p>
                  <p className="text-lg font-black text-indigo-600">30 DAYS</p>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Loyalty Build</p>
                  <p className="text-lg font-black text-indigo-600">ULTRA FAST</p>
               </div>
            </div>
         </div>
      </div>

      {/* Action Banner */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl">🚀</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Buka Wilayah Anda Sekarang."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Punya kenalan tokoh masyarakat di daerah tertentu? Masukkan data wilayahnya, biar AI KoperatifAI menyiapkan **Analisis Kelayakan Penetrasi** untuk Anda.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Jalankan AI Scouting Wilayah</button>
      </div>
    </div>
  );
};

export default MarketPenetration;
