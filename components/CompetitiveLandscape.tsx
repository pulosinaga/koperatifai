
import React from 'react';

const CompetitiveLandscape: React.FC = () => {
  const costStructure = [
    { label: 'Sewa Gedung & Cabang', bank: 35, cu: 2, icon: '🏢' },
    { label: 'Gaji Ribuan Karyawan', bank: 40, cu: 5, icon: '👥' },
    { label: 'Infrastruktur IT Legacy', bank: 15, cu: 3, icon: '🔌' },
    { label: 'Dividen Pemilik Saham', bank: 10, cu: 0, icon: '📈' },
    { label: 'Pemberdayaan Anggota', bank: 0, cu: 90, icon: '💎' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="bg-rose-950 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-rose-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              The Great Banking Disruption
            </span>
            <h2 className="text-4xl font-black leading-tight">Kenapa Bank Akan Terkejut?</h2>
            <p className="text-rose-200 text-lg leading-relaxed max-w-2xl">
              Bank terikat oleh model bisnis yang mahal. Kita membuang semua beban itu dan memberikan <b>keuntungannya langsung ke kantong anggota</b>.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 text-center">
             <div className="text-5xl mb-6">🌋</div>
             <h4 className="text-xl font-bold mb-2">Disrupsi Efisiensi</h4>
             <p className="text-slate-400 text-sm italic">"Mereka punya kantor, kita punya komunitas. Mereka punya bos, kita punya anggota."</p>
          </div>
        </div>
      </div>

      {/* Comparison Bars */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-slate-800">Mana Yang Lebih Efisien?</h3>
            <p className="text-slate-500 text-sm mt-2">Perbandingan alokasi biaya operasional setiap Rp 1.000.000 pendapatan.</p>
         </div>

         <div className="space-y-8">
            {costStructure.map((item, i) => (
               <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                     <span className="flex items-center gap-2"><span className="text-lg">{item.icon}</span> {item.label}</span>
                     <div className="flex gap-4">
                        <span className="text-rose-500">Bank: {item.bank}%</span>
                        <span className="text-indigo-600 font-black">CU: {item.cu}%</span>
                     </div>
                  </div>
                  <div className="h-4 w-full bg-slate-50 rounded-full overflow-hidden flex">
                     <div 
                      className="h-full bg-rose-200 border-r border-white/20 transition-all duration-1000" 
                      style={{ width: `${item.bank}%` }}
                     ></div>
                     <div 
                      className="h-full bg-indigo-600 transition-all duration-1000" 
                      style={{ width: `${item.cu}%` }}
                     ></div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* The Frenemy Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Strategi "Numpang Lewat"</h3>
            <p className="text-sm text-slate-500">Kenapa bank justru akan tetap melayani kita walaupun kita saingan mereka?</p>
            <div className="space-y-4">
               {[
                 { t: 'Biaya Transaksi (Admin)', d: 'Setiap kali anggota kita setor lewat VA mereka, bank mendapat biaya jasa. Mereka tetap untung.', icon: '🫰' },
                 { t: 'Dana Pihak Ketiga (DPK)', d: 'Dana Escrow koperasi kita disimpan di bank mereka sebagai saldo jumbo. Bank butuh saldo ini.', icon: '🏦' },
                 { t: 'Kepatuhan BI (SNAP)', d: 'Bank wajib membuka API mereka untuk aplikasi luar sesuai regulasi Open Banking Indonesia.', icon: '📜' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-xl shrink-0">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{item.t}</p>
                       <p className="text-[10px] text-slate-500 leading-relaxed">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center text-center">
            <h3 className="text-3xl font-black">Kesimpulan</h3>
            <p className="text-indigo-200 leading-relaxed">
               "Bank akan terkejut melihat betapa cepat kita tumbuh, tapi mereka tidak bisa menghentikan kita karena kita menggunakan infrastruktur mereka secara legal dan saling menguntungkan."
            </p>
            <div className="pt-4">
               <span className="px-8 py-3 bg-emerald-500 text-indigo-950 rounded-full font-black uppercase text-xs tracking-widest shadow-xl">Kedaulatan Anggota Adalah Mutlak</span>
            </div>
         </div>
      </div>

      {/* Final Safety Net */}
      <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🤖</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-indigo-900 leading-tight">AI Competitive Guard</h4>
            <p className="text-indigo-700/70 mt-2 leading-relaxed">
               Sistem AI kami terus memantau suku bunga perbankan di pasar. Jika bank menaikkan bunga tabungan, AI kita akan menyarankan penyesuaian strategi SHU agar anggota koperasi tetap mendapatkan imbal hasil yang **lebih tinggi** daripada bank mana pun.
            </p>
         </div>
      </div>
    </div>
  );
};

export default CompetitiveLandscape;
