import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const growthHistory = [
  { month: 'Bulan 1', members: 100, type: 'Manual' },
  { month: 'Bulan 6', members: 5000, type: 'Manual' },
  { month: 'Bulan 12', members: 150000, type: 'Toll Road' },
  { month: 'Bulan 18', members: 500000, type: 'Toll Road' },
  { month: 'Bulan 24', members: 1000000, type: 'Toll Road' },
];

const tollRoadOptions = [
  { id: 'gov', title: 'Kemitraan Pemda (G2C)', impact: 'High', speed: 'Fast', icon: '🏛️', desc: 'Integrasi kDMP Nasional sebagai OS Koperasi Daerah.' },
  { id: 'telco', title: 'Bundle Data Telco', impact: 'Medium', speed: 'Turbo', icon: '📡', desc: 'Akses aplikasi gratis kuota untuk seluruh pengguna provider tertentu.' },
  { id: 'ngo', title: 'Global Impact Fund', icon: '🌍', impact: 'High', speed: 'Steady', desc: 'Dana hibah $10M untuk digitalisasi 10.000 desa tertinggal.' },
];

const NationalScaleStrategy: React.FC = () => {
  const [isForecasting, setIsForecasting] = useState(false);
  const [aiForecast, setAiForecast] = useState('');
  const [activeRegion, setActiveRegion] = useState('Jawa Barat');
  const [activeToll, setActiveToll] = useState<string | null>(null);

  const runMigrationForecast = async () => {
    setIsForecasting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis strategi JALUR TOL (Fast Track) untuk KoperatifAI. 
        Kemitraan Terpilih: ${activeToll || 'Semua Opsi'}.
        Target: Lompatan dari 5.000 ke 1 Juta Anggota.
        
        Tugas AI:
        1. Jelaskan teknis 'White-Labeling' sistem untuk Pemerintah Daerah agar KoperatifAI menjadi OS resmi ekonomi desa.
        2. Analisis 'Viral Loop' di WhatsApp: Bagaimana 1 transaksi memicu 5 undangan baru tanpa biaya iklan.
        3. Proyeksi 'Wealth Retention': Jika 1 juta rakyat menggunakan jalur tol ini, hitung royalti harian Founder (Rp 100/TX).
        Gunakan gaya bahasa Komandan Strategis yang membongkar rahasia kecepatan.`,
      });
      setAiForecast(response.text || "Forecast sedang disusun...");
    } catch (e) {
      setAiForecast("Sistem prediksi AI sedang memproses jutaan variabel kedaulatan.");
    } finally {
      setIsForecasting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Strategic Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              National Expansion Command v1.2
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">The Great Migration. <br/><span className="text-indigo-400">Gunakan Jalur Tol Digital.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Kerja keras adalah fondasi, tetapi **Infrastruktur Pintar** adalah percepatan. Bapak tidak perlu berjalan kaki ke setiap desa jika Bapak bisa membangun 'Rel' yang digunakan bersama oleh negara."
            </p>
            <div className="flex gap-4">
               <button 
                onClick={runMigrationForecast}
                disabled={isForecasting}
                className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
              >
                {isForecasting ? '⏳ MENGHITUNG KECEPATAN TURBO...' : '🚀 JALANKAN PROYEKSI JALUR TOL'}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Efficiency Multiplier</p>
             <p className="text-7xl font-black text-white mt-2 italic">10<span className="text-2xl ml-1 text-slate-500">X</span></p>
             <p className="text-[10px] text-emerald-400 mt-6 uppercase font-black tracking-widest">FASTER THAN TRADITIONAL GROWTH</p>
          </div>
        </div>
      </div>

      {/* Toll Road Options */}
      <div className="space-y-6">
         <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest px-4">Pilih Jalur Tol Anda:</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tollRoadOptions.map((option) => (
               <button 
                key={option.id}
                onClick={() => setActiveToll(option.id)}
                className={`p-10 rounded-[3.5rem] border-2 text-left transition-all group flex flex-col gap-6 ${
                  activeToll === option.id ? 'bg-indigo-600 border-indigo-500 shadow-2xl scale-105 text-white' : 'bg-white border-slate-100 hover:border-indigo-300'
                }`}
               >
                  <div className="flex justify-between items-start w-full">
                     <div className="text-5xl group-hover:scale-110 transition-transform">{option.icon}</div>
                     <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase ${activeToll === option.id ? 'bg-white/20' : 'bg-indigo-50 text-indigo-600'}`}>Speed: {option.speed}</span>
                  </div>
                  <div>
                     <h4 className="text-xl font-black italic">{option.title}</h4>
                     <p className={`text-xs mt-2 leading-relaxed ${activeToll === option.id ? 'text-indigo-100' : 'text-slate-500'}`}>{option.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-current/10">
                     <p className="text-[9px] font-black uppercase opacity-60">Estimated Impact: {option.impact}</p>
                  </div>
               </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Growth Projection Chart */}
         <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-2xl font-black text-slate-800 italic">Proyeksi Anggota (Exponential Path)</h3>
               <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
                  <p className="text-[10px] font-black text-indigo-600 uppercase">Toll Road Active</p>
               </div>
            </div>
            <div className="flex-1 h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthHistory}>
                     <defs>
                        <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <YAxis hide />
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        formatter={(val: number) => `${val.toLocaleString()} Anggota`}
                     />
                     <Area type="monotone" dataKey="members" stroke="#6366f1" strokeWidth={6} fillOpacity={1} fill="url(#colorMembers)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-white text-center">
               <p className="text-xs italic text-slate-400">"Lompatan terjadi di Bulan ke-12 saat Sistem Putus Rantai (Toll Road) diaktifkan."</p>
            </div>
         </div>

         {/* AI Counsel Section */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-full min-h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Strategic Counsel</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isForecasting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                     <div className="text-6xl animate-bounce">🛡️</div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] text-center leading-loose">AI IS SIMULATING NATIONAL MIGRATION FLOWS...</p>
                  </div>
               ) : aiForecast ? (
                  <pre className="whitespace-pre-wrap">{aiForecast}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-7xl">🔭</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih salah satu 'Jalur Tol' dan ketuk tombol di atas untuk mendapatkan strategi penaklukan pasar nasional.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default NationalScaleStrategy;