
import React from 'react';

const MemberQRIS: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic tracking-tight">QRIS Statis Anggota</h2>
         <p className="text-slate-500">Terima pembayaran di toko fisik Anda langsung ke saldo KoperatifAI.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
         {/* The QRIS Visual */}
         <div className="w-full max-w-md bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 p-8 flex flex-col items-center space-y-6">
            <div className="w-full flex justify-between items-center px-4">
               <div className="text-indigo-900 font-black text-xl flex items-center gap-2">
                  <span className="text-2xl">◈</span> KoperatifAI
               </div>
               <div className="bg-rose-500 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">QRIS</div>
            </div>

            <div className="w-full text-center space-y-1">
               <h3 className="text-2xl font-black text-slate-800">WARUNG BUDI UTAMA</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">NMID: ID102206001248</p>
            </div>

            {/* Mock QR Code UI */}
            <div className="relative w-full aspect-square bg-slate-50 rounded-[2rem] border-4 border-indigo-600 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-600 to-transparent"></div>
               {/* Realistic QR Pattern Mockup */}
               <div className="w-4/5 h-4/5 grid grid-cols-4 grid-rows-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`rounded-md bg-indigo-900/80 ${i % 3 === 0 ? 'opacity-100' : 'opacity-20'}`}></div>
                  ))}
               </div>
               <div className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl border border-indigo-100">◈</div>
            </div>

            <div className="w-full flex justify-around items-center pt-4 grayscale opacity-40">
               <span className="font-bold text-xs italic">GPN</span>
               <span className="font-bold text-xs italic">LinkAja</span>
               <span className="font-bold text-xs italic">OVO</span>
               <span className="font-bold text-xs italic">GoPay</span>
            </div>

            <div className="w-full p-4 bg-indigo-50 rounded-2xl text-center">
               <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-relaxed">
                  "DIPERIKSA & DISAHKAN OLEH SISTEM AI KOPERATIFAI"
               </p>
            </div>
         </div>

         {/* Information & Monetization */}
         <div className="flex-1 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
               <h4 className="text-xl font-black text-slate-800 italic">Kenapa Pakai QRIS Koperasi?</h4>
               <ul className="space-y-4">
                  <li className="flex gap-4">
                     <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-xl shrink-0">💸</div>
                     <div>
                        <p className="font-bold text-slate-800">Biaya Admin Terendah (0.4%)</p>
                        <p className="text-xs text-slate-500">Bank biasanya memotong 0.7% - 1%. Kita hanya ambil secukupnya untuk operasional IT.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-xl shrink-0">⚡</div>
                     <div>
                        <p className="font-bold text-slate-800">Cair Langsung ke Tabungan</p>
                        <p className="text-xs text-slate-500">Uang hasil jualan tidak mengendap di dompet digital lain. Langsung masuk saldo Sukarela Anda.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-xl shrink-0">📈</div>
                     <div>
                        <p className="font-bold text-slate-800">Otomatis Naikkan Skor Kredit</p>
                        <p className="text-xs text-slate-500">Semakin banyak transaksi di toko Anda, AI akan otomatis menaikkan limit pinjaman modal usaha Anda.</p>
                     </div>
                  </li>
               </ul>
            </div>

            <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-6 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h4 className="text-xl font-black italic text-emerald-400">Founder's Strategy:</h4>
               <p className="text-sm text-slate-400 leading-relaxed">
                  Dengan fitur ini, Anda memiliki **Layanan Payment Gateway** sendiri. Koperasi mendapatkan data aliran kas riil pedagang, yang merupakan data termahal di industri Fintech saat ini.
               </p>
               <div className="pt-4 flex gap-4">
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">Cetak Stiker QRIS</button>
                  <button className="px-6 py-3 bg-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest border border-white/10">Lihat History QR</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MemberQRIS;
