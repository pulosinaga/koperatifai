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
         // 1. Potong saldo pembeli
         const newBalance = voluntaryBalance - product.price;
         const { error: balError } = await supabase
            .from('balances')
            .update({ voluntary: newBalance })
            .eq('user_id', user.id);
            
         if (balError) throw new Error("Gagal memotong saldo Anda.");

         // 2. Catat transaksi sebagai pengeluaran belanja
         const { error: txError } = await supabase
            .from('transactions')
            .insert({
               user_id: user.id,
               type: 'withdrawal',
               description: `Belanja Pasar: ${product.name} (Toko ${product.seller})`,
               amount: product.price,
               status: 'completed'
            });
            
         if (txError) throw new Error("Gagal mencatat mutasi.");

         // 3. Refresh UI
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
              Circular Economy Hub
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pasar Koperasi: <br/>Dari Kita, Untuk Kita.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
              Gunakan **Saldo Sukarela** Anda untuk belanja produk anggota. Uang yang berputar di dalam komunitas adalah pupuk bagi kesejahteraan lokal.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Daya Beli Anda (Saldo Sukarela)</p>
             <p className="text-3xl font-black mt-2">Rp {voluntaryBalance.toLocaleString('id-ID')}</p>
             <div className="mt-6 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-[9px] text-emerald-400 mt-1 uppercase font-bold italic">Siap Digunakan Berbelanja</span>
             </div>
          </div>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0">🤖</div>
         <div className="flex-1">
            <h4 className="text-lg font-bold text-indigo-900 italic">"Saran Belanja AI Hari Ini:"</h4>
            <p className="text-indigo-700/70 text-sm">
               Saldo Sukarela Anda cukup untuk membeli kebutuhan bulanan. Dengan berbelanja di Pasar Rakyat, Anda menyumbang **estimasi Rp 1.500 ke kas SHU**, yang akan kembali ke kantong Anda di akhir tahun.
            </p>
         </div>
      </div>

      {/* Marketplace Grid */}
      <div className="space-y-8">
         <div className="flex justify-between items-center">
            <h3 className="text-2xl font-black text-slate-800 italic">Produk Unggulan Anggota</h3>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">Semua Kategori</button>
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
                           <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Oleh: {p.seller}</p>
                        </div>
                        <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-black">
                           ★ {p.rating}
                        </div>
                     </div>
                     <div className="flex justify-between items-center pt-4 border-t border-slate-50 mt-auto">
                        <p className="text-xl font-black text-slate-900">{p.priceStr}</p>
                        <button 
                          onClick={() => handlePurchase(p)}
                          disabled={isProcessing}
                          className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-100 active:scale-95 disabled:opacity-50"
                        >
                          {isProcessing && purchasedItem?.id === p.id ? 'MEMPROSES...' : 'BELI SEKARANG'}
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Success Checkout Modal */}
      {showSuccess && purchasedItem && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-md rounded-[4rem] p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner animate-bounce">🛒</div>
               <div>
                  <h3 className="text-3xl font-black text-slate-800 italic">Pembayaran Berhasil!</h3>
                  <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    Pesanan <b>{purchasedItem.name}</b> sedang diteruskan ke Toko {purchasedItem.seller}.
                  </p>
               </div>
               
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-left space-y-3">
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                     <span>Potong Saldo Sukarela</span>
                     <span className="text-rose-600">- Rp {purchasedItem.price.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase border-b border-slate-200 pb-3">
                     <span>Platform Fee (Masuk SHU)</span>
                     <span className="text-emerald-600">+ Rp 500</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                     <p className="text-[10px] font-black uppercase text-slate-400">Sisa Saldo Anda</p>
                     <p className="text-lg font-black text-indigo-900">Rp {(voluntaryBalance - purchasedItem.price).toLocaleString('id-ID')}</p>
                  </div>
               </div>

               <button 
                 onClick={() => { setShowSuccess(false); setPurchasedItem(null); }} 
                 className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all"
               >
                 Tutup & Lanjut Belanja
               </button>
            </div>
         </div>
      )}

      {/* Monetization Explanation for Founder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-black italic text-emerald-400">Keajaiban Uang yang Tertutup</h3>
            <div className="space-y-4">
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl">💸</div>
                  <div>
                     <h5 className="font-bold">Tanpa Kebocoran (Zero Capital Flight)</h5>
                     <p className="text-xs text-slate-400 mt-1">Uang Rp 75.000 hanya berpindah dari row database Anda ke row database Ibu Rahma. Tidak ada biaya RTGS/BI-Fast yang dibayar ke bank luar.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl">📈</div>
                  <div>
                     <h5 className="font-bold">Velocity of Money</h5>
                     <p className="text-xs text-slate-400 mt-1">Semakin sering anggota belanja di sini, nilai ekonomi ekosistem meningkat, mendongkrak valuasi KoperatifAI di mata investor.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl mx-auto">📣</div>
            <h4 className="text-2xl font-black text-slate-800">"Setiap Transaksi Adalah Dividen."</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
               Shopee/Tokopedia memotong biaya admin untuk memperkaya diri mereka sendiri. KoperatifAI memotong biaya admin kecil untuk memperkaya **Anda (lewat SHU)**.
            </p>
         </div>
      </div>
    </div>
  );
};

export default MemberMarketplace;