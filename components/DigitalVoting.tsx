
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const DigitalVoting: React.FC = () => {
  const [isMeetingLive, setIsMeetingLive] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quorum, setQuorum] = useState(62.4); // Simulated quorum above 51%
  const [isGeneratingBook, setIsGeneratingBook] = useState(false);
  const [bukuPintar, setBukuPintar] = useState<string | null>(null);
  const [showBookModal, setShowBookModal] = useState(false);

  const activeVote = {
    title: "Persetujuan Alokasi SHU 2026",
    deadline: "05 Pebruari 2026",
    description: "Pengalokasian surplus sebesar Rp 750 Juta untuk Dana Cadangan (30%) dan Jasa Anggota (40%).",
    options: [
      { id: 1, label: "Setuju (Prioritas Kekuatan Modal)", votes: 842 },
      { id: 2, label: "Tidak Setuju (Tetap 25% Cadangan)", votes: 154 },
      { id: 3, label: "Abstain", votes: 22 },
    ]
  };

  const handleVote = (id: number) => {
    setSelectedOption(id);
    setHasVoted(true);
    // In real app, this would update a database
  };

  const generateBukuPintar = async () => {
    setIsGeneratingBook(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Susunlah "BERITA ACARA RAPAT ANGGOTA TAHUNAN (RAT)" yang sangat formal dan lengkap untuk Koperasi KoperatifAI. 
        Data Rapat:
        - Hari/Tanggal: Kamis, 05 Pebruari 2026
        - Quorum Kehadiran: ${quorum}% (Sah)
        - Agenda Utama: ${activeVote.title}
        - Hasil Voting: 842 Setuju, 154 Tidak Setuju, 22 Abstain.
        - Keputusan: Agenda Disetujui.
        
        Format dokumen harus mencakup: 
        1. Kepala Berita Acara. 
        2. Dasar Hukum (UU 25/1992). 
        3. Jalannya Persidangan. 
        4. Amar Keputusan. 
        5. Penutup. 
        Gunakan bahasa hukum yang lugas, profesional, dan berwibawa.`,
      });
      setBukuPintar(response.text || "Gagal menyusun dokumen.");
      setShowBookModal(true);
    } catch (e) {
      setBukuPintar("Terjadi kesalahan teknis saat menyusun Berita Acara.");
    } finally {
      setIsGeneratingBook(false);
    }
  };

  const COLORS = ['#6366f1', '#f43f5e', '#94a3b8'];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Header with Live Status */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
               <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${isMeetingLive ? 'bg-rose-500 border-rose-400 animate-pulse' : 'bg-white/10 border-white/10'}`}>
                  {isMeetingLive ? '● LIVE SESSION ACTIVE' : 'e-RAT LOBBY'}
               </span>
               <span className="text-indigo-300 text-[10px] font-black uppercase">05 Pebruari 2026</span>
            </div>
            <h2 className="text-4xl font-black leading-tight italic">Rapat Anggota Tahunan Digital.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
               Hak suara Anda adalah saham Anda. Hasil sidang hari ini akan langsung menjadi <b>Berita Acara Sah</b> yang diakui hukum.
            </p>
            <div className="flex gap-4">
               {!isMeetingLive ? (
                 <button onClick={() => setIsMeetingLive(true)} className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:bg-indigo-700 transition-all">Masuk Ruang Sidang</button>
               ) : (
                 <button onClick={() => setIsMeetingLive(false)} className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-black uppercase text-xs hover:bg-white/20 transition-all">Kembali ke Lobi</button>
               )}
            </div>
          </div>
          
          <div className="w-full lg:w-80 bg-white p-8 rounded-[3rem] shadow-2xl text-center">
             <div className="text-5xl mb-4">🗳️</div>
             <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Live Quorum Status</p>
             <p className={`text-5xl font-black mt-2 italic ${quorum >= 51 ? 'text-emerald-500' : 'text-indigo-600'}`}>{quorum.toFixed(1)}%</p>
             <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${quorum}%` }}></div>
             </div>
             <p className="text-[9px] text-slate-500 mt-2 uppercase font-bold italic">
                {quorum >= 51 ? '✓ QUORUM TERPENUHI (SAH)' : 'MENUNGGU %51 KEHADIRAN'}
             </p>
          </div>
        </div>
      </div>

      {isMeetingLive ? (
        /* LIVE MEETING VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in zoom-in duration-300">
           <div className="lg:col-span-2 space-y-6">
              <div className="aspect-video bg-slate-900 rounded-[3.5rem] shadow-2xl overflow-hidden relative border-4 border-slate-800">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                       <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-3xl animate-pulse mx-auto">🎥</div>
                       <p className="text-white font-bold italic">Live Stream Sidang Pleno I</p>
                    </div>
                 </div>
                 <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3 py-1 bg-rose-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">LIVE</span>
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-lg text-[10px] font-bold">👤 1,018 Viewing</span>
                 </div>
              </div>

              {/* Chat room placeholder */}
              <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm h-48 flex flex-col">
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Ruang Diskusi Sah</h4>
                 <div className="flex-1 overflow-y-auto space-y-2 text-xs italic text-slate-500">
                    <p><span className="text-indigo-600 font-bold">Budi:</span> "Interupsi pimpinan, mohon rincian alokasi dana pendidikan diperjelas."</p>
                    <p><span className="text-indigo-600 font-bold">Admin AI:</span> "Siap Pak Budi, rincian telah dikirim ke menu Dokumen Pendukung."</p>
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-6">
                 <h3 className="font-black text-slate-800 italic uppercase text-center">SURAT SUARA DIGITAL</h3>
                 {!hasVoted ? (
                   <div className="space-y-3">
                      {activeVote.options.map((opt) => (
                        <button key={opt.id} onClick={() => handleVote(opt.id)} className="w-full p-5 text-left bg-slate-50 border-2 border-transparent rounded-2xl hover:border-indigo-600 transition-all font-bold text-sm text-slate-700">
                           {opt.label}
                        </button>
                      ))}
                   </div>
                 ) : (
                   <div className="text-center space-y-4 animate-in zoom-in">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">✓</div>
                      <h4 className="text-lg font-black text-slate-800 italic">Suara Tercatat.</h4>
                      <p className="text-[10px] text-indigo-600 font-black">MENUNGGU PENUTUPAN SIDANG</p>
                   </div>
                 )}
              </div>

              {/* The Master Control for Founder/Board */}
              <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl space-y-6">
                 <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest">Board Control Panel</h4>
                 <button 
                  onClick={generateBukuPintar}
                  disabled={isGeneratingBook}
                  className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                 >
                    {isGeneratingBook ? '⏳ MENYUSUN BUKU PINTAR...' : '📕 TERBITKAN BUKU PINTAR e-RAT'}
                 </button>
                 <p className="text-[9px] text-slate-500 text-center italic">"Fitur ini akan merangkum seluruh hasil sidang menjadi Berita Acara sah."</p>
              </div>
           </div>
        </div>
      ) : (
        /* LOBBY VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
              <h3 className="text-2xl font-black text-slate-800 italic">Laporan RAT Sebelumnya</h3>
              <div className="space-y-4">
                 {[
                   { t: 'Buku Pintar RAT 2025', d: 'Laporan Pertanggungjawaban Tahunan', s: 'Verified' },
                   { t: 'Berita Acara Pleno II', d: 'Pemilihan Pengurus Baru', s: 'Signed' }
                 ].map((doc, i) => (
                   <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                      <div>
                        <p className="text-sm font-bold text-slate-700">{doc.t}</p>
                        <p className="text-[10px] text-slate-400 uppercase">{doc.d}</p>
                      </div>
                      <button className="p-3 bg-white border border-slate-200 rounded-xl text-xs shadow-sm">📥</button>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-indigo-900 p-10 rounded-[4rem] text-white flex flex-col justify-center text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              <div className="text-6xl">🖋️</div>
              <h3 className="text-2xl font-black">"Legalitas Tanpa Kertas."</h3>
              <p className="text-indigo-200 text-sm leading-relaxed italic">
                 Setiap keputusan di KoperatifAI dijamin oleh tanda tangan digital terenkripsi yang sah di mata hukum perdata Indonesia.
              </p>
           </div>
        </div>
      )}

      {/* BUKU PINTAR MODAL (Official Berita Acara View) */}
      {showBookModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
           <div className="bg-white w-full max-w-4xl rounded-[4rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="bg-indigo-600 p-8 text-white flex justify-between items-center shrink-0">
                 <div className="flex items-center gap-4">
                    <div className="text-4xl">📕</div>
                    <div>
                       <h3 className="text-xl font-black italic">Buku Pintar e-RAT 2026</h3>
                       <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Official Minutes of Meeting</p>
                    </div>
                 </div>
                 <button onClick={() => setShowBookModal(false)} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">✕</button>
              </div>

              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                 <div className="max-w-2xl mx-auto bg-white p-12 shadow-inner border border-slate-100 rounded-xl min-h-screen">
                    <div className="text-center space-y-2 border-b-4 border-double border-slate-800 pb-8 mb-10">
                       <h1 className="text-2xl font-black uppercase tracking-[0.2em] font-serif">Koperasi KoperatifAI Indonesia</h1>
                       <p className="text-[10px] font-bold uppercase tracking-widest italic">Digital Sovereignty Through Solidarity</p>
                    </div>
                    
                    <div className="font-serif text-sm text-slate-800 leading-relaxed whitespace-pre-wrap italic">
                       {bukuPintar}
                    </div>

                    <div className="mt-20 flex justify-between items-end border-t border-slate-100 pt-10">
                       <div className="text-center space-y-4">
                          <p className="text-[10px] font-black text-slate-400 uppercase">Tanda Tangan Ketua</p>
                          <div className="w-32 h-20 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center text-indigo-600 relative overflow-hidden">
                             <span className="text-[9px] font-black uppercase">Verified ID</span>
                             <span className="font-serif text-lg italic">Budi Utama</span>
                             <div className="absolute top-0 right-0 p-1 text-[8px] bg-emerald-500 text-white font-black">HASHED</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="w-24 h-24 bg-slate-50 p-1 border border-slate-200 rounded-xl inline-block">
                             <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center text-white text-[8px] font-bold text-center p-2 uppercase">Scan to Verify Originality</div>
                          </div>
                          <p className="text-[8px] font-bold text-slate-400 mt-2 uppercase">Cert-ID: 2026-RAT-001</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-center gap-4 shrink-0">
                 <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Unduh PDF Resmi</button>
                 <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Bagikan Laporan ke Anggota</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default DigitalVoting;
