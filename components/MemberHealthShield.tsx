
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const MemberHealthShield: React.FC = () => {
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimStatus, setClaimStatus] = useState<'IDLE' | 'ANALYZING' | 'SUCCESS'>('IDLE');
  const [aiReport, setAiReport] = useState('');

  const processClaim = async () => {
    setClaimStatus('ANALYZING');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Simulasikan verifikasi klaim kesehatan anggota koperasi. 
        Data: Kuitansi Rawat Inap RSUD Cianjur Rp 1.200.000. 
        Konteks: Anggota sudah iuran 'Perisai Sehat' Rp 5.000/bulan selama 12 bulan. 
        Tugas AI: 
        1. Validasi keaslian fiktif atau bukan (simulasi). 
        2. Hitung jumlah santunan sesuai plafon 'Kelas 3 Gotong Royong'. 
        3. Berikan pesan empati dan konfirmasi dana cair ke saldo sukarela.`,
      });
      setAiReport(response.text || "Klaim berhasil diproses.");
      setClaimStatus('SUCCESS');
    } catch (e) {
      setAiReport("Audit AI gagal terhubung. Dana bantuan akan divalidasi manual oleh Pengurus dalam 1x24 jam.");
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-rose-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Community Health Solidarity v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Perisai Sehat: <br/>Rakyat Melindungi Rakyat.</h2>
            <p className="text-rose-100 text-lg leading-relaxed max-w-2xl font-medium">
               "Hanya dengan Rp 5.000 per bulan, Anda mendapatkan jaring pengaman kesehatan kolektif. Tidak ada lagi anggota yang meminjam ke lintah darat saat sakit."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🏥</div>
             <p className="text-xs font-bold text-rose-300 uppercase tracking-widest">Santunan Rawat Inap</p>
             <p className="text-3xl font-black text-white">Rp 250rb / hari</p>
             <p className="text-[9px] text-emerald-400 mt-2 uppercase font-black">Tanpa Survey Fisik - AI Verified</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Claim Portal */}
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-800 italic">Ajukan Bantuan Sehat</h3>
            <div className="space-y-6">
               <div className="aspect-video bg-slate-50 border-4 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center group hover:border-rose-300 transition-all cursor-pointer overflow-hidden">
                  <div className="text-5xl group-hover:scale-110 transition-transform">📸</div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] mt-4 tracking-widest">Foto Kuitansi / Surat Sakit</p>
               </div>
               <button 
                onClick={processClaim}
                disabled={claimStatus === 'ANALYZING'}
                className="w-full py-5 bg-rose-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-rose-700 transition-all active:scale-95"
               >
                  {claimStatus === 'ANALYZING' ? 'AI SEDANG MEMERIKSA BERKAS...' : 'KIRIM KLAIM BANTUAN'}
               </button>
            </div>
         </div>

         {/* AI Analysis Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[500px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-rose-400 italic uppercase tracking-widest">AI Claims Auditor</h3>
               <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {claimStatus === 'ANALYZING' ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-bounce">🧬</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS VERIFYING HOSPITAL METADATA & MEMBER ELIGIBILITY...</p>
                  </div>
               ) : claimStatus === 'SUCCESS' ? (
                  <div className="animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="mt-8 p-4 bg-emerald-500/20 rounded-2xl text-emerald-400 text-center font-black uppercase text-[10px]">
                        Dana bantuan telah masuk ke Saldo Sukarela.
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-6">
                     <div className="text-8xl">🛡️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Scan dokumen Anda untuk memulai proses solidaritas digital.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default MemberHealthShield;
