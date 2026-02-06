
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

type FaithType = 'ISLAM' | 'CHRISTIAN' | 'HINDU' | 'BUDDHIST' | 'CONFUCIAN';

const SpiritualJourneys: React.FC = () => {
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAdvice, setAiAdvice] = useState('');
  const [activeFaith, setActiveFaith] = useState<FaithType>('ISLAM');

  const faithConfig = {
    ISLAM: { 
      label: 'Islam', 
      hero: 'bg-[#064e3b]', 
      accent: 'border-amber-500', 
      btn: 'bg-amber-500 text-slate-950',
      title: 'Niat Ibadah, Modal Berkah.',
      desc: 'Menabung untuk panggilan Allah melalui sistem yang bersih dari Riba.',
      icon: '🕋',
      advicePrompt: 'Berikan nasihat menabung untuk Umrah Rp 35jt. Jelaskan manfaat backup emas fisik.'
    },
    CHRISTIAN: { 
      label: 'Kristen', 
      hero: 'bg-indigo-900', 
      accent: 'border-indigo-400', 
      btn: 'bg-indigo-400 text-slate-900',
      title: 'Ziarah Rohani, Perjalanan Iman.',
      desc: 'Wujudkan rindu ke Tanah Suci melalui tabungan aman dan dukungan komunitas seiman.',
      icon: '⛪',
      advicePrompt: 'Berikan nasihat menabung untuk Ziarah Yerusalem Rp 45jt. Jelaskan kekuatan vouching komunitas.'
    },
    HINDU: { 
      label: 'Hindu', 
      hero: 'bg-orange-700', 
      accent: 'border-orange-400', 
      btn: 'bg-orange-400 text-slate-900',
      title: 'Tirta Yatra, Dharma Bhakti.',
      desc: 'Rencanakan perjalanan suci ke Besakih atau India sebagai wujud bhakti dan dharma.',
      icon: '🕉️',
      advicePrompt: 'Berikan nasihat menabung untuk Tirta Yatra ke India/Bali. Gunakan istilah Dharma dan kedaulatan ekonomi jemaat pura.'
    },
    BUDDHIST: { 
      label: 'Budha', 
      hero: 'bg-rose-800', 
      accent: 'border-rose-400', 
      btn: 'bg-rose-400 text-slate-900',
      title: 'Dhammayatra, Jalan Kebajikan.',
      desc: 'Membangun dana kebajikan untuk ziarah ke Borobudur, Thailand, atau Nepal.',
      icon: '☸️',
      advicePrompt: 'Berikan nasihat menabung untuk ziarah Budha (Dhammayatra). Jelaskan pentingnya "Dana" (generosity) dalam koperasi.'
    },
    CONFUCIAN: { 
      label: 'Kong Huchu', 
      hero: 'bg-red-700', 
      accent: 'border-red-400', 
      btn: 'bg-red-400 text-slate-900',
      title: 'Xiao & Harmony, Berkah Imlek.',
      desc: 'Kelola dana perayaan Imlek dan bakti leluhur dengan bijak dan harmonis.',
      icon: '🏮',
      advicePrompt: 'Berikan nasihat perencanaan keuangan untuk perayaan Imlek dan bakti orang tua (Xiao). Jelaskan cara cicil dana Angpao via koperasi.'
    }
  };

  const packages = {
    ISLAM: [
      { id: 1, name: 'Umrah Syawal Ekonomi', price: 'Rp 28.500.000', provider: 'Amanah Travel', icon: '🕋' },
      { id: 2, name: 'Haji Furoda Eksklusif', price: 'Rp 250.000.000', provider: 'Sovereign Hajj', icon: '🕌' },
    ],
    CHRISTIAN: [
      { id: 3, name: 'Ziarah Holy Land', price: 'Rp 42.000.000', provider: 'Blessing Tours', icon: '⛪' },
      { id: 4, name: 'Ziarah Vatikan/Lourdes', price: 'Rp 55.000.000', provider: 'Grace Pilgrimage', icon: '🇻🇦' },
    ],
    HINDU: [
      { id: 5, name: 'Tirta Yatra India (Ganges)', price: 'Rp 32.000.000', provider: 'Dharma Travel', icon: '🕉️' },
      { id: 6, name: 'Ziarah Besakih & Pura Mandara', price: 'Rp 4.500.000', provider: 'Bali Local Hub', icon: '🛕' },
    ],
    BUDDHIST: [
      { id: 7, name: 'Borobudur Vesak Special', price: 'Rp 3.500.000', provider: 'Lotus Tours', icon: '☸️' },
      { id: 8, name: 'Nepal/India Holy Sites', price: 'Rp 38.000.000', provider: 'Nirvana Travel', icon: '🏔️' },
    ],
    CONFUCIAN: [
      { id: 9, name: 'Ziarah Leluhur Tiongkok', price: 'Rp 45.000.000', provider: 'Legacy Travels', icon: '🏮' },
      { id: 10, name: 'Paket Perayaan Imlek Keluarga', price: 'Rp 15.000.000', provider: 'Harmony Supply', icon: '🧨' },
    ]
  };

  const getSpiritualAdvice = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: faithConfig[activeFaith].advicePrompt,
      });
      setAiAdvice(response.text || "AI sedang menyusun rencana keberkatan Anda.");
    } catch (e) {
      setAiAdvice("Koneksi spritual sedang terganggu. Tetaplah pada niat baik Anda.");
    } finally {
      setIsConsulting(false);
    }
  };

  const currentConfig = faithConfig[activeFaith];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Faith Selector Bar */}
      <div className="flex justify-center">
         <div className="bg-white p-2 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-wrap justify-center gap-2">
            {(Object.keys(faithConfig) as FaithType[]).map((f) => (
              <button 
                key={f}
                onClick={() => {setActiveFaith(f); setAiAdvice('');}}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase transition-all flex items-center gap-2 ${activeFaith === f ? currentConfig.btn : 'text-slate-400 hover:bg-slate-50'}`}
              >
                <span>{faithConfig[f].icon}</span>
                {faithConfig[f].label}
              </button>
            ))}
         </div>
      </div>

      {/* Dynamic Hero Header */}
      <div className={`rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 transition-all duration-700 ${currentConfig.hero} ${currentConfig.accent}`}>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="bg-white/10 p-4 rounded-3xl border border-white/20 text-4xl shadow-xl">
                  {currentConfig.icon}
               </div>
               <span className="px-6 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                  Universal Spiritual Hub v2.0
               </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">
              {currentConfig.title}
            </h2>
            <p className="text-white/80 text-xl leading-relaxed max-w-3xl font-medium italic">
               {currentConfig.desc}
            </p>
            <button 
              onClick={getSpiritualAdvice}
              disabled={isConsulting}
              className={`px-12 py-5 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl transition-all flex items-center gap-4 active:scale-95 ${currentConfig.btn} hover:brightness-110`}
            >
              {isConsulting ? '⏳ MENGHITUNG JALUR KEBERKATAN...' : `🤲 KONSULTASI RENCANA ${currentConfig.label.toUpperCase()} AI`}
            </button>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Dana Persiapan {activeFaith === 'CONFUCIAN' ? 'Imlek' : 'Ziarah'}</p>
                <p className="text-5xl font-black text-white mt-2 italic">Rp 12.4<span className="text-xl opacity-40 ml-1">Jt</span></p>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase">
                   <span className="text-white/60">Progres Kebutuhan</span>
                   <span className="text-white">{(12.4 / (activeFaith === 'CONFUCIAN' ? 15 : 35) * 100).toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className={`h-full animate-pulse ${currentConfig.btn.split(' ')[0]}`} style={{ width: `${(12.4 / (activeFaith === 'CONFUCIAN' ? 15 : 35) * 100)}%` }}></div>
                </div>
             </div>
             <p className="text-[9px] text-white/40 font-black uppercase tracking-widest italic">"Secured by Multi-Faith Sovereign Vault"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Packages List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Pilihan Program Anggota</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {packages[activeFaith].map((p) => (
                 <div key={p.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                       <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                       <div className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest italic">Community Verified</div>
                    </div>
                    <div className="flex-1 space-y-2">
                       <h4 className="text-2xl font-black text-slate-800 leading-tight italic">{p.name}</h4>
                       <p className="text-xs text-slate-400 font-bold uppercase">{p.provider}</p>
                       <p className={`text-2xl font-black mt-4 text-slate-900`}>{p.price}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-50">
                       <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg text-white ${currentConfig.hero}`}>Lihat Detail & Jadwal</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Advice Side */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[750px] border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-8">
               <h3 className="text-xl font-black text-white italic uppercase tracking-widest">AI Spiritual Consultant</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-bounce">🕊️</div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI SEDANG MENYUSUN JALUR KEBERKATAN UNTUK ANDA...</p>
                  </div>
               ) : aiAdvice ? (
                  <div className="animate-in fade-in duration-1000">
                     <p className="text-[10px] text-indigo-400 font-black uppercase mb-6 tracking-widest border-b border-white/10 pb-4">Rencana Kebajikan:</p>
                     <pre className="whitespace-pre-wrap">{aiAdvice}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center">
                        <button className={`px-10 py-5 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all ${currentConfig.hero}`}>Sahkan Rencana Digital</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">{currentConfig.icon}</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Klik tombol konsultasi untuk merencanakan niat suci Anda secara cerdas dan aman.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Philosophy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all">
            <div className="text-5xl">🏘️</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Solidaritas Bhinneka</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Apapun keyakinan Anda, sesama anggota koperasi siap memberikan vouching digital untuk memudahkan niat suci Anda."</p>
         </div>
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all">
            <div className="text-5xl">🛡️</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Transparansi Amanah</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Dana dikelola dengan audit AI Sentinel. Tidak ada lagi ketakutan akan penipuan biro perjalanan ziarah bodong."</p>
         </div>
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all">
            <div className="text-5xl">🧧</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Kemandirian Tradisi</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Rayakan Imlek, Galungan, atau Waisak tanpa pusing anggaran. Cicil kebutuhan perayaan Anda melalui tabungan sirkular."</p>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse opacity-30">🇮🇩</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-amber-500">"Kedaulatan Rakyat adalah Kedaulatan Budaya."</h4>
            <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
               Founder, inilah wajah Indonesia yang sesungguhnya. KoperatifAI merangkul semua, melayani semua. Saat rakyat dari berbagai latar belakang bisa merayakan hari suci mereka dengan tenang karena sistem ekonomi yang jujur, Anda bukan hanya membangun startup, Anda sedang merajut kembali **Persatuan Indonesia**.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Daftarkan Biro Travel Bhinneka</button>
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-400">Tinjau Protokol Keberagaman AI</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SpiritualJourneys;
