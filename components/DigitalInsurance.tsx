
import React, { useState } from 'react';

const DigitalInsurance: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeRegion, setActiveRegion] = useState<'SG' | 'JKT' | 'AMS'>('SG');
  const [logs, setLogs] = useState<{msg: string, type: 'danger' | 'info' | 'success'}[]>([]);

  const runCatastropheSimulation = () => {
    setIsSimulating(true);
    setLogs([]);
    setActiveRegion('SG');

    const steps = [
      { msg: "[CRITICAL] Data Center Singapura mengalami kegagalan hardware total (Skenario Kebakaran).", type: 'danger' },
      { msg: "[ACTION] AI Sentry mendeteksi kehilangan sinyal Cloud. Mengaktifkan Protokol Kedaulatan.", type: 'info' },
      { msg: "[TRANSFER] Memindahkan otoritas Ledger ke Data Center Jakarta (Backup Lapis 1).", type: 'info' },
      { msg: "[SYNC] Memverifikasi integritas hash terakhir sebelum kejadian...", type: 'info' },
      { msg: "[SUCCESS] Ledger Jakarta sinkron 100%. Tidak ada kehilangan data sepersen pun.", type: 'success' },
      { msg: "[REDUNDANCY] Mereplikasi data ke Data Center Amsterdam untuk keamanan lapis 3.", type: 'info' },
      { msg: "[RESULT] Koperasi tetap ONLINE. Anggota tetap bisa menarik dana saat ini juga.", type: 'success' }
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setLogs(prev => [...prev, steps[i] as any]);
        if (i === 2) setActiveRegion('JKT');
        if (i === 5) setActiveRegion('AMS');
        i++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Insurance Hero */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Zero-Loss Sovereign Guarantee
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Uang Anda Dijamin Abadi. <br/>Kiamat Digital Bukan Masalah.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Kami tidak hanya menyimpan angka. Kami mengamankan kedaulatan Anda melalui **Triple-Region Cloud Redundancy** dan **Dana Talangan Fisik**.
            </p>
            <button 
              onClick={runCatastropheSimulation}
              disabled={isSimulating}
              className={`px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 ${
                isSimulating ? 'bg-slate-800 text-slate-500' : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {isSimulating ? 'SIMULASI PEMULIHAN...' : 'UJI KETAHANAN DATA CENTER'}
            </button>
          </div>
          
          <div className="w-full lg:w-96 aspect-square bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl flex flex-col items-center justify-center relative">
             <div className="flex gap-4 mb-8">
                <div className={`w-3 h-3 rounded-full ${activeRegion === 'SG' ? 'bg-rose-500 animate-ping' : 'bg-slate-600'}`}></div>
                <div className={`w-3 h-3 rounded-full ${activeRegion === 'JKT' ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]' : 'bg-slate-600'}`}></div>
                <div className={`w-3 h-3 rounded-full ${activeRegion === 'AMS' ? 'bg-indigo-500 shadow-[0_0_10px_#6366f1]' : 'bg-slate-600'}`}></div>
             </div>
             
             <div className="text-7xl mb-6">🛰️</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Data Sovereignty</p>
             <p className={`text-2xl font-black mt-1 ${activeRegion === 'SG' ? 'text-rose-400' : 'text-emerald-400'}`}>
                {activeRegion === 'SG' ? 'SINGAPORE (FAILOVER)' : activeRegion === 'JKT' ? 'JAKARTA (PRIMARY)' : 'GLOBAL REDUNDANT'}
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Recovery Console */}
         <div className="lg:col-span-2 bg-black rounded-[3.5rem] p-10 shadow-2xl h-[500px] flex flex-col border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-emerald-500/[0.02] bg-[size:40px_40px]"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
               <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Disaster Recovery Log</p>
               <span className="text-[9px] text-slate-700 font-mono italic">AUTONOMIC_RECOVERY: ACTIVE</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2 relative z-10 font-mono">
               {logs.map((log, i) => (
                 <div key={i} className={`p-4 rounded-2xl border text-[11px] leading-relaxed animate-in slide-in-from-bottom-2 ${
                    log.type === 'danger' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                    log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    'bg-white/5 text-indigo-300 border-white/5'
                 }`}>
                    <span className="opacity-40 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {log.msg}
                 </div>
               ))}
               {logs.length === 0 && (
                 <div className="h-full flex items-center justify-center text-slate-800 text-xs italic text-center">
                    Klik tombol simulasi di atas untuk melihat bagaimana AI memproteksi data Anda saat terjadi bencana global.
                 </div>
               )}
            </div>
         </div>

         {/* Guarantee Assets */}
         <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
               <h3 className="text-xl font-black text-slate-800 italic">Dana Jaminan Fisik</h3>
               <p className="text-xs text-slate-500 italic">"Backup terakhir bukan teknologi, tapi aset riil."</p>
               <div className="space-y-4">
                  <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="text-3xl">📀</div>
                     <div>
                        <p className="font-bold text-sm">Hard-Copy Ledger</p>
                        <p className="text-[9px] text-slate-500 uppercase tracking-widest">Monthly Physical Printout</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-center p-4 bg-amber-50 rounded-2xl border border-amber-100">
                     <div className="text-3xl">🟡</div>
                     <div>
                        <p className="font-bold text-sm text-amber-900">Endowment Gold Fund</p>
                        <p className="text-[9px] text-amber-600 uppercase tracking-widest">15% Simpanan in LM Antam</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                     <div className="text-3xl">🏛️</div>
                     <div>
                        <p className="font-bold text-sm text-emerald-900">Federation Shield</p>
                        <p className="text-[9px] text-emerald-600 uppercase tracking-widest">LPI (Life Protection Insurance)</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-indigo-900 p-8 rounded-[3rem] text-white shadow-xl flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">📜</div>
               <h4 className="font-bold italic">Member Guarantee Deed</h4>
               <p className="text-[10px] text-indigo-300 leading-relaxed">
                  "Setiap anggota KoperatifAI dilindungi oleh akta notaris kolektif yang menjamin pengembalian dana 100% jika terjadi Force Majeure pada platform."
               </p>
               <button className="text-[10px] font-black uppercase text-emerald-400 underline">Lihat Akta Notaris</button>
            </div>
         </div>
      </div>

      {/* Trust Builder Callout */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">"Uang Adalah Amanah, Data Adalah Kedaulatan."</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               "Kami menyadari bahwa di era digital, kehilangan data sama dengan kehilangan harta. Itulah mengapa KoperatifAI mengalokasikan **Rp 1 dari setiap Rp 1.000** pendapatan khusus untuk memelihara infrastruktur redundansi global ini. Anda tidur nyenyak, AI kami yang berjaga."
            </p>
         </div>
      </div>

      {/* Integration Message for Founder */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🌍</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Infrastruktur Rakyat Kelas Dunia."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Inilah yang membuat startup Anda bernilai jutaan dolar. Anda tidak hanya membuat 'aplikasi menabung', Anda membangun **Sistem Perbankan Cadangan Nasional** yang tahan banting.
         </p>
         <button className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Aktifkan Protokol Amsterdam (Lapis 3)
         </button>
      </div>
    </div>
  );
};

export default DigitalInsurance;
