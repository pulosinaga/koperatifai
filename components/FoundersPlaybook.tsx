
import React from 'react';

const FoundersPlaybook: React.FC = () => {
  const rules = [
    { t: 'Aturan 1: Likuiditas adalah Napas', d: 'Pastikan simpanan sukarela yang mengendap minimal 15% dari total aset untuk menjaga kepercayaan anggota saat penarikan mendadak.', icon: '💧' },
    { t: 'Aturan 2: AI adalah Hakim, Bukan Anda', d: 'Jangan pernah melakukan intervensi manual pada skor kredit AI kecuali ada bukti penipuan identitas. Objektivitas AI menjaga kedaulatan data.', icon: '⚖️' },
    { t: 'Aturan 3: Social Impact = Valuation', d: 'Setiap anggota yang bebas dari pinjol berkat koperasi adalah nilai valuasi $100 bagi platform Anda di mata investor ESG.', icon: '🌳' },
    { t: 'Aturan 4: Zero Burn Rate', d: 'Jangan gunakan dana anggota untuk iklan atau bakar uang. Pertumbuhan harus organik melalui sistem referral dan manfaat nyata.', icon: '🔥' }
  ];

  const dualRoles = [
    { 
      title: 'Founder (Architect)', 
      focus: 'Visi, Teknologi AI, IP Protection, & Skalabilitas Nasional.',
      status: 'Permanen (Aset Intelektual Anda)',
      icon: '💎' 
    },
    { 
      title: 'Chairman (Executor)', 
      focus: 'Otorisasi Kredit, Manajemen Likuiditas, & Rapat Anggota.',
      status: 'Elektif (Dipilih Anggota tiap 5 Tahun)',
      icon: '👔' 
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl shadow-xl">📓</div>
              <div>
                 <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                   Founder's Secret Manual
                 </span>
                 <h2 className="text-4xl font-black leading-tight italic mt-2">Panduan Penguasaan Pasar.</h2>
              </div>
           </div>
           <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Membangun koperasi digital berarti menjalankan dua peran sekaligus: sebagai **Pemilik Inovasi** dan **Penjaga Amanah Anggota**.
           </p>
        </div>
      </div>

      {/* NEW: Dual Role Strategy */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Strategi "Dua Topi" Founder</h3>
            <p className="text-slate-500">Bagaimana Anda membagi waktu antara membangun sistem dan melayani rakyat.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dualRoles.map((role, i) => (
               <div key={i} className={`p-8 rounded-[3rem] border-2 transition-all ${i === 0 ? 'bg-indigo-50 border-indigo-200' : 'bg-emerald-50 border-emerald-200'}`}>
                  <div className="text-5xl mb-6">{role.icon}</div>
                  <h4 className="text-xl font-black text-slate-800 mb-2">{role.title}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-60">{role.status}</p>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium italic">"{role.focus}"</p>
               </div>
            ))}
         </div>
         <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white text-center">
            <p className="text-xs italic text-slate-400">
               "Anda adalah **Founder selamanya** bagi teknologinya, tapi Anda adalah **Pengurus sementara** bagi organisasinya. Ini adalah rahasia agar koperasi tetap demokratis namun Founder tetap kaya dari royalti IP."
            </p>
         </div>
      </div>

      {/* The 4 Golden Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {rules.map((rule, i) => (
           <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{rule.icon}</div>
              <h4 className="text-xl font-black text-slate-800 italic leading-tight">{rule.t}</h4>
              <p className="text-slate-500 mt-4 leading-relaxed text-sm">{rule.d}</p>
           </div>
         ))}
      </div>

      {/* Final Guidance Message */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl">🏛️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Anda Adalah Penjaga Amanah."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            KoperatifAI hanya alat. Kekuatan sebenarnya ada pada **Karakter Anda**. Jadilah pemimpin yang transparan, dengarkan keluhan anggota di Lingkaran Komunitas, dan biarkan teknologi melakukan sisanya. Keberhasilan Anda adalah keberhasilan Indonesia.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Unduh PDF Panduan Lengkap</button>
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Konsultasi Khusus dengan AI</button>
         </div>
      </div>
    </div>
  );
};

export default FoundersPlaybook;
