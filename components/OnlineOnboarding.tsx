
import React, { useState } from 'react';

const OnlineOnboarding: React.FC = () => {
  const [step, setStep] = useState(1);

  const verificationStrategies = [
    {
      method: 'AI Vision OCR (Tahap Awal)',
      pros: 'Gratis/Murah, Instant, Tanpa Birokrasi.',
      cons: 'Akurasi 98% (Perlu validasi saksi).',
      icon: '👁️',
      active: true
    },
    {
      method: 'Dukcapil API (Tahap Lanjut)',
      pros: 'Akurasi 100%, Terhubung Database Negara.',
      cons: 'Biaya per hit mahal, Proses Legal Rumit.',
      icon: '🏛️',
      active: false
    }
  ];

  const steps = [
    { title: 'Saksi Digital', icon: '🤝', desc: 'Wajib direkomendasikan oleh minimal 1 anggota aktif.' },
    { title: 'Deklarasi Sehat', icon: '🏥', desc: 'Pernyataan kesehatan mandiri untuk aktivasi DASKOP.' },
    { title: 'Scan KTP AI', icon: '📸', desc: 'Verifikasi identitas otomatis menggunakan teknologi Vision.' },
    { title: 'Komitmen Modal', icon: '💳', desc: 'Setoran pangkal sebagai tanda kepemilikan saham.' }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Identity Verification Strategy
            </span>
            <h2 className="text-4xl font-black mt-4 leading-tight">Verifikasi Identitas Tanpa Ribet.</h2>
            <p className="text-indigo-200 mt-4 text-lg leading-relaxed max-w-xl">
              Kita tidak perlu "menunggu" izin Dukcapil untuk memulai. AI kita bisa mengenali identitas anggota secara cerdas melalui kamera smartphone.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-center min-w-[280px]">
             <div className="w-20 h-20 bg-indigo-500/40 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 border border-white/20">📸</div>
             <p className="text-xs font-bold uppercase text-indigo-300 tracking-widest mb-1">AI Scan Accuracy</p>
             <p className="text-4xl font-black text-emerald-400">99.2%</p>
             <button className="mt-4 w-full py-2 bg-white text-indigo-900 rounded-xl text-[10px] font-black uppercase tracking-widest">Coba Demo Scan</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div key={i} className={`p-6 rounded-3xl border text-center transition-all ${
            step === i + 1 ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105' : 'bg-white border-slate-100 text-slate-400'
          }`}>
            <div className={`text-3xl mb-3 ${step === i + 1 ? 'opacity-100' : 'opacity-40'}`}>{s.icon}</div>
            <h4 className="font-bold text-sm leading-tight">{s.title}</h4>
            <p className={`text-[10px] mt-2 leading-relaxed ${step === i + 1 ? 'text-indigo-100' : 'text-slate-400'}`}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* NEW SECTION: AI vs Dukcapil API */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="max-w-xl">
            <h3 className="text-2xl font-black text-slate-800">Haruskah Menggunakan API Dukcapil?</h3>
            <p className="text-slate-500 text-sm mt-2">Keputusan teknis untuk menjaga biaya operasional koperasi Anda tetap nol.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold">COST EFFICIENCY: HIGH</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {verificationStrategies.map((item, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] border transition-all ${
              item.active ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-100 opacity-60'
            }`}>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">{item.icon}</div>
                {item.active && <span className="bg-indigo-600 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase">Pilihan Saat Ini</span>}
              </div>
              <h4 className="font-bold text-slate-800 text-xl">{item.method}</h4>
              <div className="mt-4 space-y-3">
                <div className="flex gap-2">
                   <span className="text-emerald-500">➕</span>
                   <p className="text-xs text-slate-600 font-medium"><strong>Kelebihan:</strong> {item.pros}</p>
                </div>
                <div className="flex gap-2">
                   <span className="text-rose-500">➖</span>
                   <p className="text-xs text-slate-600 font-medium"><strong>Kekurangan:</strong> {item.cons}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col lg:flex-row items-center gap-8">
           <div className="text-5xl">🛡️</div>
           <div className="flex-1">
              <h4 className="text-xl font-bold">Solusi "Lean": Kombinasi AI & Vouching</h4>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Alih-alih membayar mahal ke pihak ketiga, kita menggunakan AI untuk mengekstrak data KTP, lalu mewajibkan **Saksi Digital** (Anggota Lama) untuk memvalidasi bahwa data tersebut benar. Ini adalah sistem pertahanan berlapis yang gratis.
              </p>
           </div>
           <button className="px-6 py-3 bg-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap">Pelajari Keamanan Data</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-indigo-50 p-10 rounded-[3rem] border border-indigo-100 space-y-6">
          <h3 className="text-2xl font-black text-indigo-900 flex items-center gap-3">
            <span className="text-3xl">📸</span> Alur Verifikasi Digital
          </h3>
          <div className="space-y-4">
             <div className="flex gap-4 items-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">1</div>
                <p className="text-xs font-bold text-slate-700 uppercase">Ambil Foto KTP & Selfie (Liveness)</p>
             </div>
             <div className="flex gap-4 items-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">2</div>
                <p className="text-xs font-bold text-slate-700 uppercase">AI Mengekstrak NIK, Nama, & Alamat</p>
             </div>
             <div className="flex gap-4 items-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">3</div>
                <p className="text-xs font-bold text-slate-700 uppercase">Saksi (Penjamin) Menyetujui Akurasi Data</p>
             </div>
          </div>
        </div>

        <div className="bg-emerald-600 rounded-[3rem] p-10 text-white flex flex-col justify-center text-center space-y-6">
           <div className="text-5xl">📊</div>
           <h3 className="text-2xl font-black">Hemat Biaya Operasional</h3>
           <p className="text-emerald-100 text-sm leading-relaxed">
             Dengan tidak menggunakan API berbayar di tahap awal, kita menghemat sekitar **Rp 5.000 - Rp 10.000** per anggota baru. Uang ini bisa langsung masuk ke dana DASKOP atau SHU Anda.
           </p>
           <div className="pt-4">
              <span className="bg-white/20 px-6 py-2 rounded-full text-[10px] font-black uppercase border border-white/30">Efisiensi Adalah Kunci</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOnboarding;
