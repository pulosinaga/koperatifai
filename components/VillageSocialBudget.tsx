import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useAppContext } from '../contexts/AppContext.tsx';

const VillageSocialBudget: React.FC = () => {
  const { user } = useAppContext();
  const [isGenerating, setIsGenerating] = useState<'RULES' | 'INVITATION' | 'POSTER' | null>(null);
  const [content, setContent] = useState('');
  const [villageName] = useState('Pasirhayo');
  const [budgetAmount] = useState(4250000);

  const villageProjects = [
    { name: 'Pipa Irigasi Kelompok Tani', status: 'Selesai', cost: 'Rp 2.500.000' },
    { name: 'Beasiswa Anak Yatim (3 Anak)', status: 'Berjalan', cost: 'Rp 1.200.000' },
    { name: 'Fasilitas Penerangan Pos Kamling', status: 'Direncanakan', cost: 'Rp 550.000' }
  ];

  const callAI = async (type: 'RULES' | 'INVITATION' | 'POSTER') => {
    setIsGenerating(type);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    let prompt = '';

    if (type === 'RULES') {
      prompt = `Buatkan draf "KETENTUAN PENGGUNAAN DANA MASLAHAT DESA" untuk Desa ${villageName}. 
      Tegaskan bahwa dana Rp ${budgetAmount.toLocaleString()} ini murni berasal dari 5% SHU warga Desa ${villageName} sendiri (Bukan uang dari pusat/asing). 
      Jelaskan bahwa ini adalah 'Uang Keringat Warga Desa' yang dikembalikan untuk Desa. 
      List 3 peruntukan utama: Perbaikan Jalan Kecil/Irigasi, Beasiswa Anak Yatim Desa, dan Modal Alat Tani Kelompok. 
      Gaya bahasa: Tegas, Formal, dan Anti-Korupsi.`;
    } else if (type === 'INVITATION') {
      prompt = `Buatkan Surat Undangan resmi dari Duta KoperatifAI (${user?.name}) ditujukan kepada Kepala Desa ${villageName} dan seluruh warga. 
      Isi: Memohon waktu dalam agenda Musyawarah Desa (Musdes) untuk secara simbolis menyerahkan Dana Maslahat Desa hasil gotong royong warga sebesar Rp ${budgetAmount.toLocaleString()}. 
      Tujuannya: Agar masyarakat tahu bahwa ada kontribusi nyata dari koperasi ke desa. 
      Gaya bahasa: Sangat sopan, menjunjung tinggi adat desa, dan transparan.`;
    } else if (type === 'POSTER') {
      prompt = `Buatkan naskah untuk BALIHO TRANSPARANSI DESA. 
      Header: LAPORAN KONTRIBUSI RAKYAT DESA ${villageName.toUpperCase()}. 
      Isi: Menjelaskan total dana sosial yang telah disalurkan koperasi kembali ke desa. 
      Gunakan kalimat yang membanggakan warga desa: "Dari Warga Pasirhayo, Untuk Pembangunan Pasirhayo". 
      Sertakan kolom: 'Digunakan Untuk', 'Status', dan 'Tanggal Penyerahan (Musdes)'.`;
    }

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      setContent(response.text || "Gagal menyusun naskah.");
    } catch (e) {
      setContent("Koneksi terganggu. Protokol tetap berjalan sesuai AD/ART.");
    } finally {
      setIsGenerating(null);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">Dana Maslahat Desa {villageName}.</h2>
        <p className="text-slate-500 font-medium">Pengembalian 5% SHU untuk pembangunan desa Anda.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Sidebar Controls */}
         <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden border-b-8 border-emerald-500">
               <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-center">
                     <span className="text-2xl">🏦</span>
                     <span className="text-[10px] font-black uppercase bg-white/20 px-2 py-1 rounded">Local Loop Fund</span>
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-emerald-200 uppercase tracking-widest">Saldo Desa {villageName}</p>
                     <h4 className="text-5xl font-black italic tracking-tighter">Rp {budgetAmount.toLocaleString('id-ID')}</h4>
                  </div>
               </div>
            </div>

            {/* List Proyek Nyata */}
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-4">
               <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Daftar Proyek Desa</h4>
               <div className="space-y-3">
                  {villageProjects.map((proj, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <div>
                          <p className="font-bold text-slate-800">{proj.name}</p>
                          <p className="text-slate-400 italic">{proj.status}</p>
                       </div>
                       <p className="font-black text-emerald-600">{proj.cost}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white p-6 rounded-[3rem] border border-slate-100 shadow-sm space-y-3">
               <button 
                  onClick={() => callAI('RULES')}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-black transition-all flex items-center justify-center gap-2"
               >
                  📜 Protokol Penggunaan
               </button>
               <button 
                  onClick={() => callAI('INVITATION')}
                  className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
               >
                  ✉️ Undangan Musyawarah
               </button>
               <button 
                  onClick={() => callAI('POSTER')}
                  className="w-full py-4 bg-amber-500 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-amber-600 transition-all flex items-center justify-center gap-2"
               >
                  📢 Baliho Transparansi
               </button>
            </div>
         </div>

         {/* Document Display */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4.5rem] p-1.5 shadow-2xl border-4 border-slate-800 h-[700px] flex flex-col">
            <div className="bg-white h-full w-full rounded-[4.2rem] overflow-hidden flex flex-col relative">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-indigo-500 to-amber-500"></div>
               
               <div className="flex-1 overflow-y-auto p-12 lg:p-16 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                  {isGenerating ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-6">
                        <div className="text-xl animate-pulse">🏛️</div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">AI sedang menyusun bukti kedaulatan...</p>
                     </div>
                  ) : content ? (
                     <div className="animate-in fade-in duration-1000 max-w-2xl mx-auto bg-white p-12 shadow-inner border border-slate-100 rounded-xl min-h-screen">
                        <div className="text-center space-y-4 border-b-4 border-double border-slate-900 pb-8 mb-10">
                           <h1 className="text-2xl font-black uppercase tracking-[0.2em] font-serif">Koperasi KoperatifAI</h1>
                           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Protokol Maslahat Desa - Wilayah {villageName}</p>
                        </div>
                        
                        <div className="font-serif text-sm text-slate-800 leading-relaxed whitespace-pre-wrap italic">
                           {content}
                        </div>
                     </div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                        <div className="text-8xl">🏛️</div>
                        <p className="max-w-xs mx-auto font-bold text-lg">Gunakan tombol di samping untuk membentengi dana desa melalui transparansi AI.</p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default VillageSocialBudget;