
import React from 'react';

const DutaRightsObligations: React.FC = () => {
  const obligations = [
    { t: 'Verifikasi Lapis 4', d: 'Wajib melakukan cek fisik KTP, Wajah, GPS, dan Karakter di lapangan.', icon: '🕵️‍♂️' },
    { t: 'Edukasi Terjadwal', d: 'Mengadakan minimal 1x pertemuan literasi keuangan desa per bulan.', icon: '📚' },
    { t: 'Settlement Kas 24 Jam', d: 'Menyetor uang tunai dari anggota ke bank maksimal 24 jam.', icon: '🏦' },
    { t: 'Audit Kejujuran', d: 'Bersedia diaudit AI Sentinel Guard atas seluruh log aktivitas lapangan.', icon: '🛡️' }
  ];

  const rights = [
    { t: 'Komisi Transaksi', d: 'Mendapat 0.1% dari GTV wilayah (Marketplace, PPOB, QRIS).', icon: '💰' },
    { t: 'Jasa Pembinaan', d: 'Mendapat Rp 3.000 / anggota aktif / bulan sebagai upah pengabdian.', icon: '📈' },
    { t: 'Ekspansi Teritori', d: 'Hak untuk naik level mengelola antar kecamatan jika performa stabil.', icon: '🌍' },
    { t: 'Proteksi Hukum', d: 'Dijamin asuransi profesi dan pendampingan hukum oleh KoperatifAI.', icon: '⚖️' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Contractual Framework v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Hak & Kewajiban Duta.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Kemitraan yang kuat dibangun di atas tanggung jawab yang jelas dan imbalan yang adil."
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">📜</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Integritas Duta</p>
             <p className="text-2xl font-black text-emerald-400 mt-1 italic">MANDATORY PROTOCOL</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* OBLIGATIONS (KEWAJIBAN) */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">🛡️</div>
               <div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Kewajiban (Amanah)</h3>
                  <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Responsibility Stack</p>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {obligations.map((ob, i) => (
                 <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex gap-4 items-start group hover:bg-rose-50 hover:border-rose-200 transition-all">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{ob.icon}</span>
                    <div>
                       <h5 className="font-bold text-slate-800">{ob.t}</h5>
                       <p className="text-xs text-slate-500 leading-relaxed italic mt-1">"{ob.d}"</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* RIGHTS (HAK) */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
               <div className={`w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>💎</div>
               <div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Hak (Reward)</h3>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Prosperity Stack</p>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {rights.map((ri, i) => (
                 <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex gap-4 items-start group hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{ri.icon}</span>
                    <div>
                       <h5 className="font-bold text-slate-800">{ri.t}</h5>
                       <p className="text-xs text-slate-500 leading-relaxed italic mt-1">"{ri.d}"</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="p-12 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 opacity-30">⚖️</div>
         <div className="space-y-6 z-10">
            <h4 className="text-3xl font-black italic">"Keadilan Digital Bagi Seluruh Rakyat."</h4>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-4xl">
               Di KoperatifAI, tidak ada eksploitasi kerja. Setiap butir keringat Duta Wilayah dihitung oleh AI dan dibalas dengan kesejahteraan yang setimpal. Inilah wajah baru kemandirian ekonomi Indonesia.
            </p>
            <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Tanda Tangan Akad Integritas</button>
         </div>
      </div>
    </div>
  );
};

export default DutaRightsObligations;
