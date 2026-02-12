import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { GoogleGenAI } from "@google/genai";

interface Badge {
  id: string;
  title: string;
  desc: string;
  icon: string;
  target: number;
  current: number;
  color: string;
  glow: string;
  unlocked: boolean;
}

const DutaBadges: React.FC = () => {
  const { user } = useAppContext();
  const [isGenerating, setIsGenerating] = useState(false);
  const [heroStory, setHeroStory] = useState('');
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const [badges] = useState<Badge[]>([
    { id: 'liberator', title: 'Anti-Pinjol Hero', desc: 'Bebaskan 100 warga dari jeratan lintah darat digital.', icon: '🛡️', target: 100, current: 82, color: 'bg-rose-100 text-rose-600', glow: 'shadow-[0_0_30px_rgba(244,63,94,0.4)]', unlocked: false },
    { id: 'architect', title: 'Village Architect', desc: 'Onboard 500 anggota aktif di satu kecamatan.', icon: '🏡', target: 500, current: 500, color: 'bg-emerald-100 text-emerald-600', glow: 'shadow-[0_0_40px_rgba(16,185,129,0.5)]', unlocked: true },
    { id: 'king', title: 'Circular King', desc: 'Capai Rp 1 Miliar volume transaksi pasar wilayah.', icon: '🔄', target: 1000, current: 450, color: 'bg-indigo-100 text-indigo-600', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.4)]', unlocked: false },
    { id: 'guardian', title: 'Trust Guardian', desc: 'NPL 0% selama 12 bulan berturut-turut.', icon: '💎', target: 12, current: 12, color: 'bg-amber-100 text-amber-600', glow: 'shadow-[0_0_40px_rgba(245,158,11,0.5)]', unlocked: true },
    { id: 'pioneer', title: 'Digital Pioneer', desc: 'Selesaikan 20 regional activation desa.', icon: '🛰️', target: 20, current: 15, color: 'bg-blue-100 text-blue-600', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]', unlocked: false },
  ]);

  const generateHeroStory = async (badge: Badge) => {
    if (!badge.unlocked) return;
    setIsGenerating(true);
    setSelectedBadge(badge);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan 1 paragraf pendek narasi kepahlawanan yang sangat inspiratif tentang Duta KoperatifAI bernama ${user?.name}. 
        Ia baru saja meraih lencana '${badge.title}'. 
        Hubungkan kesuksesannya dengan keberaniannya melawan sistem lama dan kegigihannya membangun kedaulatan rakyat di desa. 
        Gunakan nada bahasa epik namun tetap merakyat.`,
      });
      setHeroStory(response.text || "Seorang pejuang kemakmuran sejati.");
    } catch (e) {
      setHeroStory("Dedikasi Anda adalah pondasi kemakmuran rakyat Indonesia.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              The Vault of Honor
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Lencana Ksatria. <br/>Bukti Nyata Pengabdian.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
               "Setiap lencana adalah babak baru dalam sejarah kedaulatan rakyat yang Anda bangun. Raih semuanya, jadilah legenda desa."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🏅</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Lencana Diraih</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">2 / 5</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Tier: Regional Marshal</p>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
         {badges.map((b) => (
           <div 
             key={b.id} 
             onClick={() => generateHeroStory(b)}
             className={`p-10 rounded-[4rem] border-2 transition-all flex flex-col items-center text-center space-y-6 relative overflow-hidden group cursor-pointer ${
               b.unlocked ? `bg-white border-indigo-200 ${b.glow} scale-105` : 'bg-slate-50 border-slate-100 opacity-60 grayscale'
             }`}
           >
              {b.unlocked && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
              )}
              
              <div className={`w-28 h-28 rounded-full flex items-center justify-center text-6xl shadow-inner transition-transform duration-500 group-hover:scale-110 ${b.color}`}>
                 {b.icon}
              </div>

              <div className="space-y-2">
                 <h4 className={`text-xl font-black italic ${b.unlocked ? 'text-slate-800' : 'text-slate-400'}`}>{b.title}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed px-4">"{b.desc}"</p>
              </div>

              {!b.unlocked ? (
                 <div className="w-full space-y-2 mt-4">
                    <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase tracking-widest">
                       <span>Progres Misi</span>
                       <span>{b.current} / {b.target}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-400" style={{ width: `${(b.current / b.target) * 100}%` }}></div>
                    </div>
                 </div>
              ) : (
                 <div className="pt-4 mt-auto">
                    <span className="px-6 py-2 bg-indigo-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg animate-bounce">RAIH SERTIFIKAT</span>
                 </div>
              )}
           </div>
         ))}
      </div>

      {/* AI Hero Story Modal */}
      {selectedBadge && selectedBadge.unlocked && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-2xl animate-in zoom-in duration-500">
           <div className="bg-white w-full max-w-2xl rounded-[4rem] p-12 text-center space-y-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-indigo-500"></div>
              
              <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner">🏆</div>
              
              <div className="space-y-2">
                 <h3 className="text-3xl font-black text-slate-800 italic uppercase">Narasi Kepahlawanan</h3>
                 <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Penghargaan Lencana: {selectedBadge.title}</p>
              </div>

              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner relative font-serif italic text-lg text-slate-700 leading-relaxed">
                 {isGenerating ? (
                   <div className="flex flex-col items-center py-10 space-y-6">
                      <div className="flex gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></span>
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></span>
                      </div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">AI sedang menyusun sejarah Anda...</p>
                   </div>
                 ) : (
                   <div className="animate-in fade-in duration-1000">
                      <p className="mb-6">"{heroStory}"</p>
                      <div className="text-[10px] font-black text-indigo-600 not-italic uppercase tracking-widest border-t border-slate-200 pt-6">Official Recommendation by AI Sentinel</div>
                   </div>
                 )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <button 
                   onClick={() => setSelectedBadge(null)}
                   className="py-5 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all"
                 >
                    TUTUP
                 </button>
                 <button 
                   className="py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
                 >
                    📥 DOWNLOAD SERTIFIKAT
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Motivation Footer */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">⚔️</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-amber-500">"Ksatria Sejati Adalah Dia Yang Rakyatnya Tersenyum."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, lencana ini bukan sekadar gambar. Ini adalah alat **Gamifikasi Sosial**. Saat seorang Duta bangga memajang lencana "Anti-Pinjol Hero" di status WA-nya, ia sedang memicu revolusi kepercayaan di seluruh desa. Semakin banyak lencana terkumpul, semakin kuat fondasi kedaulatan kita.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-600 text-[#0c0a09] rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Audit Lencana Nasional</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Buka Syarat Lencana Legend</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaBadges;