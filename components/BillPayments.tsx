import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { UserRole } from '../types.ts';

const BillPayments: React.FC = () => {
  const { user } = useAppContext();
  const isFounder = user?.role === UserRole.FOUNDER;
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [coopDailyRevenue, setCoopDailyRevenue] = useState(145500); // Simulasi pendapatan admin hari ini
  const [transactionCount, setTransactionCount] = useState(84);

  const billTypes = [
    { id: 'pulsa', label: 'Pulsa & Data', icon: '📱', marketFee: 'Rp 2.000', ourFee: 'Rp 1.000', ourFeeNum: 1000, bonus: '300', color: 'bg-emerald-50 text-emerald-600' },
    { id: 'pln', label: 'PLN Token', icon: '⚡', marketFee: 'Rp 3.000', ourFee: 'Rp 1.500', ourFeeNum: 1500, bonus: '500', color: 'bg-amber-50 text-amber-600', promo: 'HOT' },
    { id: 'pbb', label: 'Pajak Daerah', icon: '🏛️', marketFee: 'Rp 5.000', ourFee: 'Rp 2.500', ourFeeNum: 2500, bonus: '1000', color: 'bg-slate-100 text-slate-600' },
    { id: 'pdam', label: 'Air PDAM', icon: '💧', marketFee: 'Rp 2.500', ourFee: 'Rp 1.200', ourFeeNum: 1200, bonus: '400', color: 'bg-blue-50 text-blue-600' },
    { id: 'bpjs', label: 'BPJS Kes.', icon: '🏥', marketFee: 'Rp 2.500', ourFee: 'Rp 1.000', ourFeeNum: 1000, bonus: '250', color: 'bg-rose-50 text-rose-600' },
    { id: 'internet', label: 'Internet/TV', icon: '🌐', marketFee: 'Rp 3.000', ourFee: 'Rp 1.500', ourFeeNum: 1500, bonus: '500', color: 'bg-indigo-50 text-indigo-600' },
  ];

  const currentCategory = billTypes.find(x => x.id === selectedCategory);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      
      // Tambahkan keuntungan admin ke kas koperasi
      if (currentCategory) {
         setCoopDailyRevenue(prev => prev + currentCategory.ourFeeNum);
         setTransactionCount(prev => prev + 1);
      }
    }, 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      
      {/* Header Monetisasi */}
      <div className="bg-[#020617] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Cooperative Revenue Engine
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pusat Layanan PPOB. <br/><span className="text-emerald-400">Bayar Murah, Koperasi Untung.</span></h2>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Setiap kali Anda membeli pulsa atau token listrik di sini, biaya admin yang biasanya mengalir ke bank besar kini masuk ke kas koperasi untuk dibagikan kembali sebagai SHU.
            </p>
          </div>
          
          {/* Dashboard Cuan (Hanya tampil mencolok untuk tujuan demonstrasi bisnis) */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/20 text-center shadow-inner relative overflow-hidden">
             <div className="absolute -top-10 -right-10 text-8xl opacity-10">💰</div>
             <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Laba Admin Koperasi Hari Ini</p>
             <p className="text-4xl font-black text-white italic transition-all duration-500" key={coopDailyRevenue}>
               Rp {coopDailyRevenue.toLocaleString('id-ID')}
             </p>
             <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-300 font-bold uppercase">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Dari {transactionCount} Transaksi Anggota
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Categories Grid */}
         <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Pilih Layanan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {billTypes.map((bill) => (
                 <button 
                  key={bill.id}
                  onClick={() => { setSelectedCategory(bill.id); setShowSuccess(false); setInputValue(''); }}
                  className={`p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-6 group relative overflow-hidden ${
                    selectedCategory === bill.id ? 'bg-indigo-600 border-indigo-500 shadow-2xl scale-[1.02]' : 'bg-white border-slate-100 hover:border-indigo-200 hover:shadow-md'
                  }`}
                 >
                    {selectedCategory === bill.id && (
                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    )}
                    {bill.promo && (
                       <span className={`absolute top-4 right-4 px-2 py-0.5 text-[8px] font-black rounded-full shadow-sm uppercase ${selectedCategory === bill.id ? 'bg-white text-indigo-600' : 'bg-rose-500 text-white animate-pulse'}`}>
                          {bill.promo}
                       </span>
                    )}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-all shrink-0 ${
                      selectedCategory === bill.id ? 'bg-white/20 text-white' : bill.color
                    }`}>
                       {bill.icon}
                    </div>
                    <div className="text-left flex-1 relative z-10">
                       <h4 className={`font-black text-sm uppercase tracking-tighter ${selectedCategory === bill.id ? 'text-white' : 'text-slate-800'}`}>{bill.label}</h4>
                       <div className="flex flex-col gap-1 mt-2">
                          <span className={`text-[9px] font-bold line-through ${selectedCategory === bill.id ? 'text-indigo-200' : 'text-slate-400'}`}>
                             Admin Luar: {bill.marketFee}
                          </span>
                          <span className={`text-[10px] font-black ${selectedCategory === bill.id ? 'text-emerald-300' : 'text-emerald-600'}`}>
                             Admin Koperasi: {bill.ourFee}
                          </span>
                       </div>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* Payment Panel */}
         <div className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-xl flex flex-col relative overflow-hidden h-fit">
            <h3 className="text-2xl font-black text-slate-800 italic mb-8">Formulir Transaksi</h3>
            
            {selectedCategory ? (
               <div className="space-y-6 animate-in slide-in-from-right duration-300 relative z-10">
                  <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       {selectedCategory === 'pulsa' && 'Nomor Handphone'}
                       {selectedCategory === 'pln' && 'Nomor Meter / ID Pelanggan'}
                       {selectedCategory === 'pbb' && 'Nomor Objek Pajak (NOP)'}
                       {selectedCategory === 'pdam' && 'ID Pelanggan Air'}
                       {selectedCategory === 'bpjs' && 'Nomor Virtual Account BPJS'}
                       {selectedCategory === 'internet' && 'Nomor Pelanggan Internet'}
                     </label>
                     <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value.replace(/\D/g, ''))}
                        placeholder="Ketik angka di sini..." 
                        className="w-full p-5 bg-slate-50 border border-slate-200 rounded-3xl text-xl font-black outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 placeholder:text-slate-300"
                     />
                  </div>

                  {/* Profit Breakdown Visualization */}
                  <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-4 shadow-inner">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">Rincian Transparansi</p>
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Harga Dasar Vendor</span>
                        <span className="font-bold">Rp 50.000</span>
                     </div>
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Admin Koperasi</span>
                        <span className="font-bold text-emerald-400">+{currentCategory?.ourFee}</span>
                     </div>
                     <div className="h-px bg-white/10 my-2"></div>
                     <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase">Total Bayar</span>
                        <span className="text-xl font-black text-white italic">Rp {(50000 + (currentCategory?.ourFeeNum || 0)).toLocaleString('id-ID')}</span>
                     </div>
                     <div className="mt-4 p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30 flex items-center justify-between">
                        <span className="text-[9px] text-indigo-300 font-bold uppercase">Cashback ke SHU Anda</span>
                        <span className="text-sm font-black text-indigo-400">+Rp {currentCategory?.bonus}</span>
                     </div>
                  </div>

                  <button 
                    onClick={handlePay}
                    disabled={isProcessing || inputValue.length < 4}
                    className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95 disabled:bg-slate-100 disabled:text-slate-300 disabled:shadow-none disabled:transform-none"
                  >
                     {isProcessing ? 'SISTEM MEMPROSES...' : 'BAYAR & HASILKAN CUAN'}
                  </button>
               </div>
            ) : (
               <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-5xl">📲</div>
                  <p className="text-slate-500 font-bold italic max-w-[200px] text-sm">Pilih jenis tagihan di samping untuk mulai bertransaksi.</p>
               </div>
            )}

            {/* Success Overlay */}
            {showSuccess && (
               <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in zoom-in duration-300">
                  <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-5xl shadow-[0_0_40px_rgba(16,185,129,0.4)] text-white animate-bounce">✓</div>
                  <div>
                     <h4 className="text-3xl font-black text-slate-800 italic">Transaksi Sukses!</h4>
                     <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                       Pulsa telah masuk. Koperasi baru saja menghasilkan laba <b>{currentCategory?.ourFee}</b>.
                     </p>
                  </div>
                  <div className="w-full p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                     <p className="text-[10px] text-indigo-600 font-black uppercase">SHU Anda Bertambah</p>
                     <p className="text-2xl font-black text-indigo-900">+Rp {currentCategory?.bonus}</p>
                  </div>
                  <button onClick={() => { setShowSuccess(false); setInputValue(''); }} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all">Transaksi Lagi</button>
               </div>
            )}
         </div>
      </div>

      {/* Edukasi Keuntungan untuk Anggota */}
      <div className="bg-emerald-50 p-10 rounded-[4rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shrink-0 shadow-sm border-4 border-emerald-100">🔄</div>
         <div className="flex-1 space-y-3">
            <h4 className="text-2xl font-black text-emerald-900 italic leading-tight">Berhenti Memperkaya Konglomerat.</h4>
            <p className="text-emerald-700/80 text-sm leading-relaxed font-medium">
               Setiap tahun, rakyat Indonesia menghabiskan Triliunan Rupiah hanya untuk **biaya admin** beli pulsa dan token listrik. Mulai hari ini, bayar semua tagihan Anda melalui KoperatifAI. Kita kumpulkan biaya admin itu menjadi gunung laba (SHU) yang akan dikembalikan ke kantong Anda sendiri di akhir tahun.
            </p>
         </div>
      </div>
    </div>
  );
};

export default BillPayments;