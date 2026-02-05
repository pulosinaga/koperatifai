
import React from 'react';

const TechProcess: React.FC = () => {
  const processSteps = [
    {
      title: 'Akses Mobile (PWA)',
      desc: 'Anggota membuka aplikasi dari layar HP. Data ringan disimpan di cache lokal (Service Worker).',
      icon: '📱',
      tech: 'React + Service Workers',
      load: 'Low Memory'
    },
    {
      title: 'Validasi Identitas AI',
      desc: 'HP mengirim foto KTP & selfie ke Cloud. AI mengekstrak data tanpa input manual anggota.',
      icon: '👁️',
      tech: 'Gemini Vision API',
      load: 'Async Task'
    },
    {
      title: 'Serverless Compute',
      desc: 'Bukan PC di kantor, tapi ribuan server virtual di awan yang memproses hitungan bunga & akuntansi.',
      icon: '☁️',
      tech: 'Edge Functions / Serverless',
      load: 'Scales to Millions'
    },
    {
      title: 'API Banking Gateway',
      desc: 'Sistem Cloud KoperatifAI berbicara langsung ke sistem Bank untuk transfer dana otomatis.',
      icon: '⚡',
      tech: 'SNAP BI API Protocol',
      load: 'Instant Settlement'
    },
    {
      title: 'Immutability Ledger',
      desc: 'Hasil transaksi disimpan di database terenkripsi yang tidak bisa dihapus, menjamin keamanan SHU.',
      icon: '🛡️',
      tech: 'Encrypted SQL / ACID',
      load: 'Permanent Trust'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              System Architecture & Scalability
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Bagaimana Kami Menangani <br/>Ribuan Anggota di HP?</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami memindahkan seluruh beban komputasi dari kantor fisik ke **Cloud & AI**. Inilah alasan mengapa aplikasi tetap ringan namun sangat cerdas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center shadow-xl">
                <p className="text-3xl font-black text-emerald-400">99.9%</p>
                <p className="text-[9px] uppercase font-bold text-slate-500">Uptime Cloud</p>
             </div>
             <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center shadow-xl">
                <p className="text-3xl font-black text-indigo-400">&lt; 1s</p>
                <p className="text-[9px] uppercase font-bold text-slate-500">Latency</p>
             </div>
          </div>
        </div>
      </div>

      {/* Visual Data Flow */}
      <div className="relative">
         {/* Vertical Connection Line */}
         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>
         
         <div className="space-y-16">
            {processSteps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Circle Node */}
                 <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-indigo-600 flex items-center justify-center text-indigo-600 font-black z-20 shadow-xl">
                    {i + 1}
                 </div>

                 {/* Content Card */}
                 <div className="flex-1 w-full pl-20 md:pl-0">
                    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                       <div className="flex justify-between items-start mb-4">
                          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                             {step.icon}
                          </div>
                          <div className="text-right">
                             <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Scalability</p>
                             <p className="text-[10px] font-bold text-emerald-600">{step.load}</p>
                          </div>
                       </div>
                       <h4 className="text-xl font-black text-slate-800 italic">{step.title}</h4>
                       <p className="text-slate-500 text-sm mt-3 leading-relaxed">{step.desc}</p>
                       <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                          <div>
                             <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">Engine:</p>
                             <p className="text-xs font-bold text-slate-400 mt-1">{step.tech}</p>
                          </div>
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                       </div>
                    </div>
                 </div>

                 {/* Empty Spacer */}
                 <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
         </div>
      </div>

      {/* Scalability Proof */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kenapa Sangat Ringan di HP?</h3>
            <div className="space-y-4">
               {[
                 { t: 'PWA Technology', d: 'Aplikasi ini adalah instruksi, bukan aset grafis berat. Ukuran data kurang dari 2MB.', icon: '⚡' },
                 { t: 'Virtual Rendering', d: 'Hanya menampilkan data yang dilihat di layar. Ribuan data lain tetap di cloud sampai Anda butuh.', icon: '🖥️' },
                 { t: 'AI Remote Brain', d: 'HP hanya mengirim "Pertanyaan", Server Cloud kami yang "Berpikir". Baterai HP tetap hemat.', icon: '🧠' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-2xl shrink-0">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{item.t}</p>
                       <p className="text-xs text-slate-500 mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-xl">
            <h3 className="text-2xl font-black italic">"Kedaulatan Melalui Efisiensi."</h3>
            <p className="text-indigo-100 leading-relaxed text-sm">
               Dengan memangkas biaya server lokal dan staf admin manual, kita bisa mengalokasikan <b>90% pendapatan</b> kembali ke Sisa Hasil Usaha (SHU) anggota. Teknologi ini bukan hanya gaya-gayaan, tapi senjata untuk kemakmuran Anda.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
               <div>
                  <p className="text-[10px] font-black uppercase text-indigo-400">Total Transaksi Saat Ini</p>
                  <p className="text-xl font-bold">12,450 / day</p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-indigo-400">Server Load</p>
                  <p className="text-xl font-bold text-emerald-400">0.2%</p>
               </div>
            </div>
         </div>
      </div>

      {/* Conclusion Banner */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shadow-inner">🚀</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Ribuan Anggota, Satu Genggaman."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            KoperatifAI dirancang untuk tumbuh bersama Anda. Sistem kami siap menampung hingga <b>1 Juta Anggota</b> tanpa perlu menambah satu meja pun di kantor fisik. Inilah masa depan ekonomi rakyat Indonesia.
         </p>
         <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Lihat Whitepaper Arsitektur</button>
      </div>
    </div>
  );
};

export default TechProcess;
