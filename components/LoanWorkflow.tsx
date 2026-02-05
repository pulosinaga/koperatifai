
import React from 'react';

const LoanWorkflow: React.FC = () => {
  const steps = [
    {
      title: 'Simulasi & Konsultasi',
      desc: 'Anggota menggunakan slider untuk menghitung angsuran dan bertanya pada AI Advisor tentang kelayakan usahanya.',
      icon: '🧮',
      tech: 'React State + Gemini AI',
      color: 'bg-indigo-500'
    },
    {
      title: 'AI Credit Scoring',
      desc: 'Sistem menganalisis data internal: kedisiplinan menabung, poin literasi, dan volume transaksi di marketplace.',
      icon: '🧠',
      tech: 'Algoritma Scoring Proprietary',
      color: 'bg-blue-500'
    },
    {
      title: 'Digital Vouching',
      desc: 'Sistem mengirim notifikasi ke 3 teman anggota. Mereka memberikan "Jaminan Karakter" (Vouch) via aplikasi.',
      icon: '🤝',
      tech: 'Notifikasi Push & Verifikasi P2P',
      color: 'bg-emerald-500'
    },
    {
      title: 'Smart Agreement',
      desc: 'Kontrak pinjaman digital diterbitkan. Anggota melakukan tanda tangan digital (E-Signature) yang sah secara hukum.',
      icon: '📜',
      tech: 'Digital Signature & PDF Auth',
      color: 'bg-amber-500'
    },
    {
      title: 'Board Approval (Lean)',
      desc: 'Pengurus menerima draf yang sudah divalidasi AI. Cukup satu klik untuk menyetujui secara resmi.',
      icon: '⚖️',
      tech: 'Management Dashboard',
      color: 'bg-purple-500'
    },
    {
      title: 'API Disbursement',
      desc: 'Uang ditransfer dari Escrow Bank Koperasi ke rekening anggota dalam hitungan detik.',
      icon: '⚡',
      tech: 'SNAP BI / Bank API Gateway',
      color: 'bg-rose-500'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center space-y-6">
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            End-to-End Digital Journey
          </span>
          <h2 className="text-5xl font-black leading-tight italic">Alur Peminjaman Modern.</h2>
          <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Dari sekadar ide di kepala hingga uang cair di rekening. Semuanya transparan, cepat, dan berbasis komunitas.
          </p>
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="relative">
         {/* Central Line */}
         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>
         
         <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Step Node */}
                 <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white font-black z-20 shadow-xl ring-4 ring-white`}>
                    {i + 1}
                 </div>

                 {/* Content Card */}
                 <div className="flex-1 w-full pl-20 md:pl-0">
                    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                       <div className="flex justify-between items-start mb-6">
                          <div className={`w-14 h-14 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                             {step.icon}
                          </div>
                          <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-[9px] font-black uppercase">Step {i+1}</span>
                       </div>
                       <h4 className="text-xl font-black text-slate-800 italic">{step.title}</h4>
                       <p className="text-slate-500 text-sm mt-3 leading-relaxed">{step.desc}</p>
                       <div className="mt-8 pt-6 border-t border-slate-50">
                          <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">Powered By:</p>
                          <p className="text-xs font-bold text-slate-400 mt-1">{step.tech}</p>
                       </div>
                    </div>
                 </div>

                 {/* Spacer for large screens */}
                 <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
         </div>
      </div>

      {/* Philosophy of Speed */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
         <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black italic">Mengapa Kami Berbeda?</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-indigo-400 font-bold text-xs uppercase mb-2">Waktu Proses</p>
                     <p className="text-2xl font-black">15 Menit</p>
                     <p className="text-[10px] text-slate-500">vs 3-5 Hari di Koperasi Biasa</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-emerald-400 font-bold text-xs uppercase mb-2">Agunan (Jaminan)</p>
                     <p className="text-2xl font-black">Karakter AI</p>
                     <p className="text-[10px] text-slate-500">vs Sertifikat Tanah / BPKB</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-80 p-8 bg-indigo-600 rounded-[3rem] text-center shadow-2xl rotate-2">
               <div className="text-5xl mb-4">🚀</div>
               <h4 className="font-bold">Kecepatan Adalah Bentuk Layanan.</h4>
               <p className="text-xs text-indigo-100 mt-2 leading-relaxed italic">"Anggota tidak butuh janji, mereka butuh modal saat peluang datang."</p>
            </div>
         </div>
      </div>

      {/* Call to Action */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-4xl">🏢</div>
         <h4 className="text-2xl font-black text-slate-800 italic">"Satu Sistem, Beribu Harapan."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Gunakan alur ini untuk mempresentasikan transparansi KoperatifAI kepada calon anggota baru. Biarkan mereka melihat bahwa masa depan ekonomi rakyat ada di genggaman mereka sendiri.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Unduh PDF Alur Proses</button>
         </div>
      </div>
    </div>
  );
};

export default LoanWorkflow;
