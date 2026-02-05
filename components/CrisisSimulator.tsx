
import React, { useState, useEffect } from 'react';

const CrisisSimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [liquidity, setLiquidity] = useState(100);
  const [shieldActive, setShieldActive] = useState(false);
  const [logs, setLogs] = useState<{msg: string, type: 'warn' | 'success' | 'info' | 'danger'}[]>([]);

  const scenarios = [
    {
      id: 'bankrun',
      title: 'Penarikan Massal (Bank Run)',
      desc: 'Panik pasar lokal memicu 30% anggota ingin menarik simpanan sukarela sekaligus.',
      impact: 'Likuiditas Kas Menurun Drastis.',
      icon: '🏃‍♂️',
      aiResponse: [
        { msg: "Deteksi lonjakan penarikan tidak wajar (Threshold 5% harian terlampaui).", type: 'warn' },
        { msg: "OTOMATIS: Penangguhan penyaluran pinjaman baru untuk menjaga kas.", type: 'info' },
        { msg: "AKTIVASI: Inter-lending Fund dari Federasi Inkopdit (Pencairan dana darurat Rp 1M).", type: 'success' },
        { msg: "PESAN AI: Mengirim notifikasi penenang ke seluruh anggota berisi transparansi kas.", type: 'info' },
        { msg: "HASIL: Seluruh penarikan anggota terpenuhi tanpa gagal bayar.", type: 'success' }
      ]
    },
    {
      id: 'recession',
      title: 'Resesi Ekonomi (Default Massal)',
      desc: 'Harga pangan naik tajam, 20% anggota peminjam terlambat membayar angsuran.',
      impact: 'Arus Kas Masuk (Cash In) Tersendat.',
      icon: '📉',
      aiResponse: [
        { msg: "Analisis tren gagal bayar sektor ritel meningkat 15%.", type: 'warn' },
        { msg: "AI RESTRUCTURING: Menawarkan perpanjangan tenor otomatis bagi anggota terdampak.", type: 'info' },
        { msg: "PENGALIHAN DANA: Menggunakan 'Dana Cadangan Risiko' untuk menutup bunga simpanan wajib.", type: 'success' },
        { msg: "AUDIT: Menurunkan valuasi sementara untuk menjaga stabilitas buku besar.", type: 'warn' },
        { msg: "HASIL: Anggota tidak dikejar debt collector, namun ekosistem tetap stabil.", type: 'success' }
      ]
    },
    {
      id: 'force-majeure',
      title: 'Bencana Alam (Force Majeure)',
      desc: 'Gempa bumi melanda wilayah komunitas, merusak 50 unit warung anggota.',
      impact: 'Kerusakan Aset & Gangguan Operasional.',
      icon: '🌋',
      aiResponse: [
        { msg: "Identifikasi wilayah terdampak via metadata lokasi anggota.", type: 'info' },
        { msg: "MORATORIUM: Penangguhan bunga & angsuran 3 bulan bagi anggota terdampak.", type: 'success' },
        { msg: "AKTIVASI DASKOP: Pencairan santunan modal darurat dari dana sosial.", type: 'success' },
        { msg: "HUB CLOUD: Memastikan server tetap online karena arsitektur terdistribusi.", type: 'info' },
        { msg: "HASIL: Solidaritas nyata, koperasi menjadi pilar pemulihan anggota.", type: 'success' }
      ]
    }
  ];

  const triggerSimulation = (scenarioId: string) => {
    const s = scenarios.find(x => x.id === scenarioId);
    if (!s) return;

    setActiveScenario(scenarioId);
    setIsSimulating(true);
    setLogs([]);
    setLiquidity(100);
    setShieldActive(false);

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < s.aiResponse.length) {
        const response = s.aiResponse[currentStep];
        setLogs(prev => [...prev, { msg: response.msg, type: response.type as any }]);
        
        // Simulating visual impact
        if (response.type === 'warn' || response.type === 'danger') setLiquidity(prev => Math.max(prev - 25, 30));
        if (response.type === 'success') {
          setLiquidity(prev => Math.min(prev + 15, 100));
          setShieldActive(true);
        }

        currentStep++;
      } else {
        setIsSimulating(false);
        clearInterval(interval);
      }
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* War Room Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">
              Stress Test Protocol v4.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Simulasi Ketahanan: <br/>Koperasi Melawan Badai.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Uji coba sistem Anda menghadapi skenario ekonomi terburuk. Buktikan bahwa **Matematika Solidaritas** lebih kuat dari krisis perbankan.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl overflow-hidden relative">
             <div className={`absolute inset-0 bg-rose-600/10 animate-pulse ${isSimulating ? 'opacity-100' : 'opacity-0'}`}></div>
             <div className="relative z-10">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">System Stability</p>
                <p className={`text-6xl font-black mt-2 transition-all duration-500 ${liquidity < 50 ? 'text-rose-500' : 'text-emerald-400'}`}>
                   {liquidity}%
                </p>
                <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className={`h-full transition-all duration-500 ${liquidity < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${liquidity}%` }}></div>
                </div>
                <p className="text-[9px] text-slate-500 mt-4 uppercase">AI Monitoring Active</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Scenario Choices */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Pilih Skenario Krisis:</h3>
            <div className="space-y-4">
               {scenarios.map((s) => (
                 <button 
                  key={s.id}
                  onClick={() => triggerSimulation(s.id)}
                  disabled={isSimulating}
                  className={`w-full p-8 rounded-[3rem] border-2 text-left transition-all group ${
                    activeScenario === s.id ? 'bg-slate-900 border-indigo-600 shadow-2xl' : 'bg-white border-slate-100 hover:border-rose-300'
                  }`}
                 >
                    <div className="flex gap-6 items-center">
                       <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-sm ${
                         activeScenario === s.id ? 'bg-indigo-600' : 'bg-slate-50'
                       }`}>
                          {s.icon}
                       </div>
                       <div className="flex-1">
                          <h4 className={`font-black text-lg ${activeScenario === s.id ? 'text-white' : 'text-slate-800'}`}>{s.title}</h4>
                          <p className={`text-xs mt-1 ${activeScenario === s.id ? 'text-indigo-200' : 'text-slate-400'}`}>{s.impact}</p>
                       </div>
                    </div>
                    {activeScenario === s.id && (
                       <div className="mt-6 pt-6 border-t border-white/10 text-xs text-slate-400 leading-relaxed italic animate-in slide-in-from-top-2">
                          {s.desc}
                       </div>
                    )}
                 </button>
               ))}
            </div>
         </div>

         {/* AI Response Console */}
         <div className="bg-[#0b0e14] rounded-[3rem] p-10 shadow-2xl flex flex-col h-[600px] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 relative z-10">
               <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${isSimulating ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`}></span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">AI Emergency Ledger</p>
               </div>
               <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${shieldActive ? 'bg-indigo-600 text-white animate-bounce' : 'bg-white/5 text-slate-500'}`}>
                  {shieldActive ? '🛡️ SHIELD ACTIVE' : 'SHIELD READY'}
               </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2 font-mono relative z-10">
               {logs.map((log, i) => (
                 <div key={i} className={`p-4 rounded-2xl border text-[11px] leading-relaxed animate-in slide-in-from-left duration-300 ${
                    log.type === 'danger' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                    log.type === 'warn' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    'bg-white/5 text-indigo-300 border-white/5'
                 }`}>
                    <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    <span className="font-bold">{log.type === 'danger' ? 'CRITICAL: ' : '> '}</span>
                    {log.msg}
                 </div>
               ))}
               
               {isSimulating && (
                 <div className="flex items-center gap-2 text-indigo-400 animate-pulse text-[10px]">
                    <span>>> PROCESSING AI DEFENSE CHAIN...</span>
                 </div>
               )}

               {logs.length === 0 && !isSimulating && (
                 <div className="h-full flex flex-col items-center justify-center text-slate-600 text-center space-y-4">
                    <div className="text-5xl opacity-20">📡</div>
                    <p className="text-xs italic max-w-[200px]">Pilih salah satu skenario untuk memulai simulasi pertahanan AI.</p>
                 </div>
               )}
            </div>

            {shieldActive && (
               <div className="mt-8 p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 text-center animate-in zoom-in">
                  <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Post-Crisis Report:</p>
                  <p className="text-sm font-bold text-white mt-1">Ecosystem Stabilized.</p>
                  <p className="text-[10px] text-slate-500 mt-2">Zero Member Fund Loss Recorded.</p>
               </div>
            )}
         </div>
      </div>

      {/* Stability Pillars */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800">Kenapa Kita Tahan Banting?</h3>
            <p className="text-slate-500">Tiga pilar yang membedakan KoperatifAI dari Bank Konvensional saat krisis.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">🤝</div>
               <h4 className="font-bold text-slate-800">Modal Solidaritas</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Berbeda dengan bank yang modalnya dari pinjaman luar, modal kita adalah milik kita sendiri. Kita tidak bisa 'ditarik paksa' oleh investor asing.</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">🏛️</div>
               <h4 className="font-bold text-slate-800">Jaringan ILF</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Kita punya 'Bank Sentral' sendiri (Federasi Koperasi). Kita meminjam dari sesama koperasi, bukan dari pasar modal yang fluktuatif.</p>
            </div>
            <div className="p-8 bg-amber-50 rounded-[3rem] border border-amber-100 flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">🧠</div>
               <h4 className="font-bold text-slate-800">AI Antifragile</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Algoritma AI kita terus belajar dari krisis. Semakin sering diguncang, sistem pertahanan otomatis kita menjadi semakin pintar.</p>
            </div>
         </div>
      </div>

      {/* Commitment Footer */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">🛡️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Krisis Adalah Ujian Kejujuran."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Di bank, saat krisis Anda adalah risiko. Di KoperatifAI, saat krisis Anda adalah **Prioritas Perlindungan**. Inilah kedaulatan ekonomi rakyat yang sesungguhnya.
         </p>
         <button className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Download Whitepaper Manajemen Risiko
         </button>
      </div>
    </div>
  );
};

export default CrisisSimulator;
