
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const CyberSecurityShield: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [threatLevel, setThreatLevel] = useState(0);
  const [defenseStatus, setDefenseStatus] = useState<'IDLE' | 'ATTACK' | 'HEALING' | 'SAFE'>('IDLE');
  const [logs, setLogs] = useState<{msg: string, type: 'info' | 'danger' | 'success'}[]>([]);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [forensicReport, setForensicReport] = useState('');

  const runSimulation = () => {
    setIsSimulating(true);
    setDefenseStatus('ATTACK');
    setThreatLevel(85);
    setLogs([]);
    setForensicReport('');

    const steps = [
      { msg: "[DETECT] Upaya 'SQL Injection' terdeteksi dari IP: 182.xx.xx.xx (Luar Negeri).", type: 'danger' },
      { msg: "[SHIELD] Mengaktifkan 'Web Application Firewall' (WAF). Trafik mencurigakan diisolasi.", type: 'info' },
      { msg: "[CHECK] Hacker mencoba memanipulasi kolom 'Saldo_Tabungan' di Database.", type: 'danger' },
      { msg: "[BLOCK] Akses DITOLAK. Database Ledger menggunakan 'Write-Once' Policy.", type: 'success' },
      { msg: "[HEALING] AI memverifikasi integritas data dengan 3 Backup Snapshot lainnya (Global Sync).", type: 'info' },
      { msg: "[RESULT] Data Konsisten. Tidak ada perubahan saldo yang tidak sah.", type: 'success' },
      { msg: "[ACTION] IP Penyerang dimasukkan ke 'Global Blacklist'. Sistem kembali NORMAL.", type: 'success' }
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setLogs(prev => [steps[i] as any, ...prev]);
        if (steps[i].type === 'success') setThreatLevel(prev => Math.max(prev - 25, 0));
        if (i === 4) setDefenseStatus('HEALING');
        i++;
      } else {
        clearInterval(interval);
        setDefenseStatus('SAFE');
        setIsSimulating(false);
        generateForensicReport();
      }
    }, 1000);
  };

  const generateForensicReport = async () => {
    setIsGeneratingReport(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Anda adalah Chief Information Security Officer (CISO) KoperatifAI. Baru saja terjadi percobaan SQL Injection dari luar negeri untuk memanipulasi saldo tabungan anggota, namun AI Sentinel berhasil mematahkannya. 
        Buatkan 'Post-Defense Forensic Report' singkat (3 paragraf) untuk Founder. 
        Jelaskan: 1. Teknik serangan yang digunakan. 2. Kenapa arsitektur Cloud Serverless kita membuat serangan itu sia-sia. 3. Kepastian keamanan dana anggota. 
        Gunakan gaya bahasa otoritatif, teknis namun menenangkan.`,
      });
      setForensicReport(response.text || "Laporan tidak tersedia.");
    } catch (e) {
      setForensicReport("Sistem AI Sentinel telah menetralkan ancaman. Laporan forensik manual akan segera dikirim ke email Founder.");
    } finally {
      setIsGeneratingReport(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Cyber Hero */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Antifragile Infrastructure v5.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Perisai Kedaulatan Digital: <br/>Uang Anda Tak Terjamah Peretas.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Kami tidak menggunakan server lokal di kantor. Kami menggunakan <b>Multi-Cloud distributed Ledger</b> yang dipantau oleh AI Sentry kelas militer.
            </p>
            <button 
              onClick={runSimulation}
              disabled={isSimulating}
              className={`px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 ${
                isSimulating ? 'bg-slate-800 text-slate-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {isSimulating ? 'SIMULASI PERTAHANAN...' : 'UJI PERTAHANAN CYBER'}
            </button>
          </div>
          
          <div className="w-full lg:w-96 aspect-square bg-indigo-500/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl flex flex-col items-center justify-center relative">
             <div className={`absolute inset-0 rounded-[4rem] border-4 border-indigo-500/20 transition-all duration-1000 ${defenseStatus === 'ATTACK' ? 'animate-ping border-rose-500' : ''}`}></div>
             
             <div className="relative z-10">
                <div className={`text-7xl mb-6 transition-transform duration-500 ${defenseStatus === 'ATTACK' ? 'scale-125' : 'scale-100'}`}>
                   {defenseStatus === 'IDLE' && '🛰️'}
                   {defenseStatus === 'ATTACK' && '🔥'}
                   {defenseStatus === 'HEALING' && '🩹'}
                   {defenseStatus === 'SAFE' && '🛡️'}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Threat Level</p>
                <p className={`text-4xl font-black mt-1 ${threatLevel > 50 ? 'text-rose-500' : 'text-emerald-400'}`}>{threatLevel}%</p>
                <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">AI Sentry Monitoring</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Defense Console */}
         <div className="lg:col-span-2 bg-[#0a0a0a] rounded-[3.5rem] p-10 shadow-2xl h-[500px] flex flex-col border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-indigo-500/[0.02] bg-[size:40px_40px]"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
               <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Security Defense Log</p>
               <span className="text-[9px] text-slate-700 font-mono italic">ENCRYPTED_MODE: ON</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2 relative z-10 font-mono">
               {logs.map((log, i) => (
                 <div key={i} className={`p-4 rounded-2xl border text-[11px] leading-relaxed animate-in slide-in-from-top-2 ${
                    log.type === 'danger' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                    log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    'bg-white/5 text-indigo-300 border-white/5'
                 }`}>
                    <span className="opacity-40 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {log.msg}
                 </div>
               ))}
               {logs.length === 0 && (
                 <div className="h-full flex items-center justify-center text-slate-800 text-xs italic">
                    Menunggu deteksi ancaman eksternal...
                 </div>
               )}
            </div>
         </div>

         {/* AI Post-Mortem Report */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col h-[500px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
               <h3 className="text-xl font-black text-slate-800 italic">AI Forensic Report</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>

            <div className="flex-1 bg-slate-50 rounded-[2rem] p-6 overflow-y-auto custom-scrollbar font-serif text-xs text-slate-600 leading-relaxed italic relative z-10">
               {isGeneratingReport ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-4">
                     <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-400">AI sedang menyusun laporan...</p>
                  </div>
               ) : forensicReport ? (
                  <pre className="whitespace-pre-wrap">{forensicReport}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
                     <div className="text-5xl grayscale opacity-10">📄</div>
                     <p className="text-slate-400">Laporan akan muncul otomatis setelah simulasi pertahanan selesai.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Defense Technology Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { t: 'Sharded Distribution', d: 'Hacker harus meretas ratusan server secara bersamaan untuk mengubah 1 angka saldo.', icon: '🌍' },
           { t: 'End-to-End Encryption', d: 'Hanya HP anggota yang punya kunci privat. Kami pun tidak bisa melihat PIN Anda.', icon: '🔐' },
           { t: 'Point-in-Time Recovery', d: 'Snapshot setiap detik. Jika terjadi eror, saldo kembali ke 1 detik sebelumnya.', icon: '⏳' }
         ].map((item, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-black text-slate-800 text-sm uppercase mb-2">{item.t}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
           </div>
         ))}
      </div>

      {/* Trust Builder Callout */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12 text-white relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shrink-0 shadow-xl z-10 animate-pulse">🛰️</div>
         <div className="flex-1 space-y-4 z-10">
            <h4 className="text-2xl font-black italic leading-tight">"Keamanan Anda Bukan Janji, Tapi Arsitektur."</h4>
            <p className="text-slate-400 text-lg leading-relaxed italic">
               "Kami membayar infrastruktur premium karena kami mengerti: **Simpanan Anda adalah Kepercayaan Termahal Kami.** Di KoperatifAI, pertahanan cyber adalah jantung operasional kami."
            </p>
         </div>
      </div>
    </div>
  );
};

export default CyberSecurityShield;
