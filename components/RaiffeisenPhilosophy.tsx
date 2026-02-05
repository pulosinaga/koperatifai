
import React from 'react';

const RaiffeisenPhilosophy: React.FC = () => {
  const principles = [
    {
      title: 'Selbsthilfe',
      subtitle: 'Menolong Diri Sendiri',
      desc: 'Modal bukan datang dari sedekah atau pemerintah, tapi dari penggabungan kekuatan kecil anggota untuk menjadi kekuatan besar.',
      icon: '💪'
    },
    {
      title: 'Selbstverantwortung',
      subtitle: 'Tanggung Jawab Pribadi',
      desc: 'Setiap anggota bertanggung jawab penuh atas keberlangsungan koperasi. Tidak ada mentalitas "korban".',
      icon: '🧠'
    },
    {
      title: 'Selbstverwaltung',
      subtitle: 'Manajemen Mandiri',
      desc: 'Koperasi dikelola oleh anggota, dari anggota, untuk anggota. Tanpa intervensi pihak luar atau elit politik.',
      icon: '⚖️'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Heritage Header */}
      <div className="bg-[#1a1c2c] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-4 border-amber-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-amber-600/20 text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-600/30">
              Historical Foundation
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">"Apa yang tidak bisa dilakukan sendiri, bisa dilakukan oleh banyak orang bersama-sama."</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              — <b>Friedrich Wilhelm Raiffeisen</b> (1818–1888), Bapak Koperasi Kredit Dunia.
            </p>
          </div>
          <div className="w-full lg:w-72 aspect-[3/4] bg-slate-800 rounded-3xl border border-slate-700 p-4 flex flex-col items-center justify-center text-center shadow-inner relative">
             <div className="text-7xl mb-4 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-help">👴</div>
             <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest">FW Raiffeisen</p>
             <p className="text-[9px] text-slate-500 mt-2 px-4 italic leading-relaxed">Pionir perlawanan terhadap riba dan kemiskinan di Jerman Abad ke-19.</p>
          </div>
        </div>
      </div>

      {/* Historical Context Card */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
         <div className="w-full lg:w-1/3 text-center space-y-4">
            <div className="text-6xl">❄️</div>
            <h3 className="text-2xl font-black text-slate-800">Musim Dingin 1846</h3>
            <p className="text-[10px] font-black text-rose-600 uppercase">Tragedi Jerman</p>
         </div>
         <div className="flex-1 space-y-4 text-slate-600 leading-relaxed text-sm">
            <p>
               Di pertengahan abad ke-19, Jerman dilanda musim dingin ekstrem dan kelaparan. Para petani miskin jatuh ke tangan lintah darat (*loan sharks*) yang merampas tanah dan masa depan mereka. 
            </p>
            <p>
               Raiffeisen awalnya mencoba menggalang sedekah dari orang kaya, namun ia sadar: <b>Sedekah hanya menunda lapar, tapi tidak menghilangkan kemiskinan.</b>
            </p>
            <p className="bg-amber-50 p-6 rounded-3xl border-l-4 border-amber-400 font-bold text-slate-800 italic">
               "Kunci kebangkitan rakyat bukan pada kemurahan hati orang luar, tapi pada kerjasama yang jujur di antara kaum miskin itu sendiri."
            </p>
         </div>
      </div>

      {/* The 3 Pillars Section */}
      <div className="space-y-8">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Prinsip 3S: Jiwa KoperatifAI</h3>
            <p className="text-slate-500">Mentransformasi nilai abad ke-19 menjadi teknologi abad ke-21.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
                 <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:bg-indigo-600 transition-colors">
                    {p.icon}
                 </div>
                 <h4 className="text-2xl font-black text-slate-800">{p.title}</h4>
                 <p className="text-xs font-black text-amber-600 uppercase mb-4">{p.subtitle}</p>
                 <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Comparison: Then vs Now */}
      <div className="bg-slate-900 rounded-[3rem] p-10 text-white">
         <h3 className="text-2xl font-black mb-8 text-center uppercase tracking-widest">Dulu vs Sekarang (Digital Age)</h3>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
               <h4 className="text-amber-500 font-bold border-b border-white/10 pb-2">Zaman Raiffeisen (Analog)</h4>
               <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex gap-3"><span>🔸</span> Buku kas fisik yang ditulis tangan.</li>
                  <li className="flex gap-3"><span>🔸</span> Rapat fisik yang butuh waktu lama.</li>
                  <li className="flex gap-3"><span>🔸</span> Validasi karakter via saksi tatap muka.</li>
                  <li className="flex gap-3"><span>🔸</span> Keamanan uang di brankas besi.</li>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="text-indigo-400 font-bold border-b border-white/10 pb-2">Zaman KoperatifAI (Digital)</h4>
               <ul className="space-y-3 text-sm text-slate-200 font-bold">
                  <li className="flex gap-3"><span>🔹</span> Ledger real-time terenkripsi Cloud.</li>
                  <li className="flex gap-3"><span>🔹</span> e-Voting & Chatbot AI pendamping 24/7.</li>
                  <li className="flex gap-3"><span>🔹</span> AI Credit Scoring berbasis perilaku menabung.</li>
                  <li className="flex gap-3"><span>🔹</span> Enkripsi tingkat bank & keamanan escrow.</li>
               </ul>
            </div>
         </div>
      </div>

      {/* Summary Message */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center text-5xl">🏛️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Anda Tidak Sedang Menunggu Masa Depan. Anda Sedang Membangunnya."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            KoperatifAI lahir untuk memastikan buruh, petani, dan rakyat Indonesia tidak lagi menjadi "korban" ekonomi, melainkan menjadi **Arsitek Nasibnya Sendiri**.
         </p>
         <div className="flex gap-4">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold shadow-xl hover:bg-black transition-all uppercase tracking-widest text-xs italic">Menjadi Anggota Mandiri</button>
         </div>
      </div>
    </div>
  );
};

export default RaiffeisenPhilosophy;
