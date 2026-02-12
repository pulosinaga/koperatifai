import React, { useState } from 'react';

const ServiceJourneyGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      title: "1. Pendaftaran Rakyat",
      desc: "Warga cukup bawa e-KTP. Duta membantu input data. Tanpa biaya admin pendaftaran (Hanya Simpanan Pokok Rp 100rb yang bisa dicicil).",
      icon: "✍️",
      tech: "Biometric AI Vision",
      benefit: "Langsung Punya Saham Koperasi"
    },
    {
      title: "2. Verifikasi Kedaulatan",
      desc: "AI memeriksa kecocokan KTP, Wajah, dan Lokasi GPS rumah. Duta memberikan saksi kejujuran (Vouch).",
      icon: "🛡️",
      tech: "4-Layer Audit",
      benefit: "Identitas Aman & Sah"
    },
    {
      title: "3. Disiplin Menabung",
      desc: "Mulai menabung simpanan wajib Rp 20rb/bln atau celengan receh Rp 1.000/hari via Duta.",
      icon: "🪙",
      tech: "Digital Ledger",
      benefit: "Membangun Limit Pinjaman"
    },
    {
      title: "4. Akses Modal Mikro",
      desc: "Jika butuh modal usaha, ajukan via HP. Bunga mikro adil 0.9%. Cair dalam hitungan menit tanpa jaminan tanah.",
      icon: "💸",
      tech: "AI Credit Scoring",
      benefit: "Bebas Jeratan Rentenir"
    },
    {
      title: "5. Panen SHU Kolektif",
      desc: "Belanja kebutuhan harian di warung teman via aplikasi. Laba koperasi dibagikan kembali ke Anda sebagai SHU.",
      icon: "✨",
      tech: "Circular Economy Loop",
      benefit: "Uang Kembali Ke Kantong"
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1 text-center">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Peta Jalan Anggota.</h2>
        <p className="text-slate-500 font-medium">Panduan wajib Duta agar penjelasan ke warga desa 100% sinkron.</p>
      </header>

      {/* Interactive Timeline */}
      <div className="relative">
         {/* Connector Line */}
         <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
         
         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {journeySteps.map((step, i) => (
              <button 
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex flex-col items-center text-center space-y-4 transition-all duration-500 ${activeStep === i ? 'scale-110 opacity-100' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`}
              >
                 <div className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-4xl shadow-xl border-4 border-white transition-all ${activeStep === i ? 'bg-indigo-600 text-white ring-8 ring-indigo-50' : 'bg-white text-slate-300'}`}>
                    {step.icon}
                 </div>
                 <div className="space-y-1">
                    <p className={`text-[8px] font-black uppercase tracking-widest ${activeStep === i ? 'text-indigo-600' : 'text-slate-400'}`}>TAHAP 0{i + 1}</p>
                    <h4 className={`text-xs font-black leading-tight ${activeStep === i ? 'text-slate-800' : 'text-slate-500'}`}>{step.title}</h4>
                 </div>
              </button>
            ))}
         </div>
      </div>

      {/* Step Detail Card */}
      <div className="bg-white p-12 lg:p-20 rounded-[4rem] border border-slate-100 shadow-sm animate-in slide-in-from-bottom duration-500 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-30"></div>
         
         <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 space-y-8">
               <div className="space-y-2">
                  <h3 className="text-4xl font-black text-slate-800 italic font-serif">Langkah ke-0{activeStep + 1}</h3>
                  <p className="text-indigo-600 font-black uppercase text-lg tracking-widest">{journeySteps[activeStep].title}</p>
               </div>
               
               <p className="text-slate-500 text-2xl leading-relaxed italic font-serif">"{journeySteps[activeStep].desc}"</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Teknologi Pengawal:</p>
                     <p className="text-lg font-black text-slate-800">{journeySteps[activeStep].tech}</p>
                  </div>
                  <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                     <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Manfaat Langsung:</p>
                     <p className="text-lg font-black text-emerald-900">{journeySteps[activeStep].benefit}</p>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-96 bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-2xl relative rotate-1 border-b-8 border-indigo-500">
               <div className="text-5xl mb-6">📢</div>
               <h4 className="text-xl font-bold italic mb-4">Script Wajib Duta:</h4>
               <p className="text-slate-400 text-sm leading-relaxed italic">
                  {activeStep === 0 && "\"Pak/Bu, jangan mau dipanggil nasabah lagi. Hari ini Bapak/Ibu jadi PEMILIK modal kita sendiri. Cukup bawa KTP, kita buka jalan kedaulatan.\""}
                  {activeStep === 1 && "\"Sistem AI kami akan mengenali wajah Bapak/Ibu. Ini bukan untuk mengawasi, tapi untuk melindungi saldo Bapak/Ibu agar tidak bisa dibobol siapapun.\""}
                  {activeStep === 2 && "\"Menabung seribu perak sehari tidak akan bikin kita miskin, tapi kalau dikumpulkan se-desa, kita punya modal buat perbaiki desa sendiri.\""}
                  {activeStep === 3 && "\"Butuh modal dagang? Jangan ke Pinjol Pak. Di sini bunganya adil karena yang meminjami adalah tetangga sendiri, bukan lintah darat.\""}
                  {activeStep === 4 && "\"Setiap kali belanja di warung teman via aplikasi, Ibu sebenarnya sedang mengisi dompet pensiun Ibu sendiri melalui SHU.\""}
               </p>
            </div>
         </div>
      </div>

      {/* Synchronicity Warning */}
      <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl animate-pulse">🔄</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-bold text-indigo-900 italic">Protokol Sinkronisasi Penjelasan:</h4>
            <p className="text-indigo-700/70 text-sm leading-relaxed">
               "Duta dilarang keras mengarang alur atau menjanjikan hadiah di luar sistem. Seluruh proses diaudit AI. Kepercayaan warga desa sangat mahal harganya, jangan rusak dengan satu penjelasan yang salah. Gunakan panduan visual ini saat mengedukasi warga."
            </p>
         </div>
      </div>
    </div>
  );
};

export default ServiceJourneyGuide;