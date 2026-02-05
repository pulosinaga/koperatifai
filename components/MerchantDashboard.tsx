
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const salesData = [
  { day: 'Sen', sales: 450000 },
  { day: 'Sel', sales: 300000 },
  { day: 'Rab', sales: 600000 },
  { day: 'Kam', sales: 850000 },
  { day: 'Jum', sales: 1200000 },
  { day: 'Sab', sales: 950000 },
  { day: 'Min', sales: 1500000 },
];

const COLORS = ['#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b', '#1e1b4b'];

const MerchantDashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Merchant Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Merchant Command Center
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Toko Anda, <br/>Kejayaan Komunitas.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kelola stok, pantau pesanan, dan gunakan asisten AI untuk memprediksi kebutuhan anggota KoperatifAI.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-5xl mb-4">🏪</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Saldo Penjualan</p>
             <p className="text-3xl font-black text-emerald-400 mt-1">Rp 4.250.000</p>
             <div className="flex flex-col gap-2 mt-4">
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all">Tarik Ke Tabungan</button>
                <button className="px-6 py-2 bg-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-all">Buka QRIS Toko</button>
             </div>
          </div>
        </div>
      </div>

      {/* AI Business Advisor for Merchants */}
      <div className="p-10 bg-indigo-50 rounded-[3.5rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-10 shadow-sm">
         <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-5xl shadow-sm shrink-0">🤖</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-xl font-bold text-indigo-900 italic">"Analisis AI Koperasi Untuk Toko Anda:"</h4>
            <p className="text-indigo-700/70 text-sm leading-relaxed">
               Berdasarkan data komunitas, ada 42 anggota yang sedang mencari **Beras Organik** minggu ini. Stok Anda tinggal 5 karung. AI menyarankan Anda untuk segera mengambil modal **Pinjaman Mikro (0.9%)** guna menyetok 50 karung lagi sebelum musim panen berakhir.
            </p>
            <div className="flex gap-4 mt-4">
               <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Ambil Stok Sekarang</button>
               <button className="px-5 py-2 bg-white text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-indigo-100">Buka Chat AI Detil</button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Sales Chart */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
               <h3 className="text-xl font-black text-slate-800">Performa Penjualan Mingguan</h3>
               <span className="text-[10px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-1 rounded-lg">↑ 14% dari minggu lalu</span>
            </div>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                     <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                     <YAxis hide />
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                        cursor={{ fill: '#f8fafc', radius: 12 }}
                     />
                     <Bar dataKey="sales" radius={[10, 10, 10, 10]} barSize={40}>
                        {salesData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Quick Metrics */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-[3rem] text-white flex flex-col justify-center space-y-2 border-b-4 border-indigo-500">
               <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Total Pesanan Bulan Ini</p>
               <h4 className="text-3xl font-black">124</h4>
               <p className="text-xs text-slate-500">Terbanyak: Beras Organik</p>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-2">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ulasan Anggota</p>
               <div className="flex items-center gap-2">
                  <h4 className="text-3xl font-black text-slate-800">4.9</h4>
                  <div className="text-amber-400 text-xl">★★★★★</div>
               </div>
               <p className="text-xs text-slate-500 italic">"Produk Ibu Rahma sangat segar!"</p>
            </div>
         </div>
      </div>

      {/* Inventory & Orders Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Manajemen Stok AI</h3>
               <button className="text-xs font-bold text-indigo-600 hover:underline">+ Produk Baru</button>
            </div>
            <div className="space-y-4">
               {[
                  { name: 'Beras Organik Cianjur', stock: 5, unit: 'karung', status: 'CRITICAL', color: 'text-rose-600 bg-rose-50' },
                  { name: 'Madu Hutan Murni', stock: 24, unit: 'botol', status: 'HEALTHY', color: 'text-emerald-600 bg-emerald-50' },
                  { name: 'Kopi Robusta Lampung', stock: 12, unit: 'kg', status: 'WARNING', color: 'text-amber-600 bg-amber-50' },
               ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                     <div>
                        <h5 className="font-bold text-slate-800">{item.name}</h5>
                        <p className="text-xs text-slate-400">{item.stock} {item.unit} tersisa</p>
                     </div>
                     <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${item.color}`}>
                        {item.status}
                     </span>
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Pesanan Masuk</h3>
               <button className="text-xs font-bold text-indigo-600 hover:underline">Lihat Semua</button>
            </div>
            <div className="space-y-4">
               {[
                  { id: '#ORD-9921', buyer: 'Bpk. Ahmad (ID: 002)', total: 'Rp 150.000', time: '10 Menit lalu' },
                  { id: '#ORD-9918', buyer: 'Ibu Siti (ID: 045)', total: 'Rp 45.000', time: '2 Jam lalu' },
                  { id: '#ORD-9915', buyer: 'Andi (ID: 102)', total: 'Rp 350.000', time: '5 Jam lalu' },
               ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                     <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">📦</div>
                        <div>
                           <h5 className="font-bold text-slate-800 text-sm">{item.id} - {item.buyer}</h5>
                           <p className="text-[10px] text-slate-400 uppercase">{item.time}</p>
                        </div>
                     </div>
                     <p className="font-black text-slate-800 text-sm">{item.total}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Founder Motivation */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl">💰</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Merchant Sukses, Koperasi Kuat."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Setiap transaksi yang Anda lakukan di platform ini memperkuat **SHU Kolektif**. Anda tidak hanya berbisnis untuk diri sendiri, tapi Anda sedang memutar roda ekonomi rakyat Indonesia.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl">Promosikan Toko Saya via AI</button>
         </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
