
import React from 'react';

const BrandingIdentity: React.FC = () => {
  const logoUsage = [
    {
      title: 'Identitas Produk (App Brand)',
      logo: '◈',
      name: 'KoperatifAI Modern Logo',
      usage: 'UI/UX Aplikasi, Ikon HP, Media Sosial, & Kampanye Marketing.',
      philosophy: 'Mewakili teknologi AI (simbol berlian/bintang) dan kedaulatan empat pilar ekonomi.',
      color: 'bg-indigo-600 text-white'
    },
    {
      title: 'Identitas Hukum (Legal Authority)',
      logo: '🏛️',
      name: 'Logo Koperasi Indonesia',
      usage: 'Berita Acara RAT, Sertifikat Saham, Laporan ODS, & Dokumen Notaris.',
      philosophy: 'Simbol kepatuhan terhadap UU No. 25/1992 dan pengakuan negara Republik Indonesia.',
      color: 'bg-emerald-600 text-white'
    },
    {
      title: 'Identitas Gerakan (Movement Icon)',
      logo: '🤝',
      name: 'Logo CU (Credit Union)',
      usage: 'Edukasi Literasi, Forum Komunitas, & Hubungan Internasional (WOCCU).',
      philosophy: 'Tangan berjabat melambangkan kemandirian, kepercayaan, dan tolong-menolong.',
      color: 'bg-amber-500 text-white'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Visual Identity Strategy
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Branding KoperatifAI: <br/>Tiga Wajah Satu Jiwa.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kita tidak memilih satu, kita menggunakan ketiganya secara strategis untuk membangun **Kepercayaan**, **Legitimasi**, dan **Kebanggaan**.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="flex gap-4 mb-4">
                <span className="text-2xl opacity-30">◈</span>
                <span className="text-2xl">⚖️</span>
                <span className="text-2xl opacity-30">🤝</span>
             </div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Brand Balance</p>
             <p className="text-xl font-black text-indigo-900 mt-1">Sovereign Identity</p>
          </div>
        </div>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {logoUsage.map((item, i) => (
           <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className={`w-24 h-24 ${item.color} rounded-[2rem] flex items-center justify-center text-5xl mb-8 shadow-xl group-hover:scale-110 transition-transform mx-auto`}>
                 {item.logo}
              </div>
              <h4 className="text-xl font-black text-slate-800 text-center mb-2">{item.title}</h4>
              <p className="text-[10px] font-bold text-indigo-600 uppercase text-center mb-6 tracking-widest">{item.name}</p>
              
              <div className="space-y-4 flex-1">
                 <div className="p-4 bg-slate-50 rounded-2xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Penggunaan:</p>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed italic">"{item.usage}"</p>
                 </div>
                 <div className="p-4 bg-indigo-50 rounded-2xl">
                    <p className="text-[10px] font-black text-indigo-400 uppercase mb-1">Filosofi:</p>
                    <p className="text-xs text-indigo-900 font-bold leading-relaxed">{item.philosophy}</p>
                 </div>
              </div>
           </div>
        ))}
      </div>

      {/* Strategic Decision Section */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-96 aspect-square bg-slate-900 rounded-[4rem] flex flex-col items-center justify-center p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="text-7xl">🎨</div>
               <h4 className="text-xl font-bold text-indigo-400 uppercase tracking-widest">The "Hybrid" Brand</h4>
               <p className="text-xs text-slate-400 leading-relaxed italic">"Modern di permukaan, Kokoh di pondasi, Hangat di hati."</p>
            </div>
            
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-slate-800">Kenapa Menggunakan 3 Logo?</h3>
               <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                     <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 text-xl">🛡️</div>
                     <div>
                        <h5 className="font-bold text-slate-800">Menghindari Kesan "Aplikasi Bodong"</h5>
                        <p className="text-sm text-slate-500 mt-1">Kehadiran logo Koperasi Indonesia yang resmi pada dokumen legal menghapus keraguan calon anggota pionir.</p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start">
                     <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 text-xl">🌎</div>
                     <div>
                        <h5 className="font-bold text-slate-800">Menarik Anggota Milenial & Gen Z</h5>
                        <p className="text-sm text-slate-500 mt-1">Wajah digital KoperatifAI yang segar (`◈`) menarik generasi muda yang enggan bergabung dengan koperasi "kuno" yang berdebu.</p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start">
                     <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 text-xl">✊</div>
                     <div>
                        <h5 className="font-bold text-slate-800">Menjaga Jiwa Gotong Royong</h5>
                        <p className="text-sm text-slate-500 mt-1">Simbol CU menjamin anggota bahwa meskipun teknologinya canggih, nilai dasarnya tetap tolong menolong.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Founder Action Callout */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">✨</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Identitas Visual Adalah Janji Founder Kepada Rakyat."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Pilihlah skema warna yang menenangkan namun tegas (Indigo & Emerald). Gunakan logo-logo ini secara konsisten di seluruh aplikasi untuk membangun imperium ekonomi yang berwibawa.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Download Brand Guidelines v1.0
         </button>
      </div>
    </div>
  );
};

export default BrandingIdentity;
