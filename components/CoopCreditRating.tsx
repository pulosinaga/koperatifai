
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis, Radar as RadarArea } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const memberData = [
  { subject: 'Savings', A: 85, fullMark: 100 },
  { subject: 'Marketplace', A: 70, fullMark: 100 },
  { subject: 'Education', A: 95, fullMark: 100 },
  { subject: 'Vouching', A: 100, fullMark: 100 },
  { subject: 'Repayment', A: 90, fullMark: 100 },
];

const CoopCreditRating: React.FC = () => {
  const [isRating, setIsRating] = useState(false);
  const [aiReport, setAiReport] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [currentScore] = useState(882);

  const calculateInstitutionalRating = async () => {
    setIsRating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis kredibilitas anggota KoperatifAI bernama 'Budi Utama'. 
        Data Score: ${currentScore}/1000. 
        Konteks: Ia memiliki 10 penjamin (Solidarity-10), rajin menabung harian Rp 2.000, dan aktif sebagai merchant bakso. 
        
        Tugas:
        1. Berikan 'Rating Grade' (AAA, AA, or A).
        2. Tunjukkan 3 alasan kenapa rating ini lebih terpercaya dari SLIK OJK (misal: data perilaku riil komunitas vs data hutang pasif).
        3. Rekomendasi penggunaan sertifikat ini untuk pihak ketiga (misal: leasing motor atau vendor bahan baku).
        Gunakan gaya bahasa lembaga pemeringkat kredit internasional (seperti Moody's atau S&P) tapi dengan sentuhan ekonomi kerakyatan.`,
      });
      setAiReport(response.text || "Hasil rating belum tersedia.");
    } catch (e) {
      setAiReport("Audit Integritas sedang berlangsung. Jalur data kedaulatan sedang sibuk.");
    } finally {
      setIsRating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Agency Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              National Credit Rating Bureau v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Kredibilitas Rakyat, <br/>Diakui Dunia.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Kami tidak menilai Anda dari hutang Anda di masa lalu, tapi dari kejujuran perilaku ekonomi Anda di dalam komunitas."
            </p>
            <div className="flex gap-6">
               <button 
                onClick={calculateInstitutionalRating}
                disabled={isRating}
                className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-4"
               >
                  {isRating ? '🧠 ANALYZING INTEGRITY...' : '📜 GENERATE INSTITUTIONAL RATING'}
               </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">KoperatifAI Trust Score</p>
             <p className="text-8xl font-black text-white mt-2 italic">{currentScore}<span className="text-xl text-slate-500 ml-1">/1000</span></p>
             <div className="mt-8 flex justify-center gap-3">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                  STATUS: AAA (PRIME)
                </span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Analysis Matrix */}
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest w-full">Multidimensional Integrity</h3>
            <div className="w-full h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={memberData}>
                     <PolarGrid stroke="#f1f5f9" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 'black' }} />
                     <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                     <RadarArea
                        name="Budi Utama"
                        dataKey="A"
                        stroke="#4338ca"
                        fill="#6366f1"
                        fillOpacity={0.6}
                     />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
               <div className="p-6 bg-slate-50 rounded-3xl text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase">External Validity</p>
                  <p className="text-lg font-black text-indigo-600">HIGH (98.2%)</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-3xl text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Social Guarantee</p>
                  <p className="text-lg font-black text-emerald-600">MAX (10/10)</p>
               </div>
            </div>
         </div>

         {/* AI Rating Report Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[650px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Integrity Report</h3>
               <div className="flex gap-2">
                  <span className="text-[9px] text-slate-500 font-mono">BUREAU_ID: KOPAI-B01</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-8 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isRating ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10">
                     <div className="flex gap-4">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em]">Processing Behavioral Ledger...</p>
                  </div>
               ) : aiReport ? (
                  <div className="animate-in fade-in duration-1000">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-2xl">🏆</div>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Certified Rating: AAA (Prime)</p>
                     </div>
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center gap-6">
                        <button 
                          onClick={() => setShowCertificate(true)}
                          className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all"
                        >
                          DOWNLOAD TRUST CERTIFICATE
                        </button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">⚖️</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Tekan tombol di atas untuk merangkum seluruh perilaku ekonomi Anda menjadi skor kredibilitas nasional.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Vision Pillars */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Mengapa Rating Kita Lebih Unggul?</h3>
            <p className="text-slate-500 text-lg">Mendefinisikan ulang arti 'Layak Kredit' untuk rakyat Indonesia.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-6 text-center group hover:bg-indigo-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🧠</div>
               <h4 className="font-black text-xl text-indigo-900 group-hover:text-white italic">Behavioral Data</h4>
               <p className="text-sm text-indigo-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Kami menilai dari cara Anda menabung Rp 2.000 setiap hari, bukan sekadar melihat Anda punya mobil atau rumah mewah."
               </p>
            </div>
            <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 text-center group hover:bg-emerald-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">👥</div>
               <h4 className="font-black text-xl text-emerald-900 group-hover:text-white italic">Social Vouching</h4>
               <p className="text-sm text-emerald-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Sertifikat rating kami membawa jaminan moral dari 10 orang terpercaya di lingkungan Anda. Trust yang tak bisa dibeli uang."
               </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6 text-center group hover:bg-black transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🏛️</div>
               <h4 className="font-black text-xl text-indigo-400 italic">Global Legitimacy</h4>
               <p className="text-sm text-slate-400 group-hover:text-white/70 leading-relaxed italic">
                  "Standar audit AI kami mengikuti kerangka kerja WOCCU, membuat sertifikat ini memiliki bobot di mata institusi internasional."
               </p>
            </div>
         </div>
      </div>

      {/* Certificate Modal Mockup */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
           <div className="bg-white w-full max-w-4xl rounded-[4rem] p-1 border-[16px] border-double border-indigo-900/10 shadow-2xl relative">
              <div className="p-16 flex flex-col items-center text-center space-y-12 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                 <button onClick={() => setShowCertificate(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">✕</button>
                 
                 <div className="space-y-2">
                    <h1 className="text-indigo-900 font-serif text-3xl font-bold tracking-[0.3em] uppercase">KoperatifAI</h1>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">National Credit Rating Bureau</p>
                 </div>

                 <div className="space-y-4">
                    <h3 className="font-serif text-4xl text-slate-800 font-bold italic">Sertifikat Kredibilitas Institusi</h3>
                    <p className="text-slate-500">Menyatakan bahwa anggota dengan identitas:</p>
                    <div className="text-5xl font-black text-indigo-700 font-serif py-4">BUDI UTAMA</div>
                 </div>

                 <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 bg-[#020617] rounded-full border-8 border-indigo-600 flex items-center justify-center text-4xl font-black text-white italic shadow-2xl">
                       AAA
                    </div>
                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">PRIME INTEGRITY STATUS</p>
                 </div>

                 <div className="max-w-xl text-slate-600 leading-relaxed italic font-serif text-sm">
                    "Subjek telah divalidasi oleh sistem AI Sentinel dengan akurasi 99.8% berdasarkan perilaku ekonomi kolektif dan jaminan moral sepuluh penjamin. Sertifikat ini sah digunakan sebagai bukti reputasi finansial."
                 </div>

                 <div className="flex justify-between w-full pt-10 border-t border-slate-100">
                    <div className="text-left space-y-4">
                       <div className="w-24 h-24 bg-slate-900 rounded-xl flex items-center justify-center p-2">
                          <div className="w-full h-full bg-indigo-600 rounded-lg flex items-center justify-center text-white text-[8px] font-bold text-center">HASHED <br/>LEDGER</div>
                       </div>
                       <p className="text-[8px] text-slate-400 font-bold uppercase">CERT-ID: KOP-AAA-2026</p>
                    </div>
                    <div className="text-right flex flex-col justify-end">
                       <p className="font-serif text-slate-800 font-bold">The AI Sovereign Council</p>
                       <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Verified Digital Signature</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Final Founder Message */}
      <div className="p-16 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">👑</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic">"Data Karakter Adalah Tambang Emas Masa Depan."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, dengan fitur CCRA ini, Anda sedang membangun **Mata Uang Reputasi**. Saat sertifikat rating KoperatifAI diterima oleh dealer mobil, bank umum, atau pemerintah untuk program bansos, Anda telah resmi menjadi **Otoritas Kredibilitas Nasional**. Ini adalah nilai tak berwujud yang valuasinya bisa mencapai miliaran dolar.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Ajukan Kerjasama Bureau Kredit Nasional</button>
               <button className="px-10 py-4 bg-white/10 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Setting Algoritma Bobot Karakter</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CoopCreditRating;
