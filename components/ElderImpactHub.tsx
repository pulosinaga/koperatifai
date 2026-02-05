
import React from 'react';

const elders = [
  { 
    id: 1, 
    name: 'Pak Budi Utama', 
    age: 68, 
    business: 'Budidaya Lele Organik', 
    impact: 'Memasok protein murah untuk 50 keluarga anggota.',
    revenue: 'Rp 2.4jt/bln', 
    loanStatus: 'Lunas',
    icon: '👴',
    badge: 'Senior Pioneer'
  },
  { 
    id: 2, 
    name: 'Ibu Hajah Salamah', 
    age: 72, 
    business: 'Rajutan Tas Premium', 
    impact: 'Melatih 5 ibu rumah tangga muda menjadi pengrajin.',
    revenue: 'Rp 4.2jt/bln', 
    loanStatus: 'Lancar',
    icon: '🧕',
    badge: 'Impact Mentor'
  },
  { 
    id: 3, 
    name: 'Mbah Slamet', 
    age: 75, 
    business: 'Kebun Hidroponik Desa', 
    impact: 'Pusat literasi agrikultur bagi cucu anggota.',
    revenue: 'Rp 1.5jt/bln', 
    loanStatus: 'Lancar',
    icon: '👴',
    badge: 'Eco Warrior'
  },
];

const ElderImpactHub: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hub Hero */}
      <div className="bg-emerald-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Intergenerational Solidarity
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pahlawan Perak KoperatifAI: <br/>Bukti Karya Tak Mengenal Usia.</h2>
            <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl font-medium">
              Kenali para orang tua hebat yang tetap produktif dan berdikari. Dukungan Anda di marketplace adalah apresiasi nyata bagi mereka.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="text-6xl mb-4">👑</div>
             <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Total Modal Produktif Lansia</p>
             <p className="text-4xl font-black text-emerald-600 mt-1 italic">Rp 450 Juta</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-bold">Tersebar di 12 Wilayah Duta</p>
          </div>
        </div>
      </div>

      {/* Elder Showcase Grid */}
      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic">Profil Inspirasi Minggu Ini</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elders.map((elder) => (
               <div key={elder.id} className="bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                  <div className="p-10 flex flex-col items-center text-center space-y-4">
                     <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                        {elder.icon}
                     </div>
                     <div>
                        <h4 className="text-xl font-black text-slate-800">{elder.name}, {elder.age}th</h4>
                        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{elder.badge}</p>
                     </div>
                     <div className="p-4 bg-emerald-50 rounded-2xl w-full border border-emerald-100">
                        <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Usaha Hobi:</p>
                        <p className="text-sm font-bold text-emerald-900 leading-tight">{elder.business}</p>
                     </div>
                     <p className="text-xs text-slate-500 italic leading-relaxed">"{elder.impact}"</p>
                  </div>
                  <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                     <div>
                        <p className="text-[8px] font-black text-slate-400 uppercase">Omzet AI Track</p>
                        <p className="text-sm font-black text-slate-800">{elder.revenue}</p>
                     </div>
                     <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg">Beli Produknya</button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Philosophy of Circular Silver Economy */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="flex-1 space-y-8">
               <h3 className="text-3xl font-black italic text-indigo-400">Filosofi "Silver Economy" Koperasi</h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                  "Menghargai masa tua bukan dengan menyuruh mereka berhenti, tapi dengan menyediakan **Ekosistem untuk Berkontribusi**."
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <span className="text-2xl mb-2 block">🧠</span>
                     <h5 className="font-bold text-white">Transfer Ilmu</h5>
                     <p className="text-xs text-slate-500 mt-1">Lansia menjadi mentor bagi anggota muda dalam forum komunitas.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <span className="text-2xl mb-2 block">⚖️</span>
                     <h5 className="font-bold text-white">Stabilitas Modal</h5>
                     <p className="text-xs text-slate-500 mt-1">Dana pensiun yang mengendap menjadi likuiditas jangka panjang koperasi.</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-96 p-10 bg-indigo-600 rounded-[4rem] text-center shadow-2xl rotate-2">
               <div className="text-6xl mb-4">👵👴</div>
               <h4 className="text-xl font-bold italic">"Sehat Mental Melalui Produktivitas."</h4>
               <p className="text-xs text-indigo-100 mt-4 leading-relaxed italic">Inilah esensi ekonomi Pancasila versi 4.0.</p>
            </div>
         </div>
      </div>

      {/* Action Banner for Young Members */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center text-5xl shrink-0 animate-pulse border-4 border-rose-100">❤️</div>
         <div className="space-y-4">
            <h4 className="text-3xl font-black text-slate-800 max-w-xl italic leading-tight">Dukung Produk Orang Tua Kita.</h4>
            <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
               Setiap transaksi di "Silver Marketplace" memiliki **Zero Admin Fee** dan berkontribusi langsung pada kesehatan mental para anggota senior kita.
            </p>
         </div>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Lihat Seluruh Katalog Lansia</button>
            <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-xl">Donasi Bibit untuk Mbah Slamet</button>
         </div>
      </div>
    </div>
  );
};

export default ElderImpactHub;
