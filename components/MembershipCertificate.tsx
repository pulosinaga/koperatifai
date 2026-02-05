
import React from 'react';

const MembershipCertificate: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="text-center space-y-4 mb-10">
         <h2 className="text-4xl font-black text-slate-800 italic tracking-tight">Sertifikat Kepemilikan Saham</h2>
         <p className="text-slate-500">Anda bukan sekadar pengguna, Anda adalah pemilik sah KoperatifAI.</p>
      </div>

      {/* The Certificate UI */}
      <div className="relative bg-white p-1 md:p-4 rounded-[3rem] shadow-2xl border-2 border-slate-100 overflow-hidden">
         {/* Decorative Border */}
         <div className="border-[16px] border-double border-indigo-900/10 rounded-[2.5rem] p-12 relative">
            <div className="absolute top-10 left-10 text-6xl opacity-10">◈</div>
            <div className="absolute bottom-10 right-10 text-6xl opacity-10">◈</div>
            
            <div className="flex flex-col items-center text-center space-y-10">
               <div className="space-y-2">
                  <div className="text-indigo-900 font-serif text-3xl font-bold tracking-[0.2em] uppercase">KoperatifAI</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest italic">Digital Credit Union Ecosystem</div>
               </div>

               <div className="space-y-4">
                  <h3 className="font-serif text-5xl text-slate-800 font-bold italic">Sertifikat Anggota Kehormatan</h3>
                  <p className="text-slate-500 font-medium text-lg">Dengan ini menyatakan bahwa:</p>
                  <div className="text-4xl font-black text-indigo-700 underline decoration-indigo-200 decoration-4 underline-offset-8 font-serif">
                     Budi Utama, S.T.
                  </div>
               </div>

               <div className="max-w-2xl text-slate-600 leading-relaxed italic font-serif">
                  Adalah pemilik sah atas unit penyertaan modal di KoperatifAI. Memiliki hak penuh atas Sisa Hasil Usaha (SHU), hak suara dalam Rapat Anggota Tahunan (RAT) secara digital, dan menjadi bagian dari aliansi ekonomi solidaritas global World Council of Credit Unions (WOCCU).
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-10 border-t border-slate-100">
                  <div className="space-y-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nomor Anggota</p>
                     <p className="font-mono text-sm font-bold text-slate-800">CU-202406001</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status Kepemilikan</p>
                     <p className="text-sm font-black text-emerald-600 uppercase">Platinum Founder</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tanggal Aktivasi</p>
                     <p className="text-sm font-bold text-slate-800">12 Juni 2024</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row justify-between items-end w-full pt-12">
                  <div className="text-left space-y-4">
                     <div className="w-32 h-32 bg-slate-50 border border-slate-100 p-2 rounded-2xl flex items-center justify-center">
                        {/* Placeholder QR Code */}
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-600 to-indigo-900 rounded-lg"></div>
                     </div>
                     <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Scan to Verify Authenticity</p>
                  </div>
                  <div className="text-center space-y-2">
                     <div className="w-48 h-px bg-slate-200 mx-auto"></div>
                     <p className="font-serif text-slate-800 font-bold">KoperatifAI Board</p>
                     <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Digital Signature Verified</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl">
                     <div className="text-3xl">🏆</div>
                     <p className="text-[9px] font-black text-amber-600 uppercase mt-2">Valued Member</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
         <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl flex items-center gap-3">
            <span>📥</span> Download PDF Sertifikat
         </button>
         <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-200 hover:bg-indigo-50 transition-all flex items-center gap-3">
            <span>🔗</span> Bagikan di LinkedIn
         </button>
      </div>

      {/* Psychology Tip */}
      <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">📈</div>
         <div className="flex-1">
            <h4 className="text-xl font-bold text-indigo-900">Kenapa Sertifikat Ini Penting?</h4>
            <p className="text-indigo-700/70 text-sm mt-2 leading-relaxed italic">
               "Dalam startup rakyat, rasa bangga adalah bahan bakar utama. Saat anggota membagikan sertifikat ini, mereka tidak hanya pamer status, tapi mereka memvalidasi kepercayaan publik terhadap KoperatifAI, yang secara otomatis menaikkan valuasi entitas Anda."
            </p>
         </div>
      </div>
    </div>
  );
};

export default MembershipCertificate;
