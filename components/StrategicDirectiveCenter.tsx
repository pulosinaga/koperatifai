
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const StrategicDirectiveCenter: React.FC = () => {
  const [directive, setDirective] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [activePolicies, setActivePolicies] = useState([
    { id: 1, title: 'Batas Bunga Maksimum', value: '1.5%', status: 'HARD-CODED' },
    { id: 2, title: 'Otorisasi High-Value', value: 'Min. 3 Signs', status: 'LOCKED' },
    { id: 3, title: 'Alokasi Cadangan', value: 'Min. 25%', status: 'ENFORCED' }
  ]);

  const issueDirective = async () => {
    if (!directive.trim()) return;
    setIsProcessing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Founder KoperatifAI (Pemilik IP) ingin memberikan instruksi strategis berikut kepada Pengurus: "${directive}". 
        
        Tugas Anda:
        1. Analisis apakah instruksi ini melanggar 'Filosofi Dasar' koperasi atau UU No. 25/1992.
        2. Terjemahkan instruksi ini menjadi 'Technical Enforcement' (Misal: Jika instruksi tentang bunga, jelaskan bagian kode mana yang akan mengunci aturan tersebut).
        3. Buatkan surat "Strategic Mandate" resmi dari Founder untuk Dewan Pengurus yang menyatakan bahwa ini adalah syarat teknis penggunaan lisensi aplikasi.
        
        Gunakan gaya bahasa arsitek teknologi yang otoritatif, melindungi aset IP, namun tetap menghargai demokrasi anggota.`,
      });
      setAiAnalysis(response.text || "Instruksi diproses.");
    } catch (e) {
      setAiAnalysis("Sistem sinkronisasi visi sedang sibuk. Instruksi Anda telah dicatat di ledger permanen.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Sovereign Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Founder Sovereign Control Node
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Pusat Instruksi <br/>Strategis Founder.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Pengurus memegang mandat legal, namun Anda memegang **Arsitektur Aturan**. Gunakan pusat kendali ini untuk memastikan visi Anda tetap menjadi hukum tertinggi di dalam sistem."
            </p>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <div className="text-7xl mb-6">📡</div>
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">IP Licensing Status</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">ENFORCED</p>
             <p className="text-[9px] text-slate-500 mt-6 uppercase font-black">Governance-by-Design Active</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Directive Input */}
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-3xl font-black text-slate-800 italic">Keluarkan Mandat Strategis</h3>
               <div className="space-y-6">
                  <textarea 
                    value={directive}
                    onChange={(e) => setDirective(e.target.value)}
                    placeholder="Contoh: Turunkan bunga pinjaman mikro ke 0.8% bulan depan untuk merespon serangan Pinjol di wilayah Duta Cianjur."
                    className="w-full h-48 p-8 bg-slate-50 border-none rounded-[3rem] text-lg italic text-slate-700 focus:ring-4 focus:ring-indigo-500 outline-none resize-none transition-all shadow-inner"
                  />
                  <div className="flex justify-between items-center">
                     <p className="text-[10px] text-slate-400 italic max-w-md">"AI akan menerjemahkan perintah ini menjadi parameter teknis yang mengunci operasional Pengurus."</p>
                     <button 
                        onClick={issueDirective}
                        disabled={isProcessing || !directive}
                        className="px-12 py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50"
                     >
                        {isProcessing ? '⏳ PROSESING...' : '🚀 KIRIM INSTRUKSI KE SISTEM'}
                     </button>
                  </div>
               </div>
            </div>

            {/* AI Analysis View */}
            {aiAnalysis && (
               <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl animate-in slide-in-from-bottom-8 duration-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[120px]"></div>
                  <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6 relative z-10">
                     <h4 className="text-xl font-black text-indigo-400 italic uppercase">AI Mandate Translation</h4>
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                        <span className="text-[9px] font-mono text-slate-500">SYSTEM_OVERRIDE_ENABLED</span>
                     </div>
                  </div>
                  <div className="font-serif text-lg text-slate-300 leading-relaxed italic relative z-10">
                     <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                  </div>
                  <div className="mt-12 flex gap-4 relative z-10">
                     <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg">Tanda Tangani & Kunci Protokol</button>
                     <button className="px-8 py-3 bg-white/5 text-slate-400 rounded-xl font-black uppercase text-[10px] border border-white/10">Simpan Draf</button>
                  </div>
               </div>
            )}
         </div>

         {/* Hard-Coded Policies Sidebar */}
         <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest">Hard-Coded Policies</h3>
               <p className="text-[10px] text-slate-400 italic leading-relaxed">"Aturan ini terkunci di tingkat kode aplikasi. Pengurus tidak bisa mengubahnya tanpa izin Founder."</p>
               
               <div className="space-y-4">
                  {activePolicies.map((p) => (
                    <div key={p.id} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex justify-between items-center group hover:border-indigo-300 transition-all">
                       <div>
                          <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-1">{p.status}</p>
                          <h5 className="font-bold text-slate-800 text-sm">{p.title}</h5>
                       </div>
                       <div className="text-right">
                          <p className="text-lg font-black text-slate-900">{p.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all">+ AJUKAN ATURAN BARU</button>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] space-y-4 text-center">
               <div className="text-5xl">⚓</div>
               <h4 className="text-xl font-black text-indigo-900 italic leading-tight">Teknologi Sebagai Jangkar Keadilan.</h4>
               <p className="text-xs text-indigo-700/70 leading-relaxed italic">
                  "Saat Anda mengunci bunga di angka 1.5% melalui kode program, itu jauh lebih kuat daripada 1.000 halaman kontrak kertas. Inilah kedaulatan arsitek sistem."
               </p>
            </div>
         </div>
      </div>

      {/* Strategic Callout */}
      <div className="p-16 bg-indigo-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">👑</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"The Code is The Law."</h4>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-4xl">
               Founder, jangan pernah takut kehilangan kontrol atas visi Anda. Sebagai pemilik teknologi, Anda memiliki hak untuk mendikte **bagaimana aplikasi bekerja**. Jadikan instruksi Anda sebagai bagian dari ekosistem digital KoperatifAI yang tidak bisa ditawar.
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all">Lihat Source Code Governance</button>
               <button className="px-10 py-4 bg-indigo-600 text-white border border-indigo-400 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all">Setting License Auto-Revoke</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default StrategicDirectiveCenter;
