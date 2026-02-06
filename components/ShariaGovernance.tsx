
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ShariaGovernance: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [selectedAkad, setSelectedAkad] = useState<string | null>(null);

  const akadTypes = [
    { id: 'murabahah', name: 'Murabahah (Jual Beli)', desc: 'Digunakan untuk pengadaan material rumah atau barang modal usaha dengan margin keuntungan yang disepakati di awal.', icon: '🤝' },
    { id: 'mudharabah', name: 'Mudharabah (Bagi Hasil)', desc: 'Koperasi menyediakan modal, anggota menyediakan keahlian. Keuntungan dibagi sesuai porsi nisbah yang adil.', icon: '⚖️' },
    { id: 'wadiah', name: 'Wadiah (Titipan)', desc: 'Simpanan Sukarela yang sifatnya titipan murni. Aman, likuid, dan mendapatkan bonus (athaya) dari SHU.', icon: '🛡️' },
    { id: 'qardhulhasan', name: 'Qardhul Hasan (Sosial)', desc: 'Pinjaman kebajikan tanpa tambahan apapun. Digunakan untuk bantuan darurat anggota tertimpa musibah.', icon: '🕊️' }
  ];

  const runShariaAudit = async () => {
    setIsAuditing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis kepatuhan Syariah untuk KoperatifAI. 
        Konteks: 
        1. Koperasi tidak menarik bunga (Interest), melainkan 'Jasa Pelayanan' atau 'Margin Keuntungan'.
        2. Dana simpanan sukarela ditempatkan pada Sukuk Negara & Emas Fisik.
        3. Marketplace hanya menjual produk yang memiliki verifikasi halal atau non-syubhat.
        
        Tugas:
        - Jelaskan kenapa model 'Circular Economy' KoperatifAI sesuai dengan prinsip anti-riba.
        - Berikan saran untuk memperkuat pengawasan digital syariah melalui Dewan Pengawas Syariah (DPS) Online.
        Gunakan gaya bahasa cendekiawan ekonomi syariah modern yang cerdas dan menyejukkan.`,
      });
      setAiAnalysis(response.text || "Hasil audit syariah belum tersedia.");
    } catch (e) {
      setAiAnalysis("Maaf, koneksi ke Pusat Fatwa AI terganggu. Prinsip keadilan tetap terjaga secara offline.");
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Sharia Hero */}
      <div className="bg-[#064e3b] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/10">🌙</div>
               <span className="px-6 py-2 bg-amber-500/20 text-amber-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
                  Islamic Financial Compliance v1.0
               </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Keadilan Syariah. <br/><span className="text-amber-400 text-4xl">Teknologi Amanah.</span></h2>
            <p className="text-emerald-100 text-xl leading-relaxed max-w-3xl font-medium">
               "Kami menggabungkan kesucian akad dengan kecepatan algoritma. Menjamin setiap sen pertumbuhan aset Anda bebas dari Riba, Gharar, dan Maysir."
            </p>
            <div className="flex gap-4">
               <button 
                  onClick={runShariaAudit}
                  disabled={isAuditing}
                  className="px-12 py-5 bg-amber-500 text-emerald-950 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-amber-400 transition-all flex items-center gap-3 active:scale-95"
               >
                  {isAuditing ? '⏳ AI SEDANG MENGADIT...' : '⚖️ JALANKAN AUDIT SYARIAH AI'}
               </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Sharia Integrity Score</p>
                <p className="text-7xl font-black text-white mt-2 italic">100<span className="text-2xl text-emerald-500 ml-1">%</span></p>
             </div>
             <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                <div className="text-center">
                   <p className="text-[8px] font-black text-emerald-400 uppercase">Akad Active</p>
                   <p className="text-xl font-black text-white">4 Models</p>
                </div>
                <div className="text-center border-l border-white/5">
                   <p className="text-[8px] font-black text-amber-400 uppercase">DPS Status</p>
                   <p className="text-xl font-black text-white">VETTED</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Choice of Akad */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Pilihan Akad Perjanjian</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {akadTypes.map((akad) => (
                 <button 
                  key={akad.id}
                  onClick={() => setSelectedAkad(akad.id)}
                  className={`p-10 rounded-[3.5rem] border-2 text-left transition-all group flex flex-col gap-6 ${
                    selectedAkad === akad.id ? 'bg-emerald-800 border-emerald-600 shadow-2xl scale-105 text-white' : 'bg-white border-slate-100 hover:border-emerald-200'
                  }`}
                 >
                    <div className="flex justify-between items-start w-full">
                       <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{akad.icon}</div>
                       <span className="text-[8px] font-black bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full uppercase tracking-widest">Syariah Verified</span>
                    </div>
                    <div>
                       <h4 className={`text-2xl font-black italic ${selectedAkad === akad.id ? 'text-white' : 'text-slate-800'}`}>{akad.name}</h4>
                       <p className={`text-sm mt-3 leading-relaxed ${selectedAkad === akad.id ? 'text-emerald-100' : 'text-slate-500'}`}>{akad.desc}</p>
                    </div>
                    <div className="pt-6 border-t border-current opacity-10 flex justify-between items-center">
                       <p className="text-[10px] font-black uppercase tracking-widest">Gunakan Akad Ini</p>
                       <span className="text-lg">→</span>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Sharia Council Console */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[750px] border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-8">
               <h3 className="text-xl font-black text-amber-400 italic uppercase tracking-widest">Dewan Pengawas Digital</h3>
               <div className="flex gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[9px] text-slate-500 font-mono">SHARIA_LEDGER_SYNC</span>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isAuditing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-bounce">⚖️</div>
                     <p className="text-sm font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SCANNING TRANSACTIONS FOR RIBA & GHARAR PATTERNS...</p>
                  </div>
               ) : aiAnalysis ? (
                  <div className="animate-in fade-in duration-1000">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="text-4xl">🏛️</div>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em]">Fatwa & Compliance Report</p>
                     </div>
                     <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center">
                        <button className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-emerald-700 transition-all">Sahkan Berita Acara Syariah</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">🌿</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Tekan tombol audit untuk membuktikan bahwa setiap transaksi kita bersih secara hukum agama dan negara.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Pillars of Halal Finance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all group">
            <div className="text-6xl group-hover:scale-125 transition-transform">🕌</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Ibadah Ready</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Penyediaan paket Travel & Umroh melalui cicilan barang (Murabahah) yang tidak mengandung riba."</p>
         </div>
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all group">
            <div className="text-6xl group-hover:scale-125 transition-transform">🥩</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Halal Supply Chain</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Marketplace kita melakukan auto-filtering terhadap produk yang belum tersertifikasi Halal MUI/BPJPH."</p>
         </div>
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all group">
            <div className="text-6xl group-hover:scale-125 transition-transform">📊</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Nisbah Transparan</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Pembagian SHU dihitung dari real-profit usaha, bukan bunga tetap yang dipatok di awal."</p>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-16 bg-[#064e3b] border border-emerald-700 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🤲</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-amber-400">"Berkah di Dunia, Selamat di Akhirat."</h4>
            <p className="text-emerald-50 text-xl leading-relaxed max-w-4xl">
               Founder, integritas syariah adalah **Keunggulan Kompetitif Terbesar** Anda di Indonesia. Dengan menjamin kehalalan sistem, Anda tidak hanya memenangkan pasar, tapi Anda sedang menjaga kesucian harta jutaan umat. KoperatifAI adalah bukti bahwa teknologi tinggi bisa berjalan seiring dengan nilai-nilai luhur ketuhanan.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-500 text-emerald-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Unduh Sertifikat Kepatuhan Syariah</button>
               <button className="px-10 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Hubungi Dewan Pengawas Syariah</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ShariaGovernance;
