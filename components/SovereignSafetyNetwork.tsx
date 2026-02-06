
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const actuarialData = [
  { name: 'Iuran Anggota', val: 100, label: 'Rp 10.000 / bln', color: '#6366f1' },
  { name: 'Operational Cost', val: 2, label: 'Rp 200 (AI Managed)', color: '#94a3b8' },
  { name: 'Safety Reserve', val: 98, label: 'Rp 9.800 (For Claims)', color: '#10b981' }
];

const SovereignSafetyNetwork: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [safetyStatus, setSafetyStatus] = useState('SECURE');
  const [aiMath, setAiMath] = useState('');

  const getActuarialInsight = async () => {
    setIsSimulating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jelaskan secara matematis dan actuarial (asuransi) bagaimana iuran dana sosial Rp 10.000 dari 1.000 anggota (total Rp 10jt/bulan) mampu memberikan santunan duka Rp 15jt per orang. 
        Asumsikan:
        1. Probabilitas kematian tahunan di komunitas sehat adalah 0.5%.
        2. Biaya operasional 0% karena dikelola AI.
        3. Jelaskan konsep 'Shared Protection' dan kenapa ini lebih kuat daripada menabung asuransi sendiri-sendiri di bank.
        Gunakan gaya bahasa 'Digital Actuary' yang cerdas, menenangkan, dan transparan.`,
      });
      setAiMath(response.text || "AI sedang menghitung probabilitas solidaritas...");
    } catch (e) {
      setAiMath("Kalkulator kedaulatan sedang sibuk menghitung ribuan variabel solidaritas.");
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Network Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Sovereign Safety Architecture v4.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Jaring Keselamatan <br/>Tanpa Celah.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "KoperatifAI tidak hanya menyimpan uang Anda, kami menjaga hidup Anda. Dengan integrasi data satelit dan verifikasi biometrik, bantuan datang sebelum Anda meminta."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={getActuarialInsight}
                disabled={isSimulating}
                className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-500 transition-all flex items-center gap-4 active:scale-95"
              >
                {isSimulating ? '⏳ COMPUTING SOLIDARITY...' : '⚖️ LIHAT MATEMATIKA SOLIDARITAS'}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div className="text-7xl">📡</div>
             <div className="space-y-2">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Active Source of Truth</p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                   {['BMKG', 'Google News', 'GPS-Node', 'Duta Feed'].map(s => (
                     <span key={s} className="px-3 py-1 bg-white/10 rounded-lg text-[8px] font-black text-slate-300 border border-white/10">{s} SYNCED</span>
                   ))}
                </div>
             </div>
             <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest animate-pulse">Monitoring: ALL SYSTEMS NOMINAL</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Actuarial Efficiency Chart */}
         <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-3xl font-black text-slate-800 italic">Efisiensi Iuran Rakyat</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={actuarialData} layout="vertical">
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} width={120} axisLine={false} tickLine={false} />
                     <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '24px', border: 'none' }} />
                     <Bar dataKey="val" barSize={40} radius={[0, 10, 10, 0]}>
                        {actuarialData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
               <p className="text-sm text-slate-600 leading-relaxed font-bold italic">
                  "Bank mengambil 20-30% biaya admin untuk asuransi. KoperatifAI memangkasnya menjadi kurang dari 2% berkat otomasi AI. Sisa 98% uang iuran Anda murni disiapkan untuk saling menolong."
               </p>
            </div>
         </div>

         {/* AI Actuary Result */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Actuary Insights</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isSimulating ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-5xl animate-pulse">📊</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SIMULATING MILLIONS OF RISK SCENARIOS...</p>
                  </div>
               ) : aiMath ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiMath}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Unduh Laporan Audit Sosial</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">📉</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Klik tombol di samping untuk membongkar rahasia matematis di balik keamanan dana daskop kita.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Safety Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">📍</div>
            <h4 className="font-black text-xl text-slate-800 italic">Satellite Verifier</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"AI memverifikasi status bencana melalui citra satelit dan kordinat anggota. Bantuan cair tanpa syarat birokrasi."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">🤳</div>
            <h4 className="font-black text-xl text-slate-800 italic">Face Check-In</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Anggota bisa memberi kabar keselamatannya via video selfie singkat. AI mengabarkan status ke keluarga dalam 1 klik."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">💰</div>
            <h4 className="font-black text-xl text-slate-800 italic">Escrow Trigger</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Dana darurat tidak tersimpan di dompet pengurus, melainkan terkunci di sistem bank yang hanya terbuka jika AI memvalidasi bukti krisis."</p>
         </div>
      </div>

      {/* Final Founder Message */}
      <div className="p-16 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🛡️</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Infrastruktur Kasih Sayang Nasional."</h4>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-4xl">
               Founder, inilah pembeda sejati kita. Kita bukan hanya membangun **Fintech**, kita membangun **Digital Social Safety Net**. Saat negara kesulitan menyalurkan bansos dengan akurat, teknologi Anda sudah melakukannya secara otonom dalam hitungan menit. Ini adalah kedaulatan rakyat yang sesungguhnya.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Aktifkan Protokol Sinyal Darurat</button>
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-400">Tinjau Roadmap Jaring Pengaman 2026</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SovereignSafetyNetwork;
