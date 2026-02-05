
import React, { useState, useMemo } from 'react';

type ReportTab = 'JURNAL' | 'NERACA' | 'LABA_RUGI';

const AccountingReports: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ReportTab>('NERACA');

  // Simulated financial data (Balance Sheet)
  const balanceSheet = useMemo(() => ({
    assets: [
      { account: 'Kas di Tangan', amount: 450000000 },
      { account: 'Kas di Bank', amount: 1250000000 },
      { account: 'Piutang Pinjaman Anggota', amount: 3500000000 },
      { account: 'Inventaris Kantor', amount: 75000000 },
    ],
    liabilities: [
      { account: 'Simpanan Sukarela Anggota', amount: 2150000000 },
      { account: 'Simpanan Berjangka', amount: 850000000 },
      { account: 'Utang Pihak Ketiga', amount: 50000000 },
    ],
    equity: [
      { account: 'Simpanan Pokok', amount: 500000000 },
      { account: 'Simpanan Wajib', amount: 1200000000 },
      { account: 'Cadangan Koperasi', amount: 450000000 },
      { account: 'SHU Tahun Berjalan', amount: 75000000 },
    ]
  }), []);

  const totalAssets = balanceSheet.assets.reduce((a, b) => a + b.amount, 0);
  const totalLiabilitiesEquity = balanceSheet.liabilities.reduce((a, b) => a + b.amount, 0) + balanceSheet.equity.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Pembukuan & Laporan</h2>
          <p className="text-slate-500 text-sm">Periode Laporan: Pebruari 2026 (Otomatis/Real-time)</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm">
            🖨️ Cetak PDF
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
            📊 Ekspor Excel
          </button>
        </div>
      </div>

      <div className="bg-white p-1 rounded-2xl border border-slate-100 shadow-sm inline-flex mb-4">
        {[
          { id: 'NERACA', label: 'Neraca' },
          { id: 'LABA_RUGI', label: 'Laba Rugi (PHU)' },
          { id: 'JURNAL', label: 'Jurnal Umum' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ReportTab)}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'NERACA' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ASSETS SIDE */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden h-fit">
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <h3 className="font-black text-slate-800 text-sm uppercase tracking-widest">AKTIVA (Aset) - Peb 2026</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {balanceSheet.assets.map((item, i) => (
                <div key={i} className="px-6 py-4 flex justify-between items-center text-sm">
                  <span className="text-slate-600">{item.account}</span>
                  <span className="font-bold text-slate-800">Rp {item.amount.toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-indigo-50 flex justify-between items-center">
              <span className="font-black text-indigo-900 text-sm uppercase">Total Aktiva</span>
              <span className="font-black text-indigo-900 text-lg">Rp {totalAssets.toLocaleString('id-ID')}</span>
            </div>
          </div>

          {/* LIABILITIES & EQUITY SIDE */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden h-fit">
              <div className="p-6 bg-slate-50 border-b border-slate-100">
                <h3 className="font-black text-slate-800 text-sm uppercase tracking-widest">PASIVA (Kewajiban & Modal)</h3>
              </div>
              <div className="p-4 bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-tighter px-6">Kewajiban</div>
              <div className="divide-y divide-slate-50">
                {balanceSheet.liabilities.map((item, i) => (
                  <div key={i} className="px-6 py-4 flex justify-between items-center text-sm">
                    <span className="text-slate-600">{item.account}</span>
                    <span className="font-bold text-slate-800">Rp {item.amount.toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-tighter px-6">Modal / Ekuitas</div>
              <div className="divide-y divide-slate-50">
                {balanceSheet.equity.map((item, i) => (
                  <div key={i} className="px-6 py-4 flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">{item.account}</span>
                    <span className="font-bold text-slate-800">Rp {item.amount.toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-emerald-50 flex justify-between items-center">
                <span className="font-black text-emerald-900 text-sm uppercase">Total Pasiva</span>
                <span className="font-black text-emerald-900 text-lg">Rp {totalLiabilitiesEquity.toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <div className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
              totalAssets === totalLiabilitiesEquity 
                ? 'bg-emerald-50 border-emerald-100 text-emerald-700' 
                : 'bg-rose-50 border-rose-100 text-rose-700'
            }`}>
              <span className="text-xl">{totalAssets === totalLiabilitiesEquity ? '✅' : '⚠️'}</span>
              <p className="text-xs font-bold uppercase tracking-tight">
                {totalAssets === totalLiabilitiesEquity ? 'Status: Neraca Seimbang (Balanced)' : 'Status: Neraca Tidak Seimbang'}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'LABA_RUGI' && (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 text-center">
            <h3 className="text-xl font-black text-slate-800">Laporan Sisa Hasil Usaha (SHU)</h3>
            <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-bold">Periode Berjalan Pebruari 2026</p>
          </div>
          <div className="p-8 space-y-8">
            <section>
              <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-4">I. Pendapatan Operasional</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Pendapatan Jasa Pinjaman Anggota</span>
                  <span className="font-bold">Rp 125.000.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Provisi & Administrasi</span>
                  <span className="font-bold">Rp 12.500.000</span>
                </div>
                <div className="flex justify-between text-sm border-t border-slate-50 pt-3">
                  <span className="font-bold">Total Pendapatan</span>
                  <span className="font-bold">Rp 137.500.000</span>
                </div>
              </div>
            </section>
            
            <section>
              <h4 className="text-xs font-black text-rose-500 uppercase tracking-widest mb-4">II. Beban Operasional</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Beban Jasa Simpanan (Bunga Anggota)</span>
                  <span className="font-bold">Rp 45.000.000</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Beban Gaji & Honor Pengurus</span>
                  <span className="font-bold">Rp 12.000.000</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Biaya Operasional Kantor</span>
                  <span className="font-bold">Rp 5.500.000</span>
                </div>
                <div className="flex justify-between text-sm border-t border-slate-50 pt-3">
                  <span className="font-bold text-slate-800">Total Beban</span>
                  <span className="font-bold text-slate-800">Rp 62.500.000</span>
                </div>
              </section>

            <div className="p-6 bg-slate-900 rounded-2xl flex justify-between items-center text-white">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SHU Bersih (Laba Bersih)</p>
                <h3 className="text-2xl font-black">Rp 75.000.000</h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Margin Laba</p>
                <p className="text-lg font-bold">54.5%</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'JURNAL' && (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <th className="px-8 py-4">Tanggal</th>
                <th className="px-8 py-4">Keterangan Akun</th>
                <th className="px-8 py-4">Ref</th>
                <th className="px-8 py-4 text-right">Debit</th>
                <th className="px-8 py-4 text-right">Kredit</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-50">
              {[
                { date: '05 Peb 2026', acc: 'Kas di Tangan', ref: '101', d: 500000, k: 0 },
                { date: '', acc: '   Simpanan Sukarela (Budi)', ref: '201', d: 0, k: 500000 },
                { date: '04 Peb 2026', acc: 'Kas di Tangan', ref: '101', d: 1250000, k: 0 },
                { date: '', acc: '   Piutang Pinjaman Anggota', ref: '103', d: 0, k: 1000000 },
                { date: '', acc: '   Pendapatan Jasa Pinjaman', ref: '401', d: 0, k: 250000 },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-4 font-medium text-slate-500">{row.date}</td>
                  <td className={`px-8 py-4 ${row.d === 0 ? 'italic text-slate-500' : 'font-bold text-slate-800'}`}>{row.acc}</td>
                  <td className="px-8 py-4 text-slate-400 text-xs font-mono">{row.ref}</td>
                  <td className="px-8 py-4 text-right">{row.d > 0 ? `Rp ${row.d.toLocaleString('id-ID')}` : '-'}</td>
                  <td className="px-8 py-4 text-right">{row.k > 0 ? `Rp ${row.k.toLocaleString('id-ID')}` : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 text-center bg-slate-50/50">
            <button className="text-xs font-bold text-indigo-600 hover:underline">Tampilkan lebih banyak baris...</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountingReports;
