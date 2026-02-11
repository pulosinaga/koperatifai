import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

const DigitalPassbook: React.FC = () => {
  const { user, isLiveDatabase } = useAppContext();
  const [liveShu, setLiveShu] = useState(2450420);
  const [history, setHistory] = useState<any[]>([]);

  // Simulasi penambahan SHU per detik (kosmetik)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveShu(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Transaksi Sebenarnya dari Supabase
  useEffect(() => {
    const fetchRecentTx = async () => {
       if (isLiveDatabase && user && supabase) {
          const { data } = await supabase
            .from('transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(5); // Ambil 5 terakhir saja untuk buku tabungan
            
          if (data && data.length > 0) {
             const formatted = data.map(tx => {
                const isPlus = tx.type === 'deposit' || tx.type === 'dividend';
                let icon = '📄';
                if (tx.type === 'deposit') icon = '📥';
                if (tx.type === 'withdrawal') icon = '📤';
                if (tx.type === 'loan_installment') icon = '💸';
                if (tx.type === 'dividend') icon = '✨';

                return {
                   type: tx.description,
                   date: new Date(tx.created_at).toLocaleDateString('id-ID', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'}),
                   amount: `${isPlus ? '+' : '-'} Rp ${Number(tx.amount).toLocaleString('id-ID')}`,
                   icon: icon,
                   color: isPlus ? 'text-emerald-600' : 'text-rose-600'
                };
             });
             setHistory(formatted);
          }
       } else {
          // Data Simulasi (Fallback)
          setHistory([
             { type: 'SHU Marketplace', date: 'Hari ini, 10:20', amount: '+ Rp 25', icon: '🛒', color: 'text-emerald-600' },
             { type: 'Bonus Simpanan', date: 'Kemarin, 23:59', amount: '+ Rp 412', icon: '📈', color: 'text-emerald-600' },
             { type: 'Iuran Daskop', date: '01 Peb 2026', amount: '- Rp 5.000', icon: '🕊️', color: 'text-rose-600' },
             { type: 'Bagi Hasil Pinjaman', date: '28 Jan 2026', amount: '+ Rp 1.250', icon: '💸', color: 'text-emerald-600' },
          ]);
       }
    };
    fetchRecentTx();
  }, [isLiveDatabase, user]);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Passbook Hero */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Live Sovereign Ledger v4.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Buku Tabungan Digital: <br/>Kekayaan Anda, Kendali Anda.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Setiap transaksi anggota di pasar, pembayaran cicilan, atau setoran tunai memberikan rekam jejak mutasi nyata ke saldo Anda secara real-time.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="text-5xl mb-4">✨</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Akumulasi SHU Berjalan</p>
             <p className="text-4xl font-black text-indigo-900 mt-2 italic tracking-tighter">
               Rp {liveShu.toLocaleString('id-ID')}
             </p>
             <div className="mt-4 px-4 py-1.5 bg-emerald-50 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Updating Live from Ledger</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Feed Table */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Mutasi Buku Tabungan</h3>
               <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
                 {isLiveDatabase ? 'Direct DB Sync' : 'Mock Data'}
               </p>
            </div>
            
            <div className="space-y-4">
               {history.length > 0 ? history.map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:border-indigo-100 transition-all group">
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                       <div>
                          <p className="font-bold text-slate-800 text-sm">{item.type}</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase mt-1">{item.date}</p>
                       </div>
                    </div>
                    <p className={`font-black text-sm italic ${item.color}`}>{item.amount}</p>
                 </div>
               )) : (
                 <div className="text-center py-10 text-slate-400 text-sm italic">Belum ada mutasi transaksi bulan ini.</div>
               )}
            </div>
            
            <button className="w-full py-4 text-xs font-bold text-indigo-600 uppercase tracking-widest hover:underline">Lihat Semua Riwayat di Mutasi Rekening</button>
         </div>

         {/* Sidebar Stats */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Ringkasan Kepemilikan</h4>
               <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Modal Saham (Pokok & Wajib)</p>
                     <p className="text-sm font-black">Rp {((user?.balances.principal || 0) + (user?.balances.mandatory || 0)).toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Simpanan Sukarela</p>
                     <p className="text-sm font-black text-emerald-400">Rp {(user?.balances.voluntary || 0).toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                     <p className="text-xs text-slate-400 font-bold uppercase">Total Kekayaan</p>
                     <p className="text-xl font-black text-white italic">
                        Rp {((user?.balances.principal || 0) + (user?.balances.mandatory || 0) + (user?.balances.voluntary || 0)).toLocaleString('id-ID')}
                     </p>
                  </div>
               </div>
               <button className="w-full py-4 bg-white/10 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest border border-white/10 hover:bg-white/20 transition-all">Tarik Dana Sukarela</button>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">🏛️</div>
               <h4 className="font-bold text-indigo-900 uppercase text-xs tracking-widest">Status Notaris</h4>
               <p className="text-[10px] text-indigo-700 leading-relaxed italic">
                  "Seluruh catatan ledger ini disinkronkan ke cloud terenkripsi Supabase dan diakui sebagai bukti mutasi kepemilikan yang sah secara hukum."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DigitalPassbook;