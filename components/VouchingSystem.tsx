
import React, { useState } from 'react';

const VouchingSystem: React.FC = () => {
  const [vouchCount, setVouchCount] = useState(6); // Anggota sudah punya 6 penjamin
  const [isRequesting, setIsRequesting] = useState(false);

  const handleRequestVouch = () => {
    setIsRequesting(true);
    setTimeout(() => {
      alert("Link permintaan jaminan telah dikirim ke grup WhatsApp Komunitas!");
      setIsRequesting(false);
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Social Collateral Protocol v5.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Lingkaran Sepuluh: <br/>Ubah Nama Baik Jadi Modal Usaha.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Di KoperatifAI, jaminan Anda bukan surat tanah, tapi **Kepercayaan Tetangga**. Dapatkan 10 penjamin untuk membuka limit modal maksimal.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Kekuatan Jaminan Sosial</div>
             <p className="text-6xl font-black text-emerald-400 mt-2 italic">{vouchCount}<span className="text-2xl text-slate-500">/10</span></p>
             <div className="mt-6 flex justify-center -space-x-3">
                {[...Array(vouchCount)].map((_, i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-indigo-600 flex items-center justify-center text-[10px] shadow-lg">👤</div>
                ))}
                {[...Array(10 - vouchCount)].map((_, i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-dashed border-slate-700 bg-slate-800 flex items-center justify-center text-[10px] opacity-40">?</div>
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Misi: Lengkapi 10 Penjamin</h3>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Setiap orang yang menjamin Anda, memberikan jaminan moral bahwa Anda adalah pribadi yang jujur dan disiplin."</p>
            
            <div className="space-y-4">
               <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 flex justify-between items-center group hover:bg-white transition-all cursor-default">
                  <div>
                     <p className="text-[10px] font-black text-indigo-600 uppercase">Limit Terbuka Saat Ini</p>
                     <p className="text-2xl font-black text-slate-800">Rp 4.500.000</p>
                  </div>
                  <span className="text-2xl opacity-30 group-hover:opacity-100 transition-opacity">🔓</span>
               </div>
               <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex justify-between items-center opacity-50">
                  <div>
                     <p className="text-[10px] font-black text-emerald-600 uppercase">Target (10 Penjamin)</p>
                     <p className="text-2xl font-black text-slate-800">Rp 15.000.000</p>
                  </div>
                  <span className="text-2xl">🔒</span>
               </div>
            </div>

            <button 
              onClick={handleRequestVouch}
              disabled={isRequesting}
              className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 active:scale-95"
            >
               {isRequesting ? '🌀 MENGIRIM PERMINTAAN...' : '📢 AJAK TETANGGA MENJAMIN'}
            </button>
         </div>

         <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white flex flex-col justify-center space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-black italic text-indigo-400 uppercase tracking-widest">Kenapa Jaminan Sosial Aman?</h3>
            <div className="space-y-6">
               {[
                 { t: 'Tanggung Renteng Digital', d: 'Jika Anda gagal bayar, 10 penjamin Anda akan mendapatkan notifikasi untuk membantu pendampingan.', i: '⚖️' },
                 { t: 'Integritas Kolektif', d: 'Sistem hanya menerima penjamin yang memiliki skor reputasi AI di atas 800.', i: '🛡️' },
                 { t: 'Tanpa Biaya Appraisal', d: 'Tidak perlu bayar petugas bank untuk cek rumah. AI dan Komunitas yang memvalidasi Anda.', i: '🤖' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start">
                    <span className="text-2xl">{item.i}</span>
                    <div>
                       <h5 className="font-bold text-sm">{item.t}</h5>
                       <p className="text-[10px] text-slate-400 leading-relaxed mt-1 italic">"{item.d}"</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default VouchingSystem;
