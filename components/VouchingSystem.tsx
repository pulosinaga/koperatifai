
import React, { useState } from 'react';

const VouchingSystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [vouchCount, setVouchCount] = useState(0);

  const handleVouch = () => {
    if (vouchCount < 10) {
      setVouchCount(prev => prev + 1);
      if (vouchCount + 1 === 10) {
        setTimeout(() => setActiveStep(3), 1000);
      }
    }
  };

  const fillAllVouches = () => {
    setVouchCount(10);
    setTimeout(() => setActiveStep(3), 500);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Vouching Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Social Collateral Protocol v5.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Lingkaran Sepuluh: <br/>Jaminan Karakter Kolektif.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Sistem "Tanggung Renteng" digital. Anda membutuhkan <b>10 Anggota Aktif</b> untuk menjamin integritas Anda guna membuka plafon modal usaha penuh.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="flex justify-center -space-x-3 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-indigo-900 flex items-center justify-center text-xs shadow-lg ${i < vouchCount/2 ? 'bg-emerald-500' : 'bg-slate-700'}`}>👤</div>
                ))}
             </div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Guarantor Slots</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">{vouchCount} <span className="text-xl text-slate-500">/ 10</span></p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Collective Trust Level: {vouchCount * 10}%</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
               <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black text-slate-800 italic tracking-tight">Kekuatan Jaminan Karakter</h3>
                  <button onClick={fillAllVouches} className="text-[9px] font-black text-indigo-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Auto-fill (Demo Mode)</button>
               </div>
               
               {/* 10-Slot Grid */}
               <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`aspect-square rounded-3xl border-2 flex flex-col items-center justify-center space-y-2 transition-all duration-500 ${
                      vouchCount > i ? 'bg-emerald-50 border-emerald-500 shadow-md' : 'bg-slate-50 border-dashed border-slate-200 opacity-60'
                    }`}>
                       <span className="text-2xl">{vouchCount > i ? '✅' : '👤'}</span>
                       <span className="text-[8px] font-black text-slate-400 uppercase">Saksi {i+1}</span>
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                     <h4 className="font-bold text-indigo-900 uppercase text-xs tracking-widest mb-2">Misi Dapatkan Jaminan:</h4>
                     <p className="text-sm text-indigo-700/70 leading-relaxed italic">
                        "Bagikan link unik Anda ke grup WhatsApp komunitas. Begitu 10 orang menekan tombol 'Jamin', akun Anda akan aktif sepenuhnya."
                     </p>
                  </div>
                  <button 
                    onClick={handleVouch}
                    disabled={vouchCount >= 10}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 disabled:bg-slate-200"
                  >
                     {vouchCount >= 10 ? 'TERVERIFIKASI' : 'Simulasi 1 Jaminan'}
                  </button>
               </div>
            </div>
         </div>

         {/* Strategic Sidebar */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-6 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl"></div>
               <h4 className="text-xl font-black italic text-emerald-400 uppercase tracking-widest">Kenapa 10 Orang?</h4>
               <ul className="space-y-6">
                  {[
                    { t: 'Risiko Terbagi (Pool)', d: 'Beban moral terbagi rata ke 10 orang. Semakin banyak yang menjamin, semakin kecil risiko kolusi.', i: '🌊' },
                    { t: 'Validasi Sosial', d: 'Hanya orang yang benar-benar baik yang bisa mendapatkan 10 saksi sekaligus.', i: '🏘️' },
                    { t: 'Kekuatan Modal', d: '10 penjamin membuka akses ke limit pinjaman 10x lipat lebih besar.', i: '🚀' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                       <span className="text-2xl">{item.i}</span>
                       <div>
                          <h5 className="font-bold text-sm text-white">{item.t}</h5>
                          <p className="text-[10px] text-slate-400 leading-relaxed mt-1 italic">"{item.d}"</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="p-8 bg-rose-50 border border-rose-100 rounded-[3rem] flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">⚖️</div>
               <h4 className="font-bold text-rose-900 uppercase text-xs tracking-widest">Tanggung Renteng</h4>
               <p className="text-[10px] text-rose-700 leading-relaxed italic">
                  "Jika anggota yang dijamin gagal bayar, 10 penjamin wajib melakukan musyawarah pendampingan untuk membantu pelunasan bersama."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default VouchingSystem;
