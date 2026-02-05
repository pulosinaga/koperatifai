
import React, { useState } from 'react';

const AIGuardSimulation: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'THREAT_DETECTED' | 'LOCKED' | 'SAFE'>('IDLE');
  const [logs, setLogs] = useState<{msg: string, type: 'info' | 'warn' | 'danger' | 'success'}[]>([]);

  const startSimulation = () => {
    setIsSimulating(true);
    setStatus('IDLE');
    setLogs([]);

    const steps = [
      { msg: "[SYSTEM] Mendeteksi login Admin (Ketua) dari lokasi tidak terdaftar (Kordinat: GPS-6.2088).", type: 'info' },
      { msg: "[WARNING] Admin mencoba mencairkan dana Kas Rp 500.000.000 ke Rekening Luar (Bank XXX).", type: 'warn' },
      { msg: "[CHECK] AI memverifikasi HASH e-RAT (Voting Anggota)...", type: 'info' },
      { msg: "[CRITICAL] Hash e-RAT Kosong/Palsu. Tidak ada persetujuan anggota untuk transaksi ini!", type: 'danger' },
      { msg: "[ACTION] BLOCKING TRANSACTION... AI Sentinel Sentry mengunci akses perbankan.", type: 'danger' },
      { msg: "[ALERT] Mengirim notifikasi darurat ke seluruh (1.248) ponsel anggota!", type: 'danger' },
      { msg: "[LOCKDOWN] Akun Admin disuspend sementara. Menunggu verifikasi fisik dewan pengawas.", type: 'success' }
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setLogs(prev => [...prev, steps[i] as any]);
        if (steps[i].type === 'danger') setStatus('THREAT_DETECTED');
        if (steps[i].type === 'success') setStatus('LOCKED');
        i++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Simulation Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">
              Admin Misconduct Simulation
            </span>
            <h2 className="text-4xl font-black leading-tight italic">AI Sentry: Menjaga Amanah <br/>Dari Tangan Penguasa.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Seringkali ancaman terbesar bukan dari luar, tapi dari dalam. Lihat bagaimana AI kami memblokir upaya "Ketua" yang mencoba membawa lari uang Anda.
            </p>
            <button 
              onClick={startSimulation}
              disabled={isSimulating}
              className={`px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 ${
                isSimulating ? 'bg-slate-700 text-slate-500' : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
            >
              {isSimulating ? 'SIMULASI BERJALAN...' : 'JALANKAN SIMULASI PENGGELAPAN'}
            </button>
          </div>
          
          <div className="w-full lg:w-96 aspect-square bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl flex flex-col items-center justify-center relative">
             {status === 'IDLE' && <div className="text-7xl opacity-20">📡</div>}
             {status === 'THREAT_DETECTED' && <div className="text-7xl animate-ping text-rose-500">🚨</div>}
             {status === 'LOCKED' && <div className="text-7xl text-emerald-400">🔒</div>}
             
             <div className="mt-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sentry Status</p>
                <p className={`text-2xl font-black mt-1 ${
                   status === 'THREAT_DETECTED' ? 'text-rose-500' : 
                   status === 'LOCKED' ? 'text-emerald-400' : 'text-slate-500'
                }`}>
                   {status === 'IDLE' ? 'MONITORING' : 
                    status === 'THREAT_DETECTED' ? 'BREACH DETECTED' : 'SYSTEM LOCKED'}
                </p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Console Log */}
         <div className="lg:col-span-2 bg-black rounded-[3.5rem] p-10 shadow-2xl h-[500px] flex flex-col border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
               <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Security Console Output</p>
               <span className="text-[9px] text-slate-600 font-mono">PROTOCOL_X_77</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2 relative z-10 font-mono">
               {logs.map((log, i) => (
                 <div key={i} className={`p-4 rounded-2xl border text-[11px] leading-relaxed animate-in slide-in-from-left ${
                    log.type === 'danger' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                    log.type === 'warn' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    'bg-white/5 text-slate-400 border-white/5'
                 }`}>
                    <span className="opacity-40 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {log.msg}
                 </div>
               ))}
               {logs.length === 0 && (
                 <div className="h-full flex items-center justify-center text-slate-800 text-xs italic">
                    Menunggu aktivitas mencurigakan...
                 </div>
               )}
            </div>
         </div>

         {/* Shield Mechanics Sidebar */}
         <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
               <h3 className="text-xl font-black text-slate-800 italic">Mekanisme Blokir AI</h3>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="text-2xl">🔗</div>
                     <div>
                        <p className="font-bold text-sm">e-RAT Hash Validation</p>
                        <p className="text-[10px] text-slate-500 mt-1">Setiap instruksi transfer besar wajib membawa kode unik (Hash) yang hanya terbit jika anggota sudah voting "Setuju".</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="text-2xl">🌍</div>
                     <div>
                        <p className="font-bold text-sm">GPS Geofencing</p>
                        <p className="text-[10px] text-slate-500 mt-1">Admin hanya bisa mengakses menu keuangan jika posisi GPS HP berada di kordinat kantor yang didaftarkan.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="text-2xl">📣</div>
                     <div>
                        <p className="font-bold text-sm">Panic Notification</p>
                        <p className="text-[10px] text-slate-500 mt-1">Saat ada upaya ilegal, sistem tidak diam. Ia "berteriak" ke seluruh anggota agar terjadi tekanan sosial instan.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-indigo-900 p-8 rounded-[3rem] text-white shadow-xl flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">🏛️</div>
               <h4 className="font-bold">Zero-Trust Admin</h4>
               <p className="text-[10px] text-indigo-300 italic leading-relaxed">
                  "Di KoperatifAI, kami tidak berasumsi pengurus adalah malaikat. Kami berasumsi mereka adalah manusia yang butuh diawasi oleh algoritma yang tidak memiliki emosi."
               </p>
            </div>
         </div>
      </div>

      {/* Case Study Callout */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center text-5xl shrink-0">🕵️‍♂️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">"Uang Hilang Biasanya Karena Sistem Gelap."</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Hampir semua kasus penggelapan uang koperasi di Indonesia terjadi karena **Laporan Manual**. Anggota baru tahu uangnya hilang setelah 1 tahun. Di KoperatifAI, jika Admin mencoba mengambil Rp 1.000 saja tanpa ijin, Anda akan tahu dalam **1 Detik**."
            </p>
         </div>
      </div>
    </div>
  );
};

export default AIGuardSimulation;
