
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DualRoleStrategy: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditReport, setAuditReport] = useState('');
  const [activeRole, setActiveRole] = useState<'FOUNDER' | 'BOARD' | 'DUTA'>('FOUNDER');

  const runIntegritySimulation = async () => {
    setIsAuditing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis skenario konflik kepentingan: Founder Budi Utama merangkap Ketua Pengurus dan Duta Wilayah Cianjur. 
        Skenario: Duta Budi mengajukan pinjaman modal untuk anggotanya (Warung Ibu Siti). 
        
        Tunjukkan alur 'Peer-Validation Protocol' AI:
        1. Kenapa sistem otomatis memblokir Budi sebagai Ketua untuk menyetujui ajuan Budi sebagai Duta.
        2. Bagaimana AI mengalihkan otorisasi ke Pengurus lain atau Duta wilayah tetangga sebagai 'Saksi Pihak Ketiga'.
        3. Jelaskan manfaat finansial bagi Budi: Komisi Duta (Aktif) + Dividen SHU (Pasif).
        Gunakan gaya bahasa arsitek sistem yang menjamin transparansi mutlak.`,
      });
      setAuditReport(response.text || "Hasil audit etika belum tersedia.");
    } catch (e) {
      setAuditReport("Sistem AI Sentinel sedang memvalidasi protokol pemisahan wewenang.");
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Role Switcher Hero */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Multi-Role Management Console
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Satu Orang, <br/>Tiga Mesin Ekonomi.</h2>
            
            {/* Interactive Role Switcher */}
            <div className="flex bg-white/5 p-2 rounded-[2rem] border border-white/10 max-w-md">
               <button onClick={() => setActiveRole('FOUNDER')} className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase transition-all ${activeRole === 'FOUNDER' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}>👑 Founder</button>
               <button onClick={() => setActiveRole('BOARD')} className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase transition-all ${activeRole === 'BOARD' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400'}`}>👔 Pengurus</button>
               <button onClick={() => setActiveRole('DUTA')} className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase transition-all ${activeRole === 'DUTA' ? 'bg-amber-500 text-white shadow-lg' : 'text-slate-400'}`}>🛵 Duta</button>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl italic">
               {activeRole === 'FOUNDER' && "Sebagai Founder, Anda fokus pada pengembangan teknologi, keamanan IP, dan mencari pendanaan internasional (Hibah/Impact Fund)."}
               {activeRole === 'BOARD' && "Sebagai Pengurus, Anda memiliki otoritas legal untuk mewakili koperasi di bank dan menandatangani sertifikat saham anggota."}
               {activeRole === 'DUTA' && "Sebagai Duta, Anda mendapatkan penghasilan harian dari komisi transaksi marketplace dan iuran sosial di wilayah Anda."}
            </p>

            <button 
              onClick={runIntegritySimulation}
              disabled={isAuditing}
              className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-3 active:scale-95"
            >
              {isAuditing ? '⏳ AI IS SCANNING ETHICS LOGS...' : '🛡️ SIMULASI AUDIT KONFLIK KEPENTINGAN'}
            </button>
          </div>
          
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl relative overflow-hidden">
             <div className="flex justify-center -space-x-4 mb-6">
                <div className={`w-14 h-14 rounded-full border-4 border-slate-900 flex items-center justify-center text-xl shadow-lg transition-all ${activeRole === 'FOUNDER' ? 'bg-indigo-600 scale-125 z-30 ring-4 ring-indigo-400/50' : 'bg-slate-700 grayscale'}`}>👑</div>
                <div className={`w-14 h-14 rounded-full border-4 border-slate-900 flex items-center justify-center text-xl shadow-lg transition-all ${activeRole === 'BOARD' ? 'bg-emerald-500 scale-125 z-30 ring-4 ring-emerald-400/50' : 'bg-slate-700 grayscale'}`}>👔</div>
                <div className={`w-14 h-14 rounded-full border-4 border-slate-900 flex items-center justify-center text-xl shadow-lg transition-all ${activeRole === 'DUTA' ? 'bg-amber-500 scale-125 z-30 ring-4 ring-amber-400/50' : 'bg-slate-700 grayscale'}`}>🛵</div>
             </div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Synergy Multiplier</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">3.0x</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black tracking-widest">Full-Stack Leadership Active</p>
          </div>
        </div>
      </div>

      {/* Triple Role Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { t: 'Founder (Visi)', d: 'Membangun "Mesin" AI dan menjaga kedaulatan IP.', income: 'Royalti IP & Valuasi Saham Platform', icon: '💎', color: 'border-indigo-500 bg-indigo-50' },
           { t: 'Board (Mandat)', d: 'Otorisasi dana anggota & kebijakan bunga mikro.', income: 'Honor Pengurus & SHU Pengurus', icon: '🏛️', color: 'border-emerald-500 bg-emerald-50' },
           { t: 'Duta (Aksi)', d: 'Verifikasi anggota desa & pendampingan warung.', income: 'Komisi Jasa Transaksi (Bulan Madu)', icon: '🛵', color: 'border-amber-500 bg-amber-50' }
         ].map((role, i) => (
           <div key={i} className={`p-10 rounded-[3.5rem] border-t-8 ${role.color} shadow-sm space-y-6 hover:shadow-xl transition-all group flex flex-col`}>
              <div className="text-5xl group-hover:scale-110 transition-transform">{role.icon}</div>
              <h4 className="text-2xl font-black text-slate-800 leading-tight">{role.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed flex-1 italic">"{role.d}"</p>
              <div className="pt-6 border-t border-slate-100">
                 <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">Mesin Cuan:</p>
                 <p className="text-sm font-bold text-slate-800 mt-1">{role.income}</p>
              </div>
           </div>
         ))}
      </div>

      {/* AI Ethics Sentry Protocol Visualization */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">
            <div className="flex-1 space-y-8">
               <h3 className="text-3xl font-black italic text-indigo-400">The "Automatic Recusal" Protocol</h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                  "Satu-satunya cara agar peran ganda ini legal dan dipercaya adalah dengan melarang Anda menyetujui pekerjaan Anda sendiri."
               </p>
               <div className="space-y-4">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex gap-4 items-center group hover:bg-white/10 transition-all">
                     <span className="text-2xl">🧩</span>
                     <p className="text-sm text-slate-300"><b>Peer-Validation:</b> Jika Duta Budi mensubmit data peminjam, maka Otorisasi Approval akan dialihkan secara paksa ke **Ketua Pengurus Wilayah Lain** atau ke pengurus independen kedua.</p>
                  </div>
                  <div className={`p-6 rounded-2xl border flex gap-4 items-center transition-all ${isAuditing ? 'bg-rose-500/20 border-rose-500 animate-pulse' : 'bg-white/5 border-white/10'}`}>
                     <span className="text-2xl">{isAuditing ? '🚨' : '🕵️‍♂️'}</span>
                     <p className="text-sm text-slate-300"><b>AI Integrity Lock:</b> Sistem melacak alamat dompet (Wallet Address) Duta dan memutus jalur approval dari akun Pengurus dengan metadata identitas (NIK) yang sama.</p>
                  </div>
               </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md rounded-[3.5rem] p-10 border border-white/10 flex flex-col h-[500px]">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">AI Integrity Report (Dual-Role)</p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                    <span className="text-[9px] font-mono text-slate-500">TRUST_LEVEL: 100%</span>
                  </div>
               </div>
               <div className="flex-1 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic pr-4">
                  {isAuditing ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-8 py-20">
                        <div className="flex gap-3">
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-center">AI sedang membedah integritas pemisahan tugas...</p>
                     </div>
                  ) : auditReport ? (
                     <div className="animate-in fade-in duration-1000 space-y-6">
                        <pre className="whitespace-pre-wrap">{auditReport}</pre>
                        <div className="pt-6 border-t border-white/10 flex justify-center">
                           <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[9px] font-black uppercase shadow-lg">Download Ethics Framework</button>
                        </div>
                     </div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-6">
                        <div className="text-8xl">🛡️</div>
                        <p className="max-w-xs mx-auto font-bold text-lg">Klik "SIMULASI AUDIT" untuk membuktikan bagaimana peran ganda Anda tetap aman di mata hukum dan anggota.</p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>

      {/* Strategic Callout */}
      <div className="p-16 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">📈</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-2xl italic leading-tight">"Inilah Cara Membangun Tanpa Bergantung pada Gaji Buta."</h4>
         <p className="text-slate-500 max-w-3xl text-lg leading-relaxed italic">
            "Dengan merangkap sebagai Duta, Anda mendapatkan **Pendapatan Aktif** sebagai upah kerja lapangan. Dengan menjadi Pengurus, Anda menjaga **Keamanan Lembaga**. Dengan menjadi Founder, Anda membangun **Aset Valuasi Juta Dollar**. Anda adalah motor utama penggerak kedaulatan."
         </p>
         <div className="flex gap-4">
            <button className="px-12 py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl">Ajukan Proposal Peran Ganda</button>
         </div>
      </div>
    </div>
  );
};

export default DualRoleStrategy;
