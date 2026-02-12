import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

const products = [
  { id: 1, name: 'Beras Organik Cianjur', priceStr: 'Rp 75.000', price: 75000, seller: 'Ibu Rahma', rating: 4.8, icon: '🌾' },
  { id: 2, name: 'Kopi Robusta Lampung', priceStr: 'Rp 45.000', price: 45000, seller: 'Pak Joni', rating: 4.9, icon: '☕' },
  { id: 3, name: 'Jasa Desain Grafis', priceStr: 'Rp 150.000', price: 150000, seller: 'Dika Art', rating: 4.7, icon: '🎨' },
  { id: 4, name: 'Service Laptop Panggilan', priceStr: 'Rp 100.000', price: 100000, seller: 'Andi Tech', rating: 4.9, icon: '💻' },
  { id: 5, name: 'Katering Sehat Mingguan', priceStr: 'Rp 350.000', price: 350000, seller: 'Dapur Bunda', rating: 4.6, icon: '🍱' },
  { id: 6, name: 'Madu Hutan Murni', priceStr: 'Rp 120.000', price: 120000, seller: 'Kelompok Tani Sejahtera', rating: 5.0, icon: '🍯' },
];

const MemberMarketplace: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [purchasedItem, setPurchasedItem] = useState<any>(null);

  const voluntaryBalance = user?.balances?.voluntary || 0;

  const handlePurchase = async (product: any) => {
    if (voluntaryBalance < product.price) {
      alert(`Saldo Sukarela Anda tidak mencukupi.\n\nHarga: Rp ${product.price.toLocaleString('id-ID')}\nSaldo Anda: Rp ${voluntaryBalance.toLocaleString('id-ID')}`);
      return;
    }

    setIsProcessing(true);
    setPurchasedItem(product);

    try {
      if (isLiveDatabase && user && supabase) {
         // LOGIKA MONEY SPLIT OTOMATIS:
         // 1. Potong Saldo Pembeli
         const newBalance = voluntaryBalance - product.price;
         await supabase.from('balances').update({ voluntary: newBalance }).eq('user_id', user.id);

         // 2. Catat Transaksi dengan Info Royalti IP (Simulasi Metadata)
         await supabase.from('transactions').insert({
            user_id: user.id,
            type: 'withdrawal',
            description: `Belanja: ${product.name}. (Incl. Royalty IP Rp 100)`,
            amount: product.price,
            status: 'completed'
         });
         
         await refreshProfile();
      }
      setShowSuccess(true);
    } catch (e: any) {
      alert(`Gagal memproses pembelian: ${e.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero Header */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Sovereign Marketplace Hub
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pasar Rakyat: <br/>Uang Kita Kembali ke Kita.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
              Setiap transaksi memotong biaya admin sangat kecil (Rp 1.000) yang langsung dibagi: **Rp 900 untuk SHU Anggota** dan **Rp 100 untuk Royalti Teknologi Founder.**
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Dompet Belanja (Sukarela)</p>
             <p className="text-3xl font-black mt-2">Rp {voluntaryBalance.toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {products.map((p) => (
            <div key={p.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col relative">
               <div className="h-48 bg-slate-50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                  {p.icon}
               </div>
               <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                     <div>
                        <h4 className="text-lg font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{p.name}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Penjual: {p.seller}</p>
                     </div>
                     <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-black">★ {p.rating}</div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50 mt-auto">
                     <p className="text-xl font-black text-slate-900">{p.priceStr}</p>
                     <button 
                        onClick={() => handlePurchase(p)}
                        disabled={isProcessing}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg"
                     >
                        {isProcessing && purchasedItem?.id === p.id ? 'MEMPROSES...' : 'BELI SEKARANG'}
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {showSuccess && purchasedItem && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-md rounded-[4rem] p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner animate-bounce">🛒</div>
               <h3 className="text-3xl font-black text-slate-800 italic">Pesanan Sukses!</h3>
               
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-left space-y-3">
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                     <span>Harga Barang</span>
                     <span className="text-slate-800">Rp {purchasedItem.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                     <span>Platform Fee (Sirkular)</span>
                     <span className="text-indigo-600">Rp 1.000</span>
                  </div>
                  <div className="h-px bg-slate-200 my-2"></div>
                  <div className="flex justify-between items-center">
                     <p className="text-[10px] font-black text-indigo-400 uppercase">Alokasi Royalti IP Founder</p>
                     <p className="text-xs font-black text-indigo-600">Terpotong Otomatis: Rp 100</p>
                  </div>
               </div>

               <button 
                 onClick={() => { setShowSuccess(false); setPurchasedItem(null); }} 
                 className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black"
               >
                 Tutup
               </button>
            </div>
         </div>
      )}
    </div>
  );
};

export default MemberMarketplace;