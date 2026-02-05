
import React, { useState } from 'react';

const DigitalPiggyBank: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [savingsAmount, setSavingsAmount] = useState(15400000);

  const simulateAdd = () => {
    setSavingsAmount(prev => prev + dailyGoal);
  };

  const withdrawalScenarios = [
    { t: 'Tarik ke Rekening Bank', fee: 'Rp 2.500', time: '1 Menit', icon: '🏦' },
    { t: 'Tarik ke E-Wallet (Dana/OVO)', fee: 'Rp 1.000', time: 'Instant', icon: '📱' },
    { t: 'Bayar Tagihan Listrik/HP', fee: 'Gratis', time: 'Instant', icon: '⚡' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Piggy Bank Hero */}
      <div className="bg-amber-500 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-700">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Liquid Voluntary Savings
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Celengan Digital: <br/>Ubah Receh Jadi Aset.</h2>
            <p className="text-amber-100 text-lg leading-relaxed max-w-2xl font-medium">
              Tidak ada nominal yang terlalu kecil. Setiap seribu rupiah Anda di sini adalah "Dana Darurat" yang bisa dicairkan kapan saja.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-center">
             <div className="text-7xl mb-4 animate-bounce">🪙</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Saldo Sukarela Anda</p>
             <p className="text-3xl font-black text-slate-800 mt-1 italic">Rp {savingsAmount.toLocaleString('id-ID')}</p>
             <button onClick={simulateAdd} className="mt-6 w-full py-4 bg-amber-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-amber-600 transition-all">Masukkan Receh Harian</button>
          </div>
        </div>
      </div>

      {/* The Power of Small Savings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Misi Tabungan Harian</h3>
            <div className="space-y-6">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                     <span>Target Nabung Harian</span>
                     <span className="text-amber-600">Rp {dailyGoal.toLocaleString('id-ID')}</span>
                  </div>
                  <input 
                     type="range" min="1000" max="50000" step="1000" 
                     value={dailyGoal} 
                     onChange={(e) => setDailyGoal(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-amber-500"
                  />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                     <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Dalam 1 Tahun</p>
                     <p className="text-xl font-black text-slate-800">Rp {(dailyGoal * 365).toLocaleString('id-ID')}</p>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
                     <p className="text-[10px] text-emerald-600 font-bold uppercase mb-2">+ Estimasi SHU</p>
                     <p className="text-xl font-black text-emerald-700">Rp {(dailyGoal * 365 * 0.08).toLocaleString('id-ID')}</p>
                  </div>
               </div>
               <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 italic text-sm text-indigo-900 text-center">
                  "Menabung Rp 2.000 (harga parkir) setiap hari bisa menjadi Rp 780.000+ dalam setahun untuk biaya sekolah anak."
               </div>
            </div>
         </div>

         <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl"></div>
            <h3 className="text-2xl font-black italic text-amber-400">Kebebasan Penarikan (Liquidity)</h3>
            <p className="text-sm text-slate-400">Anggota sering ragu menabung karena takut uangnya "dikunci". Di KoperatifAI, Simpanan Sukarela adalah milik Anda seutuhnya.</p>
            
            <div className="space-y-4">
               {withdrawalScenarios.map((s, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="text-2xl">{s.icon}</div>
                    <div className="flex-1">
                       <p className="text-sm font-bold">{s.t}</p>
                       <p className="text-[9px] text-slate-500 uppercase tracking-tighter">Biaya: {s.fee} • Waktu: {s.time}</p>
                    </div>
                    <button className="px-3 py-1 bg-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">Pilih</button>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Integration Message for Marginalized People */}
      <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col md:flex-row items-center gap-10">
         <div className="text-7xl">🪴</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-black text-slate-800 italic">"Pupuk Masa Depan dari Sisa Belanja."</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
               Bagi rakyat kecil, menabung Rp 500.000 sekaligus itu berat. Tapi menabung Rp 1.000 sehabis jualan di pasar itu <b>Mudah</b>. Fitur Celengan Digital ini dirancang agar anggota tidak merasa sedang menabung, melainkan sedang memupuk kekayaan secara perlahan tapi pasti.
            </p>
         </div>
      </div>

      {/* Final Action for Founder */}
      <div className="p-12 bg-amber-600 border border-amber-700 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl">💰</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Likuiditas Adalah Rahasia Kesuksesan Koperasi."</h4>
         <p className="text-amber-100 max-w-2xl text-lg leading-relaxed">
            Semakin banyak anggota menabung di Simpanan Sukarela, semakin besar dana segar (Cash) yang dimiliki koperasi untuk diputar kembali ke sektor produktif. Ini adalah strategi **Double-Win**: Anggota punya dana darurat, Koperasi punya modal kerja.
         </p>
         <button className="px-10 py-4 bg-white text-amber-600 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Aktifkan Campaign "Gerakan Seribu Sehari"</button>
      </div>
    </div>
  );
};

export default DigitalPiggyBank;
