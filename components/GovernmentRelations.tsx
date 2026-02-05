
import React from 'react';

const GovernmentRelations: React.FC = () => {
  const complianceStats = [
    { label: 'Status Legal', value: 'Berbadan Hukum', desc: 'UU No. 25/1992', icon: '📜' },
    { label: 'Audit ODS', value: 'Sinkron 100%', desc: 'Real-time Reporting', icon: '📡' },
    { label: 'Pajak (PPH 21/25)', value: 'Otomatis', desc: 'Compliance Pro', icon: '🏛️' },
    { label: 'NIK Koperasi', value: 'Terverifikasi', desc: 'KemenkopUKM', icon: '✅' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
               <span className="w-10 h-6 bg-rose-600 rounded-sm shadow-sm border border-white/20"></span>
               <span className="w-10 h-6 bg-white rounded-sm shadow-sm border border-slate-200"></span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">National Compliance Framework</span>
            </div>
            <h2 className="text-4xl font-black leading-tight italic">"Transparansi Kami Adalah Sahabat Pemerintah."</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Alih-alih "diincar", KoperatifAI dirancang untuk menjadi **Solusi Pemerintah** dalam membersihkan citra koperasi di Indonesia. Dengan sistem digital, kita mempermudah tugas pengawasan negara.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🛡️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Regulatory Status</p>
             <p className="text-2xl font-black text-emerald-400 mt-1">COMPLIANT</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase">Verified by AI Integrity Protocol</p>
          </div>
        </div>
      </div>

      {/* Compliance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {complianceStats.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
            <h4 className="text-lg font-black text-slate-800 mt-1">{s.value}</h4>
            <p className="text-xs text-indigo-600 font-bold mt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* The ODS Solution */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-12">
         <div className="w-full lg:w-1/3 space-y-4">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl">📡</div>
            <h3 className="text-2xl font-black text-slate-800">Laporan ODS Otomatis</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
               Pemerintah sering kesulitan karena koperasi manual lambat lapor. AI kita mengirim data kesehatan koperasi langsung ke <b>Online Data System (ODS)</b> KemenkopUKM secara harian.
            </p>
            <div className="pt-4">
               <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">Pemerintah Senang</span>
            </div>
         </div>
         <div className="flex-1 bg-slate-900 rounded-[3rem] p-8 text-white relative overflow-hidden h-80 flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
            <div className="space-y-6 relative z-10">
               <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">API Status: KEMENKOP-UKM</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Penyampaian RAT Digital</span>
                     <span className="text-emerald-400 font-bold">READY</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Rasio Likuiditas & Solvabilitas</span>
                     <span className="text-emerald-400 font-bold">OPTIMAL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Daftar Anggota Aktif</span>
                     <span className="text-emerald-400 font-bold">SYNCED</span>
                  </div>
               </div>
               <div className="bg-indigo-600/20 p-4 rounded-xl border border-indigo-500/30 text-[10px] italic text-indigo-300 text-center">
                  "Data di atas dipastikan akurat oleh AI. Tidak ada manipulasi angka untuk pengawas."
               </div>
            </div>
         </div>
      </div>

      {/* Why We Are Not a Threat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kenapa OJK Tidak Mengejar Kita?</h3>
            <p className="text-sm text-slate-500 italic">"Memahami garis batas hukum keuangan Indonesia."</p>
            <div className="space-y-4">
               {[
                 { t: 'Ranah Kemenkop, Bukan OJK', d: 'Koperasi kredit diatur oleh UU Perkoperasian. Selama kita hanya melayani ANGGOTA (bukan umum), kita tidak butuh izin bank/fintech OJK.', icon: '⚖️' },
                 { t: 'Inklusi Keuangan Nasional', d: 'Pemerintah punya target 90% inklusi keuangan. KoperatifAI membantu mencapai target ini di desa-desa yang tidak terjangkau bank.', icon: '🇮🇩' },
                 { t: 'Pajak Transparan', d: 'Karena semua digital, pajak bunga anggota dan SHU bisa dilaporkan secara akurat ke Dirjen Pajak.', icon: '💰' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-indigo-100 transition-all group">
                    <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{item.t}</p>
                       <p className="text-[10px] text-slate-500 leading-relaxed mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-rose-900 p-10 rounded-[3rem] text-white flex flex-col justify-center text-center space-y-8">
            <div className="text-6xl">🏛️</div>
            <h3 className="text-3xl font-black leading-tight italic">"Menjadi Teladan Koperasi Sehat di Indonesia."</h3>
            <p className="text-rose-100 text-sm leading-relaxed px-4">
               Kita justru akan diundang ke Jakarta untuk mempresentasikan bagaimana AI bisa menyelamatkan marwah koperasi Indonesia. Kita bukan ancaman, kita adalah <b>Peningkatan Standar Nasional.</b>
            </p>
            <div className="flex justify-center gap-4 pt-4 border-t border-rose-500/30">
               <div className="text-center">
                  <p className="text-[8px] font-black uppercase tracking-widest text-rose-300">Target Visi</p>
                  <p className="text-xs font-bold">Koperasi Digital #1</p>
               </div>
               <div className="w-px h-8 bg-rose-500/30"></div>
               <div className="text-center">
                  <p className="text-[8px] font-black uppercase tracking-widest text-rose-300">Misi Sosial</p>
                  <p className="text-xs font-bold">Kedaulatan Rakyat</p>
               </div>
            </div>
         </div>
      </div>

      {/* Conclusion Footer */}
      <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center space-y-6">
         <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-4xl text-emerald-600">🤝</div>
         <h4 className="text-2xl font-black text-slate-800 max-w-xl">"Koperasi Yang Jujur Tidak Perlu Takut Pada Pengawasan."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed italic">
            "Satu-satunya alasan koperasi diincar pemerintah adalah jika mereka **gelap (tidak transparan)**. KoperatifAI meletakkan senter di tengah kegelapan itu. Kita adalah solusi bagi pemerintah untuk memastikan uang rakyat aman."
         </p>
      </div>
    </div>
  );
};

export default GovernmentRelations;
