
import React, { useState } from 'react';

const RemittanceService: React.FC = () => {
  const [transferType, setTransferType] = useState<'INTERNAL' | 'EXTERNAL'>('INTERNAL');
  const [amount, setAmount] = useState('500000');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const externalBanks = ['MANDIRI', 'BCA', 'BNI', 'BRI', 'PERMATA', 'DANAMON'];
  const internalFee = 0;
  const externalFee = 1500;
  const bankTypicalFee = 6500;

  const handleTransfer = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2500);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Remittance Header */}
      <div className="bg-indigo-700 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-900">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Sovereign Remittance Engine
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Transfer Kedaulatan: <br/>Cepat, Aman, Tanpa Diperas.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl font-medium">
              Gunakan **BI-FAST** terintegrasi untuk transfer antar bank dengan biaya jasa koperasi terendah di Indonesia.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-8 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="text-6xl mb-4">💸</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Admin Transfer Bank</p>
             <div className="flex items-baseline gap-2 mt-1">
                <span className="text-sm line-through text-rose-400 font-bold">Rp 6.500</span>
                <span className="text-4xl font-black text-indigo-900 italic">Rp 1.500</span>
             </div>
             <p className="text-[9px] text-emerald-500 font-bold mt-2 uppercase">Subsidized by Collective Interest</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Transfer Form */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex p-1 bg-slate-100 rounded-2xl">
               <button 
                onClick={() => setTransferType('INTERNAL')}
                className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${transferType === 'INTERNAL' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}
               >
                  Sesama Anggota
               </button>
               <button 
                onClick={() => setTransferType('EXTERNAL')}
                className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${transferType === 'EXTERNAL' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}
               >
                  Antar Bank (Luar)
               </button>
            </div>

            <div className="space-y-6">
               <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tujuan {transferType === 'INTERNAL' ? 'Anggota' : 'Rekening'}</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {transferType === 'EXTERNAL' && (
                        <select className="p-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-600">
                           <option>Pilih Bank Tujuan...</option>
                           {externalBanks.map(b => <option key={b}>{b}</option>)}
                        </select>
                     )}
                     <input 
                        type="text" 
                        placeholder={transferType === 'INTERNAL' ? "ID Anggota (Contoh: CU-001)" : "Nomor Rekening..."}
                        className="p-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-600"
                     />
                  </div>
               </div>

               <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nominal Transfer (Rp)</label>
                  <input 
                     type="number" 
                     value={amount}
                     onChange={(e) => setAmount(e.target.value)}
                     className="w-full p-6 bg-slate-50 border-none rounded-[2.5rem] text-4xl font-black text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-600"
                  />
               </div>

               <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0">🤖</div>
                  <div className="flex-1">
                     <p className="text-xs text-indigo-900 leading-relaxed font-bold italic">
                        {transferType === 'INTERNAL' 
                          ? "Transfer internal dijamin GRATIS selamanya. Memperkuat ekonomi sirkular komunitas kita." 
                          : "AI akan memproses via Jalur BI-FAST Tercepat. Biaya admin dialokasikan untuk cadangan dana sosial."}
                     </p>
                  </div>
               </div>

               <button 
                onClick={handleTransfer}
                disabled={isProcessing}
                className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
               >
                  {isProcessing ? 'MEMVERIFIKASI INTEGRITAS...' : 'LANJUTKAN TRANSFER'}
               </button>
            </div>
         </div>

         {/* Receipt & Simulation Result */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white space-y-8 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl"></div>
               <h3 className="text-xl font-black text-indigo-400 italic uppercase">Ringkasan Biaya</h3>
               
               <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Nominal</span>
                     <span className="font-bold">Rp {parseInt(amount).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Biaya Admin AI</span>
                     <span className="font-bold text-emerald-400">Rp {transferType === 'INTERNAL' ? '0' : externalFee.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="h-px bg-white/10 my-4"></div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-black uppercase text-slate-400">Total Debet</span>
                     <span className="text-2xl font-black text-white italic">Rp {(parseInt(amount) + (transferType === 'INTERNAL' ? 0 : externalFee)).toLocaleString('id-ID')}</span>
                  </div>
               </div>

               <div className="pt-6 border-t border-white/5 space-y-4">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Saving Comparison</p>
                  <div className="flex items-center gap-4">
                     <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-rose-500" style={{ width: '100%' }}></div>
                        <div className="h-full bg-emerald-500" style={{ width: '25%' }}></div>
                     </div>
                     <span className="text-[10px] font-black text-emerald-400">HEMAT 75%</span>
                  </div>
               </div>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">🏛️</div>
               <h4 className="font-bold text-slate-800">Uang Anda Tetap di Rakyat.</h4>
               <p className="text-xs text-slate-400 leading-relaxed italic">
                  "Saat Anda transfer via bank konvensional, Rp 6.500 lari ke pemilik bank. Di KoperatifAI, biaya admin Rp 1.500 adalah **Iuran Jasa** yang akan dibagikan kembali ke Anda sebagai SHU."
               </p>
            </div>
         </div>
      </div>

      {/* Success Modal Simulation */}
      {showSuccess && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-md rounded-[4rem] p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
               <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner">✓</div>
               <div>
                  <h3 className="text-3xl font-black text-slate-800 italic">Transfer Berhasil!</h3>
                  <p className="text-slate-500 mt-2">Dana telah diteruskan ke sistem bank partner secara instan.</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-left space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                     <span>Ref-ID</span>
                     <span>KOP-TX-992148</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-800">
                     <span>Total</span>
                     <span>Rp {(parseInt(amount) + (transferType === 'INTERNAL' ? 0 : externalFee)).toLocaleString('id-ID')}</span>
                  </div>
               </div>
               <button onClick={() => setShowSuccess(false)} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Selesai</button>
            </div>
         </div>
      )}

      {/* Founder Logic Footer */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">📢</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Transfer Adalah Aliran Darah Ekonomi."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Founder, dengan melayani transfer, Anda memegang data **Velocity of Money** anggota. Data ini memungkinkan AI Anda memprediksi kapan koperasi butuh lebih banyak dana cair dan kapan bisa menyalurkan pinjaman lebih agresif.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Tinjau Dashboard Likuiditas Remitansi
         </button>
      </div>
    </div>
  );
};

export default RemittanceService;
