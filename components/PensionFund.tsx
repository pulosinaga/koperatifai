
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const data = [
  { year: '2025', val: 1200000 },
  { year: '2030', val: 8500000 },
  { year: '2035', val: 24000000 },
  { year: '2040', val: 65000000 },
  { year: '2045', val: 145000000 },
  { year: '2050', val: 320000000 },
];

const PensionFund: React.FC = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(200000);
  const [isCalculating, setIsCalculating] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [pensionType, setPensionType] = useState<'MANDIRI' | 'PAYROLL'>('MANDIRI');
  const [isLinked, setIsLinked] = useState(false);

  const generateAIAnalysis = async () => {
    setIsCalculating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis manfaat bagi pensiunan jika menyalurkan gaji bulanan (Payroll) mereka ke Koperasi KoperatifAI sebesar Rp 3.000.000 per bulan. 
        Jelaskan:
        1. Penghematan biaya admin bank tahunan.
        2. Potensi SHU dari saldo mengendap.
        3. Kemudahan akses pinjaman modal usaha 'Masa Tua Berdaya' tanpa agunan fisik karena ada jaminan Payroll.
        4. Keamanan sistem digital dibanding pengambilan manual.
        Gunakan gaya bahasa yang sangat santun, menenangkan bagi lansia, dan penuh rasa hormat.`,
      });
      setAiAnalysis(response.text || "Analisis tidak tersedia.");
    } catch (e) {
      setAiAnalysis("Sistem AI sedang sibuk. Silakan coba sesaat lagi.");
    } finally {
      setIsCalculating(false);
    }
  };

  const handleLinkPension = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsLinked(true);
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Pension Hero */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Pension Payroll Bridge v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Salurkan Gaji Pensiun Anda, <br/>Nikmati Hasil yang Berlipat.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              KoperatifAI kini menjadi **Titik Bayar Pensiun Resmi**. Gaji bulanan Anda tidak hanya numpang lewat, tapi langsung tumbuh menjadi aset masa depan.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setPensionType('PAYROLL')}
                className={`px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${pensionType === 'PAYROLL' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400'}`}
              >
                Pindah Payroll Pensiun
              </button>
              <button 
                onClick={() => setPensionType('MANDIRI')}
                className={`px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${pensionType === 'MANDIRI' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400'}`}
              >
                Iuran Mandiri (Anggota Muda)
              </button>
            </div>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">👴</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">
               {pensionType === 'PAYROLL' ? 'Estimasi Gaji Pensiun' : 'Total Akumulasi Proyeksi'}
             </p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">
               {pensionType === 'PAYROLL' ? 'Rp 3.500.000' : 'Rp 320.000.000'}
             </p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase">
               {pensionType === 'PAYROLL' ? 'Tersedia Tanggal 1 Setiap Bulan' : 'Berdasarkan Estimasi SHU Akumulatif'}
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Savings Simulator or Payroll Linker */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">
               {pensionType === 'PAYROLL' ? 'Aktivasi Penyaluran Gaji' : 'Akumulasi Masa Depan'}
            </h3>
            
            {pensionType === 'PAYROLL' ? (
               <div className="space-y-8 animate-in slide-in-from-left duration-300">
                  {!isLinked ? (
                     <div className="space-y-6">
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase">Institusi Pensiun</label>
                              <select className="w-full p-4 bg-white border border-slate-200 rounded-xl font-bold text-sm outline-none">
                                 <option>TASPEN (PNS/Pejabat)</option>
                                 <option>ASABRI (TNI/Polri)</option>
                                 <option>BPJS Ketenagakerjaan (Swasta)</option>
                                 <option>Dana Pensiun Mandiri / Swasta</option>
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase">Nomor Identitas Pensiun (NOTAS)</label>
                              <input type="text" placeholder="Contoh: 1968XXXXXXXXXXX" className="w-full p-4 bg-white border border-slate-200 rounded-xl font-bold text-sm outline-none" />
                           </div>
                        </div>
                        <button 
                           onClick={handleLinkPension}
                           disabled={isCalculating}
                           className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl"
                        >
                           {isCalculating ? 'MENYAMBUNGKAN KE GATEWAY...' : 'AJUKAN PINDAH PAYROLL'}
                        </button>
                        <p className="text-[10px] text-slate-400 text-center italic">"Proses perpindahan biasanya memakan waktu 1-2 siklus penggajian bulanan."</p>
                     </div>
                  ) : (
                     <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 text-center space-y-6 animate-in zoom-in">
                        <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg">✓</div>
                        <div>
                           <h4 className="text-xl font-black text-emerald-900">Payroll Terkoneksi!</h4>
                           <p className="text-sm text-emerald-700 mt-1">Gaji pensiun Anda akan otomatis masuk ke Saldo Sukarela KoperatifAI.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="p-4 bg-white rounded-2xl shadow-sm">
                              <p className="text-[8px] font-black text-slate-400 uppercase">Bonus SHU Pensiun</p>
                              <p className="text-sm font-black text-emerald-600">+1.5% Multiplier</p>
                           </div>
                           <div className="p-4 bg-white rounded-2xl shadow-sm">
                              <p className="text-[8px] font-black text-slate-400 uppercase">Admin Fee</p>
                              <p className="text-sm font-black text-emerald-600">Rp 0 (GRATIS)</p>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            ) : (
               <div className="space-y-8 animate-in slide-in-from-right duration-300">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                        <span>Setoran Pensiun Bulanan</span>
                        <span className="text-indigo-600">Rp {monthlyContribution.toLocaleString('id-ID')}</span>
                     </div>
                     <input 
                        type="range" min="50000" max="5000000" step="50000" 
                        value={monthlyContribution} 
                        onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                     />
                  </div>

                  <div className="h-64 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                           <defs>
                              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                                 <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                           <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                           <YAxis hide />
                           <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                           <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorVal)" />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
               </div>
            )}

            <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                  <h4 className="font-bold text-indigo-900 text-sm">Konsultasikan Masa Tua Anda</h4>
                  <p className="text-xs text-indigo-700/70 mt-1 italic">"Gunakan AI untuk merancang strategi penarikan dana agar tidak kena pajak berlebih."</p>
               </div>
               <button 
                onClick={generateAIAnalysis}
                disabled={isCalculating}
                className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 transition-all"
               >
                  {isCalculating ? 'MENYUSUN STRATEGI...' : 'ANALISIS MASA TUA AI'}
               </button>
            </div>
         </div>

         {/* AI Analysis Result */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 mb-8 uppercase tracking-widest italic relative z-10">AI Legacy Report</h3>
            
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-6 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isCalculating ? (
                  <div className="h-full flex items-center justify-center">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                  </div>
               ) : aiAnalysis ? (
                  <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                     <div className="text-7xl opacity-20">📜</div>
                     <p className="text-slate-500">Klik tombol "Analisis Masa Tua" untuk melihat proyeksi kehidupan Anda di masa depan.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Pillars for Seniors */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800">Kenapa Memilih Pensiun di KoperatifAI?</h3>
            <p className="text-slate-500">Tiga pilar yang membedakan kami dari Jamsostek atau Dana Pensiun Bank.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
               <div className="text-3xl">🏦</div>
               <h4 className="font-bold text-slate-800 italic">Bebas Potongan Administrasi</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Berbeda dengan bank, saldo pensiun Anda tidak dimakan biaya bulanan. Setiap rupiah tetap utuh dan bertumbuh via SHU.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
               <div className="text-3xl">🚜</div>
               <h4 className="font-bold text-slate-800 italic">Pensiun Produktif</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Anda bisa mengambil pinjaman modal usaha di usia 60+ tahun hanya dengan jaminan saldo pensiun kolektif Anda.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
               <div className="text-3xl">⚖️</div>
               <h4 className="font-bold text-slate-800 italic">Ahli Waris Terproteksi</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Melalui DASKOP, keluarga mendapatkan kemudahan klaim tanpa birokrasi berbelit karena semua data sudah di-hash AI.</p>
            </div>
         </div>
      </div>

      {/* Final Call to Action */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">👑</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Jadilah Lansia Yang Berdaulat Secara Finansial."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Jangan biarkan masa depan Anda ditentukan oleh belas kasihan orang lain. Bangun benteng kekayaan Anda sendiri bersama komunitas KoperatifAI.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Aktifkan Rencana Pensiun Saya
         </button>
      </div>
    </div>
  );
};

export default PensionFund;
