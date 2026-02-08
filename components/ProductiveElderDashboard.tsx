
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const salesData = [
  { day: 'Sen', val: 50000 },
  { day: 'Sel', val: 75000 },
  { day: 'Rab', val: 60000 },
  { day: 'Kam', val: 120000 },
  { day: 'Jum', val: 90000 },
  { day: 'Sab', val: 200000 },
  { day: 'Min', val: 150000 },
];

const ProductiveElderDashboard: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiTip, setAiTip] = useState('');
  const [inventory, setInventory] = useState([
    { name: 'Benih Lele', stock: 500, unit: 'ekor', icon: '🐟' },
    { name: 'Pelet Organik', stock: 12, unit: 'kg', icon: '📦' },
  ]);

  const getBusinessTip = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Berikan 1 tips bisnis mikro yang sangat praktis dan menenangkan untuk pensiunan yang memiliki usaha 'Budidaya Lele Rumahan'. 
        Gunakan bahasa Indonesia yang sangat sopan, kebapakan/keibuan, dan hindari istilah teknis yang rumit. 
        Hubungkan tipsnya dengan pentingnya menjaga kesehatan fisik selama mengelola kolam.`,
      });
      // Fixed: Change setAiReport to setAiTip to match the defined state variable 'aiTip'
      setAiTip(response.text || "Tips tidak tersedia.");
    } catch (e) {
      setAiTip("Selalu jaga kebersihan kolam ya, Pak/Bu. Kesehatan ikan dimulai dari air yang bersih.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Elder Hero Section */}
      <div className="bg-emerald-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Silver Economy Empowerment
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif text-white">Masa Tua Berdaya: <br/>Menabung Karya, Menuai Bahagia.</h2>
            <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl font-medium">
              Selamat malam, Pak Budi Utama. Kolam lele Anda terlihat sehat hari ini. Teruslah berkarya untuk keluarga dan komunitas.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pendapatan Hobi Minggu Ini</p>
             <p className="text-5xl font-black text-emerald-600 mt-2 italic">Rp 745.000</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-bold">Terhubung ke Saldo Sukarela</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Simple Sales Chart */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Catatan Penjualan</h3>
               <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> USAHA AKTIF
               </div>
            </div>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                     <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeights: 'bold', fill: '#94a3b8'}} />
                     <YAxis hide />
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                     />
                     <Area type="monotone" dataKey="val" stroke="#10b981" strokeWidth={5} fillOpacity={1} fill="url(#colorSales)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <button className="py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg">+ CATAT PENJUALAN</button>
               <button className="py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px] tracking-widest">LIHAT LAPORAN</button>
            </div>
         </div>

         {/* Simple Inventory for Elders */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 flex flex-col">
            <h3 className="text-xl font-black text-slate-800 italic">Persediaan (Stok)</h3>
            <div className="space-y-4 flex-1">
               {inventory.map((item, i) => (
                 <div key={i} className="p-5 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-emerald-50 transition-all">
                    <div className="flex gap-4 items-center">
                       <span className="text-3xl">{item.icon}</span>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                          <p className="text-xs text-slate-400">{item.stock} {item.unit}</p>
                       </div>
                    </div>
                    <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-indigo-600">+</button>
                 </div>
               ))}
            </div>
            <div className="pt-6 border-t border-slate-50">
               <button className="w-full py-4 bg-emerald-50 text-emerald-700 rounded-2xl font-black uppercase text-[9px] tracking-widest border border-emerald-100">Cek Kebutuhan via Pasar</button>
            </div>
         </div>
      </div>

      {/* AI Elder Advisor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[400px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-black text-indigo-400 italic">Saran Bisnis Bapak/Ibu</h3>
               <button 
                  onClick={getBusinessTip}
                  disabled={isGenerating}
                  className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
               >
                  {isGenerating ? '⏳' : '🤖'}
               </button>
            </div>
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 text-center flex flex-col items-center justify-center">
               {isGenerating ? (
                  <div className="flex gap-2">
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
               ) : aiTip ? (
                  <pre className="whitespace-pre-wrap">{aiTip}</pre>
               ) : (
                  <div className="space-y-4">
                     <div className="text-6xl opacity-20">💡</div>
                     <p className="text-slate-500 text-sm">Ketuk robot di atas untuk mendapatkan nasihat bijak dari AI untuk usaha Bapak/Ibu.</p>
                  </div>
               )}
            </div>
         </div>

         {/* Health & Happiness Sidebar */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-8">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">Status Kebahagiaan</h3>
               <p className="text-slate-500 text-sm italic">"Pensiun bukan berhenti, tapi ganti profesi."</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-rose-50 rounded-3xl text-center space-y-2">
                  <div className="text-3xl">❤️</div>
                  <p className="text-[10px] font-black text-rose-400 uppercase">Aktivitas Fisik</p>
                  <p className="text-lg font-black text-rose-900">BAIK</p>
               </div>
               <div className="p-6 bg-emerald-50 rounded-3xl text-center space-y-2">
                  <div className="text-3xl">😊</div>
                  <p className="text-[10px] font-black text-emerald-400 uppercase">Interaksi Sosial</p>
                  <p className="text-lg font-black text-emerald-900">TINGGI</p>
               </div>
            </div>
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
               <p className="text-[10px] text-indigo-700 leading-relaxed italic text-center">
                  "Minggu ini Bapak/Ibu sudah berinteraksi dengan **12 anggota muda** melalui transaksi marketplace. Ini luar biasa untuk kesehatan mental!"
               </p>
            </div>
         </div>
      </div>

      {/* Legacy Call to Action */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">👴</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Jadilah Warisan Hidup Bagi Generasi Muda."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Setiap produk yang Bapak/Ibu hasilkan adalah bukti bahwa kemandirian tidak mengenal usia. KoperatifAI bangga menjadi jembatan bagi karya Bapak/Ibu.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Tampilkan Usaha Saya ke Forum Nasional
         </button>
      </div>
    </div>
  );
};

export default ProductiveElderDashboard;
