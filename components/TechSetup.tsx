
import React from 'react';

const TechSetup: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl shadow-xl">⚙️</div>
              <div>
                 <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                   Technical Implementation Guide
                 </span>
                 <h2 className="text-4xl font-black leading-tight italic mt-2">Integrasi API & Arsitektur Data.</h2>
              </div>
           </div>
           <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Halaman ini adalah panduan strategis untuk menghubungkan **KoperatifAI** ke perbankan riil dan menyiapkan database yang aman.
           </p>
        </div>
      </div>

      {/* Section 1: API Keys Management */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-slate-800 italic">1. Melengkapi API KEY Bank Mitra</h3>
               <p className="text-slate-500 leading-relaxed">
                  Jangan pernah meletakkan API KEY langsung di kode aplikasi (Frontend). Itu sangat berbahaya. Gunakan arsitektur **Backend Proxy**.
               </p>
               
               <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                     <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-3">Langkah Integrasi:</p>
                     <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex gap-3">
                           <span className="font-black text-indigo-600">01</span>
                           <span>Daftar di Portal Developer Bank (Mandiri, BCA, atau BRI) yang mendukung standar **SNAP (Standard National Open API)** Indonesia.</span>
                        </li>
                        <li className="flex gap-3">
                           <span className="font-black text-indigo-600">02</span>
                           <span>Buat **Environment Variables (.env)** di Server Backend Anda untuk menyimpan `CLIENT_ID` dan `CLIENT_SECRET`.</span>
                        </li>
                        <li className="flex gap-3">
                           <span className="font-black text-indigo-600">03</span>
                           <span>Implementasikan protokol **OAuth 2.0** untuk mendapatkan Access Token setiap kali aplikasi melakukan transaksi.</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-80 bg-indigo-950 rounded-[3rem] p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h4 className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Alur Keamanan API</h4>
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">📱</div>
                     <p className="text-[10px] text-slate-400">Mobile App (No Keys)</p>
                  </div>
                  <div className="w-px h-4 bg-white/20 mx-4"></div>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs">🛡️</div>
                     <p className="text-[10px] font-bold">API Gateway (Server)</p>
                  </div>
                  <div className="w-px h-4 bg-white/20 mx-4"></div>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs">🏦</div>
                     <p className="text-[10px] text-slate-400">Bank Partner System</p>
                  </div>
               </div>
               <p className="text-[9px] text-indigo-300 italic border-t border-white/10 pt-4">"Keys tetap aman di server, hanya token sementara yang ada di HP."</p>
            </div>
         </div>
      </div>

      {/* Section 2: Database Preparation */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-slate-800 italic">2. Persiapan Database Masa Depan</h3>
               <p className="text-slate-500 leading-relaxed">
                  Gunakan strategi **Hybrid Database** untuk menyeimbangkan antara Akurasi Keuangan dan Kecepatan AI.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                     <h5 className="font-black text-emerald-800 text-sm uppercase">Relational (SQL)</h5>
                     <p className="text-[10px] text-emerald-600 mt-1">Tools: PostgreSQL</p>
                     <p className="text-xs text-slate-600 mt-3">Digunakan untuk **Ledger & Akuntansi**. Wajib karena mendukung ACID compliance agar saldo tidak pernah salah hitung.</p>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                     <h5 className="font-black text-indigo-800 text-sm uppercase">NoSQL / Document</h5>
                     <p className="text-[10px] text-indigo-600 mt-1">Tools: Redis / MongoDB</p>
                     <p className="text-xs text-slate-600 mt-3">Digunakan untuk **Chat AI, Log Aktivitas, & Marketplace**. Sangat cepat untuk menangani jutaan data tidak terstruktur.</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-96 space-y-4">
               <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-xl">
                  <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                     <span className="text-2xl">📊</span> Arsitektur Data 10M+ Anggota
                  </h4>
                  <div className="space-y-4">
                     {[
                        { t: 'Encryption at Rest', d: 'AES-256 untuk semua saldo.' },
                        { t: 'Database Sharding', d: 'Pisahkan data per wilayah geografis.' },
                        { t: 'Point-in-Time Recovery', d: 'Bisa mengembalikan data ke detik tertentu.' }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-3">
                           <span className="text-emerald-500">✓</span>
                           <div>
                              <p className="text-xs font-bold">{item.t}</p>
                              <p className="text-[9px] text-slate-500">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Section 3: Recommendation Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-indigo-600 p-10 rounded-[3rem] text-white space-y-6 shadow-xl">
            <h3 className="text-2xl font-black">Rekomendasi Hosting</h3>
            <p className="text-indigo-100 text-sm leading-relaxed">Pilihlah cloud provider yang memiliki **Region Indonesia** (Jakarta) untuk mematuhi regulasi data nasional.</p>
            <div className="flex flex-wrap gap-2">
               {['Google Cloud (GCP)', 'AWS Jakarta', 'Alibaba Cloud'].map(c => (
                 <span key={c} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/20">{c}</span>
               ))}
            </div>
         </div>
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center space-y-4">
            <div className="text-5xl">⚡</div>
            <h4 className="text-xl font-bold text-slate-800">Mulai Dengan "Supabase"</h4>
            <p className="text-xs text-slate-500">Untuk tahap MVP/Pionir, saya merekomendasikan **Supabase**. Ini adalah database PostgreSQL instan yang sangat cepat untuk dibangun dan sudah memiliki fitur keamanan terintegrasi.</p>
            <button className="text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:underline">Pelajari Dokumentasi Supabase →</button>
         </div>
      </div>

      {/* Final Action Callout */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl">🛡️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Keamanan adalah Fondasi Kepercayaan."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Dalam dunia perbankan digital, satu celah kecil bisa menghancurkan reputasi selamanya. Pastikan integrasi API dan Database Anda dilakukan oleh ahli **Cybersecurity**. KoperatifAI siap menjadi sistem yang paling aman untuk anggota Anda.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Generate API Proxy Template</button>
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Hubungkan Tim IT Saya</button>
         </div>
      </div>
    </div>
  );
};

export default TechSetup;
