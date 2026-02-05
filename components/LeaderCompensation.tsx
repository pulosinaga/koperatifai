
import React, { useState } from 'react';

const LeaderCompensation: React.FC = () => {
  const [memberCount, setMemberCount] = useState(250);
  const [marketplaceVol, setMarketplaceVol] = useState(50000000); // 50jt per month in region

  // Calculation Constants
  const jasaPembinaanPerMember = 3000;
  const commissionPercent = 0.002; // 0.2%
  const bonusNPL = 1500000; // Fixed bonus for zero default

  // Total Earnings
  const jasaPembinaanTotal = memberCount * jasaPembinaanPerMember;
  const marketplaceCommission = marketplaceVol * commissionPercent;
  const totalTakeHome = jasaPembinaanTotal + marketplaceCommission + bonusNPL;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-emerald-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Representative Reward Matrix
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Jasa Pengabdian Duta: <br/>Adil & Transparan.</h2>
            <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl">
              Duta Komunitas bukan sukarelawan tanpa imbalan. Anda adalah **Mitra Strategis** yang mendapatkan jasa berdasarkan pertumbuhan ekonomi di wilayah Anda.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-slate-800 text-center">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Estimasi Jasa Bulanan</p>
             <p className="text-4xl font-black text-emerald-600 mt-2">Rp {totalTakeHome.toLocaleString('id-ID')}</p>
             <div className="mt-6 flex justify-center gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold">Passive Income</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold">Performance-Based</span>
             </div>
          </div>
        </div>
      </div>

      {/* Simulator Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Simulator Pendapatan Duta</h3>
            
            <div className="space-y-6">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                     <span>Jumlah Anggota di Wilayah</span>
                     <span className="text-indigo-600">{memberCount} Orang</span>
                  </div>
                  <input 
                     type="range" min="10" max="2000" step="10" 
                     value={memberCount} 
                     onChange={(e) => setMemberCount(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                     <span>Volume Transaksi Wilayah (Rp)</span>
                     <span className="text-indigo-600">{marketplaceVol.toLocaleString('id-ID')}</span>
                  </div>
                  <input 
                     type="range" min="1000000" max="500000000" step="1000000" 
                     value={marketplaceVol} 
                     onChange={(e) => setMarketplaceVol(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>
            </div>

            <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 italic text-sm text-amber-900 leading-relaxed">
               "Simulasi ini mengasumsikan Anda menjaga tingkat kredit macet (NPL) di angka 0%. Integritas Duta adalah kunci pendapatan maksimal."
            </div>
         </div>

         {/* Earnings Breakdown */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-10 rounded-[4rem] text-white shadow-xl space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Rincian Jasa Bulanan</h4>
               
               <div className="space-y-6">
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                     <div>
                        <p className="font-bold text-sm">Jasa Pembinaan Anggota</p>
                        <p className="text-[10px] text-slate-500">Rp {jasaPembinaanPerMember.toLocaleString()} x {memberCount} Anggota</p>
                     </div>
                     <p className="font-black text-white">Rp {jasaPembinaanTotal.toLocaleString('id-ID')}</p>
                  </div>

                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                     <div>
                        <p className="font-bold text-sm">Komisi Sirkulasi Ekonomi</p>
                        <p className="text-[10px] text-slate-500">0.2% x Vol. Transaksi Wilayah</p>
                     </div>
                     <p className="font-black text-white">Rp {marketplaceCommission.toLocaleString('id-ID')}</p>
                  </div>

                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                     <div>
                        <p className="font-bold text-sm text-emerald-400">Bonus Portofolio Sehat (NPL 0%)</p>
                        <p className="text-[10px] text-slate-500">Insentif Kualitas Verifikasi</p>
                     </div>
                     <p className="font-black text-emerald-400">Rp {bonusNPL.toLocaleString('id-ID')}</p>
                  </div>
               </div>

               <div className="pt-4 flex justify-between items-center">
                  <p className="text-xs font-black uppercase text-slate-400">Total Take Home Pay</p>
                  <p className="text-3xl font-black text-white tracking-tighter">Rp {totalTakeHome.toLocaleString('id-ID')}</p>
               </div>
            </div>
         </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Filosofi "Shared Prosperity"</h3>
            <p className="text-slate-500">KoperatifAI tumbuh jika anggotanya sejahtera, dan Duta mendapatkan hasil dari kesejahteraan itu.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'Bukan Gaji Buta', d: 'Kompensasi Anda linier dengan dampak nyata yang Anda berikan kepada masyarakat sekitar.', icon: '📉' },
              { t: 'Integritas Verifikasi', d: 'Bonus NPL memastikan Duta tidak asal menyetujui pinjaman demi komisi cepat.', icon: '🛡️' },
              { t: 'Multi-Stream Income', d: 'Anda mendapatkan penghasilan dari pembinaan, transaksi pasar, dan kualitas manajemen.', icon: '🌊' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all text-center space-y-4">
                 <div className="text-4xl">{item.icon}</div>
                 <h4 className="font-bold text-slate-800 italic">{item.t}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Call to Action */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl">🤝</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Jadilah Pemimpin Ekonomi di Wilayah Anda."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Menjadi Duta Komunitas KoperatifAI adalah jalan untuk **Memberdayakan Sesama** sekaligus membangun **Kebebasan Finansial** pribadi. Mulailah perjalanan kepemimpinan Anda hari ini.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl">Ajukan Diri Sebagai Duta Wilayah</button>
      </div>
    </div>
  );
};

export default LeaderCompensation;
