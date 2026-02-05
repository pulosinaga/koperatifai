
import React from 'react';

const products = [
  { id: 1, name: 'Beras Organik Cianjur', price: 'Rp 75.000', seller: 'Ibu Rahma', rating: 4.8, icon: '🌾' },
  { id: 2, name: 'Kopi Robusta Lampung', price: 'Rp 45.000', seller: 'Pak Joni', rating: 4.9, icon: '☕' },
  { id: 3, name: 'Jasa Desain Grafis', price: 'Rp 150.000', seller: 'Dika Art', rating: 4.7, icon: '🎨' },
  { id: 4, name: 'Service Laptop Panggilan', price: 'Rp 100.000', seller: 'Andi Tech', rating: 4.9, icon: '💻' },
  { id: 5, name: 'Katering Sehat Mingguan', price: 'Rp 350.000', seller: 'Dapur Bunda', rating: 4.6, icon: '🍱' },
  { id: 6, name: 'Madu Hutan Murni', price: 'Rp 120.000', seller: 'Kelompok Tani Sejahtera', rating: 5.0, icon: '🍯' },
];

const MemberMarketplace: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Header */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Circular Economy Hub
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pasar Koperasi: <br/>Dari Kita, Untuk Kita.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
              Gunakan **Saldo Sukarela** Anda untuk belanja produk anggota. Tanpa biaya admin bank, tanpa perantara kapitalis.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center">
             <div className="text-6xl mb-4">🛒</div>
             <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Transaction Volume</p>
             <p className="text-2xl font-black">Rp 1.2M / day</p>
             <p className="text-[9px] text-emerald-400 mt-1 uppercase font-bold italic">Circular Multiplier: 4.2x</p>
          </div>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0">🤖</div>
         <div className="flex-1">
            <h4 className="text-lg font-bold text-indigo-900 italic">"Berdasarkan profil Anda, Budi..."</h4>
            <p className="text-indigo-700/70 text-sm">
               AI mendeteksi Anda sedang merenovasi rumah. Anggota **Pak Slamet** baru saja memposting jasa Tukang Profesional dengan diskon 10% untuk sesama pemegang Sertifikat Saham KoperatifAI.
            </p>
         </div>
         <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">Lihat Penawaran</button>
      </div>

      {/* Marketplace Grid */}
      <div className="space-y-8">
         <div className="flex justify-between items-center">
            <h3 className="text-2xl font-black text-slate-800 italic">Produk Unggulan Anggota</h3>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">Semua Kategori</button>
               <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">Terdekat</button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
               <div key={p.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                  <div className="h-48 bg-slate-50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                     {p.icon}
                  </div>
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                     <div className="flex justify-between items-start">
                        <div>
                           <h4 className="text-lg font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{p.name}</h4>
                           <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Oleh: {p.seller}</p>
                        </div>
                        <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-black">
                           ★ {p.rating}
                        </div>
                     </div>
                     <div className="flex justify-between items-center pt-4 border-t border-slate-50 mt-auto">
                        <p className="text-xl font-black text-slate-900">{p.price}</p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-100">Beli Sekarang</button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Monetization Explanation for Founder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-black italic text-emerald-400">Bagaimana Ini Menghasilkan Uang?</h3>
            <div className="space-y-4">
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl">💸</div>
                  <div>
                     <h5 className="font-bold">Digital Platform Fee</h5>
                     <p className="text-xs text-slate-400">Setiap transaksi dipotong Rp 1.000 untuk kas koperasi. Dengan 1.000 transaksi/hari, Anda mendapatkan Rp 30jt/bulan pendapatan pasif.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl">📈</div>
                  <div>
                     <h5 className="font-bold">Meningkatkan Keaktifan Saldo</h5>
                     <p className="text-xs text-slate-400">Uang tidak mengendap. Putaran uang yang cepat di marketplace meningkatkan nilai ekonomi ekosistem Anda di mata investor.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl mx-auto">📣</div>
            <h4 className="text-2xl font-black text-slate-800">"Koperasi Bukan Cuma Uang, Tapi Pasar Rakyat."</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
               Saat anggota bisa menjual dagangannya melalui aplikasi Anda, mereka tidak akan pernah berpindah ke bank lain. Ini adalah **Ultimate Retention Strategy**.
            </p>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl">Posting Produk Saya</button>
         </div>
      </div>
    </div>
  );
};

export default MemberMarketplace;
