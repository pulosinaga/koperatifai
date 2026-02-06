
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const healthTrends = [
  { day: 'Sen', risk: 12 },
  { day: 'Sel', risk: 15 },
  { day: 'Rab', risk: 8 },
  { day: 'Kam', risk: 25 },
  { day: 'Jum', risk: 18 },
  { day: 'Sab', risk: 30 },
  { day: 'Min', risk: 22 },
];

const CooperativeHealthcare: React.FC = () => {
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiDiagnosis, setAiDiagnosis] = useState('');
  const [solidarityBalance, setSolidarityBalance] = useState(125400000);

  const getHealthStrategy = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan laporan 'Preventative Community Health' untuk anggota KoperatifAI. 
        Konteks: Data menunjukkan 20% anggota di wilayah Jawa Barat mengalami gejala kelelahan fisik ( fatigue) akibat musim panen. 
        
        Tugas AI:
        1. Berikan 3 tips kesehatan praktis untuk petani/pedagang lansia.
        2. Jelaskan bagaimana 'Dana Solidaritas Kesehatan' Rp 5.000 per bulan bisa menutupi biaya rawat inap anggota yang membutuhkan.
        3. Tawarkan diskon 'Grup Buy' untuk Vitamin & Suplemen di apotek mitra koperasi.
        Gunakan gaya bahasa yang ramah, menyejukkan, dan penuh rasa kekeluargaan.`,
      });
      setAiDiagnosis(response.text || "AI sedang meninjau data kesehatan komunitas.");
    } catch (e) {
      setAiDiagnosis("Gagal terhubung ke Pusat Medis AI. Silakan periksa tekanan darah Anda secara manual.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Healthcare Hero */}
      <div className="bg-[#fdf2f2] rounded-[4rem] p-16 relative overflow-hidden shadow-xl border-b-8 border-rose-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-rose-500/10 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">
              Community Health Solidarity v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif text-slate-900">Sehat Bersama, <br/>Saling Menjaga.</h2>
            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl font-medium">
               "Kami tidak mengejar premi. Kami mengejar keselamatan anggota. Dana kesehatan kita adalah tabungan kasih sayang kolektif."
            </p>
            <button 
              onClick={getHealthStrategy}
              disabled={isConsulting}
              className="px-12 py-5 bg-rose-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-rose-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isConsulting ? '⏳ ANALYZING HEALTH VITALITY...' : '🩺 KONSULTASI PREVENTIF AI'}
            </button>
          </div>
          <div className="w-full lg:w-[450px] bg-white p-12 rounded-[4rem] border border-rose-100 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-rose-500 uppercase tracking-widest">Solidarity Health Fund</p>
                <p className="text-5xl font-black text-slate-800 mt-2 italic">Rp {(solidarityBalance/1000000).toFixed(1)} Juta</p>
             </div>
             <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-[10px] text-emerald-600 font-black uppercase">Protection Coverage</p>
                <p className="text-lg font-bold text-emerald-900">1,248 Members Secure</p>
             </div>
             <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest italic">"Verified by AI Actuarial Model"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Risk Trend Chart */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Tren Risiko Kesehatan Wilayah</h3>
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Anomaly Detection</span>
               </div>
            </div>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={healthTrends}>
                     <defs>
                        <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                     <Area type="monotone" dataKey="risk" stroke="#f43f5e" strokeWidth={5} fillOpacity={1} fill="url(#colorRisk)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 italic text-center">"AI mendeteksi kenaikan indikasi stres pada hari Sabtu. Disarankan program istirahat bersama."</p>
         </div>

         {/* AI Diagnosis Side */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[650px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-rose-400 italic uppercase tracking-widest">AI Health Guardian</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-pulse">💊</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SYNTHESIZING COMMUNITY HEALTH DATA & MEDICAL PROTOCOLS...</p>
                  </div>
               ) : aiDiagnosis ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiDiagnosis}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Klaim Voucher Vitamin</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🌡️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Klik tombol "Konsultasi" untuk mendapatkan arahan kesehatan dari AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Health Hub Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">🚑</div>
            <h4 className="font-black text-xl text-slate-800 italic">Emergency Cash-Out</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Cairkan dana kesehatan dalam 5 menit saat darurat tanpa antre verifikasi manual."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">👨‍⚕️</div>
            <h4 className="font-black text-xl text-slate-800 italic">Tele-Doctor Network</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Konsultasi video dengan dokter relawan koperasi dengan biaya 50% lebih murah."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">📦</div>
            <h4 className="font-black text-xl text-slate-800 italic">Shared Pharmacy</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Beli obat rutin bulanan (diabetes/tensi) dengan harga grosir pabrik via hub Duta."</p>
         </div>
      </div>

      {/* Final Founder Message */}
      <div className="p-16 bg-rose-950 border border-rose-900 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🏥</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Sejahtera Tanpa Sehat Adalah Sia-Sia."</h4>
            <p className="text-rose-100 text-xl leading-relaxed max-w-4xl">
               Founder, kesehatan adalah beban biaya terbesar bagi rakyat kecil yang bisa menghancurkan tabungan mereka dalam sekejap. Dengan **Kesehatan Rakyat AI**, Anda sedang membangun "BPJS Swadaya" yang lebih cepat, transparan, dan tanpa korupsi. Inilah puncak dari pengabdian KoperatifAI.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-rose-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Daftarkan RS/Apotek Mitra Baru</button>
               <button className="px-10 py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-rose-500">Lihat Peta Kesehatan Komunitas</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CooperativeHealthcare;
