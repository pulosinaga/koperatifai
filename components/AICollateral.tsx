
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar as RadarArea } from 'recharts';

const AICollateral: React.FC = () => {
  const reputationData = [
    { subject: 'Tabungan Wajib', A: 95, fullMark: 100 },
    { subject: '10 Saksi Digital', A: 100, fullMark: 100 },
    { subject: 'Integritas Bayar', A: 90, fullMark: 100 },
    { subject: 'Literasi Keuangan', A: 85, fullMark: 100 },
    { subject: 'Aktif Marketplace', A: 70, fullMark: 100 },
  ];

  const collateralAssets = [
    { title: 'Social Capital (Vouching)', value: 'Rp 5.000.000', icon: '🤝', desc: 'Jaminan moral dari 10 Anggota Aktif pilihan.' },
    { title: 'Equity Capital (Simpanan)', value: 'Rp 1.300.000', icon: '💎', desc: 'Nilai likuid simpanan yang dikunci sistem.' },
    { title: 'Transaction Goodwill', value: 'Rp 5.200.000', icon: '🛒', desc: 'Rata-rata perputaran belanja di marketplace.' },
    { title: 'Integrity Bonus', value: 'Rp 1.000.000', icon: '⚡', desc: 'Reward kedisiplinan 12 bulan tanpa telat.' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Collateral Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Social Assets v5.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Aset Jaminan Digital: <br/>Diperkuat Oleh Sepuluh Orang.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Kami mendigitalkan **Kepercayaan Tetangga**. Nilai jaminan Anda naik secara eksponensial saat mendapatkan dukungan dari 10 saksi digital terverifikasi.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl relative">
             <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">🔒</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Taksiran Jaminan Digital</p>
             <p className="text-4xl font-black text-emerald-400 mt-2">Rp 12.500.000</p>
             <div className="mt-6 flex justify-center gap-2">
                <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase">10-Member Shield</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Radar Visualization */}
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-10">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">Analisis Jaminan Sosial</h3>
               <p className="text-sm text-slate-500">Melihat seberapa kuat dukungan komunitas terhadap integritas Anda.</p>
            </div>
            <div className="w-full h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={reputationData}>
                     <PolarGrid stroke="#f1f5f9" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} />
                     <RadarArea
                        name="Aset Reputasi"
                        dataKey="A"
                        stroke="#6366f1"
                        fill="#6366f1"
                        fillOpacity={0.6}
                     />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
               <p className="text-xs font-bold text-emerald-900 leading-relaxed italic">
                  "Jaminan Sepuluh (Social-10) memberikan bobot 60% pada valuasi permodalan Anda. Nama baik kolektif adalah benteng Anda."
               </p>
            </div>
         </div>

         {/* Collateral Components List */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Komposisi Aset Jaminan</h3>
            <div className="grid grid-cols-1 gap-4">
               {collateralAssets.map((asset, i) => (
                 <div key={i} className="p-6 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                       <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all">{asset.icon}</div>
                       <div>
                          <h4 className="font-bold text-slate-800 text-sm">{asset.title}</h4>
                          <p className="text-[10px] text-slate-400 italic mt-1">{asset.desc}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-lg font-black text-indigo-600 italic">{asset.value}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Call to Action for Member */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10">✍️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Aktifkan Perisai Sepuluh Anda."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Dapatkan persetujuan digital dari 10 penjamin Anda sekarang. AI akan otomatis membuka limit pinjaman produktif hingga **Rp 10.000.000** tanpa jaminan fisik apa pun.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">Dapatkan Jaminan Kolektif Sekarang</button>
      </div>
    </div>
  );
};

export default AICollateral;
