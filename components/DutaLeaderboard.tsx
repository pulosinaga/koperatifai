import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { GoogleGenAI } from "@google/genai";

const leadersData = [
  { rank: 1, name: 'Pak Joni Setiawan', region: 'Cianjur', score: 9850, growth: '+24', npl: '0.0%', volume: 'Rp 450jt', icon: '🤴', color: 'border-amber-400 bg-amber-50/50' },
  { rank: 2, name: 'Ibu Rahma Lilis', region: 'Bandung Barat', score: 8720, growth: '+18', npl: '0.1%', volume: 'Rp 320jt', icon: '🥈', color: 'border-slate-300 bg-slate-50/50' },
  { rank: 3, name: 'Andi Saputra', region: 'Sidoarjo', score: 7940, growth: '+42', npl: '0.0%', volume: 'Rp 210jt', icon: '🥉', color: 'border-orange-400 bg-orange-50/50' },
  { rank: 4, name: 'Dedi Kurniawan', region: 'Garut', score: 6200, growth: '+12', npl: '0.5%', volume: 'Rp 120jt', icon: '👤', color: 'border-slate-100 bg-white' },
  { rank: 5, name: 'Siti Aminah', region: 'Cipanas', score: 5800, growth: '+9', npl: '0.0%', volume: 'Rp 85jt', icon: '👤', color: 'border-slate-100 bg-white' },
];

