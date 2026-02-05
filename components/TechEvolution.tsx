
import React from 'react';

const TechEvolution: React.FC = () => {
  const steps = [
    {
      era: 'Era 1.0 (Manual)',
      title: 'Koperasi Tradisional',
      tech: 'Buku Fisik & Kwitansi',
      status: 'Masa Lalu',
      desc: 'Pencatatan dilakukan di buku besar. Anggota harus datang ke kantor untuk melihat saldo.',
      icon: '📝',
      current: false
    },
    {
      era: 'Era 2.0 (Digital)',
      title: 'Koperasi Terkomputerisasi',
      tech: 'Software Excel / Desktop',
      status: 'Umum',
      desc: 'Admin menggunakan software sederhana. Laporan dibuat bulanan secara manual.',
      icon: '💻',
      current: false
    },
    {
      era: 'Era 3.0 (Mobile)',
      title: 'Credit Union App',
      tech: 'Mobile Banking & Cloud',
      status: 'Modern (Barat)',
      desc: 'Anggota bisa cek saldo via HP. Cloud digunakan untuk keamanan data terpusat.',
      icon: '📱',
      current: false
    },
    {
      era: 'Era 4.0 (AI-Native)',
      title: 'KoperatifAI Ecosystem',
      tech: 'Generative AI & Real-time Ledger',
      status: 'Terdepan (Masa Depan)',
      desc: 'Otomasi akuntansi total, penasihat keuangan pintar, dan transparansi aset detik demi detik.',
      icon: '🧠',
      current: true
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em]">Future Roadmap</span>
        <h2 className="text-4xl font-black text-slate-800 mt-2">Evolusi Teknologi Koperasi</h2>
        <p className="text-slate-500 mt-4 leading-relaxed italic">
          "Kita tidak hanya mengejar ketertinggalan dari perbankan, kita melompat melampaui standar mereka."
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${
                step.current 
                  ? 'border-indigo-600 shadow-2xl shadow-indigo-100 scale-105 ring-4 ring-indigo-50' 
                  : 'border-slate-50 shadow-sm opacity-70 grayscale hover:grayscale-0 hover:opacity-100'
              }`}
            >
              <div className="text-4xl mb-6">{step.icon}</div>
              <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">{step.era}</p>
              <h4 className="text-lg font-black text-slate-800 leading-tight">{step.title}</h4>
              <p className="text-xs font-bold text-slate-400 mt-2 mb-4">{step.tech}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              
              {step.current && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-tighter">
                  ANDA DI SINI
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-4">
             <h3 className="text-2xl font-bold">Mengapa Credit Union Amerika menyukai sistem seperti ini?</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Di negara maju, masalah utama koperasi adalah **engagement** anggota muda (Gen Z & Alpha). Generasi ini tidak suka datang ke rapat atau membaca laporan PDF 50 halaman. Mereka ingin interaksi cepat, visual, dan berbasis data—persis seperti yang KoperatifAI tawarkan.
             </p>
             <div className="flex gap-4 pt-4">
                <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/10">
                   <p className="text-indigo-400 text-xs font-bold uppercase mb-1">Kecepatan</p>
                   <p className="text-lg font-bold">0.5s</p>
                   <p className="text-[10px] text-slate-500">Rata-rata waktu transaksi</p>
                </div>
                <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/10">
                   <p className="text-indigo-400 text-xs font-bold uppercase mb-1">Aksesibilitas</p>
                   <p className="text-lg font-bold">24/7</p>
                   <p className="text-[10px] text-slate-500">Ketersediaan sistem</p>
                </div>
             </div>
          </div>
          <div className="bg-indigo-600 p-8 rounded-[2rem] text-center shadow-2xl">
             <div className="text-4xl mb-4">🏆</div>
             <p className="text-sm font-bold leading-tight">Standar Teknologi Kita Diakui Sebagai "Future Proof"</p>
             <button className="mt-6 w-full py-3 bg-white text-indigo-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-colors">
               Pelajari Dokumen Teknis
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechEvolution;
