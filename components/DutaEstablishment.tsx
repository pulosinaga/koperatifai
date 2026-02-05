
import React from 'react';

const DutaEstablishment: React.FC = () => {
  const requirements = [
    {
      title: 'Kredibilitas Karakter',
      items: [
        'Anggota Platinum Aktif > 6 Bulan.',
        'KoperatifAI Score minimal 850 (Prime Status).',
        'Tidak pernah memiliki riwayat tunggakan angsuran.'
      ],
      icon: '🧠',
      color: 'border-indigo-600'
    },
    {
      title: 'Basis Komunitas',
      items: [
        'Memiliki minimal 20 referral aktif di wilayah yang sama.',
        'Mendapat vouching digital dari 10 anggota senior.',
        'Mampu mengadakan pertemuan literasi sebulan sekali.'
      ],
      icon: '🤝',
      color: 'border-emerald-600'
    },
    {
      title: 'Infrastruktur Pos',
      items: [
        'Memiliki smartphone Android/iOS minimal RAM 4GB.',
        'Lokasi basecamp tervalidasi Geotagging.',
        'Sinyal internet stabil di lokasi Pos Perwakilan.'
      ],
      icon: '📍',
      color: 'border-amber-600'
    }
  ];

  const steps = [
    { label: 'Submit Aplikasi', desc: 'Isi formulir pendaftaran Duta di aplikasi.' },
    { label: 'Audit AI', desc: 'AI melakukan verifikasi data keuangan & referral Anda.' },
    { label: 'Wawancara Digital', desc: 'Diskusi visi-misi via video call dengan Founder/Pengurus.' },
    { label: 'Aktivasi Hub', desc: 'Wilayah Anda muncul di peta nasional sebagai Pos Resmi.' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Establishment Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Syarat Pendirian Duta Wilayah: <br/>Membangun Integritas Lokal.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami tidak mencari agen penjual, kami mencari **Pemimpin Komunitas**. Pastikan Anda memenuhi standar tinggi kami untuk menjaga keamanan dana anggota.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🚩</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Regional Hub Status</p>
             <p className="text-xl font-black text-emerald-400 mt-1">OPEN FOR ENROLLMENT</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Strict Vetting Protocol Enabled</p>
          </div>
        </div>
      </div>

      {/* Requirements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {requirements.map((req, i) => (
           <div key={i} className={`bg-white p-10 rounded-[3rem] border-t-8 ${req.color} shadow-sm space-y-6 hover:shadow-xl transition-all group`}>
              <div className="text-5xl group-hover:scale-110 transition-transform">{req.icon}</div>
              <h4 className="text-xl font-black text-slate-800 uppercase tracking-tighter">{req.title}</h4>
              <ul className="space-y-4">
                 {req.items.map((item, idx) => (
                   <li key={idx} className="flex gap-3 items-start">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{item}</p>
                   </li>
                 ))}
              </ul>
           </div>
         ))}
      </div>

      {/* The Application Process */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Langkah Pendaftaran Pos Wilayah</h3>
            <p className="text-slate-500">Proses transparansi digital yang menjamin kualitas pimpinan.</p>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            <div className="hidden lg:block absolute top-10 left-24 right-24 h-0.5 bg-slate-100"></div>
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10 group">
                 <div className="w-20 h-20 bg-indigo-50 rounded-[2rem] border-2 border-white flex items-center justify-center text-2xl font-black text-indigo-600 mb-4 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {i + 1}
                 </div>
                 <h5 className="font-bold text-slate-800 text-sm">{s.label}</h5>
                 <p className="text-[10px] text-slate-400 mt-2 leading-relaxed px-4 italic">"{s.desc}"</p>
              </div>
            ))}
         </div>
      </div>

      {/* Founder's Wisdom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-xl">
            <h3 className="text-2xl font-black italic">Kenapa Syaratnya Begitu Ketat?</h3>
            <p className="text-sm text-indigo-100 leading-relaxed">
               Duta adalah **Pemegang Kunci Kepercayaan** rakyat di daerah. Jika kita asal memilih, reputasi KoperatifAI akan hancur. Ketat di awal berarti **Keamanan Abadi** bagi simpanan anggota.
            </p>
            <div className="space-y-4">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                     <h5 className="font-bold text-sm">Proteksi Reputasi</h5>
                     <p className="text-[10px] text-slate-400">Mencegah koperasi disusupi oleh oknum penipu.</p>
                  </div>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="text-3xl">📈</div>
                  <div>
                     <h5 className="font-bold text-sm">Standar Layanan</h5>
                     <p className="text-[10px] text-slate-400">Menjamin setiap anggota di desa mendapat edukasi yang sama kualitasnya dengan di kota.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center space-y-8">
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl mx-auto border border-emerald-100">👔</div>
            <h4 className="text-2xl font-black text-slate-800 italic">"Kepemimpinan Adalah Pelayanan."</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto italic">
               "Seorang Duta tidak memerintah, tapi membantu pedagang pasar mengelola stok, membantu petani mendapatkan modal, dan memastikan tidak ada anggota yang tertipu Pinjol."
            </p>
            <div className="pt-4">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Ajukan Proposal Wilayah Saya</button>
            </div>
         </div>
      </div>

      {/* Integration Message */}
      <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🏛️</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-900 italic leading-tight">Legalitas Perwakilan Wilayah</h4>
            <p className="text-emerald-700/70 mt-2 leading-relaxed text-sm">
               Secara hukum, Pos Duta Wilayah adalah **Kantor Kas Virtual** yang terdaftar di AD/ART Koperasi. Duta memegang mandat resmi untuk melakukan verifikasi lapangan yang sah secara hukum perdata dan aturan internal KoperatifAI.
            </p>
         </div>
      </div>
    </div>
  );
};

export default DutaEstablishment;
