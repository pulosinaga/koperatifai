
import React from 'react';

const StartupPositioning: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Startup Definition: Coop-Tech
          </span>
          <h2 className="text-5xl font-black mt-4 leading-tight">Membangun Startup Rakyat.</h2>
          <p className="text-indigo-100 mt-4 text-xl leading-relaxed max-w-2xl">
            KoperatifAI bukan startup yang membakar uang (Burn Rate), tapi startup yang <b>Membangun Uang</b> untuk komunitasnya sendiri.
          </p>
        </div>
      </div>

      {/* Positioning Matrix */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800">Peta Ekosistem Keuangan</h3>
            <p className="text-slate-500">Dimana posisi kita di antara raksasa dan pemain lama?</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
               <div className="text-4xl">🏢</div>
               <h4 className="text-xl font-bold text-slate-800">Bank & Fintech</h4>
               <p className="text-sm text-slate-500 leading-relaxed">Fokus pada <b>Profit Pemilik Saham</b>. Hubungan dingin (Nasabah vs Perusahaan). Biaya admin tinggi.</p>
               <div className="pt-4 border-t border-slate-200">
                  <span className="text-[10px] font-black text-rose-500 uppercase">Profit-Driven</span>
               </div>
            </div>

            <div className="p-10 bg-indigo-900 rounded-[3rem] text-white space-y-6 shadow-2xl scale-105 ring-8 ring-indigo-50 relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-[10px] font-black">BLUE OCEAN</div>
               <div className="text-4xl">◈</div>
               <h4 className="text-xl font-bold">KoperatifAI</h4>
               <p className="text-sm text-indigo-100 leading-relaxed">Fokus pada <b>Kesejahteraan Anggota</b>. Hubungan hangat (Solidaritas). Biaya nol karena AI.</p>
               <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-black text-emerald-400 uppercase">Impact-Driven Startup</span>
               </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
               <div className="text-4xl">🏛️</div>
               <h4 className="text-xl font-bold text-slate-800">Koperasi Tradisional</h4>
               <p className="text-sm text-slate-500 leading-relaxed">Fokus pada <b>Sosial Manual</b>. Hubungan hangat tapi birokrasi lambat dan rawan korupsi manual.</p>
               <div className="pt-4 border-t border-slate-200">
                  <span className="text-[10px] font-black text-amber-600 uppercase">Social-Driven (Analog)</span>
               </div>
            </div>
         </div>
      </div>

      {/* Why This is Spectactular */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Inovasi Fundamental Kita</h3>
            <div className="space-y-4">
               {[
                 { t: 'Demokratisasi Teknologi', d: 'Membawa teknologi level bank ke rakyat kecil dengan harga iuran kopi.', icon: '⚡' },
                 { t: 'Automasi Kejujuran', d: 'Korupsi dicegah oleh algoritma, bukan hanya janji pengurus.', icon: '🛡️' },
                 { t: 'Pertumbuhan Tanpa Batas', d: 'Sistem digital memungkinkan 1 juta anggota bergabung tanpa bangun gedung.', icon: '📈' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white transition-all">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{item.t}</p>
                       <p className="text-[10px] text-slate-500 mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-emerald-600 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8">
            <div className="text-6xl text-center">🇮🇩</div>
            <h3 className="text-3xl font-black leading-tight italic text-center">"Kita Adalah Solusi Ekonomi Pancasila Versi 4.0."</h3>
            <p className="text-emerald-100 text-sm leading-relaxed text-center px-6">
               Indonesia butuh startup yang tidak hanya memikirkan "Exit Strategy" atau IPO, tapi startup yang memikirkan bagaimana tukang bakso, petani, dan guru honorer bisa punya aset bersama.
            </p>
            <div className="flex justify-center gap-4">
               <div className="px-6 py-2 bg-white/20 rounded-full text-[10px] font-black uppercase border border-white/30">100% Karya Anak Bangsa</div>
            </div>
         </div>
      </div>

      {/* Monetization Model */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-12">
         <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-black text-slate-800">Bagaimana Startup Ini "Menghasilkan"?</h3>
            <p className="text-slate-500 leading-relaxed">
               Sebagai startup, KoperatifAI mengambil pendapatan dari **Spread Jasa Pinjaman** yang dikelola sangat efisien. 
               Karena biaya operasional kita rendah (berkat AI), selisih bunga yang biasanya habis untuk gaji karyawan bank, di sini menjadi laba bersih yang sebagian besar dikembalikan ke anggota (SHU) dan sebagian kecil untuk pengembangan teknologi.
            </p>
            <div className="flex gap-4">
               <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Revenue Source</p>
                  <p className="text-sm font-bold">Adil & Transparan</p>
               </div>
               <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Scalability</p>
                  <p className="text-sm font-bold">Global Potential</p>
               </div>
            </div>
         </div>
         <div className="w-full lg:w-80 aspect-square bg-slate-900 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center space-y-4">
            <div className="text-5xl">🦄</div>
            <p className="text-indigo-400 font-bold text-lg">Social Unicorn</p>
            <p className="text-slate-500 text-[10px] uppercase leading-tight">Startup dengan 1 Juta Pemilik, Bukan 1 Pemilik.</p>
         </div>
      </div>
    </div>
  );
};

export default StartupPositioning;
