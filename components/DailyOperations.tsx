
import React from 'react';

const DailyOperations: React.FC = () => {
  const roles = [
    {
      role: 'Pengurus (Owner)',
      daily: 'Review dashboard likuiditas & otorisasi pinjaman mikro tepat sasaran.',
      sync: 'Weekly: Koordinasi strategis dengan Duta Wilayah via Forum Digital.',
      icon: '👔',
      color: 'bg-indigo-600'
    },
    {
      role: 'Staf Teknis',
      daily: 'Monitoring server uptime & performa sistem setoran receh anggota.',
      sync: 'Daily: Stand-up meeting virtual bahas integrasi fitur baru.',
      icon: '💻',
      color: 'bg-slate-700'
    },
    {
      role: 'Duta Komunitas',
      daily: 'Visit 5-10 warung/petani. Bantu input setoran harian anggota manual.',
      sync: 'Monthly: Pelaporan pertumbuhan wilayah & klaim jasa pengabdian.',
      icon: '🛵',
      color: 'bg-emerald-600'
    },
    {
      role: 'Pengawas',
      daily: 'Audit random log transaksi micro-payments & review integritas skor kredit.',
      sync: 'Quarterly: Pemeriksaan fisik kas & laporan pertanggungjawaban publik.',
      icon: '⚖️',
      color: 'bg-amber-600'
    }
  ];

  const capitalTable = [
    { type: 'Simpanan Pokok (SP)', amount: 'Rp 100.000', timing: 'Sekali (Bisa Dicicil)', nature: 'Equity (Modal Inti)', status: 'Wajib' },
    { type: 'Simpanan Wajib (SW)', amount: 'Rp 20.000', timing: 'Setiap Bulan', nature: 'Equity (Modal Inti)', status: 'Wajib' },
    { type: 'Simpanan Sukarela', amount: 'Min. Rp 1.000', timing: 'Fleksibel / Kapanpun', nature: 'Liquidity (Dana Segar)', status: 'Opsional' },
    { type: 'Dana Sosial (Daskop)', amount: 'Rp 5.000', timing: 'Setiap Bulan', nature: 'Social Safety Net', status: 'Wajib' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Operational Blueprint
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pelaksanaan Harian KoperatifAI: <br/>Harmonisasi Manusia & AI.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami mengganti birokrasi meja dengan **Protokol Kolaborasi**. Inilah panduan cara kita bekerja setiap harinya untuk menjaga amanah anggota.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-5xl mb-4">📅</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Sistem Kerja</p>
             <p className="text-xl font-black text-emerald-400 mt-1">24/7 AUTOMATED</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Human Supervision Layer Active</p>
          </div>
        </div>
      </div>

      {/* Role Breakdown */}
      <div className="space-y-8">
         <h3 className="text-3xl font-black text-slate-800 italic">1. Sinergi Tim (Daily Flow)</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, i) => (
               <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                  <div className={`w-16 h-16 ${r.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                     {r.icon}
                  </div>
                  <h4 className="font-black text-slate-800 text-xl mb-4">{r.role}</h4>
                  <div className="space-y-4 flex-1">
                     <div>
                        <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">Tugas Harian:</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">"{r.daily}"</p>
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Koordinasi Berkala:</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">"{r.sync}"</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Capital Structure */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">2. Struktur Permodalan Kerakyatan</h3>
            <p className="text-slate-500">Angka yang dirancang agar setiap orang, sekecil apapun modalnya, bisa menjadi pemilik.</p>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                     <th className="px-8 py-5">Jenis Permodalan</th>
                     <th className="px-8 py-5">Besaran (Inclusive)</th>
                     <th className="px-8 py-5">Waktu Setor</th>
                     <th className="px-8 py-5">Sifat Dana</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {capitalTable.map((cap, i) => (
                     <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6">
                           <p className="font-black text-slate-800 text-sm">{cap.type}</p>
                           <p className={`text-[9px] font-bold mt-1 uppercase ${cap.status === 'Wajib' ? 'text-rose-500' : 'text-emerald-500'}`}>
                              {cap.status}
                           </p>
                        </td>
                        <td className="px-8 py-6 font-black text-indigo-600 text-lg">{cap.amount}</td>
                        <td className="px-8 py-6 text-sm text-slate-500 font-medium">{cap.timing}</td>
                        <td className="px-8 py-6">
                           <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-[10px] font-black uppercase tracking-tighter">
                              {cap.nature}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Why these inclusive numbers? */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-xl">
            <h3 className="text-2xl font-black italic">Kenapa SP Rp 100rb & SW Rp 20rb?</h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="text-3xl shrink-0">👣</div>
                  <div>
                     <h5 className="font-bold">Entry Barrier Rendah</h5>
                     <p className="text-xs text-indigo-200 mt-1 leading-relaxed">
                        Kami ingin pintu koperasi terbuka bagi pedagang kaki lima atau asisten rumah tangga. Rp 20.000 / bulan adalah angka yang "tidak terasa" bagi mereka, namun luar biasa bagi koperasi.
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="text-3xl shrink-0">🌊</div>
                  <div>
                     <h5 className="font-bold">Efek Volume Massal</h5>
                     <p className="text-xs text-indigo-200 mt-1 leading-relaxed">
                        KoperatifAI mengejar **Kuantitas Anggota**. 100.000 anggota yang membayar Rp 20rb jauh lebih stabil daripada 100 orang yang membayar Rp 2jt. Diversifikasi risiko kita sangat kuat.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 flex flex-col justify-center text-center space-y-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl mx-auto shadow-sm border border-emerald-100">⚖️</div>
            <h4 className="text-2xl font-black text-emerald-900 italic">"Keadilan Tidak Harus Mahal."</h4>
            <p className="text-emerald-700 text-sm leading-relaxed max-w-sm mx-auto">
               "Kami ingin menghapus stigma bahwa koperasi digital hanya untuk orang kota yang melek investasi. KoperatifAI adalah milik rakyat, oleh rakyat, dan untuk rakyat."
            </p>
            <div className="pt-4">
               <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-xl">Simulasikan Dampak Inklusi</button>
            </div>
         </div>
      </div>

      {/* Integration Message */}
      <div className="p-10 bg-slate-100 rounded-[3rem] border border-slate-200 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🛵</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-slate-800 italic leading-tight">Teknis Jemput Bola</h4>
            <p className="text-slate-500 mt-2 leading-relaxed text-sm">
               Bagi anggota yang tidak memiliki HP atau sinyal buruk, Duta Wilayah akan datang membawa **Tablet Duta**. Transaksi dilakukan di tempat, dan anggota menerima bukti SMS otomatis dari sistem AI. Inilah layanan personal yang bank tidak bisa berikan.
            </p>
         </div>
      </div>
    </div>
  );
};

export default DailyOperations;
