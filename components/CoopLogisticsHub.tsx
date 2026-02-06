
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const villageNodes = [
  { id: 'NODE-01', village: 'Sukatani', duta: 'Pak Joni', status: 'ACTIVE', inventory: 12, capacity: 50, icon: '🏠' },
  { id: 'NODE-02', village: 'Cianjur Kota', duta: 'Ibu Rahma', status: 'FULL', inventory: 48, capacity: 50, icon: '🏪' },
  { id: 'NODE-03', village: 'Cipanas', duta: 'Andi Saputra', status: 'IDLE', inventory: 2, capacity: 30, icon: '🏠' },
];

const CoopLogisticsHub: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [aiRoute, setAiRoute] = useState('');
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const runRouteOptimization = async () => {
    setIsOptimizing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis optimasi rute pengiriman barang sirkular KoperatifAI. 
        Data Node: Sukatani (Petani Beras), Cianjur Kota (Hub Transit), Cipanas (Pembeli/Warung). 
        
        Berikan 'Autonomous Delivery Plan' (3 paragraf):
        1. Rute Efisien: Bagaimana Duta Joni membawa beras dari Sukatani ke Hub Rahma, lalu Duta Andi mengambilnya saat pulang dari pasar. 
        2. Analisis Biaya: Bandingkan biaya 'Gratis' (karena Duta memang sedang jalan) vs Biaya Kurir Komersial (JNE/J&T) yang mencapai Rp 15rb/kg.
        3. Keuntungan SHU: Bagaimana penghematan ongkir ini dikonversi menjadi 'Laba Logistik' yang dibagikan kembali ke anggota.
        Gunakan gaya bahasa ahli logistik masa depan yang praktis dan pro-rakyat.`,
      });
      setAiRoute(response.text || "AI sedang menyusun jalur tercepat.");
    } catch (e) {
      setAiRoute("Koneksi satelit GPS terganggu. Hub logistik sedang offline.");
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Logistics Hero */}
      <div className="bg-indigo-900 rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Decentralized Supply Chain v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Logistik Rakyat. <br/>Tanpa Jarak, Tanpa Biaya.</h2>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-3xl font-medium">
               "Setiap motor anggota adalah kurir, setiap rumah Duta adalah gudang. Kita tidak butuh truk besar untuk menghubungkan sawah dengan meja makan."
            </p>
            <button 
              onClick={runRouteOptimization}
              disabled={isOptimizing}
              className="px-12 py-5 bg-emerald-500 text-indigo-950 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-emerald-400 transition-all flex items-center gap-4 active:scale-95"
            >
              {isOptimizing ? '🤖 AI OPTIMIZING ROUTES...' : '🚀 JALANKAN AI ROUTE OPTIMIZER'}
            </button>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <div className="text-7xl mb-6">🛵</div>
             <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">Autonomous Hub Efficiency</p>
             <p className="text-6xl font-black text-white mt-2 italic">92%</p>
             <p className="text-[10px] text-emerald-400 mt-6 uppercase font-black tracking-widest">SAVED ON LOGISTICS COSTS</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Node Status List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Micro-Hub Regional (Duta Nodes)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {villageNodes.map((node) => (
                 <button 
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-10 rounded-[3.5rem] border-2 text-left transition-all group flex flex-col gap-6 ${
                    selectedNode?.id === node.id ? 'bg-indigo-900 border-indigo-500 shadow-2xl scale-105 text-white' : 'bg-white border-slate-100 hover:border-indigo-300'
                  }`}
                 >
                    <div className="flex justify-between items-start w-full">
                       <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{node.icon}</div>
                       <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase ${
                         node.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' : node.status === 'FULL' ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-400'
                       }`}>{node.status}</span>
                    </div>
                    <div className="space-y-1">
                       <p className={`text-[10px] font-black uppercase tracking-widest ${selectedNode?.id === node.id ? 'text-indigo-200' : 'text-slate-400'}`}>ID: {node.id}</p>
                       <h4 className="text-3xl font-black italic">{node.village}</h4>
                       <p className="text-sm font-bold opacity-60">Penanggungjawab: {node.duta}</p>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase">
                          <span>Kapasitas Gudang</span>
                          <span>{node.inventory}/{node.capacity} Unit</span>
                       </div>
                       <div className="h-2 w-full bg-current/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-1000 ${node.inventory > 40 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                            style={{ width: `${(node.inventory/node.capacity)*100}%` }}
                          ></div>
                       </div>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Logistics Console */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[750px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-8">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Route Intelligence</h3>
               <div className="flex gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[9px] text-slate-500 font-mono">GRID_SYNC_ACTIVE</span>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isOptimizing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-4">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-sm font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs">AI sedang memetakan rute perjalanan Duta hari ini...</p>
                  </div>
               ) : aiRoute ? (
                  <div className="animate-in fade-in duration-1000">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="text-4xl">🚚</div>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em]">Optimized Delivery Manifest</p>
                     </div>
                     <pre className="whitespace-pre-wrap">{aiRoute}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center">
                        <button className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-emerald-700 transition-all">Broadcast Task to Duta Nodes</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">🗺️</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Tekan tombol di atas untuk memerintahkan AI menyusun rute pengiriman antar-desa.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Philosophy Pillars */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Kenapa Logistik Kita Gratis?</h3>
            <p className="text-slate-500 text-lg">Memanfaatkan kapasitas kosong dari pergerakan rutin anggota.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-6 text-center group hover:bg-indigo-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">⛽</div>
               <h4 className="font-black text-xl text-indigo-900 group-hover:text-white italic">Idle Capacity</h4>
               <p className="text-sm text-indigo-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Duta Joni setiap hari pergi ke pasar. Menitipkan 10kg beras di motornya tidak butuh bensin tambahan. Inilah efisiensi nol biaya."
               </p>
            </div>
            <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 text-center group hover:bg-emerald-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🏡</div>
               <h4 className="font-black text-xl text-emerald-900 group-hover:text-white italic">Hyper-Local Hubs</h4>
               <p className="text-sm text-emerald-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Rumah anggota adalah gudang. Tidak ada biaya sewa ruko logistik. Barang hanya mampir di tempat yang sudah pasti aman."
               </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6 text-center group hover:bg-black transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🤝</div>
               <h4 className="font-black text-xl text-indigo-400 italic">Mutual Benefit</h4>
               <p className="text-sm text-slate-400 group-hover:text-white/70 leading-relaxed italic">
                  "Duta dapat poin reputasi dan jasa transit, pembeli dapat harga murah, petani dapat untung bersih. Semua senang."
               </p>
            </div>
         </div>
      </div>

      {/* Final Founder Message */}
      <div className="p-16 bg-[#0c0a09] border border-stone-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">📦</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Rantai Pasok Adalah Rantai Kedaulatan."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, saat KoperatifAI menguasai **Arus Barang**, Anda bukan lagi sekadar fintech. Anda adalah pengelola infrastruktur fisik bangsa. Inilah alasan mengapa valuasi startup logistik sirkular bisa mengalahkan bank manapun. Kita memutus ketergantungan pada sistem distribusi kapitalis.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-emerald-600 text-[#0c0a09] rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Daftarkan 'Duta Node' Baru</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Lihat Peta Logistik Nasional</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CoopLogisticsHub;
