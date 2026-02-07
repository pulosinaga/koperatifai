
import React, { useState } from 'react';

const PersonalGoldSavings: React.FC = () => {
  const [gramAmount, setGramAmount] = useState(0.5);
  const goldPrice = 1320000; // Rp / gram

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-[#1a1c2c] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-amber-600/20 text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-600/20">
              Personal Sovereign Asset Hub
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Emas Rakyat: <br/>Kekayaan di Balik Layar.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Ubah saldo receh Anda menjadi gramasi emas. Aman dari inflasi, dilindungi oleh brankas pusat koperasi.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4 animate-pulse">📀</div>
             <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Saldo Emas Anda</p>
             <p className="text-5xl font-black text-white mt-2 italic">12.45<span className="text-2xl text-stone-500 ml-1">g</span></p>
             <p className="text-[9px] text-emerald-400 mt-4 uppercase font-black">Nilai Est: Rp 16,4 Juta</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Beli Emas Digital</h3>
            <div className="space-y-8">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase">
                     <span>Jumlah Pembelian (Gram)</span>
                     <span className="text-amber-600 font-black">{gramAmount} Gram</span>
                  </div>
                  <input 
                    type="range" min="0.01" max="10" step="0.01" value={gramAmount} 
                    onChange={(e) => setGramAmount(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-amber-500"
                  />
               </div>
               <div className="p-8 bg-slate-900 rounded-3xl text-white text-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Total Harga (Rate Hari Ini)</p>
                  <p className="text-4xl font-black text-amber-500 italic">Rp {(gramAmount * goldPrice).toLocaleString('id-ID')}</p>
               </div>
               <button className="w-full py-5 bg-amber-600 text-slate-900 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-amber-500 transition-all">BELI EMAS SEKARANG</button>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-800 italic">Kenapa Emas Digital?</h3>
            <div className="space-y-4">
               {[
                 { t: 'Likuiditas Instan', d: 'Bisa dijual kembali kapan saja ke saldo koperasi saat butuh uang mendadak.', i: '⚡' },
                 { t: 'Tanpa Biaya Cetak', d: 'Hemat biaya ongkos cetak fisik selama emas belum ditarik keluar.', i: '💎' },
                 { t: 'Keamanan Brankas', d: 'Tidak perlu takut hilang di rumah. Emas Anda aman di kustodian resmi Antam.', i: '🔒' }
               ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
                     <span className="text-2xl">{item.i}</span>
                     <div>
                        <h5 className="font-bold text-slate-800 text-sm">{item.t}</h5>
                        <p className="text-xs text-slate-500 leading-relaxed italic mt-1">"{item.d}"</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default PersonalGoldSavings;
