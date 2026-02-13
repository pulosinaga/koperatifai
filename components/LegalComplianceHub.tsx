
import React from 'react';

const LegalComplianceHub: React.FC = () => {
  const docs = [
    { title: 'Akta Pendirian Notaris', ref: 'No. 42 Tanggal 12/01/2026', status: 'VERIFIED', icon: '🖋️' },
    { title: 'SK Kemenkumham', ref: 'AHU-001248.AH.01.26', status: 'ACTIVE', icon: '⚖️' },
    { title: 'NIB (Oss RBA)', ref: '912030012456', status: 'VALID', icon: '🆔' },
    { title: 'Izin Usaha Simpan Pinjam', ref: 'Kemenkop-UKM Level Nasional', status: 'AUTHORIZED', icon: '🏛️' }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Institutional Legitimacy v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Legal Standing KoperatifAI.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Kedaulatan teknologi yang dipayungi hukum negara. Transparansi dokumen legal untuk kepercayaan anggota 100%.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">📜</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Badan Hukum</p>
             <p className="text-xl font-black text-emerald-400 mt-1 uppercase">KSP NASIONAL</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {docs.map((doc, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{doc.icon}</div>
              <h4 className="font-black text-slate-800 text-sm leading-tight mb-2">{doc.title}</h4>
              <p className="text-[10px] text-slate-400 font-mono mb-4">{doc.ref}</p>
              <div className="mt-auto">
                 <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[8px] font-black uppercase tracking-widest">{doc.status}</span>
              </div>
           </div>
        ))}
      </div>

      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0 shadow-inner">⚖️</div>
            <div className="flex-1 space-y-4">
               <h4 className="text-2xl font-black text-slate-800 italic">"Aturan Main yang Adil."</h4>
               <p className="text-slate-500 leading-relaxed italic">
                  Sesuai <b>UU No. 25/1992 Pasal 17</b>, Anggota adalah pemilik sekaligus pengguna jasa. Di KoperatifAI, kami memastikan hak suara Anda dijamin oleh sistem voting digital yang tidak bisa dimanipulasi (Immutable e-RAT).
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LegalComplianceHub;
