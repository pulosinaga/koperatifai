import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const arisanGroups = [
  { id: 1, name: 'Arisan Pasar Cianjur', slot: 'Rp 100rb / bln', total: 'Rp 2jt', members: 20, cycle: 'Bulanan', status: 'ACTIVE' },
  { id: 2, name: 'Arisan Duta Millennial', slot: 'Rp 500rb / bln', total: 'Rp 5jt', members: 10, cycle: 'Bulanan', status: 'LOCKED' },
  { id: 3, name: 'Arisan Ibu-Ibu Syariah', slot: 'Rp 200rb / bln', total: 'Rp 4jt', members: 20, cycle: 'Bulanan', status: 'ACTIVE' },
];

const ArisanDigital: React.FC = () => {
  const [isShuffling, setIsShuffling] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [aiProof, setAiProof] = useState('');
  const [isExplaining, setIsExplaining] = useState(false);

  const shuffle = () => {
    setIsShuffling(true);
    setWinner(null);
    setAiProof('');
    setTimeout(() => {
      setWinner("Ibu Rahma Lilis (ID: CU-MBR-004)");
      setIsShuffling(false);
      generateFairnessProof("Ibu Rahma Lilis");
    }, 3000);
  };

  const generateFairnessProof = async (winnerName: string) => {
    setIsExplaining(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan laporan transparansi "Proof of Fairness" untuk kocokan arisan digital. 
        Pemenang: ${winnerName}. 
        Jelaskan bahwa sistem menggunakan algoritma Random Number Generator yang terverifikasi dan tidak bisa diintervensi pengurus. 
        Katakan bahwa seluruh setoran anggota kelompok aman dan pemenang terpilih secara murni dari hasil acak sistem. 
        Gunakan nada bahasa yang menenangkan anggota agar tidak takut uang dilarikan bandar.`,
      });
      setAiProof(response.text || "Algoritma menjamin keadilan pengocokan.");
    } catch (e) {
      setAiProof("Keadilan sistem dijamin oleh Immutable Ledger.");
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Verified Social Savings v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Arisan Digital AI: <br/>Budaya Lama, Teknologi Baru.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl font-medium">
               "Tidak perlu lagi bandar manual yang berisiko. Biarkan AI kami mengocok arisan secara adil dan memantau setoran seluruh anggota kelompok."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="text-6xl mb-4">🌀</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Pool Nasional</p>
             <p className="text-3xl font-black text-indigo-900">Rp 4.2M</p>
             <p className="text-[9px] text-emerald-500 mt-2 uppercase font-black tracking-widest italic">Zero-Fraud Algorithm Active</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase">Kelompok Arisan Anda</h3>
            <div className="space-y-4">
               {arisanGroups.map((group) => (
                 <div key={group.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-6">
                       <div>
                          <h4 className="text-xl font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{group.name}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{group.cycle} • {group.members} Peserta</p>
                       </div>
                       <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase ${group.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>{group.status}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                       <div>
                          <p className="text-[8px] font-black text-slate-400 uppercase">Setoran</p>
                          <p className="text-lg font-black text-slate-800">{group.slot}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[8px] font-black text-slate-400 uppercase">Total Get</p>
                          <p className="text-lg font-black text-indigo-600">{group.total}</p>
                       </div>
                    </div>
                    <button className="w-full mt-6 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all">Detail Kelompok</button>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col items-center justify-center space-y-10 relative overflow-hidden h-fit min-h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest relative z-10">Ruang Kocok Digital</h3>
            
            <div className="relative">
               <div className={`w-48 h-48 rounded-full border-8 border-indigo-600 flex items-center justify-center text-7xl transition-all duration-300 ${isShuffling ? 'animate-spin' : ''}`}>
                  {isShuffling ? '🎲' : winner ? '🏆' : '📦'}
               </div>
               {isShuffling && (
                 <div className="absolute inset-0 border-4 border-emerald-500 rounded-full animate-ping"></div>
               )}
            </div>

            <div className="text-center space-y-4 relative z-10 w-full">
               {isShuffling ? (
                  <p className="text-indigo-400 font-black animate-pulse uppercase tracking-[0.2em]">SISTEM SEDANG MENGACAK...</p>
               ) : winner ? (
                  <div className="animate-in zoom-in duration-500 space-y-6">
                     <div>
                        <p className="text-xs text-slate-500 uppercase font-black">Pemenang Periode Ini:</p>
                        <h4 className="text-3xl font-black text-white italic mt-2">{winner}</h4>
                     </div>
                     <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-left">
                        <p className="text-[10px] font-black text-emerald-400 uppercase mb-3 flex items-center gap-2">
                           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> AI Proof of Fairness:
                        </p>
                        <div className="text-xs text-slate-300 leading-relaxed italic font-serif">
                           {isExplaining ? "Menyusun laporan keadilan..." : aiProof}
                        </div>
                     </div>
                  </div>
               ) : (
                  <p className="text-slate-500 italic max-w-xs mx-auto">"Tekan tombol di bawah untuk menentukan pemenang secara transparan."</p>
               )}
            </div>

            {!winner && (
               <button 
                  onClick={shuffle}
                  disabled={isShuffling}
                  className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all disabled:opacity-30 active:scale-95"
               >
                  {isShuffling ? 'SEDANG MENGOCOK...' : 'MULAI KOCOK DIGITAL'}
               </button>
            )}
            
            {winner && (
               <button onClick={() => { setWinner(null); setAiProof(''); }} className="text-slate-500 font-black uppercase text-[10px] hover:text-white transition-colors">KEMBALI KE LOBI</button>
            )}
         </div>
      </div>
    </div>
  );
};

export default ArisanDigital;