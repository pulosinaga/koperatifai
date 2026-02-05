
import React, { useState } from 'react';

const BillPayments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const billTypes = [
    { id: 'pulsa', label: 'Pulsa & Data', icon: '📱', marketFee: 'Rp 2.000', ourFee: 'Rp 500', bonus: '200', color: 'bg-emerald-50 text-emerald-600' },
    { id: 'pln', label: 'PLN Token', icon: '⚡', marketFee: 'Rp 3.000', ourFee: 'Rp 1.000', bonus: '500', color: 'bg-amber-50 text-amber-600', promo: '2X SHU' },
    { id: 'pbb', label: 'Pajak PBB', icon: '🏛️', marketFee: 'Rp 5.000', ourFee: 'Rp 2.000', bonus: '1000', color: 'bg-slate-100 text-slate-600' },
    { id: 'travel', label: 'Tiket Perjalanan', icon: '🚆', marketFee: 'Rp 7.500', ourFee: 'Rp 3.500', bonus: '1500', color: 'bg-orange-50 text-orange-600' },
    { id: 'pdam', label: 'Air PDAM', icon: '💧', marketFee: 'Rp 2.500', ourFee: 'Rp 500', bonus: '300', color: 'bg-blue-50 text-blue-600' },
    { id: 'bpjs', label: 'BPJS Kes.', icon: '🏥', marketFee: 'Rp 2.500', ourFee: 'Rp 0', bonus: '100', color: 'bg-rose-50 text-rose-600' },
  ];

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2000);
  };

  const currentCategory = billTypes.find(x => x.id === selectedCategory);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Launch Promo Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-orange-200/50">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-6">
              <div className="text-5xl animate-bounce">🎁</div>
              <div>
                 <h3 className="text-xl font-black italic">PROMO GRAND LAUNCH!</h3>
                 <p className="text-amber-50 text-sm font-medium">Beli Token Listrik hari ini & dapatkan <b>2X Lipat Estimasi SHU</b> langsung ke saldo bagi hasil Anda.</p>
              </div>
           </div>
           <button 
            onClick={() => setSelectedCategory('pln')}
            className="px-8 py-3 bg-white text-orange-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:shadow-lg transition-all"
           >
              Sikat Sekarang
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Categories Grid */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Pusat Layanan Digital</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {billTypes.map((bill) => (
                 <button 
                  key={bill.id}
                  onClick={() => { setSelectedCategory(bill.id); setShowSuccess(false); setInputValue(''); }}
                  className={`p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-6 group relative ${
                    selectedCategory === bill.id ? 'bg-indigo-600 border-indigo-500 shadow-2xl scale-105' : 'bg-white border-slate-100 hover:border-indigo-200'
                  }`}
                 >
                    {bill.promo && (
                       <span className="absolute -top-3 -right-2 px-3 py-1 bg-rose-500 text-white text-[8px] font-black rounded-full shadow-lg border-2 border-white animate-pulse">
                          {bill.promo}
                       </span>
                    )}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-all ${
                      selectedCategory === bill.id ? 'bg-white/20 text-white' : bill.color
                    }`}>
                       {bill.icon}
                    </div>
                    <div className="text-left flex-1">
                       <h4 className={`font-black text-xs uppercase tracking-tighter ${selectedCategory === bill.id ? 'text-white' : 'text-slate-800'}`}>{bill.label}</h4>
                       <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[9px] font-black ${selectedCategory === bill.id ? 'text-emerald-300' : 'text-emerald-600'}`}>Beban Admin: {bill.ourFee}</span>
                       </div>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* Payment Panel */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col space-y-8 relative overflow-hidden h-fit">
            <h3 className="text-2xl font-black text-slate-800 italic">Proses Transaksi</h3>
            
            {selectedCategory ? (
               <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       {selectedCategory === 'pulsa' && 'Nomor Handphone'}
                       {selectedCategory === 'pln' && 'ID Meter / ID Pelanggan'}
                       {selectedCategory === 'pbb' && 'Nomor Objek Pajak (NOP)'}
                       {selectedCategory === 'travel' && 'Pilih Rute & Tanggal'}
                       {selectedCategory === 'pdam' && 'ID Pelanggan Air'}
                       {selectedCategory === 'bpjs' && 'Nomor Virtual Account BPJS'}
                     </label>
                     
                     {selectedCategory === 'travel' ? (
                        <div className="space-y-3">
                           <div className="flex gap-2">
                              <select className="flex-1 p-4 bg-slate-50 border-none rounded-xl text-xs font-bold outline-none">
                                 <option>Asal: Jakarta</option>
                                 <option>Asal: Bandung</option>
                              </select>
                              <select className="flex-1 p-4 bg-slate-50 border-none rounded-xl text-xs font-bold outline-none">
                                 <option>Tujuan: Surabaya</option>
                                 <option>Tujuan: Yogyakarta</option>
                              </select>
                           </div>
                           <input type="date" className="w-full p-4 bg-slate-50 border-none rounded-xl text-xs font-bold" />
                        </div>
                     ) : (
                        <input 
                           type="text" 
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           placeholder="Ketik di sini..." 
                           className="w-full p-4 bg-slate-50 border-none rounded-2xl text-lg font-black outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                     )}
                  </div>

                  <div className="p-6 bg-slate-900 rounded-3xl text-white space-y-4">
                     <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-slate-400">
                        <span>Biaya Koperasi</span>
                        <span className="text-emerald-400">{currentCategory?.ourFee}</span>
                     </div>
                     <div className="h-px bg-white/10"></div>
                     <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase">Estimasi SHU</span>
                        <span className="text-lg font-black text-indigo-400">+ Rp {currentCategory?.bonus}</span>
                     </div>
                  </div>

                  <button 
                    onClick={handlePay}
                    disabled={isProcessing || (!inputValue && selectedCategory !== 'travel')}
                    className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:bg-slate-100 disabled:text-slate-300"
                  >
                     {isProcessing ? 'SISTEM SEDANG MEMPROSES...' : 'BAYAR SEKARANG'}
                  </button>
               </div>
            ) : (
               <div className="py-20 text-center space-y-4 opacity-30">
                  <div className="text-7xl">📲</div>
                  <p className="text-slate-500 font-bold italic">Pilih kategori layanan di samping.</p>
               </div>
            )}

            {showSuccess && (
               <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-10 text-center space-y-6 animate-in zoom-in duration-300">
                  <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-5xl shadow-xl text-white">✓</div>
                  <h4 className="text-2xl font-black text-slate-800 italic">Berhasil!</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Transaksi {currentCategory?.label} sukses. <br/>Bonus SHU <b>Rp {currentCategory?.bonus}</b> telah dicatat oleh AI.
                  </p>
                  <button onClick={() => { setShowSuccess(false); setInputValue(''); }} className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]">Transaksi Lain</button>
               </div>
            )}
         </div>
      </div>

      {/* Trust Builder: PBB & Transport Specific */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏙️</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-black text-slate-800 italic">"Layanan Pemerintah, Kemudahan Koperasi."</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               Bayar PBB kini tidak perlu antre di loket kelurahan atau bank daerah. KoperatifAI tersambung langsung dengan database perpajakan daerah melalui gateway resmi. Aman, cepat, dan menguntungkan bagi SHU Anda.
            </p>
         </div>
      </div>
    </div>
  );
};

export default BillPayments;
