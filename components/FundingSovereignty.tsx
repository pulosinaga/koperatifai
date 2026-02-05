
import React from 'react';

const FundingSovereignty: React.FC = () => {
  const sovereigntyRatio = 100; // 100% Member Owned

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
              Sovereignty First Strategy
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Menjaga Marwah CU: <br/>Mandiri di Tengah Tawaran Negara.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Prinsip <b>DARI-OLEH-UNTUK</b> Anggota adalah garis merah yang tidak boleh dilanggar. Pemerintah bisa membantu, tapi tidak boleh memiliki.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[2.5rem] shadow-2xl text-slate-800 text-center">
             <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                   <path className="text-slate-100" strokeDasharray="100, 100" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                   <path className="text-emerald-500" strokeDasharray={`${sovereigntyRatio}, 100`} strokeWidth="3" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-black text-2xl text-indigo-600">100%</div>
             </div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sovereignty Meter</p>
             <p className="text-sm font-black text-emerald-600 mt-1">Full Member Control</p>
          </div>
        </div>
      </div>

      {/* Funding Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Apa Yang Kita TERIMA?</h3>
            <p className="text-sm text-slate-500">Peluang kolaborasi yang mempercepat teknologi tanpa mengorbankan kedaulatan.</p>
            <div className="space-y-4">
               {[
                 { t: 'Hibah Pengembangan Teknologi', d: 'Dana untuk riset AI dan infrastruktur cloud. Ini adalah "Hadiah" tanpa kewajiban bagi hasil.', icon: '🎁' },
                 { t: 'Biaya Lisensi (SaaS)', d: 'Pemerintah membayar Anda untuk menggunakan sistem KoperatifAI di koperasi lain.', icon: '🏷️' },
                 { t: 'Fasilitas Pelatihan Digital', d: 'Negara menyediakan mentor dan kuota untuk edukasi literasi anggota kita.', icon: '🎓' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-emerald-900">{item.t}</p>
                       <p className="text-[10px] text-emerald-700 mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-rose-900 p-10 rounded-[3rem] text-white space-y-6 shadow-xl">
            <h3 className="text-2xl font-black italic">Apa Yang Kita TOLAK?</h3>
            <p className="text-sm text-rose-200">Batas tegas untuk menjaga kemandirian penuh para anggota.</p>
            <div className="space-y-4">
               {[
                 { t: 'Suntikan Modal Inti', d: 'Modal kerja untuk pinjaman harus murni dari simpanan anggota. Kita menolak dana talangan luar.', icon: '🚫' },
                 { t: 'Intervensi Kebijakan', d: 'Pemerintah tidak boleh menentukan siapa yang boleh pinjam dan berapa bunganya.', icon: '👮' },
                 { t: 'Kepemilikan Saham Platform', d: 'Negara tidak boleh memiliki saham di startup Anda. Anda tetap Founder tunggal.', icon: '🔑' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-white/10 rounded-2xl border border-white/10">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-white">{item.t}</p>
                       <p className="text-[10px] text-rose-300 mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Anticipation Roadmap */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Antisipasi Strategis</h3>
            <p className="text-slate-500">Bagaimana kita menghadapi "Rayuan" dana besar di masa depan.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
               <div className="text-3xl">🧱</div>
               <h4 className="font-bold text-slate-800 italic">"Escrow Partition"</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Jika ada dana pemerintah masuk (hibah), AI secara otomatis memisahkannya dalam "Pocket" yang berbeda. Dana anggota tidak pernah tercampur dengan dana luar.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
               <div className="text-3xl">⚖️</div>
               <h4 className="font-bold text-slate-800 italic">"Smart Bylaws"</h4>
               <p className="text-xs text-slate-500 leading-relaxed">AD/ART digital kita secara otomatis memblokir setiap transaksi yang mencoba memasukkan modal asing ke dalam modal inti anggota.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
               <div className="text-3xl">🤖</div>
               <h4 className="font-bold text-slate-800 italic">"Sovereignty Guard"</h4>
               <p className="text-xs text-slate-500 leading-relaxed">AI bertindak sebagai Pengawas (Auditor) independen yang akan membunyikan alarm ke seluruh ponsel anggota jika kedaulatan terancam.</p>
            </div>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl text-white">🛡️</div>
         <h4 className="text-3xl font-black text-white max-w-xl italic">"Bantuan Negara adalah Bonus, Tapi Anggota adalah Napas Utama."</h4>
         <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            KoperatifAI dirancang untuk tetap hidup meskipun pemerintah tidak membantu sepeser pun. Itulah arti dari <b>Kemandirian Sejati</b>.
         </p>
      </div>
    </div>
  );
};

export default FundingSovereignty;
