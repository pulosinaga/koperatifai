
import React from 'react';

const AntiOpportunism: React.FC = () => {
  const comparisons = [
    {
      aspect: 'Sumber Modal',
      merpati: 'Hibah Pemerintah / Pinjaman Bank',
      cu: 'Simpanan Swadaya Anggota',
      icon: '💎'
    },
    {
      aspect: 'Tujuan Utama',
      merpati: 'Mengejar Subsidi & Proyek',
      cu: 'Kesejahteraan Berkelanjutan Anggota',
      icon: '🎯'
    },
    {
      aspect: 'Transparansi',
      merpati: 'Tertutup & Manipulatif',
      cu: 'Radikal & Terbuka (Real-time Ledger)',
      icon: '🛡️'
    },
    {
      aspect: 'Pengambilan Keputusan',
      merpati: 'Ditentukan Segelintir Elit',
      cu: 'Demokratis (Satu Anggota, Satu Suara)',
      icon: '⚖️'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-16">
      <div className="bg-rose-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10">
          <span className="px-4 py-1.5 bg-rose-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Komitmen Integritas
          </span>
          <h2 className="text-4xl font-black mt-4 leading-tight">Benteng Melawan "Koperasi Merpati"</h2>
          <p className="text-rose-200 mt-4 text-lg leading-relaxed max-w-2xl">
            Skeptisisme Anda adalah alasan kami membangun <strong>KoperatifAI</strong>. Kami menolak model koperasi yang hanya hidup dari "belas kasihan" dana pemerintah.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {comparisons.map((c, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">{c.icon}</div>
              <h4 className="text-xl font-black text-slate-800 uppercase tracking-tighter">{c.aspect}</h4>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                <p className="text-[10px] font-black text-rose-600 uppercase mb-1">Model Merpati (Bahaya)</p>
                <p className="text-sm font-medium text-rose-900">{c.merpati}</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Model KoperatifAI (Sejati)</p>
                <p className="text-sm font-bold text-emerald-900">{c.cu}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-black text-slate-800">Prinsip Keamanan Sistem Kita</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-emerald-500 font-bold">●</span>
                <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Audit Otomatis:</span> Setiap rupiah yang masuk dan keluar diverifikasi oleh algoritma akuntansi tanpa campur tangan manusia.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500 font-bold">●</span>
                <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Kepemilikan Berbasis Saham:</span> Anda bukan "nasabah", Anda adalah pemilik yang modalnya dijaga oleh sistem keamanan tingkat bank.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500 font-bold">●</span>
                <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Non-Profit Oriented:</span> Keuntungan (SHU) kembali ke Anda, bukan ke pemilik platform atau pemegang saham luar.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-64 aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-white p-6 text-center">
             <div className="text-5xl mb-4">🚫</div>
             <p className="text-xs font-black uppercase tracking-widest leading-tight">ZERO TOLERANCE FOR CORRUPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiOpportunism;
