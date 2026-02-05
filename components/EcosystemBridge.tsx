
import React from 'react';

const EcosystemBridge: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="bg-indigo-950 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Strategic Synergy
          </span>
          <h2 className="text-4xl font-black mt-4 leading-tight">Bank Sebagai Jembatan, <br/>Koperasi Sebagai Tujuan.</h2>
          <p className="text-indigo-200 mt-4 text-lg leading-relaxed max-w-2xl">
            Kami bekerja sama dengan bank komersial hanya untuk menyediakan **"Pintu Masuk Digital"** yang cepat. Koperasi tetap memegang kendali penuh atas dana dan kebijakan.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
           <div className="text-3xl">🏦</div>
           <h4 className="text-lg font-bold text-slate-800">Peran Bank</h4>
           <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex gap-2"><span>✅</span> Virtual Account Setoran</li>
              <li className="flex gap-2"><span>✅</span> Transfer Antar Bank</li>
              <li className="flex gap-2"><span>✅</span> Infrastruktur Pembayaran</li>
           </ul>
           <p className="text-[10px] font-bold text-slate-400 uppercase italic">*Hanya sebagai penyedia jasa transfer.</p>
        </div>

        <div className="bg-indigo-600 p-8 rounded-[2.5rem] shadow-xl space-y-4 text-white">
           <div className="text-3xl">🤖</div>
           <h4 className="text-lg font-bold">Peran KoperatifAI</h4>
           <ul className="space-y-3 text-sm text-indigo-100">
              <li className="flex gap-2"><span>✅</span> Pengelolaan Dana Anggota</li>
              <li className="flex gap-2"><span>✅</span> Skor Kredit AI & Profiling</li>
              <li className="flex gap-2"><span>✅</span> Pembagian SHU Otomatis</li>
           </ul>
           <p className="text-[10px] font-bold text-indigo-300 uppercase italic">*Otak dan pemilik kebijakan utama.</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
           <div className="text-3xl">👥</div>
           <h4 className="text-lg font-bold text-slate-800">Keuntungan Anggota</h4>
           <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex gap-2"><span>✅</span> Setor dari ATM mana saja</li>
              <li className="flex gap-2"><span>✅</span> Dana cair dalam hitungan detik</li>
              <li className="flex gap-2"><span>✅</span> Aman karena sistem berlapis</li>
           </ul>
           <p className="text-[10px] font-bold text-slate-400 uppercase italic">*Kemudahan bank, keuntungan koperasi.</p>
        </div>
      </div>

      <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] p-10">
         <h3 className="text-2xl font-black text-slate-800 mb-8 text-center">Bagaimana Uang Anda Berputar?</h3>
         <div className="flex flex-col md:flex-row items-center gap-6 justify-between max-w-4xl mx-auto">
            <div className="text-center group">
               <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mx-auto mb-3 border border-slate-100 group-hover:scale-110 transition-transform">📱</div>
               <p className="text-xs font-bold text-slate-800 uppercase">Aplikasi Anggota</p>
            </div>
            <div className="text-indigo-300 text-2xl hidden md:block">→</div>
            <div className="text-center group">
               <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mx-auto mb-3 border border-slate-100 group-hover:scale-110 transition-transform">🏧</div>
               <p className="text-xs font-bold text-slate-800 uppercase">Gateway Bank</p>
               <p className="text-[8px] text-slate-400">(Hanya Lewat)</p>
            </div>
            <div className="text-indigo-300 text-2xl hidden md:block">→</div>
            <div className="text-center group">
               <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] shadow-lg flex items-center justify-center text-4xl mx-auto mb-3 text-white ring-8 ring-indigo-50 group-hover:scale-110 transition-transform">◈</div>
               <p className="text-xs font-black text-indigo-600 uppercase">KoperatifAI Ledger</p>
               <p className="text-[8px] text-indigo-400">(Uang Bermuara di Sini)</p>
            </div>
         </div>
      </div>

      <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🛡️</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-900">Perlindungan Kedaulatan</h4>
            <p className="text-emerald-700/70 mt-2 leading-relaxed">
               Bank tidak bisa menyentuh dana koperasi kita tanpa instruksi sistem. Dana kita di bank disimpan dalam rekening <strong>Escrow/Kolektif</strong> atas nama Koperasi, yang dilindungi oleh undang-undang perkoperasian.
            </p>
         </div>
      </div>
    </div>
  );
};

export default EcosystemBridge;
