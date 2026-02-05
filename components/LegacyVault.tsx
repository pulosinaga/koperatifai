
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const LegacyVault: React.FC = () => {
  const [isExplaining, setIsExplaining] = useState(false);
  const [aiLegalAdvice, setAiLegalAdvice] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: 'Siti Aminah', relation: 'Istri Sah', share: 60, icon: '👩' },
    { id: 2, name: 'Andi Pratama', relation: 'Anak Kandung', share: 40, icon: '👦' },
  ]);

  const generateLegalExplanation = async () => {
    setIsExplaining(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jelaskan secara hukum koperasi di Indonesia, bagaimana simpanan pokok, wajib, dan sukarela di KoperatifAI diwariskan jika anggota meninggal dunia. Tekankan peran DASKOP (Dana Santunan Kematian) dalam melunasi sisa pinjaman. Gunakan gaya bahasa yang menenangkan, jelas, dan memberikan kepastian bagi lansia.`,
      });
      setAiLegalAdvice(response.text || "Gagal mendapatkan saran AI.");
    } catch (e) {
      setAiLegalAdvice("Error: Pastikan sistem online untuk mengakses panduan hukum AI.");
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Legacy Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Legacy & Inheritance Vault v1.2
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Brankas Warisan Digital: <br/>Menjaga Masa Depan Keluarga.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Kekayaan Anda di KoperatifAI dilindungi secara hukum untuk diteruskan kepada orang-orang tercinta tanpa birokrasi berbelit.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-5xl mb-4">🗝️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Asset Protected</p>
             <p className="text-3xl font-black text-emerald-400 mt-1 italic">Rp 19.150.000</p>
             <div className="mt-4 p-2 bg-emerald-500/10 rounded-lg text-[8px] font-black text-emerald-500 border border-emerald-500/20">
                LEGALLY BINDING BENEFICIARIES SET
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Beneficiary Management */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Daftar Ahli Waris</h3>
               <button className="text-xs font-black text-indigo-600 hover:underline">+ Tambah</button>
            </div>
            
            <div className="space-y-4">
               {beneficiaries.map((b) => (
                 <div key={b.id} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:border-indigo-200 transition-all">
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">{b.icon}</div>
                       <div>
                          <h4 className="font-bold text-slate-800">{b.name}</h4>
                          <p className="text-[10px] text-slate-400 font-black uppercase">{b.relation}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-lg font-black text-indigo-600 italic">{b.share}%</p>
                       <p className="text-[8px] text-slate-400 uppercase font-black">Alokasi Saham</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-6 bg-indigo-50 rounded-[2.5rem] border border-indigo-100">
               <p className="text-[10px] text-indigo-700 leading-relaxed italic font-medium">
                  "Sesuai AD/ART Digital, data ahli waris wajib diperbarui setiap tahun atau saat terjadi perubahan status sipil untuk kelancaran klaim DASKOP."
               </p>
            </div>
         </div>

         {/* AI Legal Counselor */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[550px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-black text-indigo-400 italic">AI Konsultan Waris</h3>
               <button 
                  onClick={generateLegalExplanation}
                  disabled={isExplaining}
                  className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
               >
                  {isExplaining ? '⏳' : '🤖'}
               </button>
            </div>
            
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isExplaining ? (
                  <div className="h-full flex items-center justify-center">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                  </div>
               ) : aiLegalAdvice ? (
                  <pre className="whitespace-pre-wrap">{aiLegalAdvice}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                     <div className="text-7xl opacity-20">⚖️</div>
                     <p className="text-slate-500">Ketuk robot di atas untuk mendengar penjelasan AI tentang bagaimana harta Anda dilindungi hukum koperasi.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Final Safety Statement */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Cinta Tak Pernah Padam, Warisan Tak Pernah Hilang."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Jejak digital Anda adalah bukti kepemilikan yang sah. KoperatifAI menjamin ahli waris mendapatkan haknya tanpa potongan administrasi yang memberatkan.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Unduh Akta Waris Digital Saya
         </button>
      </div>
    </div>
  );
};

export default LegacyVault;
