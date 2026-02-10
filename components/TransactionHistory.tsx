import React, { useState, useMemo } from 'react';
import { Transaction } from '../types.ts';

const TransactionHistory: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'deposit' | 'withdrawal' | 'loan_installment'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mocking a larger dataset to simulate scalability
  const allTransactions: Transaction[] = useMemo(() => [
    { id: 'TX001', type: 'deposit', description: 'Simpanan Sukarela - Pebruari', date: '05 Peb 2026', amount: 500000, status: 'completed' },
    { id: 'TX002', type: 'loan_installment', description: 'Angsuran Pinjaman #04', date: '04 Peb 2026', amount: 1250000, status: 'completed' },
    { id: 'TX003', type: 'deposit', description: 'Simpanan Wajib - Pebruari', date: '02 Peb 2026', amount: 100000, status: 'completed' },
    { id: 'TX004', type: 'withdrawal', description: 'Penarikan Sukarela', date: '28 Jan 2026', amount: 2000000, status: 'completed' },
    { id: 'TX005', type: 'dividend', description: 'Bonus Referral Anggota', date: '15 Jan 2026', amount: 50000, status: 'completed' },
    { id: 'TX006', type: 'deposit', description: 'Simpanan Sukarela - Januari', date: '12 Jan 2026', amount: 500000, status: 'completed' },
    { id: 'TX007', type: 'loan_installment', description: 'Angsuran Pinjaman #03', date: '10 Jan 2026', amount: 1250000, status: 'completed' },
    { id: 'TX008', type: 'deposit', description: 'Simpanan Wajib - Januari', date: '02 Jan 2026', amount: 100000, status: 'completed' },
  ], []);

  const filteredData = useMemo(() => {
    return allTransactions.filter(tx => {
      const matchesFilter = filter === 'all' || tx.type === filter;
      const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           tx.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [allTransactions, filter, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getIcon = (type: string) => {
    switch(type) {
      case 'deposit': return '📥';
      case 'withdrawal': return '📤';
      case 'loan_installment': return '💸';
      case 'dividend': return '✨';
      default: return '📄';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
      <div className="p-8 border-b border-slate-50 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Riwayat Transaksi</h2>
            <p className="text-slate-500 text-sm">Optimalisasi performa aktif: Menangani {allTransactions.length} records per 05 Peb 2026.</p>
          </div>
          <div className="relative group w-full md:w-64">
            <input 
              type="text" 
              placeholder="Cari transaksi..." 
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {(['all', 'deposit', 'withdrawal', 'loan_installment'] as const).map((f) => (
            <button
              key={f}
              onClick={() => {setFilter(f); setCurrentPage(1);}}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filter === f 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {f === 'all' ? 'Semua' : f.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto min-h-[400px]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
              <th className="px-8 py-4">Transaksi</th>
              <th className="px-8 py-4">ID Transaksi</th>
              <th className="px-8 py-4">Tanggal</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Nominal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {currentData.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50/30 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      {getIcon(tx.type)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{tx.description}</p>
                      <p className="text-[10px] text-slate-400 capitalize">{tx.type.replace('_', ' ')}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs font-mono text-slate-500">{tx.id}</span>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs text-slate-600">{tx.date}</span>
                </td>
                <td className="px-8 py-5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">
                    Selesai
                  </span>
                </td>
                <td className={`px-8 py-5 text-right font-bold text-sm ${
                  tx.type === 'withdrawal' || tx.type === 'loan_installment' ? 'text-rose-600' : 'text-emerald-600'
                }`}>
                  {tx.type === 'withdrawal' || tx.type === 'loan_installment' ? '-' : '+'} Rp {tx.amount.toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {currentData.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-4xl mb-4">🏜️</div>
            <p className="text-slate-400 italic">Tidak ada transaksi ditemukan.</p>
          </div>
        )}
      </div>
      
      {/* Pagination Controls */}
      <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">
          Menampilkan <span className="text-slate-900 font-bold">{currentData.length}</span> dari <span className="text-slate-900 font-bold">{filteredData.length}</span> transaksi
        </p>
        <div className="flex gap-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="p-2 bg-white border border-slate-200 rounded-lg text-xs font-bold disabled:opacity-30 hover:bg-slate-50 transition-colors"
          >
            ◀ Sebelumnya
          </button>
          <div className="flex items-center gap-1 px-2">
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  currentPage === i + 1 ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="p-2 bg-white border border-slate-200 rounded-lg text-xs font-bold disabled:opacity-30 hover:bg-slate-50 transition-colors"
          >
            Selanjutnya ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;