
import React from 'react';

const FoundersPlaybook: React.FC = () => {
  const rules = [
    { t: 'Aturan 1: Likuiditas adalah Napas', d: 'Pastikan simpanan sukarela yang mengendap minimal 15% dari total aset untuk menjaga kepercayaan anggota saat penarikan mendadak.', icon: '💧' },
    { t: 'Aturan 2: AI adalah Hakim, Bukan Anda', d: 'Jangan pernah melakukan intervensi manual pada skor kredit AI kecuali ada bukti penipuan identitas. Objektivitas AI menjaga kedaulatan data.', icon: '⚖️' },
    { t: 'Aturan 3: Social Impact = Valuation', d: 'Setiap anggota yang bebas dari pinjol berkat koperasi adalah nilai valuasi $100 bagi platform Anda di mata investor ESG.', icon: '🌳' },
    { t: 'Aturan 4: Zero Burn Rate', d: 'Jangan gunakan dana anggota untuk iklan atau bakar uang. Pertumbuhan harus organik melalui sistem referral dan manfaat nyata.', icon: '🔥' }
  ];

  const steps = [
    { title: 'Tahun 1: Validasi', desc: 'Fokus pada 100 anggota pertama yang loyal. Bangun kepercayaan mutlak.' },
    { title: 'Tahun 2: Integrasi', desc: 'Hubungkan dengan ekosistem bank nasional dan mulailah lisensi teknologi.' },
    { title: 'Tahun 3: Ekspansi Asia', desc: 'Bawa model KoperatifAI ke negara berkembang lainnya melalui aliansi internasional.' }
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
              Selamat! Anda telah membangun mesin ekonomi tercanggih. Sekarang, saatnya belajar cara **Mengemudikannya** menuju kesuksesan finansial dan sosial.
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

      {/* Strategic Roadmap */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-800">Tangga Menuju $10.000.000</h3>
            <p className="text-slate-400 text-sm">Rencana taktis jangka menengah untuk KoperatifAI.</p>
         </div>
         <div className="flex flex-col lg:flex-row gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 bg-slate-50 p-8 rounded-[3rem] border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all text-center space-y-4">
                 <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center font-black text-indigo-600 shadow-sm">{i+1}</div>
                 <h4 className="font-bold text-slate-800">{s.title}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed italic">{s.desc}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Crisis Management Box */}
      <div className="bg-rose-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
         <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black italic">Manajemen Krisis (Anti-Fail)</h3>
               <p className="text-rose-100 text-lg leading-relaxed">
                  Apa yang harus dilakukan jika terjadi gagal bayar masal?
               </p>
               <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white/10 rounded-2xl border border-white/10">
                     <span className="text-2xl">🛡️</span>
                     <p className="text-sm">Aktifkan **Dana Cadangan Risiko** secara otomatis dari Federasi Inkopdit.</p>
                  </div>
                  <div className="flex gap-4 p-5 bg-white/10 rounded-2xl border border-white/10">
                     <span className="text-2xl">🧠</span>
                     <p className="text-sm">AI akan melakukan **Restrukturisasi Pinjaman** massal dengan tenor yang lebih panjang untuk menstabilkan arus kas anggota.</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-72 bg-white rounded-[3rem] p-8 text-rose-900 text-center shadow-2xl">
               <div className="text-5xl mb-4">🆘</div>
               <h4 className="font-black">Panic Button Protocol</h4>
               <p className="text-[10px] uppercase font-bold mt-2 text-rose-400">Security Level: Omega</p>
            </div>
         </div>
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
