import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const winners = [
  { rank: 3, name: 'Andi Saputra', region: 'Sidoarjo', impact: 'Mengaktifkan 42 Warung Digital', icon: '🥉', color: 'text-orange-400' },
  { rank: 2, name: 'Ibu Rahma Lilis', region: 'Bandung Barat', impact: 'NPL 0% Selama 12 Bulan', icon: '🥈', color: 'text-slate-300' },
  { rank: 1, name: 'Pak Joni Setiawan', region: 'Cianjur', impact: 'Bebaskan 120 Warga dari Pinjol', icon: '🥇', color: 'text-amber-400' },
];

const AwardingNight: React.FC = () => {
  const [stage, setStage] = useState<'IDLE' | 'RANK_3' | 'RANK_2' | 'RANK_1' | 'FINISHED'>('IDLE');
  const [isAiOrating, setIsAiOrating] = useState(false);
  const [citation, setCitation] = useState('');
  const [echoCount, setEchoCount] = useState(0);
  const [showSonicWaves, setShowSonicWaves] = useState(false);

  useEffect(() => {
    if (stage !== 'IDLE' && stage !== 'FINISHED') {
      const interval = setInterval(() => {
        setEchoCount(prev => prev + Math.floor(Math.random() * 8));
        setShowSonicWaves(true);
        setTimeout(() => setShowSonicWaves(false), 1000);
        
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
        audio.volume = 0.05;
        audio.play().catch(() => {});
      }, 2500);
      return () => clearInterval(interval);
    } else {
      setEchoCount(0);
    }
  }, [stage]);

  const nextWinner = async () => {
    let nextStage: any = 'IDLE';
    if (stage === 'IDLE') nextStage = 'RANK_3';
    else if (stage === 'RANK_3') nextStage = 'RANK_2';
    else if (stage === 'RANK_2') nextStage = 'RANK_1';
    else if (stage === 'RANK_1') nextStage = 'FINISHED';

    setStage(nextStage);
    if (nextStage !== 'FINISHED' && nextStage !== 'IDLE') {
      const winner = winners.find(w => `RANK_${w.rank}` === nextStage);
      if (winner) generateCitation(winner);
    }
  };

  const generateCitation = async (winner: any) => {
    setIsAiOrating(true);
    setCitation('');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan 1 paragraf 'Citasi Kehormatan' yang megah untuk Duta Koperasi bernama ${winner.name} (Juara ${winner.rank} Nasional). 
        Pencapaian: ${winner.impact}. Wilayah: ${winner.region}. 
        Tambahkan di akhir kalimat: "Dengar, ribuan suara rakyat sedang bersorak memanggil nama Anda!" 
        Gunakan nada orator kelas dunia.`,
      });
      setCitation(response.text || "Pahlawan kedaulatan sejati.");
    } catch (e) {
      setCitation("Dedikasi Anda adalah cahaya bagi rakyat di pelosok desa.");
    } finally {
      setIsAiOrating(false);
    }
  };

  return (
    <div className="min-h-screen bg-black rounded-[4rem] relative overflow-hidden flex flex-col items-center justify-center p-8 border-8 border-indigo-900/30">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="laser-line-1"></div>
        <div className="laser-line-2"></div>
        <div className="laser-line-3"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
      </div>

      {(stage !== 'IDLE' && stage !== 'FINISHED') && (
        <div className="absolute top-10 right-10 z-50 animate-in slide-in-from-right duration-700">
           <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/20 text-center shadow-2xl min-w-[180px]">
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Gema & Suara Rakyat</p>
              <p className="text-4xl font-black text-white italic">{echoCount.toLocaleString()}</p>
              <div className="mt-4 flex gap-1.5 justify-center h-6 items-end">
                 {[...Array(8)].map((_, i) => (
                   <div key={i} className="w-1 bg-emerald-500 rounded-full animate-wave" style={{ height: `${20 + Math.random()*80}%`, animationDelay: `${i * 0.1}s` }}></div>
                 ))}
              </div>
           </div>
        </div>
      )}

      {stage === 'IDLE' ? (
        <div className="relative z-10 text-center space-y-10 animate-in fade-in zoom-in duration-1000">
           <div className="w-32 h-32 bg-indigo-600 rounded-3xl mx-auto flex items-center justify-center text-6xl shadow-[0_0_50px_rgba(79,70,229,0.5)] border border-white/20">◈</div>
           <div className="space-y-4">
              <h1 className="text-6xl font-black italic tracking-tighter text-white font-serif uppercase">Malam Cahaya <br/><span className="text-amber-400">Ksatria Kedaulatan</span></h1>
              <p className="text-slate-400 text-xl font-medium">Seremonial Penghargaan Duta Wilayah Terbaik 2026</p>
           </div>
           <button onClick={nextWinner} className="px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:scale-110 transition-transform active:scale-95">Mulai Seremoni 🎬</button>
        </div>
      ) : stage === 'FINISHED' ? (
        <div className="relative z-10 text-center space-y-12 animate-in zoom-in duration-1000">
           <div className="text-9xl mb-8 animate-bounce">🥂</div>
           <h2 className="text-5xl font-black italic text-white uppercase">Malam Penganugerahan Selesai</h2>
           <p className="text-slate-400 text-xl max-w-xl mx-auto italic">"Suara rakyat telah kita dengar. Mari kita jaga amanah ini sampai fajar berikutnya."</p>
           <button onClick={() => setStage('IDLE')} className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10 hover:bg-white/20 transition-all">ULANGI SEREMONI</button>
        </div>
      ) : (
        <div className="relative z-10 w-full max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
           <div className="flex flex-col items-center">
              <div className="relative mb-12">
                 <div className="absolute inset-0 bg-white/20 rounded-full blur-[100px] scale-150 animate-pulse"></div>
                 {showSonicWaves && (
                    <div className="absolute inset-0 border-4 border-indigo-500 rounded-[4rem] animate-ping opacity-40"></div>
                 )}
                 <div className="w-56 h-56 bg-slate-900 rounded-[4rem] border-4 border-white/10 flex items-center justify-center text-9xl relative z-10 shadow-2xl overflow-hidden group">
                    <span className="relative z-20 group-hover:scale-125 transition-transform duration-500">
                      {winners.find(w => `RANK_${w.rank}` === stage)?.icon}
                    </span>
                 </div>
                 {stage === 'RANK_1' && <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-8xl animate-bounce">👑</div>}
              </div>

              <div className="text-center space-y-4">
                 <p className="text-indigo-400 font-black uppercase tracking-[0.4em] text-sm animate-pulse">Peringkat {stage.split('_')[1]} Nasional</p>
                 <h3 className="text-6xl font-black text-white italic font-serif">{winners.find(w => `RANK_${w.rank}` === stage)?.name}</h3>
                 <p className="text-xl font-bold text-slate-500 uppercase tracking-widest">Wilayah: {winners.find(w => `RANK_${w.rank}` === stage)?.region}</p>
              </div>

              <div className="w-full mt-16 bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 relative overflow-hidden min-h-[250px] flex flex-col justify-center">
                 {isAiOrating ? (
                   <div className="flex flex-col items-center gap-6 py-10">
                      <div className="flex gap-3">
                         <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                         <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                         <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">AI Master of Ceremonies is composing...</p>
                   </div>
                 ) : (
                   <div className="animate-in fade-in duration-1000 text-center">
                      <p className="text-2xl font-serif italic text-indigo-100 leading-relaxed max-w-2xl mx-auto">"{citation}"</p>
                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
                         <div className="flex gap-1 items-center">
                            <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
                            <p className="text-[9px] font-black text-rose-400 uppercase tracking-widest">Live Voice Summaries Incoming</p>
                         </div>
                      </div>
                   </div>
                 )}
              </div>

              <div className="pt-16">
                 <button onClick={nextWinner} className="px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs shadow-xl hover:bg-emerald-400 transition-all active:scale-95">
                    {stage === 'RANK_1' ? 'AKHIRI SEREMONI' : 'PENGUMUMAN BERIKUTNYA →'}
                 </button>
              </div>
           </div>
        </div>
      )}

      <style>{`
        @keyframes wave { 0%, 100% { height: 20%; } 50% { height: 100%; } }
        .animate-wave { animation: wave 0.5s ease-in-out infinite; }
        .laser-line-1 { position: absolute; top: 0; left: 10%; width: 2px; height: 100%; background: linear-gradient(to bottom, transparent, #6366f1, transparent); transform: skewX(-20deg); opacity: 0.3; animation: laser-move 5s infinite; }
        .laser-line-2 { position: absolute; top: 0; right: 15%; width: 2px; height: 100%; background: linear-gradient(to bottom, transparent, #10b981, transparent); transform: skewX(25deg); opacity: 0.3; animation: laser-move 7s infinite reverse; }
        .laser-line-3 { position: absolute; top: 0; left: 45%; width: 2px; height: 100%; background: linear-gradient(to bottom, transparent, #f59e0b, transparent); opacity: 0.2; animation: laser-move 4s infinite; }
        @keyframes laser-move { 0%, 100% { transform: translateX(0) skewX(-20deg); opacity: 0.1; } 50% { transform: translateX(100px) skewX(20deg); opacity: 0.4; } }
      `}</style>
    </div>
  );
};

export default AwardingNight;