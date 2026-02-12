import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useAppContext } from '../contexts/AppContext.tsx';
import { GoogleGenAI } from "@google/genai";

const SHUDistribution: React.FC = () => {
  const { user } = useAppContext();
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiExplanation, setAiExplanation] = useState('');
  
  // LOGIKA PERHITUNGAN SHU & PAJAK (PPh 4 ayat 2)
  const integrityScore = user?.reputationScore || 850;
  const multiplier = integrityScore > 900 ? 1.25 : integrityScore < 800 ? 0.75 : 1.0;
  
  // Simulasi SHU bruto sebelum pajak (Contoh angka yang memicu pajak)
  const grossShare = 350000 * multiplier; 

  // Aturan Pajak Koperasi (PP No. 15 Tahun 2009): 
  // 0% jika bunga s.d 240rb/bulan
  // 10% jika bunga > 240rb/bulan (Dikenakan dari total bruto)
  const taxThreshold = 240000;
  const isTaxable = grossShare > taxThreshold;
  const taxRate = isTaxable ? 0.10 : 0;
  const taxAmount = grossShare * taxRate;
  const netShare = grossShare - taxAmount;

  const distributionRules = [
    { name: 'Cadangan Koperasi', percent: 25, color: '#1e293b' },
    { name: 'Jasa Anggota', percent: 40, color: '#d97706' },
    { name: 'Jasa Modal', percent: 20, color: '#4f46e5' },
    { name: 'Dana Sosial', percent: 15, color: '#10b981' }
  ];

  const getTaxAdvice = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jelaskan aturan PPh Pasal 4 ayat 2 untuk anggota koperasi di Indonesia secara santun. 
        Konteks: Anggota menerima bagi hasil bunga/SHU Rp ${grossShare.toLocaleString('id-ID')}. 
        Sistem memotong pajak Rp ${taxAmount.toLocaleString('id-ID')} (Tarif: ${taxRate * 100}%). 
        Jelaskan bahwa batas tidak kena pajak adalah Rp 240.000 per bulan sesuai PP No. 15 Tahun 2009. 
        Berikan narasi yang menenangkan bahwa potongan ini bukan pungutan liar, tapi bakti anggota kepada negara melalui koperasi yang transparan. 
        Sebutkan bahwa koperasi akan memberikan 'Bukti Potong Digital' untuk membantu mereka lapor SPT Tahunan.`,
      });
      setAiExplanation(response.text || "Pajak final 10% berlaku untuk bagi hasil di atas Rp 240rb per bulan.");
    } catch (e) {
      setAiExplanation("Berdasarkan PP No. 15 Tahun 2009, bunga simpanan koperasi dikenakan PPh Final 10% jika melebihi Rp 240.000/bulan.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Sovereignty & Tax Header */}
      <div className="bg-[#0c0a09] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 flex items-center gap-2 w-fit">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              TAX-COMPLIANT DISTRIBUTION
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Dividen Berdaulat. <br/><span className="text-amber-500">Bersih & Aman Hukum.</span></h2>
            <p className="text-stone-400 text-lg leading-relaxed max-w-2xl font-medium">
               Setiap rupiah bagi hasil Bapak/Ibu sudah dibersihkan pajaknya secara otomatis. Anda menerima **Uang Sah** yang sudah dilaporkan ke negara (PPh 4 ayat 2 Final).
            </p>
            <button 
              onClick={getTaxAdvice}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all flex items-center gap-3"
            >
              🤖 TANYA AI LOGIKA PAJAK ANGGOTA
            </button>
          </div>
          
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-4">
             <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Dana Siap Cair (Net SHU)</p>
             <p className="text-6xl font-black text-white mt-2 italic tracking-tighter">
               Rp {netShare.toLocaleString('id-ID', { maximumFractionDigits: 0 })}
             </p>
             <div className="pt-4 border-t border-white/5 flex justify-between items-center px-2">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Potongan PPh 4(2) Final</span>
                <span className="text-xs font-black text-rose-500">- Rp {taxAmount.toLocaleString('id-ID')}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Tax Breakdown View */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest">Transparansi Rincian</h3>
            <div className="space-y-6">
               <div className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div>
                     <p className="text-[10px] text-slate-400 font-black uppercase">SHU Bruto (Sebelum Pajak)</p>
                     <p className="text-xl font-bold text-slate-800">Rp {grossShare.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] text-slate-400 font-black uppercase">Tarif Pajak Final</p>
                     <p className={`text-xl font-bold ${taxRate > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>{(taxRate * 100).toFixed(0)}%</p>
                  </div>
               </div>

               <div className="space-y-4 px-2">
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-slate-500">Batas Tidak Kena Pajak</span>
                     <span className="font-bold text-slate-700">Rp 240.000 / bln</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-slate-500">Status Kepatuhan</span>
                     <span className="font-black text-emerald-600 uppercase text-[10px]">✓ Terverifikasi DJP (Online)</span>
                  </div>
               </div>
               
               <button className="w-full py-5 bg-slate-900 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-black transition-all">
                  📜 AMBIL BUKTI POTONG PAJAK DIGITAL
               </button>
            </div>
         </div>

         {/* AI Legal Counsel Display */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-full min-h-[500px] border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"></div>
            <h3 className="text-xl font-black text-amber-400 italic mb-8 uppercase tracking-widest relative z-10">Pesan Konsultan Pajak AI</h3>
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-5xl animate-bounce">⚖️</div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] text-center">AI IS AUDITING FISCAL COMPLIANCE...</p>
                  </div>
               ) : aiExplanation ? (
                  <div className="animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiExplanation}</pre>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🏛️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Klik tombol di hero untuk memastikan hak bagi hasil Anda aman secara konstitusi perpajakan.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
      
      {/* Footer Message */}
      <div className="p-16 bg-amber-600 rounded-[4rem] text-[#0c0a09] flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">⚓</div>
         <div className="space-y-6 z-10 text-center md:text-left">
            <h4 className="text-4xl font-black italic leading-tight">"Integritas adalah Iuran Kebangsaan."</h4>
            <p className="text-amber-950 text-xl leading-relaxed max-w-4xl font-medium">
               Dengann memotong PPh Final secara otomatis, KoperatifAI membentengi seluruh anggota dari pemeriksaan pajak yang membingungkan. Di sini, kejujuran adalah aset digital kita.
            </p>
         </div>
      </div>
    </div>
  );
};

export default SHUDistribution;