const DutaLeaderboard: React.FC = () => {
  const { user } = useAppContext();
  const [activeCategory, setActiveCategory] = useState<'GROWTH' | 'INTEGRITY' | 'VOLUME'>('GROWTH');
  const [aiAdvice, setAiAdvice] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const getAiCoachAdvice = async () => {
    setIsAiLoading(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis posisi Duta Wilayah saat ini. Ia berada di peringkat menengah. Kategori aktif: ${activeCategory}. 
        Berikan 2 kalimat 'Pesan Rahasia Coach AI' yang sangat memotivasi agar ia bisa naik peringkat. 
        Hubungkan saran dengan cara menambah anggota lewat 'Warung Talk' atau menjaga NPL 0%. 
        Gunakan nada bahasa pelatih yang antusias dan cerdas.`,
      });
      setAiAdvice(response.text || "Terus berjuang, Ksatria!");
    } catch (e) {
      setAiAdvice("Fokus pada kejujuran warga, peringkat akan naik dengan sendirinya!");
    } finally {
      setIsAiLoading(false);
    }
  };

  useEffect(() => {
    getAiCoachAdvice();
  }, [activeCategory]);

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-6xl mx-auto">
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold shadow-lg border border-white/10 text-xl">🏆</div>
               <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">The Knights of Sovereignty</span>
            </div>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Hall of Fame. <br/>Tahta Para Duta.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Siapa yang paling tulus melayani rakyat? Biarkan data yang berbicara. Bersainglah dalam kebaikan untuk kemuliaan ekonomi desa."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Target Reward Nasional</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">Umroh / Ziarah</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">KHUSUS PERINGKAT 1 TAHUNAN</p>
          </div>
        </div>
      </div>

      {/* Tabs Kategori */}
      <div className="flex justify-center">
         <div className="bg-white p-2 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-wrap justify-center gap-2">
            {[
               { id: 'GROWTH', label: 'Pertumbuhan Rakyat', icon: '📈' },
               { id: 'INTEGRITY', label: 'Perisai Integritas (NPL)', icon: '🛡️' },
               { id: 'VOLUME', label: 'Volume Sirkulasi', icon: '🔄' },
            ].map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase transition-all flex items-center gap-3 ${activeCategory === cat.id ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* THE PODIUM (TOP 3) */}
         <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col md:flex-row items-end justify-center gap-6 pb-10">
               {/* Rank 2 */}
               <div className="w-full md:w-56 bg-white p-8 rounded-[3rem] border-2 border-slate-200 shadow-lg text-center flex flex-col items-center gap-4 order-2 md:order-1 hover:-translate-y-2 transition-transform">
                  <span className="text-5xl">🥈</span>
                  <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-4xl shadow-inner italic font-black">RL</div>
                  <h4 className="font-black text-slate-800 text-sm">{leadersData[1].name}</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase">{leadersData[1].region}</p>
                  <div className="px-4 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-600 mt-2">{leadersData[1].score} PTS</div>
               </div>
               
               {/* Rank 1 (The Sovereign) */}
               <div className="w-full md:w-64 bg-slate-900 p-10 rounded-[4rem] border-4 border-amber-400 shadow-2xl text-center flex flex-col items-center gap-6 order-1 md:order-2 z-10 scale-110 relative hover:-translate-y-4 transition-transform">
                  <div className="absolute -top-10 text-6xl animate-bounce">👑</div>
                  <span className="text-6xl">🤴</span>
                  <div className="w-24 h-24 bg-amber-400 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_0_50px_rgba(251,191,36,0.5)] italic font-black">JS</div>
                  <div className="space-y-1">
                     <h4 className="font-black text-white text-lg">{leadersData[0].name}</h4>
                     <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">{leadersData[0].region}</p>
                  </div>
                  <div className="px-6 py-2 bg-amber-400 text-slate-900 rounded-full text-xs font-black shadow-xl">{leadersData[0].score} PTS</div>
               </div>

               {/* Rank 3 */}
               <div className="w-full md:w-56 bg-white p-8 rounded-[3rem] border-2 border-orange-200 shadow-lg text-center flex flex-col items-center gap-4 order-3 hover:-translate-y-2 transition-transform">
                  <span className="text-5xl">🥉</span>
                  <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-4xl shadow-inner italic font-black">AS</div>
                  <h4 className="font-black text-slate-800 text-sm">{leadersData[2].name}</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase">{leadersData[2].region}</p>
                  <div className="px-4 py-1 bg-orange-100 rounded-full text-[10px] font-black text-orange-600 mt-2">{leadersData[2].score} PTS</div>
               </div>
            </div>

            {/* Detailed Ranking Table */}
            <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-8 py-5 text-center">Rank</th>
                        <th className="px-8 py-5">Ksatria Wilayah</th>
                        <th className="px-8 py-5">NPL %</th>
                        <th className="px-8 py-5 text-right">Volume</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                     {leadersData.map((d) => (
                       <tr key={d.rank} className={`hover:bg-indigo-50/30 transition-all group ${d.rank <= 3 ? 'opacity-50' : ''}`}>
                          <td className="px-8 py-6 text-center font-black text-slate-800 italic">{d.rank}</td>
                          <td className="px-8 py-6">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">👤</div>
                                <div>
                                   <p className="font-bold text-slate-800 text-sm">{d.name}</p>
                                   <p className="text-[9px] font-black text-indigo-600 uppercase tracking-tighter">{d.region}</p>
                                </div>
                             </div>
                          </td>
                          <td className="px-8 py-6">
                             <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase ${parseFloat(d.npl) === 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                {d.npl}
                             </span>
                          </td>
                          <td className="px-8 py-6 text-right">
                             <p className="font-black text-slate-800 text-sm italic">{d.volume}</p>
                             <p className="text-[8px] text-emerald-500 font-bold uppercase">{d.growth} Anggota</p>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* AI PERFORMANCE COACH SIDEBAR */}
         <div className="space-y-8">
            <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[650px] border border-white/5">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
               <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Master Coach</h3>
                    <p className="text-[8px] text-slate-500 font-mono">TUTORIAL_MODE_ACTIVE</p>
                  </div>
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl animate-bounce">🤖</div>
               </div>

               <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
                  {isAiLoading ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-6">
                        <div className="flex gap-2">
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] text-center">AI IS STRATEGIZING YOUR ASCENSION...</p>
                     </div>
                  ) : (
                     <div className="animate-in fade-in duration-1000 space-y-8">
                        <p className="text-white text-2xl leading-relaxed">
                           "{aiAdvice}"
                        </p>
                        <div className="pt-6 border-t border-white/10 space-y-4">
                           <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Langkah Taktis Hari Ini:</p>
                           <ul className="space-y-3">
                              <li className="flex gap-3 text-xs text-slate-400 italic">
                                 <span className="text-emerald-400 font-bold">1.</span> Hubungi 5 orang di wilayah B-12 yang telat menabung celengan harian.
                              </li>
                              <li className="flex gap-3 text-xs text-slate-400 italic">
                                 <span className="text-emerald-400 font-bold">2.</span> Posting brosur 'Anti-Pinjol' di grup WhatsApp pasar lokal.
                              </li>
                           </ul>
                        </div>
                     </div>
                  )}
               </div>
               
               <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
                  <button 
                    onClick={getAiCoachAdvice}
                    className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-indigo-700 transition-all shadow-lg"
                  >
                    MINTA STRATEGI BARU
                  </button>
               </div>
            </div>

            <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[3rem] text-center space-y-4">
               <div className="text-5xl">🕊️</div>
               <h4 className="font-black text-emerald-900 italic">Prinsip Ksatria:</h4>
               <p className="text-[10px] text-emerald-700 leading-relaxed font-bold italic">
                  "Kemenangan sejati seorang Duta bukan pada angka saldo pribadinya, tapi pada seberapa banyak tetangganya yang tidur nyenyak karena tidak lagi dikejar rentenir."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaLeaderboard;