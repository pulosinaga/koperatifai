import React, { useRef, useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { GoogleGenAI } from "@google/genai";

const MembershipCertificate: React.FC = () => {
  const { user } = useAppContext();
  const certRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [hasMemberSigned, setHasMemberSigned] = useState(false);
  const [signatureData, setSignatureData] = useState<string | null>(null);
  
  // Celebration States
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [celebrationMsg, setCelebrationMsg] = useState('');
  const [isAiTalking, setIsAiTalking] = useState(false);

  // --- LOGIKA TANDA TANGAN BASAH (CANVAS) ---
  let isDrawing = false;

  const startDrawing = (e: any) => {
    isDrawing = true;
    draw(e);
  };

  const endDrawing = () => {
    isDrawing = false;
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx?.beginPath();
    }
  };

  const draw = (e: any) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#1e1b4b'; 

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      setSignatureData(null);
      setHasMemberSigned(false);
    }
  };

  // --- LOGIKA SELEBRASI MERIAH ---
  const playApplause = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play blocked"));
  };

  const speakMessage = (text: string) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const saveSignature = async () => {
    if (canvasRef.current) {
      const dataUrl = canvasRef.current.toDataURL();
      setSignatureData(dataUrl);
      setHasMemberSigned(true);
      setIsSigning(false);
      
      // TRIGGER SELEBRASI
      setIsCelebrating(true);
      playApplause();
      
      // GENERATE AI CONGRATULATIONS
      setIsAiTalking(true);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Buatkan 2 kalimat ucapan selamat yang sangat meriah dan menyentuh untuk anggota koperasi bernama ${user?.name} yang baru saja mensahkan sertifikat kepemilikannya. 
          Gunakan nada suara 'Founder' yang bangga. Katakan bahwa ia sekarang bukan sekadar pengguna, tapi TUAN atas ekonominya sendiri. 
          Sebutkan ID Anggotanya: ${user?.memberId}.`,
        });
        const msg = response.text || "Selamat! Anda resmi menjadi pemilik kedaulatan ekonomi.";
        setCelebrationMsg(msg);
        speakMessage(msg);
      } catch (e) {
        const fallback = `Selamat ${user?.name}! Anda resmi menjadi Pemilik Berdaulat KoperatifAI. Mari bangun masa depan bersama!`;
        setCelebrationMsg(fallback);
        speakMessage(fallback);
      } finally {
        setIsAiTalking(false);
      }
    }
  };

  const handleShareCert = async () => {
    if (!certRef.current) return;
    setIsSharing(true);
    try {
      const canvas = await (window as any).html2canvas(certRef.current, { scale: 3, backgroundColor: '#ffffff', useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = (window as any).jspdf;
      const pdf = new jsPDF('l', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], `Sertifikat_KoperatifAI_${user?.memberId}.pdf`, { type: 'application/pdf' });
      if (navigator.share) {
        await navigator.share({ files: [file], title: 'Sertifikat KoperatifAI', text: `Saya resmi berdaulat!` });
      } else {
        pdf.save(`Sertifikat_KoperatifAI.pdf`);
      }
    } catch (err) { alert("Gagal memproses share."); } finally { setIsSharing(false); }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto relative">
      
      {/* BACKGROUND CELEBRATION PARTICLES (CSS ONLY) */}
      {isCelebrating && (
        <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-bounce-slow text-4xl"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `-10%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {['✨','💎','💰','🎊','🔥'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
         <div className="space-y-1">
            <h2 className="text-4xl font-black text-slate-800 italic tracking-tight uppercase">Sertifikat Kedaulatan</h2>
            <p className="text-slate-500 font-medium">Bukti Sah Kepemilikan Aset dalam Ekosistem KoperatifAI.</p>
         </div>
         <div className="flex gap-3">
            {!hasMemberSigned && (
              <button 
                onClick={() => setIsSigning(true)}
                className="px-8 py-4 bg-amber-500 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-amber-400 transition-all shadow-xl animate-pulse"
              >
                ✍️ TANDA TANGANI SEKARANG
              </button>
            )}
            <button 
               onClick={handleShareCert}
               disabled={isSharing || !hasMemberSigned}
               className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 transition-all shadow-xl flex items-center gap-3 disabled:opacity-50"
            >
               {isSharing ? '🌀 MENCETAK...' : <span>📤 SHARE PDF (WA)</span>}
            </button>
         </div>
      </div>

      <div ref={certRef} className="relative bg-white p-2 md:p-6 rounded-[3.5rem] shadow-2xl border-2 border-slate-100 overflow-hidden group">
         <div className="border-[24px] border-double border-indigo-900/5 rounded-[2.8rem] p-12 lg:p-20 relative bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-amber-400/30 rounded-tl-3xl"></div>
            <div className="absolute top-8 right-8 w-24 h-24 border-t-4 border-r-4 border-amber-400/30 rounded-tr-3xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 border-b-4 border-l-4 border-amber-400/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-amber-400/30 rounded-br-3xl"></div>

            <div className="flex flex-col items-center text-center space-y-12">
               <div className="space-y-3">
                  <div className="flex items-center justify-center gap-4">
                     <div className="w-12 h-0.5 bg-amber-400/50"></div>
                     <h1 className="text-indigo-950 font-serif text-3xl font-bold tracking-[0.4em] uppercase">KOPERATIFAI</h1>
                     <div className="w-12 h-0.5 bg-amber-400/50"></div>
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] italic">The Global Sovereign Credit Union</div>
               </div>

               <div className="space-y-6">
                  <h3 className="font-serif text-5xl lg:text-6xl text-slate-800 font-bold italic tracking-tight">Sertifikat Saham Keanggotaan</h3>
                  <p className="text-slate-500 font-medium text-xl font-serif">Dengan otoritas penuh, kami menyatakan bahwa:</p>
                  <div className="relative inline-block py-6 px-12">
                     <div className="absolute inset-0 bg-amber-400/5 -rotate-1 rounded-2xl"></div>
                     <div className="text-5xl lg:text-7xl font-black text-indigo-800 font-serif uppercase tracking-tight relative z-10">
                        {user?.name || 'BUDI UTAMA'}
                     </div>
                  </div>
               </div>

               <div className="max-w-3xl text-slate-600 text-lg leading-relaxed italic font-serif px-10">
                  Adalah <b>Pemilik Sah Berdaulat</b> atas unit penyertaan modal dalam ekosistem KoperatifAI Indonesia. Dokumen ini menjamin hak mutlak atas pembagian Sisa Hasil Usaha (SHU), hak suara dalam rapat pleno digital, dan perlindungan aset melalui cadangan emas fisik kolektif.
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full pt-16 border-t border-slate-200/50">
                  <div className="space-y-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ID ANGGOTA</p>
                     <p className="font-mono text-base font-black text-indigo-900">{user?.memberId || 'KOP-2024-001'}</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">STATUS EKUITAS</p>
                     <p className="text-base font-black text-emerald-600 uppercase italic">Platinum Pioneer</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">TANGGAL AKTIVASI</p>
                     <p className="text-base font-black text-slate-800">12 Juni 2024</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row justify-between items-end w-full pt-20">
                  <div className="text-left space-y-6">
                     <div className="w-36 h-36 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white p-4 shadow-xl">
                        <span className="text-[10px] font-black text-indigo-400 mb-2">SECURE LEDGER</span>
                        <div className="text-[7px] font-mono break-all text-center opacity-50 uppercase">
                          {Math.random().toString(36).substring(2, 10).toUpperCase()}
                        </div>
                     </div>
                     <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Verified by AI Integrity Protocol</p>
                  </div>

                  <div className="hidden lg:flex flex-col items-center -mb-10">
                     <div className="w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center shadow-2xl border-8 border-amber-500/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200 via-transparent to-transparent"></div>
                        <span className="text-5xl shadow-sm relative z-10">◈</span>
                     </div>
                  </div>

                  <div className="flex gap-16">
                     <div className="text-center space-y-4">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Founder & Chairman</p>
                        <div className="w-40 h-24 flex flex-col items-center justify-center relative">
                           <span className="font-serif text-3xl italic text-indigo-900/30 absolute rotate-[-5deg]">Budi Utama</span>
                           <div className="w-full h-px bg-slate-300"></div>
                        </div>
                        <p className="text-xs font-bold text-slate-800 underline uppercase tracking-tighter">Budi Utama</p>
                     </div>

                     <div className="text-center space-y-4 min-w-[160px]">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tanda Tangan Pemilik</p>
                        <div className="w-40 h-24 flex items-center justify-center relative">
                           {signatureData ? (
                              <img src={signatureData} className="max-h-full max-w-full grayscale opacity-80" alt="Signature" />
                           ) : (
                              <div className="w-full h-full border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-[10px] text-slate-300 uppercase italic">Belum Ditandatangani</div>
                           )}
                           <div className="absolute bottom-0 w-full h-px bg-slate-300"></div>
                        </div>
                        <p className="text-xs font-bold text-slate-800 underline uppercase tracking-tighter">{user?.name || 'ANGGOTA'}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* SIGNATURE PAD MODAL */}
      {isSigning && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-slate-900/95 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-lg rounded-[4rem] p-10 space-y-8 shadow-2xl relative">
              <div className="text-center space-y-2">
                 <h3 className="text-2xl font-black text-slate-800 italic uppercase">Goreskan Tanda Tangan</h3>
                 <p className="text-slate-500 text-sm italic">"Gunakan jari Anda sebagai stempel kedaulatan."</p>
              </div>

              <div className="bg-slate-50 rounded-3xl border-4 border-dashed border-slate-200 p-4 relative overflow-hidden h-64">
                 <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={endDrawing} onMouseOut={endDrawing} onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={endDrawing} width={400} height={200} className="w-full h-full cursor-crosshair touch-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <button onClick={clearSignature} className="py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-all">ULANGI</button>
                 <button onClick={saveSignature} className="py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-emerald-700 transition-all shadow-lg">SAHKAN & SIMPAN</button>
              </div>
           </div>
        </div>
      )}

      {/* CELEBRATION MODAL */}
      {isCelebrating && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-indigo-950/90 backdrop-blur-2xl animate-in zoom-in duration-500">
           <div className="bg-white w-full max-w-xl rounded-[4rem] p-12 text-center space-y-10 shadow-[0_0_100px_rgba(99,102,241,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-indigo-500"></div>
              
              <div className="w-32 h-32 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-6xl mx-auto shadow-inner animate-bounce">🏆</div>
              
              <div className="space-y-4">
                 <h3 className="text-4xl font-black text-slate-800 italic uppercase leading-tight">Selamat, <br/><span className="text-indigo-600">Bapak/Ibu {user?.name.split(' ')[0]}!</span></h3>
                 <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">Signature Verified & Hashed</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 shadow-inner relative group">
                 <div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">🤖</div>
                 {isAiTalking ? (
                    <div className="flex flex-col items-center py-6 space-y-4">
                       <div className="flex gap-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></span>
                          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></span>
                       </div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI sedang menyapa Anda...</p>
                    </div>
                 ) : (
                    <p className="text-lg font-serif italic text-slate-700 leading-relaxed animate-in fade-in duration-1000">
                       "{celebrationMsg}"
                    </p>
                 )}
              </div>

              <button 
                onClick={() => { setIsCelebrating(false); window.speechSynthesis.cancel(); }}
                className="w-full py-6 bg-slate-900 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl active:scale-95"
              >
                 MULAI KEDAULATAN SAYA
              </button>
           </div>
        </div>
      )}

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .animate-bounce-slow {
          animation: bounce-slow infinite ease-in;
        }
      `}</style>
    </div>
  );
};

export default MembershipCertificate;