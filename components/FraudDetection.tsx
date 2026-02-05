
import React, { useState, useEffect } from 'react';

const FraudDetection: React.FC = () => {
  const [activeThreat, setActiveThreat] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [logs, setLogs] = useState<{msg: string, type: 'info' | 'danger' | 'success'}[]>([]);

  const scenarios = [
    {
      id: 'insider',
      title: 'Percobaan Penyelewengan Pengurus',
      desc: 'Pengurus mencoba mencairkan dana Rp 50jt ke rekening pribadi tanpa otorisasi e-RAT.',
      response: 'DIBLOKIR. AI mendeteksi ketidaksesuaian pola pengeluaran dengan AD/ART Digital.',
      icon: '👔'
    },
    {
      id: 'identity',
      title: 'Pemalsuan Identitas (KTP)',
      desc: 'Seorang non-anggota mencoba mendaftar dengan foto KTP editan software.',
      response: 'DITOLAK. AI Vision mendeteksi inkonsistensi metadata dan tekstur digital pada gambar.',
      icon: '📸'
    },
    {
      id: 'sybil',
      title: 'Serangan Akun Palsu (Sybil)',
      desc: 'Percobaan pembuatan 1.000 akun palsu dalam 1 jam untuk memanipulasi voting.',
      response: 'KARANTINA. Sistem mendeteksi IP yang sama dan pola registrasi bot-like.',
      icon: '🤖'
    },
    {
      id: 'kickback',
      title: 'Pola Transaksi Mencurigakan',
      desc: 'Seorang merchant marketplace melakukan transaksi fiktif (wash trading) untuk menaikkan skor kredit.',
      response: 'PERINGATAN. AI mendeteksi aliran dana sirkular antar 2 akun yang berhubungan dekat.',
      icon: '🔄'
    }
  ];

  const runSimulation = (scenarioId: string) => {
    const s = scenarios.find(x => x.id === scenarioId);
    if (!s) return;

    setIsAnalyzing(true);
    setActiveThreat(null);
    setLogs(prev => [{msg: `[INCOMING] Mendeteksi aktivitas: ${s.title}...`, type: 'info'}, ...prev]);

    setTimeout(() => {
      setActiveThreat(scenarioId);
      setLogs(prev => [{msg: `[ALERT] ${s.response}`, type: 'danger'}, ...prev]);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Security Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">
              Sentinel Shield Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">AI Fraud Guard: <br/>Keamanan Tanpa Kompromi.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami tidak hanya membangun sistem, kami membangun **Benteng**. AI kami bekerja 24/7 untuk memastikan tidak ada satu rupiah pun dana anggota yang diselewengkan.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="relative z-10">
                <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 animate-pulse">🛡️</div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Trust Integrity Index</p>
                <p className="text-5xl font-black text-emerald-400 mt-1">100%</p>
                <p className="text-[9px] text-slate-500 mt-2 uppercase">Verified by Independent AI Auditor</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Scenario List */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Pilih Skenario Serangan:</h3>
            <div className="grid grid-cols-1 gap-4">
               {scenarios.map((s) => (
                 <button 
                  key={s.id}
                  onClick={() => runSimulation(s.id)}
                  disabled={isAnalyzing}
                  className={`p-6 rounded-[2.5rem] border-2 text-left transition-all group ${
                    activeThreat === s.id ? 'bg-rose-50 border-rose-600 shadow-lg' : 'bg-white border-slate-100 hover:border-indigo-600 hover:shadow-xl'
                  }`}
                 >
                    <div className="flex gap-4 items-center">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${
                         activeThreat === s.id ? 'bg-rose-600 text-white' : 'bg-slate-50 text-slate-500'
                       }`}>
                          {s.icon}
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-800">{s.title}</h4>
                          <p className="text-xs text-slate-400 mt-1">Simulasikan Serangan</p>
                       </div>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* Analyzer Console */}
         <div className="bg-slate-900 rounded-[3rem] p-8 shadow-2xl flex flex-col h-[500px] border border-white/5">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
               <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sentinel Live Console</p>
               </div>
               <span className="text-[9px] text-indigo-400 font-mono">SECURE_NODE: JKT-01</span>
            </div>

            <div className="flex-1 overflow-y-auto font-mono space-y-3 custom-scrollbar pr-2">
               {isAnalyzing && (
                 <div className="flex items-center gap-2 text-indigo-400 animate-pulse text-xs">
                    <span>> ANALYZING PATTERN...</span>
                 </div>
               )}
               {logs.map((log, i) => (
                 <div key={i} className={`text-[11px] leading-relaxed p-2 rounded ${
                   log.type === 'danger' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 
                   log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400'
                 }`}>
                    {log.type === 'danger' ? '!!! ALERT !!! ' : '> '} {log.msg}
                 </div>
               ))}
               {logs.length === 0 && !isAnalyzing && (
                 <div className="h-full flex items-center justify-center text-slate-600 text-xs italic">
                    Pilih skenario di sebelah kiri untuk melihat AI bekerja...
                 </div>
               )}
            </div>

            {activeThreat && !isAnalyzing && (
               <div className="mt-6 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 animate-in slide-in-from-bottom duration-500">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Status Keamanan:</p>
                  <p className="text-sm font-bold text-white leading-relaxed">
                     Ancaman dinetralisir oleh **Sentinel AI**. Dana anggota tetap aman 100%.
                  </p>
               </div>
            )}
         </div>
      </div>

      {/* Security Principles */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Prinsip "Zero-Trust" Kami</h3>
            <p className="text-slate-500">Kami mengasumsikan setiap transaksi berisiko sampai AI membuktikannya aman.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'Multi-Auth Otorisasi', d: 'Pencairan dana besar butuh 3 tanda tangan digital pengurus + 1 validasi AI Advisor.', icon: '🔑' },
              { t: 'Behavioral Biometrics', d: 'Sistem mengenali jika cara mengetik atau login Anda mendadak berbeda dari biasanya.', icon: '🤚' },
              { t: 'Ledger Imutabilitas', d: 'Setiap transaksi disimpan dengan hash kriptografi. Sekali tertulis, tidak bisa dihapus selamanya.', icon: '⛓️' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:border-indigo-100 transition-all">
                 <div className="text-4xl mb-4">{item.icon}</div>
                 <h4 className="font-bold text-slate-800 italic">{item.t}</h4>
                 <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.d}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Commitment Footer */}
      <div className="p-12 bg-rose-950 border border-rose-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Koperasi Digital yang Lebih Aman dari Brankas Baja."</h4>
         <p className="text-rose-200 max-w-2xl text-lg leading-relaxed z-10">
            Korupsi adalah musuh nomor satu koperasi di Indonesia. KoperatifAI menggunakan teknologi untuk memastikan **Kejujuran** menjadi standar wajib, bukan sekadar pilihan.
         </p>
         <button className="px-10 py-4 bg-white text-rose-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Lihat Laporan Audit Keamanan
         </button>
      </div>
    </div>
  );
};

export default FraudDetection;
