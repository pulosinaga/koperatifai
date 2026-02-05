
import React from 'react';

const MarketInsights: React.FC = () => {
  const comparison = [
    { feature: 'Transparansi Dana', bank: 'Terbatas (Sentralistik)', tradCoop: 'Manual (Bulanan)', koperatif: 'Real-time (Detik)', highlight: true },
    { feature: 'Keuntungan Kembali', bank: 'Hanya Bunga Kecil', tradCoop: 'SHU Tahunan', koperatif: 'SHU + Kapitalisasi AI', highlight: true },
    { feature: 'Kecepatan Pinjaman', bank: 'Sangat Ketat (BI Checking)', tradCoop: 'Lama (Manual)', koperatif: 'Cepat (AI Scoring)', highlight: true },
    { feature: 'Biaya Admin', bank: 'Bulanan Tetap', tradCoop: 'Variabel', koperatif: 'Sangat Rendah/Nol', highlight: false },
    { feature: 'Konsultasi Keuangan', bank: 'CS Umum', tradCoop: 'Tidak Ada', koperatif: 'AI Personal Advisor 24/7', highlight: true },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">KoperatifAI vs Persaing</h2>
        <p className="text-slate-500 mt-2">Mengapa model digital koperatif kita lebih unggul daripada perbankan tradisional atau koperasi lama?</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Fitur Utama</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Bank Digital</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Koperasi Tradisional</th>
              <th className="px-6 py-5 text-[10px] font-black text-indigo-600 bg-indigo-50/50 uppercase tracking-widest">KoperatifAI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {comparison.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-slate-800">{row.feature}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{row.bank}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{row.tradCoop}</td>
                <td className={`px-6 py-4 text-sm font-black ${row.highlight ? 'text-indigo-600 bg-indigo-50/30' : 'text-indigo-600'}`}>
                  {row.koperatif}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            🚀 The Blue Ocean Opportunity
          </h4>
          <p className="text-indigo-100 text-sm leading-relaxed">
            Pasar Indonesia memiliki 100jt+ orang yang belum terlayani bank secara optimal (Underbanked). Koperasi Digital adalah solusi tengah: seaman bank, semudah aplikasi, tapi sehangat komunitas.
          </p>
          <div className="mt-6 flex items-center gap-4">
             <div className="bg-white/20 px-4 py-2 rounded-xl text-xs font-bold">120K+ Koperasi di RI</div>
             <div className="bg-white/20 px-4 py-2 rounded-xl text-xs font-bold">Baru 5% Digital</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            💡 Strategi Pesaing AI
          </h4>
          <ul className="space-y-3">
            {[
              { t: 'Otomasi Penuh', d: 'Admin tidak perlu lagi posting jurnal satu-satu.' },
              { t: 'Analitik Prediktif', d: 'AI tahu kapan anggota butuh pinjaman sebelum mereka minta.' },
              { t: 'Biaya Overhead Nol', d: 'Tidak butuh gedung mewah, bunga bisa lebih besar untuk anggota.' }
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-indigo-600">✔</span>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.t}</p>
                  <p className="text-xs text-slate-500">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
