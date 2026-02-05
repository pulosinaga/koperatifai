
import React, { useState } from 'react';

const VouchingSystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [vouchCount, setVouchCount] = useState(0);

  const activationSteps = [
    { id: 1, title: 'Identitas & Selfie', icon: '📸', status: activeStep > 1 ? 'DONE' : 'CURRENT' },
    { id: 2, title: 'Saksi Digital', icon: '🤝', status: activeStep > 2 ? 'DONE' : (activeStep === 2 ? 'CURRENT' : 'PENDING') },
    { id: 3, title: 'Setor Simpanan Pokok', icon: '🏛️', status: activeStep > 3 ? 'DONE' : (activeStep === 3 ? 'CURRENT' : 'PENDING') },
    { id: 4, title: 'Aktivasi SHU', icon: '✨', status: activeStep === 4 ? 'CURRENT' : 'PENDING' },
  ];

  const handleVouch = () => {
    if (vouchCount < 3) {
      setVouchCount(vouchCount + 1);
      if (vouchCount + 1 === 3) {
        setTimeout(() => setActiveStep(3), 1000);
      }
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Vouching Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Trust-Based Onboarding
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Saksi Digital: <br/>Keamanan Berbasis Hubungan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Di KoperatifAI, Anda butuh <b>3 Anggota Lama</b> untuk menjamin karakter Anda sebelum resmi menjadi pemilik.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center">
             <div className="text-6xl mb-4">🤝</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Vouching Requirement</p>
             <p className="text-3xl font-black text-emerald-400 mt-1 italic">{vouchCount} / 3</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Secured by Social Capital</p>
          </div>
        </div>
      </div>

      {/* Steps Visualization */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
         <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
         {activationSteps.map((s) => (
           <div key={s.id} className="relative z-10 flex flex-col items-center group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 border-4 border-white shadow-xl ${
                s.status === 'DONE' ? 'bg-emerald-500 text-white' : 
                s.status === 'CURRENT' ? 'bg-indigo-600 text-white animate-pulse scale-110' : 
                'bg-slate-100 text-slate-300'
              }`}>
                 {s.status === 'DONE' ? '✓' : s.icon}
              </div>
              <p className={`text-[10px] font-black uppercase mt-4 ${s.status === 'CURRENT' ? 'text-indigo-600' : 'text-slate-400'}`}>
                {s.title}
              </p>
           </div>
         ))}
      </div>

      {/* Main Interaction Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            {activeStep === 1 && (
              <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 animate-in slide-in-from-left">
                 <h3 className="text-2xl font-black text-slate-800 italic">Langkah 01: Verifikasi Identitas AI</h3>
                 <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-slate-100 rounded-[3rem] bg-slate-50/50 space-y-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm">📸</div>
                    <p className="text-slate-500 font-medium">Ambil foto KTP & Selfie untuk validasi AI.</p>
                    <button onClick={() => setActiveStep(2)} className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs">Mulai Scan AI</button>
                 </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 animate-in slide-in-from-left">
                 <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black text-slate-800 italic">Langkah 02: Mencari 3 Saksi Digital</h3>
                    <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black animate-pulse">WAITING FOR GUARANTORS</span>
                 </div>
                 <p className="text-slate-500 leading-relaxed italic">"Silakan kirim permintaan jaminan ke tetangga atau teman yang sudah menjadi anggota KoperatifAI."</p>
                 
                 <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`p-6 rounded-[2.5rem] border-2 flex items-center justify-between transition-all ${vouchCount >= i ? 'bg-emerald-50 border-emerald-500' : 'bg-slate-50 border-slate-100'}`}>
                         <div className="flex gap-4 items-center">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-lg">{vouchCount >= i ? '👤' : '❓'}</div>
                            <div>
                               <p className="font-bold text-slate-800">{vouchCount >= i ? `Saksi #${i} (Terverifikasi)` : `Menunggu Saksi #${i}...`}</p>
                               <p className="text-[10px] text-slate-400 uppercase font-black">{vouchCount >= i ? 'REPUTASI: HIGH' : 'KIRIM PERMINTAAN WA'}</p>
                            </div>
                         </div>
                         {vouchCount < i && i === vouchCount + 1 && (
                            <button onClick={handleVouch} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase">Simulasi Jamin</button>
                         )}
                         {vouchCount >= i && <span className="text-emerald-500 font-black text-xl">✓</span>}
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 animate-in slide-in-from-left">
                 <h3 className="text-2xl font-black text-slate-800 italic">Langkah 03: Setoran Simpanan Pokok</h3>
                 <div className="bg-indigo-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10 space-y-6">
                       <div>
                          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Invoice Aktivasi</p>
                          <h4 className="text-3xl font-black italic">Rp 100.000</h4>
                       </div>
                       <p className="text-indigo-200 text-xs leading-relaxed">Ini adalah investasi saham Anda yang menjamin hak suara di RAT. Tidak bisa ditarik, tapi menghasilkan SHU selamanya.</p>
                       <button onClick={() => setActiveStep(4)} className="w-full py-5 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-100 transition-all">Bayar via Virtual Account →</button>
                    </div>
                 </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="bg-emerald-600 p-12 rounded-[4rem] text-white text-center space-y-8 animate-in zoom-in duration-500 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]"></div>
                 <div className="text-8xl relative z-10">🥇</div>
                 <h3 className="text-4xl font-black italic relative z-10">Selamat Datang, Pemilik!</h3>
                 <p className="text-emerald-100 max-w-md mx-auto relative z-10">
                    Aktivasi selesai. Anda sekarang memiliki **1 Unit Saham** KoperatifAI dan resmi berhak menerima pembagian SHU bulan depan.
                 </p>
                 <div className="pt-8 relative z-10">
                    <button className="px-12 py-4 bg-white text-emerald-700 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Cetak Sertifikat Saham Digital</button>
                 </div>
              </div>
            )}
         </div>

         {/* Sidebar: Logic Explanation */}
         <div className="space-y-8">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
               <h4 className="text-xl font-black text-slate-800 italic">Kenapa Harus Ada "Saksi"?</h4>
               <ul className="space-y-4">
                  <li className="flex gap-4">
                     <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-xl shrink-0">🛡️</div>
                     <div>
                        <p className="font-bold text-xs text-slate-800">Filter Predator</p>
                        <p className="text-[10px] text-slate-500">Mencegah orang luar yang hanya ingin menipu pinjaman masuk ke komunitas.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-xl shrink-0">🤝</div>
                     <div>
                        <p className="font-bold text-xs text-slate-800">Tanggung Renteng Moral</p>
                        <p className="text-[10px] text-slate-500">Saksi akan membantu mengingatkan jika Anda lupa menabung.</p>
                     </div>
                  </li>
               </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl flex flex-col justify-center text-center space-y-4">
               <div className="text-4xl">🤖</div>
               <h5 className="font-bold">Analisis Karakter AI</h5>
               <p className="text-[10px] text-slate-400 italic leading-relaxed">
                  "AI memantau siapa yang menjamin Anda. Jika saksi Anda memiliki reputasi Platinum, skor kredit awal Anda akan 20% lebih tinggi."
               </p>
            </div>
         </div>
      </div>

      {/* Transaction Sequence Flow Summary */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic text-center">Urutan Transaksi Wajib (Aktivasi)</h3>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: 'Akad Pemilik (SP)', n: 'Rp 100.000', d: 'Sekali Seumur Hidup', i: '🏛️' },
              { t: 'Iuran Kemandirian (SW)', n: 'Rp 20.000', d: 'Setiap Bulan', i: '📈' },
              { t: 'Dana Sosial (Daskop)', n: 'Rp 5.000', d: 'Setiap Bulan', i: '🛡️' },
              { t: 'Celengan (Sukarela)', n: 'Bebas', d: 'Kapan Saja', i: '🪙' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl text-center space-y-2 border border-slate-100 group hover:border-indigo-200 transition-all">
                 <div className="text-3xl mb-2">{item.i}</div>
                 <p className="text-[10px] font-black text-slate-400 uppercase">{item.t}</p>
                 <p className="text-lg font-black text-indigo-600">{item.n}</p>
                 <p className="text-[9px] text-slate-400 italic">{item.d}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default VouchingSystem;
