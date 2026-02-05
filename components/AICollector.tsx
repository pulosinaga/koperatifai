
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AICollector: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiDraft, setAiDraft] = useState('');

  const overdueMembers = [
    { id: 'M-042', name: 'Bpk. Ahmad', overdue: 5, amount: 450000, risk: 'Economic Strain', note: 'AI mendeteksi saldo sukarela menipis di akhir bulan.', icon: '👨‍🌾' },
    { id: 'M-112', name: 'Ibu Siti', overdue: 12, amount: 1250000, risk: 'Personal Emergency', note: 'Ada riwayat penarikan DASKOP baru-baru ini.', icon: '👩‍🍳' },
    { id: 'M-085', name: 'Andi Jaya', overdue: 2, amount: 300000, risk: 'Forgetfulness', note: 'Keaktifan di marketplace masih tinggi. Hanya butuh pengingat.', icon: '👨‍🔧' },
  ];

  const generateNudge = async (member: any) => {
    setIsGenerating(true);
    setSelectedMember(member);
    
    // Using required Gemini API format
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan pesan WhatsApp penagihan yang sangat santun dan berbasis kekeluargaan koperasi untuk anggota bernama ${member.name}. 
        Alasan keterlambatan terdeteksi sebagai: ${member.risk}. 
        Nominal angsuran: Rp ${member.amount.toLocaleString()}. 
        Gunakan gaya bahasa yang menekankan bahwa uang ini adalah milik anggota lain yang sedang menunggu untuk diputar, namun tawarkan juga bantuan jika ia benar-benar kesulitan. 
        Jangan mengancam. Fokus pada solusi dan solidaritas.`,
      });
      setAiDraft(response.text || "Draft tidak tersedia.");
    } catch (e) {
      setAiDraft(`Halo ${member.name}, kami dari KoperatifAI ingin menyapa. Kami perhatikan angsuran modal Rp ${member.amount.toLocaleString()} sudah melewati jatuh tempo. Ingatlah, modal ini adalah amanah anggota lain. Jika ada kendala, silakan kabari kami ya.`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Collector Header */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Kindness-First Remedial Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Penagihan Santun AI: <br/>Menjaga Amanah & Hubungan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Kami tidak meneror. Kami mendampingi. AI memantau pola keuangan anggota untuk memberikan **Peringatan Dini** dan solusi perpanjangan tenor sebelum mereka gagal bayar.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🕊️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Collection Health</p>
             <p className="text-3xl font-black text-emerald-400 mt-1 italic">98.5% Success</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Zero Intimidation Guarantee</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Member List */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Daftar Tunggakan Ringan</h3>
            <div className="space-y-4">
               {overdueMembers.map((m) => (
                 <button 
                  key={m.id}
                  onClick={() => generateNudge(m)}
                  className={`w-full p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                    selectedMember?.id === m.id ? 'bg-indigo-50 border-indigo-600 shadow-lg' : 'bg-white border-slate-50 hover:border-indigo-100'
                  }`}
                 >
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl">{m.icon}</div>
                       <div className="text-left">
                          <h4 className="font-bold text-slate-800">{m.name}</h4>
                          <p className="text-[10px] text-rose-500 font-black uppercase">Telat {m.overdue} Hari</p>
                       </div>
                    </div>
                    <p className="font-black text-slate-800">Rp {m.amount.toLocaleString('id-ID')}</p>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Nudge Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            
            {selectedMember ? (
               <div className="space-y-8 relative z-10 animate-in slide-in-from-right duration-300">
                  <div className="flex justify-between items-center">
                     <h4 className="text-xl font-black text-indigo-400 italic">Analisis AI Collector</h4>
                     <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Protocol: SOLUSI</span>
                  </div>

                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
                     <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Penyebab Terdeteksi:</p>
                     <p className="text-white font-medium">{selectedMember.note}</p>
                  </div>

                  <div className="space-y-4">
                     <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">AI Kindness Nudge Draft:</p>
                     <div className="bg-white p-6 rounded-[2rem] text-sm text-slate-700 leading-relaxed italic shadow-inner">
                        {isGenerating ? (
                           <div className="flex items-center gap-2 animate-pulse">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                              <span>Menulis pesan penuh empati...</span>
                           </div>
                        ) : aiDraft}
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <button className="py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">Kirim via WA</button>
                     <button className="py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] border border-white/10">Tawarkan Tenor</button>
                  </div>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                  <div className="text-7xl">🕊️</div>
                  <p className="text-slate-400 font-bold">Pilih anggota di samping untuk memulai pendampingan santun.</p>
               </div>
            )}
         </div>
      </div>

      {/* Philosophy Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kenapa Santun Berhasil?</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
               Data dari Credit Union dunia membuktikan bahwa anggota yang merasa **dihargai & dibantu** saat sulit memiliki tingkat loyalitas 3x lipat lebih tinggi. Teror hanya memutus hubungan; empati membangun kejujuran abadi.
            </p>
         </div>
         <div className="bg-emerald-50 p-12 rounded-[4rem] border border-emerald-100 flex flex-col justify-center text-center space-y-4">
            <div className="text-4xl">🌱</div>
            <h4 className="text-xl font-bold text-emerald-900 italic">"Restrukturisasi Sebelum Default."</h4>
            <p className="text-xs text-emerald-700 leading-relaxed max-w-xs mx-auto">
               AI kami tidak menunggu anggota terlambat. Jika pola belanja mereka drop, sistem otomatis menyarankan pengurangan nominal angsuran sementara. Inilah kedaulatan yang melindungi rakyat.
            </p>
         </div>
      </div>

      {/* Final Action Banner */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🌍</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Koperasi Menghidupi, Bukan Menghabisi."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Jadilah penawar racun Pinjol yang kejam. Dengan KoperatifAI, kita membangun sistem keuangan yang memiliki **Wajah Kemanusiaan**.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Audit Kebijakan Remedial Kami
         </button>
      </div>
    </div>
  );
};

export default AICollector;
