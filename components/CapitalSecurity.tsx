
import React from 'react';

const CapitalSecurity: React.FC = () => {
  const metrics = [
    { label: 'Modal Inti (Equity)', value: 'Rp 5.2 Miliar', status: 'PROTECTED', color: 'text-indigo-600' },
    { label: 'Simpanan Sukarela', value: 'Rp 7.2 Miliar', status: 'LIQUID', color: 'text-emerald-600' },
    { label: 'Reserve Fund (PEARLS)', value: '10.2%', status: 'OPTIMAL', color: 'text-indigo-600' },
    { label: 'Risk Coverage Ratio', value: '145%', status: 'SECURE', color: 'text-emerald-600' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Capital Header */}
      <div className="bg-[#0b0e14] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Core Capital Protection Layer
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Benteng Modal Abadi: <br/>Kekuatan yang Tak Tergoyahkan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Simpanan Pokok & Wajib Anda bukan sekadar angka di aplikasi. Mereka adalah **Fondasi Hukum** yang dikunci oleh sistem untuk menjamin keberlangsungan koperasi selamanya.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl relative">
             <div className="text-6xl mb-4">🛡️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Capital Adequacy Ratio (CAR)</p>
             <p className="text-5xl font-black text-emerald-400 mt-2">18.4%</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase">Standard Minimal: 8.0% (OJK/WOCCU)</p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</p>
            <h3 className={`text-xl font-black mt-1 ${m.color}`}>{m.value}</h3>
            <div className="mt-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{m.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Asset Shield Visualization */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">"The Asset Shield" (Perisai Aset)</h3>
            <p className="text-slate-500">Bagaimana AI melindungi modal Anda dari setiap ancaman.</p>
         </div>

         <div className="space-y-10 max-w-3xl mx-auto">
            <div className="space-y-4">
               <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                  <span className="text-indigo-600">Modal Abadi (Untouchable)</span>
                  <span className="text-slate-400">Rp 5.2 Miliar</span>
               </div>
               <div className="h-6 w-full bg-slate-100 rounded-2xl overflow-hidden flex shadow-inner">
                  <div className="h-full bg-indigo-600 w-full animate-pulse"></div>
               </div>
               <p className="text-[10px] text-slate-400 italic">"Modal ini dilindungi hukum dan sistem AI; tidak bisa ditarik kecuali anggota mengundurkan diri."</p>
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                  <span className="text-emerald-600">Cadangan Risiko (Risk Buffer)</span>
                  <span className="text-slate-400">Rp 1.5 Miliar</span>
               </div>
               <div className="h-6 w-full bg-slate-100 rounded-2xl overflow-hidden flex shadow-inner">
                  <div className="h-full bg-emerald-500 w-[65%]"></div>
               </div>
               <p className="text-[10px] text-slate-400 italic">"Digunakan untuk menalangi kredit macet sehingga Modal Abadi tetap utuh 100%."</p>
            </div>
         </div>
      </div>

      {/* Governance Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-xl">
            <h3 className="text-2xl font-black italic">Kenapa Modal CU Sangat Aman?</h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="text-3xl shrink-0">🏛️</div>
                  <div>
                     <h5 className="font-bold">Badan Hukum Koperasi</h5>
                     <p className="text-xs text-indigo-200 mt-1">Aset terpisah dari harta pribadi pengurus. Secara legal, modal ini milik kolektif yang dilindungi UU No. 25/1992.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="text-3xl shrink-0">🛡️</div>
                  <div>
                     <h5 className="font-bold">AI Solvency Guard</h5>
                     <p className="text-xs text-indigo-200 mt-1">Sistem akan menghentikan otomatis kucuran pinjaman jika rasio likuiditas menyentuh batas kritis 15%.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center space-y-8">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner border border-indigo-100">⚖️</div>
            <h4 className="text-2xl font-black text-slate-800 italic">"Modal Adalah Kehormatan Komunitas."</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
               Di KoperatifAI, modal tidak diperlakukan sebagai bahan bakar pertumbuhan liar, melainkan sebagai **Amanah** yang harus dijaga untuk generasi mendatang.
            </p>
            <div className="pt-4">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Lihat Laporan Audit Ekuitas</button>
            </div>
         </div>
      </div>

      {/* Integration Message */}
      <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🔒</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-900 italic leading-tight">Sertifikasi Keamanan Modal</h4>
            <p className="text-emerald-700/70 mt-2 leading-relaxed text-sm">
               Kami mengikuti standar **PEARLS Monitoring System** yang diakui dunia. Standar ini memastikan bahwa koperasi tidak pernah meminjamkan modal lebih banyak dari yang dimilikinya, menjaga koperasi dari bahaya kepailitan.
            </p>
         </div>
      </div>
    </div>
  );
};

export default CapitalSecurity;
