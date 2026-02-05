
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGeneratingPitch, setIsGeneratingPitch] = useState(false);
  const [customPitch, setCustomPitch] = useState('');
  const [targetName, setTargetName] = useState('');

  const slides = [
    {
      title: "Uang Anda Sedang Dijajah?",
      subtitle: "Masalah: Pinjol & Bank Tradisional",
      content: "Pinjol memeras Anda dengan bunga 24% sebulan. Bank memotong saldo Anda dengan biaya admin. Siapa yang untung? Orang lain. Siapa yang rugi? Anda.",
      icon: "🌋",
      color: "from-rose-600 to-rose-900",
      points: ["Bunga Mencekik", "Teror Penagihan", "Biaya Admin Rahasia"]
    },
    {
      title: "Kedaulatan Finansial Anda.",
      subtitle: "Solusi: KoperatifAI Ecosystem",
      content: "Kami membangun 'Bank Masa Depan' tanpa kantor mewah. Sebuah koperasi 100% digital di mana Anda adalah Pemiliknya. Kita patungan modal, kita untung bersama.",
      icon: "◈",
      color: "from-indigo-600 to-indigo-900",
      points: ["100% Milik Anggota", "Bunga Rendah (0.9%)", "Transparansi AI"]
    },
    {
      title: "Mesin Kemakmuran Sirkular.",
      subtitle: "Bagaimana Ini Menghasilkan Uang?",
      content: "Uang simpanan Anda diputar untuk modal usaha pedagang pasar di komunitas kita via Marketplace. Bunga jasanya kembali ke Anda sebagai SHU di akhir periode.",
      icon: "🔄",
      color: "from-emerald-600 to-emerald-900",
      points: ["SHU Real-time", "Pasar Anggota", "Micro-value Loop"]
    },
    {
      title: "Jadilah 100 Orang Pertama.",
      subtitle: "The Pioneer Privilege",
      content: "Kami hanya mencari 100 Pionir untuk membangun fondasi. Sebagai Pionir, Anda mendapatkan hak eksklusif yang tidak akan pernah ada lagi selamanya.",
      icon: "🥇",
      color: "from-amber-500 to-amber-700",
      points: ["Bunga 0.9% Selamanya", "Badge Platinum Instant", "Founder Recognition"]
    }
  ];

  const generateAIPitch = async () => {
    if (!targetName.trim()) return;
    setIsGeneratingPitch(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan pesan WhatsApp singkat (2-3 paragraf) untuk mengajak teman bernama ${targetName} bergabung menjadi 1 dari 100 anggota pionir Koperasi Kredit Digital 'KoperatifAI'. 
        Gunakan gaya bahasa persuasif, penuh semangat, dan fokus pada status 'Pionir' yang memiliki keuntungan bunga mikro 0.9% dan status sebagai salah satu pendiri komunitas ekonomi masa depan. 
        Tekankan bahwa ini Officeless dan Paperless agar ia tertarik dengan kemudahannya.`,
      });
      setCustomPitch(response.text || "Gagal membuat pesan.");
    } catch (e) {
      setCustomPitch("Error: Pastikan sistem online.");
    } finally {
      setIsGeneratingPitch(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Slide Navigator */}
      <div className="relative h-[500px] w-full rounded-[4rem] overflow-hidden shadow-2xl group">
         <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} transition-all duration-700`}></div>
         <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
         
         <div className="relative z-10 h-full p-12 flex flex-col lg:flex-row items-center gap-12 text-white">
            <div className="flex-1 space-y-6">
               <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                  Slide {currentSlide + 1} of {slides.length}
               </span>
               <h2 className="text-5xl font-black leading-tight italic">{slides[currentSlide].title}</h2>
               <p className="text-indigo-100/80 text-xl font-medium">{slides[currentSlide].subtitle}</p>
               <p className="text-white/70 text-lg leading-relaxed max-w-xl italic">"{slides[currentSlide].content}"</p>
               
               <div className="flex flex-wrap gap-3 pt-4">
                  {slides[currentSlide].points.map((p, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/10">
                       ✓ {p}
                    </span>
                  ))}
               </div>
            </div>
            <div className="w-full lg:w-96 aspect-square bg-white/10 backdrop-blur-xl rounded-[4rem] flex items-center justify-center text-9xl shadow-2xl border border-white/20 animate-in zoom-in duration-500">
               {slides[currentSlide].icon}
            </div>
         </div>

         {/* Navigation Buttons */}
         <div className="absolute bottom-10 right-10 flex gap-4 z-20">
            <button 
              onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
              className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all"
            >
              ◀
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
              className="px-8 h-14 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-50 transition-all"
            >
              {currentSlide === slides.length - 1 ? 'SELESAI' : 'LANJUT ▶'}
            </button>
         </div>
      </div>

      {/* AI Personal Recruiter Tool */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Pioneer Recruiter AI</h3>
            <p className="text-slate-500">Tuliskan nama calon anggota, biarkan AI menyusun ajakannya.</p>
         </div>

         <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/3 space-y-6">
               <div className="space-y-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Nama Calon Pionir</label>
                  <input 
                    type="text"
                    value={targetName}
                    onChange={(e) => setTargetName(e.target.value)}
                    placeholder="Contoh: Pak RT Slamet"
                    className="w-full p-5 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none"
                  />
               </div>
               <button 
                 onClick={generateAIPitch}
                 disabled={isGeneratingPitch || !targetName}
                 className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all disabled:opacity-50"
               >
                 {isGeneratingPitch ? 'MENYUSUN PESAN...' : 'GENERATE WA PITCH'}
               </button>
            </div>

            <div className="flex-1 bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden h-[400px] flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="flex justify-between items-center mb-6">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Draft Pesan WhatsApp</p>
                  <button className="text-slate-500 hover:text-white text-xs font-bold underline">Copy Text</button>
               </div>
               <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 italic text-sm text-slate-300 leading-relaxed font-serif">
                  {isGeneratingPitch ? (
                    <div className="flex items-center justify-center h-full gap-2">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                       <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                       <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  ) : customPitch ? (
                    <pre className="whitespace-pre-wrap">{customPitch}</pre>
                  ) : (
                    <div className="h-full flex items-center justify-center text-slate-700 text-center px-10">
                       "Isi nama di sebelah kiri untuk menghasilkan naskah ajakan personal melalui AI."
                    </div>
                  )}
               </div>
               <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">📱</div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                     Pesan ini dioptimasi secara psikologis oleh AI untuk meningkatkan peluang konversi menjadi anggota pionir hingga 40%.
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Trust & Legitimacy Footer */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">"Inilah Saatnya Rakyat Punya Bank Sendiri."</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               Gunakan Digital Pitch Deck ini untuk meyakinkan orang terdekat Anda. KoperatifAI bukan sekadar aplikasi, ini adalah **Gerakan Sosial** yang dipersenjatai dengan teknologi masa depan.
            </p>
         </div>
      </div>

      {/* Integration Message for Founder */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">📢</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Amankan 100 Orang, Amankan Masa Depan."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Setelah Anda mendapatkan 100 orang pertama, Anda tidak lagi memiliki 'Ide', Anda memiliki **Komunitas Aktif**. Investor akan melihat ini sebagai aset yang sangat berharga.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Klaim Kuota Anggota Pionir Sekarang
         </button>
      </div>
    </div>
  );
};

export default PitchDeck;
