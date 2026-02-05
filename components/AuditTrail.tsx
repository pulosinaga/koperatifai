
import React from 'react';

const AuditTrail: React.FC = () => {
  const moneyJourney = [
    {
      title: 'Uang di Tangan Anggota',
      status: 'Source',
      desc: 'Anda memiliki uang tunai (misal Rp 2.000) yang ingin diamankan.',
      icon: '💵',
      color: 'text-slate-400'
    },
    {
      title: 'Diserahkan ke Duta',
      status: 'In Transit (Field)',
      desc: 'Duta menerima uang & input ke sistem. Anda menerima SMS konfirmasi instan.',
      icon: '🛵',
      color: 'text-amber-500'
    },
    {
      title: 'Proses Settlement Kolektif',
      status: 'In Transit (Digital)',
      desc: 'Duta menyetor total uang wilayah ke Bank via Virtual Account Koperasi.',
      icon: '🏦',
      color: 'text-indigo-500'
    },
    {
      title: 'Validasi AI Treasury',
      status: 'Verifying',
      desc: 'AI mensinkronkan resi bank dengan input Duta. Memastikan nominal cocok 100%.',
      icon: '🧠',
      color: 'text-blue-500'
    },
    {
      title: 'Dana Aman di Kas Koperasi',
      status: 'Active & Earning',
      desc: 'Uang resmi di Kas Besar. Mulai menghasilkan SHU & tersedia untuk pinjaman anggota.',
      icon: '🛡️',
      color: 'text-emerald-500'
    }
  ];

  const recentAudits = [
    { date: '12/06/24', area: 'Duta Wilayah A-04', amount: 'Rp 2.450.000', status: 'VERIFIED BY AI', detail: 'Struk Bank Mandiri tgl 12/06 jam 10:15' },
    { date: '11/06/24', area: 'Duta Wilayah B-12', amount: 'Rp 1.120.000', status: 'VERIFIED BY AI', detail: 'Struk ATM BRI tgl 11/06 jam 16:40' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Radical Transparency Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Jejak Dana: <br/>Setiap Rupiah Punya Cerita.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl font-medium">
              Kami membuang sistem "Kotak Hitam". Di KoperatifAI, Anda bisa melacak perjalanan uang Anda dari kantong hingga ke brankas digital bank.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-center">
             <div className="text-7xl mb-4">🕵️‍♂️</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Audit Status</p>
             <p className="text-2xl font-black text-indigo-600 mt-1 italic">OPEN LEDGER</p>
             <p className="text-[9px] text-slate-400 mt-2 uppercase">Verified by Community AI</p>
          </div>
        </div>
      </div>

      {/* The Journey Map */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <h3 className="text-3xl font-black text-slate-800 italic text-center">Aliran Dana Terbuka</h3>
         
         <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
               {moneyJourney.map((step, i) => (
                 <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-inner`}>
                       {step.icon}
                    </div>
                    <p className={`text-[8px] font-black uppercase tracking-widest ${step.color}`}>{step.status}</p>
                    <h4 className="text-sm font-black text-slate-800 mt-2 leading-tight">{step.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-3 leading-relaxed flex-1 italic">"{step.desc}"</p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Live Audit Log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl"></div>
            <h3 className="text-2xl font-black italic text-emerald-400">Log Penyetoran Wilayah (Public)</h3>
            <p className="text-sm text-slate-400">Bukti nyata bahwa Duta wilayah Anda sudah menyetor uang anggota ke bank.</p>
            
            <div className="space-y-4">
               {recentAudits.map((audit, i) => (
                 <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-mono text-slate-500">{audit.date}</span>
                       <span className="text-[9px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full">{audit.status}</span>
                    </div>
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-sm font-bold text-white">{audit.area}</p>
                          <p className="text-[10px] text-slate-500 italic mt-1">{audit.detail}</p>
                       </div>
                       <p className="text-lg font-black text-indigo-400">{audit.amount}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="pt-4 border-t border-white/5 text-center">
               <button className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">Lihat Semua Jejak Audit →</button>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-8">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">"Trust as an Infrastructure."</h3>
               <p className="text-slate-500 text-sm italic">"Kami tidak minta Anda percaya pada pengurus, kami minta Anda percaya pada **Data**."</p>
            </div>
            
            <div className="p-6 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 relative">
               <div className="flex gap-4 items-center">
                  <div className="text-4xl">📸</div>
                  <div>
                     <p className="text-xs font-bold text-indigo-900 leading-relaxed">
                        AI mendeteksi & memverifikasi nomor transaksi unik dari setiap resi bank secara real-time.
                     </p>
                     <p className="text-[10px] text-indigo-600/70 mt-1 uppercase font-black">Zero Opportunity for Manipulation</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Audit Precision</p>
                  <p className="text-lg font-black text-indigo-600">100.0%</p>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Verification Speed</p>
                  <p className="text-lg font-black text-indigo-600">Instant</p>
               </div>
            </div>
         </div>
      </div>

      {/* Social Proof CTA */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🌍</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Kedaulatan Rakyat Dimulai dari Kejujuran Sistem."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Jejak Audit AI ini memastikan koperasi Anda tetap bersih seumur hidup. Saat transparansi menjadi fondasi, kemakmuran hanyalah masalah waktu.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Daftar Anggota & Cek Saldo Saya
         </button>
      </div>
    </div>
  );
};

export default AuditTrail;
