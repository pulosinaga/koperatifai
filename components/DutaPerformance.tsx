
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const performanceData = [
  { name: 'Minggu 1', value: 120000 },
  { name: 'Minggu 2', value: 450000 },
  { name: 'Minggu 3', value: 380000 },
  { name: 'Minggu 4', value: 950000 },
];

const DutaPerformance: React.FC = () => {
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAdvice, setAiAdvice] = useState('');

  const getAITips = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Saya adalah Duta Wilayah KoperatifAI di daerah Cianjur. 
        Data Performa saya: 45 Anggota binaan, 0% NPL, komisi bulan ini Rp 1.900.000. 
        Berikan 3 strategi taktis untuk meningkatkan partisipasi belanja anggota di marketplace desa saya agar SHU anggota dan komisi saya naik.
        Gunakan gaya bahasa mentor bisnis yang memberikan instruksi praktis.`,
      });
      setAiAdvice(response.text || "AI sedang merancang strategi...");
    } catch (e) {
      setAiAdvice("Gagal menghubungi Mentor AI. Tetaplah melayani anggota dengan tulus.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Performance Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Regional Representative Dashboard
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Performa Wilayah Anda.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Pantau pertumbuhan anggota dan akumulasi jasa pengabdian Anda sebagai garda terdepan kedaulatan rakyat.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-5xl mb-4">💰</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Akumulasi Jasa Duta (Bulan Ini)</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">Rp 1.900.000</p>
             <button className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg">Klaim Ke Tabungan</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Pertumbuhan Jasa Harian</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                     <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                     <Bar dataKey="value" fill="#6366f1" radius={[10, 10, 0, 0]} barSize={40} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[450px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Performance Coach</h3>
               <button onClick={getAITips} disabled={isConsulting} className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg">
                  {isConsulting ? '⏳' : '🤖'}
               </button>
            </div>
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isConsulting ? (
                  <p className="animate-pulse">Sedang menganalisis potensi wilayah...</p>
               ) : aiAdvice ? (
                  <pre className="whitespace-pre-wrap">{aiAdvice}</pre>
               ) : (
                  <p className="opacity-40">Klik ikon robot untuk mendapatkan tips meningkatkan pendapatan dari AI.</p>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaPerformance;
