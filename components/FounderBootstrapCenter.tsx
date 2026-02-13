
import React, { useState } from 'react';

const FounderBootstrapCenter: React.FC = () => {
  const [foundersCount, setFoundersCount] = useState(7); // Ceritanya sudah ada 7 orang
  const [pioneerCapital, setPioneerCapital] = useState(15400000); // 15.4 Juta
  const kabupatenTarget = 50000000; // 50 Juta

  const pioneerMembers = [
    { name: 'Budi Utama', setoran: 'Rp 1.000.000', status: 'PAID', icon: '👑' },
    { name: 'Siti Aminah', setoran: 'Rp 1.000.000', status: 'PAID', icon: '👩‍💼' },
    { name: 'H. Suherman', setoran: 'Rp 5.000.000', status: 'PAID', icon: '👴' },
    { name: 'Andi Wijaya', setoran: 'Rp 1.000.000', status: 'PENDING', icon: '👨‍🔧' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero: Target Kabupaten */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Pioneer Phase: District Mission
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Misi 50 Juta Pertama.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
               Bapak Founder, kita lupakan 500 Juta sejenak. Fokus kita adalah <b>50 Juta</b> untuk legalitas Kabupaten. Ini jauh lebih mudah dicapai!
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-xl hover:bg-indigo-700 transition-all">
                  + TAMBAH PENDIRI (PIONEER)
               </button>
            </div>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl space-y-6">
             <div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Modal Perintis Terkumpul</p>
                <p className="text-4xl font-black text-emerald-400 mt-2 italic">Rp {pioneerCapital.toLocaleString('id-ID')}</p>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase">
                   <span>Progres ke Akta Kabupaten</span>
                   <span>{((pioneerCapital/kabupatenTarget)*100).toFixed(1)}%</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-indigo-500 shadow-[0_0_15px_#6366f1]" style={{ width: `${(pioneerCapital/kabupatenTarget)*100}%` }}></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Requirements Checklist */}
         <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest px-4">Checklist Pra-Koperasi</h3>
            <div className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-6">
               {[
                 { t: '20 Orang Pendiri', v: `${foundersCount}/20`, done: false },
                 { t: 'Modal Setoran (Min 15jt)', v: 'Rp 15.4jt', done: true },
                 { t: 'Domisili Kantor (Virtual)', v: 'READY', done: true },
                 { t: 'Draf AD/ART AI', v: 'COMPLETED', done: true },
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-50">
                    <div className="flex items-center gap-3">
                       <span className={item.done ? 'text-emerald-500' : 'text-slate-300'}>{item.done ? '✅' : '⏳'}</span>
                       <p className="text-xs font-bold text-slate-700">{item.t}</p>
                    </div>
                    <span className="text-[10px] font-black text-indigo-600">{item.v}</span>
                 </div>
               ))}
            </div>
            
            <div className="p-8 bg-indigo-900 rounded-[3rem] text-white shadow-xl flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">🤝</div>
               <h4 className="font-bold italic">Cari 13 Orang Lagi!</h4>
               <p className="text-[10px] text-indigo-200 leading-relaxed italic">
                  "Bapak cukup cari 13 tokoh masyarakat lagi di satu Kabupaten yang sama. Jadikan mereka pendiri. Kedaulatan dimulai dari sini."
               </p>
            </div>
         </div>

         {/* Member Pioneer List */}
         <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest px-4">Daftar Anggota Pionir (Founders)</h3>
            <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="p-6">Calon Pendiri</th>
                        <th className="p-6">Setoran Awal</th>
                        <th className="p-6">Status Dana</th>
                        <th className="p-6 text-right">Aksi</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                     {pioneerMembers.map((m, i) => (
                       <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                          <td className="p-6 flex items-center gap-4">
                             <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl shadow-inner">{m.icon}</div>
                             <p className="font-bold text-slate-800 text-sm">{m.name}</p>
                          </td>
                          <td className="p-6 font-black text-indigo-600 text-sm">{m.setoran}</td>
                          <td className="p-6">
                             <span className={`px-2 py-1 rounded text-[8px] font-black uppercase ${m.status === 'PAID' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                {m.status}
                             </span>
                          </td>
                          <td className="p-6 text-right">
                             <button className="text-[10px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest">Edit Data</button>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
               <div className="p-8 bg-slate-50 border-t border-slate-100 text-center">
                  <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:underline">+ Tambah dari Kontak HP</button>
               </div>
            </div>
         </div>
      </div>

      {/* Strategic Callout for Founder */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-6xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Langkah Notaris (NPAK)</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               Begitu list 20 orang ini lengkap dan uang 15-20 Juta terkumpul di brankas Bapak, segera hubungi **Notaris Pembuat Akta Koperasi (NPAK)** di kota Bapak. Katakan Bapak ingin mendirikan KSP Skala Kabupaten. Biaya notaris biasanya hanya Rp 3-7 Juta. Sisa uangnya? **Jadikan modal kerja pertama.**
            </p>
         </div>
      </div>
    </div>
  );
};

export default FounderBootstrapCenter;
