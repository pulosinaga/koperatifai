
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const JDIHIntegration: React.FC = () => {
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [selectedLaw, setSelectedLaw] = useState<string | null>(null);

  const regulations = [
    { 
      id: 'UU-25-1992', 
      title: 'UU No. 25 Tahun 1992', 
      subject: 'Perkoperasian Indonesia', 
      date: '12 Nov 1992', 
      status: 'Berlaku',
      summary: 'Fondasi utama hukum seluruh koperasi di Indonesia. Mengatur prinsip satu anggota satu suara.'
    },
    { 
      id: 'PERMENKOP-08-2023', 
      title: 'Permenkop No. 8 Tahun 2023', 
      subject: 'Usaha Simpan Pinjam Koperasi', 
      date: '15 Sep 2023', 
      status: 'Berlaku',
      summary: 'Aturan terbaru mengenai tata kelola usaha simpan pinjam untuk mencegah praktik ilegal.'
    },
    { 
      id: 'RUU-PERKOPERASIAN-2024', 
      title: 'Draf RUU Perkoperasian 2024', 
      subject: 'Reformasi Hukum Koperasi Digital', 
      date: '05 Peb 2026', 
      status: 'Prolegnas',
      summary: 'Draf undang-undang yang mendukung penuh digitalisasi dan pengawasan AI pada koperasi.'
    }
  ];

  const explainLaw = async (law: any) => {
    setIsExplaining(true);
    setSelectedLaw(law.id);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jelaskan secara sangat sederhana dan singkat untuk rakyat kecil yang awam hukum tentang isi dan manfaat dari: ${law.title} mengenai ${law.subject}. Berikan 3 poin utama saja yang langsung berdampak pada keamanan uang mereka di koperasi.`,
      });
      setExplanation(response.text || "Gagal mendapatkan penjelasan AI.");
    } catch (e) {
      setExplanation("Sistem sedang sibuk. Silakan coba lagi.");
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* JDIH Header */}
      <div className="bg-[#1e293b] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold shadow-lg border border-white/10">🏛️</div>
               <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                  JDIH Pusat Integration
               </span>
            </div>
            <h2 className="text-4xl font-black leading-tight italic">Pojok Regulasi Nasional.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              KoperatifAI tersambung dengan database **Jaringan Dokumentasi dan Informasi Hukum Nasional** untuk memastikan operasional kita selalu sejalan dengan hukum negara.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-8 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">⚖️</div>
             <p className="text-xs font-black uppercase tracking-widest text-slate-400">Database Sync</p>
             <p className="text-xl font-black text-indigo-900 mt-1">REAL-TIME HASH</p>
             <p className="text-[9px] text-emerald-500 font-bold mt-2 uppercase">Verified by JDIH Gateway</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Law List */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Daftar Regulasi Terkait</h3>
            <div className="space-y-4">
               {regulations.map((reg) => (
                 <div key={reg.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{reg.date}</span>
                       <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase ${reg.status === 'Berlaku' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          {reg.status}
                       </span>
                    </div>
                    <h4 className="text-lg font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{reg.title}</h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase mt-1">{reg.subject}</p>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed line-clamp-2 italic">"{reg.summary}"</p>
                    <div className="mt-8 flex gap-3">
                       <button 
                        onClick={() => explainLaw(reg)}
                        className="flex-1 py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg hover:bg-indigo-700 transition-all"
                       >
                          💡 Jelaskan Dengan AI
                       </button>
                       <button className="px-6 py-3 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-[9px] border border-slate-100 hover:bg-slate-100 transition-all">
                          📄 PDF
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Explainer Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-fit sticky top-24">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic">AI Legal Interpreter</h3>
               <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar relative z-10 font-serif text-sm text-slate-300 leading-relaxed italic">
               {isExplaining ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-4 py-20">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">AI sedang menerjemahkan pasal...</p>
                  </div>
               ) : explanation ? (
                  <div className="animate-in fade-in slide-in-from-bottom duration-500">
                     <p className="text-xs text-indigo-400 font-black uppercase mb-4 tracking-widest border-b border-indigo-500/20 pb-2">Hasil Analisis {selectedLaw}:</p>
                     <pre className="whitespace-pre-wrap font-serif text-slate-100">{explanation}</pre>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center px-6 py-20 space-y-4">
                     <div className="text-6xl opacity-10">📄</div>
                     <p className="text-slate-600">Klik "Jelaskan Dengan AI" pada regulasi di samping untuk melihat versi bahasa mudahnya di sini.</p>
                  </div>
               )}
            </div>
            
            <div className="mt-8 p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20 text-center relative z-10">
               <p className="text-[10px] text-indigo-300 italic">"AI membantu kita memahami hukum, agar tidak ada yang bisa membodohi kita."</p>
            </div>
         </div>
      </div>

      {/* Integration Benefits */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800">Kenapa Kami Bersanding dengan JDIH?</h3>
            <p className="text-slate-500">Tiga pilar kedaulatan hukum dalam satu genggaman digital.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 space-y-4">
               <div className="text-3xl">🏛️</div>
               <h4 className="font-bold text-slate-800 italic">Transparansi Hukum</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Setiap kebijakan pengurus KoperatifAI dapat Anda cek silang dengan UU Koperasi terbaru di JDIH.</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-4">
               <div className="text-3xl">🛡️</div>
               <h4 className="font-bold text-slate-800 italic">Anti-Bodong</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Menghubungkan data pendaftaran koperasi kita langsung ke database hukum nasional sebagai bukti legalitas.</p>
            </div>
            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 space-y-4">
               <div className="text-3xl">🗣️</div>
               <h4 className="font-bold text-slate-800 italic">Advokasi Mandiri</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Duta dan anggota dibekali pengetahuan hukum yang kuat agar bisa membela hak ekonominya di lapangan.</p>
            </div>
         </div>
      </div>

      {/* JDIH Official Link Footer */}
      <div className="p-10 bg-slate-100 rounded-[3rem] border border-slate-200 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl grayscale opacity-40">🇮🇩</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-xl font-bold text-slate-800 italic leading-tight">Sumber Resmi JDIH Pusat</h4>
            <p className="text-slate-500 mt-2 leading-relaxed text-sm">
               Untuk verifikasi lebih lanjut, anggota dapat mengunjungi portal resmi **jdih.setkab.go.id** atau **jdihn.go.id**. KoperatifAI memproses data ini secara etis hanya untuk tujuan edukasi anggota.
            </p>
         </div>
         <button className="px-8 py-3 bg-white text-slate-800 border border-slate-300 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all shadow-sm">Buka Portal JDIHN</button>
      </div>
    </div>
  );
};

export default JDIHIntegration;
