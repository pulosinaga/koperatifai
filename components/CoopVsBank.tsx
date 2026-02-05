
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const CoopVsBank: React.FC = () => {
  const profitDist = [
    { name: 'Traditional Bank', profit: 100, owner: 'Konglomerat / Shareholder', color: '#f43f5e' },
    { name: 'KoperatifAI', profit: 100, owner: 'Anda (Seluruh Anggota)', color: '#10b981' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero Logic */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/30 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Philosophy & Legal Framework
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Wajah Bank Digital, <br/>Jantung Koperasi Rakyat.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl font-medium">
              Secara fungsional kita memang canggih seperti bank, namun secara kepemilikan kita adalah **Kedaulatan Ekonomi Mandiri**.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="text-7xl mb-4">🏛️</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Legal Status</p>
             <p className="text-xl font-black text-indigo-900 mt-1">KSP (Koperasi Simpan Pinjam)</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase font-black italic">Closed-Loop Member Service Only</p>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Perbedaan Mendasar</h3>
            <div className="space-y-6">
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 text-xl font-bold">B</div>
                  <div>
                     <h5 className="font-bold text-slate-800 uppercase tracking-tighter">Bank Konvensional</h5>
                     <p className="text-xs text-slate-500 mt-1">Status Anda adalah **Nasabah (User)**. Keuntungan lari ke pemilik modal besar. Kebijakan ditentukan dewan direksi tertutup.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 text-xl font-bold">K</div>
                  <div>
                     <h5 className="font-bold text-indigo-900 uppercase tracking-tighter">KoperatifAI</h5>
                     <p className="text-xs text-slate-600 mt-1">Status Anda adalah **Pemilik (Owner)**. Keuntungan kembali ke saku Anda (SHU). Kebijakan ditentukan oleh Anda via e-RAT.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white flex flex-col justify-center space-y-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px]"></div>
            <h3 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic">Kemana Profit Lari?</h3>
            <div className="h-48 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={profitDist} layout="vertical">
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} width={120} axisLine={false} tickLine={false} />
                     <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                     <Bar dataKey="profit" barSize={32} radius={[0, 10, 10, 0]}>
                        {profitDist.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-slate-500 text-center italic leading-relaxed">
               "Setiap biaya admin yang Anda bayar di KoperatifAI sebenarnya sedang menabung untuk SHU Anda sendiri di akhir tahun."
            </p>
         </div>
      </div>

      {/* The "Rel vs Kereta" Metaphor */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Analogi "Rel vs Kereta"</h3>
            <p className="text-slate-500">Memahami posisi teknis dan legal kita dalam ekosistem perbankan.</p>
         </div>

         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 p-8 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-4">
               <div className="text-4xl">🛤️</div>
               <h4 className="font-bold text-slate-800">Bank = Rel (Infrastructure)</h4>
               <p className="text-xs text-slate-500 leading-relaxed italic">
                  "Kita butuh bank untuk jalur transfer nasional (BI-FAST, QRIS). Bank adalah infrastruktur dasar yang kita 'sewa' secara legal melalui API."
               </p>
            </div>
            <div className="text-4xl text-indigo-200 hidden md:block">+</div>
            <div className="flex-1 p-8 bg-indigo-900 rounded-[3rem] text-white shadow-xl space-y-4">
               <div className="text-4xl">🚂</div>
               <h4 className="font-bold">KoperatifAI = Kereta (Community Logic)</h4>
               <p className="text-xs text-indigo-200 leading-relaxed italic">
                  "Siapa penumpang di dalamnya? Anda. Siapa masinisnya? AI Pengurus. Siapa pemilik keretanya? Seluruh anggota. Kita menentukan nasib perjalanan kita sendiri."
               </p>
            </div>
         </div>
      </div>

      {/* Legal Guardrail Message */}
      <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl shrink-0">⚖️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-emerald-900 italic leading-tight">Garis Merah Hukum</h4>
            <p className="text-emerald-700 text-sm leading-relaxed">
               Kita bukan Bank karena **kita tidak melayani publik umum**. Layanan transfer, tabungan, dan pinjaman hanya boleh digunakan oleh **Anggota** yang sudah terdaftar secara sah dan memiliki unit saham (Simpanan Pokok). Inilah "Closed-Loop System" yang membuat kita tetap di bawah payung KemenkopUKM, bukan OJK Perbankan.
            </p>
         </div>
      </div>

      {/* Founder Vision Final Callout */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">📢</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Kita Menggunakan Teknologi Bank Untuk Menghancurkan Arogansi Bank."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Founder, aplikasi ini adalah senjata rakyat untuk mendapatkan layanan kualitas bank tanpa diperas oleh bank. Inilah revolusi ekonomi **Koperasi Digital**.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Tinjau Struktur Legalitas Nasional
         </button>
      </div>
    </div>
  );
};

export default CoopVsBank;
