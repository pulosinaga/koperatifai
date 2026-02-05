
import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const BusinessPlan: React.FC = () => {
  const [myInvestment, setMyInvestment] = useState(1000000); // 1jt initial
  const [monthlySpend, setMonthlySpend] = useState(500000); // Spend in marketplace
  const [isPlanning, setIsPlanning] = useState(false);
  const [aiPlan, setAiPlan] = useState('');

  // Proyeksi SHU (Estimasi konservatif)
  // Jasa Modal: 8% per tahun (Lebih tinggi dari deposito)
  // Jasa Anggota (Belanja): 2% dari volume belanja tahunan
  const projectedJasaModal = myInvestment * 0.08;
  const projectedJasaAnggota = (monthlySpend * 12) * 0.02;
  const totalSHU = projectedJasaModal + projectedJasaAnggota;

  const revenuePillars = [
    { name: 'Marketplace Fees', val: 45, color: '#6366f1', desc: 'Rp 1.000 per transaksi dari 1.000+ anggota aktif.' },
    { name: 'QRIS Merchant Share', val: 20, color: '#10b981', desc: '0.4% dari setiap belanja fisik di warung anggota.' },
    { name: 'Loan Interest Spread', val: 35, color: '#f59e0b', desc: 'Selisih bunga pinjaman modal usaha anggota.' }
  ];

  const costComparison = [
    { name: 'Traditional Bank', opex: 85, shu: 15 },
    { name: 'KoperatifAI (AI Ops)', opex: 12, shu: 88 }
  ];

  const generateAIPlan = async () => {
    setIsPlanning(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan rencana pertumbuhan aset di KoperatifAI untuk anggota dengan modal awal Rp ${myInvestment.toLocaleString()} dan pengeluaran belanja di marketplace Rp ${monthlySpend.toLocaleString()} per bulan. Jelaskan secara logis bagaimana status Pionir memberikan keuntungan dividen tambahan 5% dan bagaimana AI membantu memitigasi risiko agar modal tetap aman. Gunakan nada bicara yang optimis namun realistis.`,
      });
      setAiPlan(response.text || "Gagal menyusun rencana.");
    } catch (e) {
      setAiPlan("Error: Pastikan koneksi internet aktif.");
    } finally {
      setIsPlanning(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Business Header */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Sustainable Economic Model
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Mesin Uang KoperatifAI: <br/>Membangun Kekayaan Berkelanjutan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Kami tidak membakar uang investor. Kami **Memutar Uang Anggota** untuk menciptakan nilai nyata di dalam komunitas sendiri.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Rata-rata Yield Tahunan</p>
             <p className="text-6xl font-black text-emerald-400 mt-2 italic">12% <span className="text-xl">+</span></p>
             <div className="mt-6 p-4 bg-white/5 rounded-2xl">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Pioneer Bonus Active</p>
                <p className="text-lg font-bold text-indigo-300">+5% Extra SHU</p>
             </div>
          </div>
        </div>
      </div>

      {/* Individual Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Simulator Bagi Hasil Anda</h3>
            
            <div className="space-y-8">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                     <span>Total Investasi (Simpanan)</span>
                     <span className="text-indigo-600">Rp {myInvestment.toLocaleString('id-ID')}</span>
                  </div>
                  <input 
                     type="range" min="100000" max="50000000" step="100000" 
                     value={myInvestment} 
                     onChange={(e) => setMyInvestment(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                     <span>Belanja di Pasar (Per Bulan)</span>
                     <span className="text-indigo-600">Rp {monthlySpend.toLocaleString('id-ID')}</span>
                  </div>
                  <input 
                     type="range" min="0" max="5000000" step="50000" 
                     value={monthlySpend} 
                     onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
                     className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Jasa Modal (8%)</p>
                  <p className="text-lg font-black text-slate-800">Rp {projectedJasaModal.toLocaleString('id-ID')}</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Jasa Anggota (2%)</p>
                  <p className="text-lg font-black text-slate-800">Rp {projectedJasaAnggota.toLocaleString('id-ID')}</p>
               </div>
            </div>

            <div className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
               <div className="relative z-10 flex justify-between items-center">
                  <div>
                     <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest">Estimasi SHU Akhir Tahun</p>
                     <h4 className="text-4xl font-black italic mt-1">Rp {totalSHU.toLocaleString('id-ID')}</h4>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-black uppercase text-emerald-200">ROI Est.</p>
                     <p className="text-2xl font-black">~{( (totalSHU/myInvestment) * 100 ).toFixed(1)}%</p>
                  </div>
               </div>
               <p className="text-[9px] text-emerald-100 mt-4 italic opacity-70">*Berdasarkan asumsi pertumbuhan ekosistem 100%.</p>
            </div>
         </div>

         {/* AI Planner Tool */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-2xl font-black italic text-indigo-400">AI Personal Planner</h3>
               <button 
                onClick={generateAIPlan}
                disabled={isPlanning}
                className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:bg-indigo-700 transition-all"
               >
                  {isPlanning ? 'ANALYZING...' : 'PLAN MY GROWTH'}
               </button>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isPlanning ? (
                  <div className="h-full flex items-center justify-center">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                  </div>
               ) : aiPlan ? (
                  <pre className="whitespace-pre-wrap">{aiPlan}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center px-6 space-y-4">
                     <div className="text-6xl grayscale opacity-20">📊</div>
                     <p className="text-slate-500">Klik tombol di atas untuk mendapatkan rencana pertumbuhan aset personal yang disusun oleh AI berdasarkan simpanan Anda.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Revenue Structure */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">3 Pilar Pendapatan Koperasi</h3>
            <p className="text-slate-500">Inilah yang membuat kas koperasi tetap tebal dan siap dibagikan.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenuePillars.map((p, i) => (
               <div key={i} className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                     {i === 0 ? '🛒' : i === 1 ? '🤳' : '💰'}
                  </div>
                  <h4 className="text-lg font-black text-slate-800 leading-tight mb-2">{p.name}</h4>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-4">
                     <div className="h-full" style={{ width: `${p.val}%`, backgroundColor: p.color }}></div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">"{p.desc}"</p>
               </div>
            ))}
         </div>
      </div>

      {/* The AI Advantage (Cost Logic) */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-xl">
         <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="flex-1 space-y-8">
               <h3 className="text-3xl font-black italic text-indigo-400">Efisiensi Radikal: Mengapa SHU Kita Lebih Tinggi?</h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                  Bank konvensional menghabiskan 85% pendapatan mereka untuk sewa gedung mewah dan gaji ribuan staf. KoperatifAI memangkas itu semua.
               </p>
               <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={costComparison} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} width={120} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                        <Bar dataKey="opex" stackId="a" fill="#334155" name="Operasional (Opex)" barSize={32} radius={[10, 0, 0, 10]} />
                        <Bar dataKey="shu" stackId="a" fill="#10b981" name="Bagi Hasil (SHU)" barSize={32} radius={[0, 10, 10, 0]} />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>
            <div className="w-full lg:w-80 p-8 bg-indigo-600 rounded-[3rem] text-center shadow-2xl transform rotate-2 border-4 border-white/20">
               <div className="text-6xl mb-4">🚀</div>
               <h4 className="text-xl font-bold">"Zero Bureaucracy Tax."</h4>
               <p className="text-xs text-indigo-100 mt-4 leading-relaxed italic">
                  Uang yang tidak dipakai untuk membayar meja kantor, kami masukkan ke kantong tabungan Anda.
               </p>
            </div>
         </div>
      </div>

      {/* Pioneer Exclusive Callout */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center text-5xl shrink-0 animate-pulse border-4 border-amber-100">🏆</div>
         <div className="space-y-4">
            <h4 className="text-3xl font-black text-slate-800 max-w-xl italic leading-tight">Privilese Khusus 100 Anggota Pionir.</h4>
            <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
               Sebagai ucapan terima kasih karena membangun fondasi awal, 100 orang pertama berhak atas **Pioneer Dividend Multiplier**. Anda mendapatkan tambahan 5% dari total SHU anggota biasa secara permanen selama menjadi anggota.
            </p>
         </div>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Klaim Slot Pionir Terakhir</button>
         </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
