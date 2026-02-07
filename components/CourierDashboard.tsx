
import React, { useState } from 'react';

const availableJobs = [
  { id: 1, from: 'Pasar Cianjur', to: 'Desa Sukatani', item: 'Beras 10kg (x5)', fee: 'Rp 12.000', dist: '3.2km', icon: '🌾' },
  { id: 2, from: 'Dapur Bunda', to: 'Kantor Desa Cipanas', item: 'Paket Katering (x12)', fee: 'Rp 8.000', dist: '1.5km', icon: '🍱' },
  { id: 3, from: 'Toko Madu Murni', to: 'Cluster Permai', item: 'Madu 500ml', fee: 'Rp 5.000', dist: '0.8km', icon: '🍯' },
];

const CourierDashboard: React.FC = () => {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [isOnline, setIsOnline] = useState(false);

  const takeJob = (id: number) => {
    setActiveJob(id);
    alert("Tugas diterima! Silakan ambil barang di lokasi penjemputan.");
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Courier Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Peer-to-Peer Logistics Node
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Kurir Desa: <br/>Ubah Perjalanan Jadi Penghasilan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Berangkat kerja atau pulang pasar? Ambil titipan anggota lain dan dapatkan penghasilan tambahan langsung ke saldo tabungan Anda."
            </p>
            <button 
              onClick={() => setIsOnline(!isOnline)}
              className={`px-10 py-4 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl transition-all flex items-center gap-4 active:scale-95 ${isOnline ? 'bg-emerald-600 text-white' : 'bg-white text-slate-900'}`}
            >
              {isOnline ? '🟢 SAYA SEDANG ONLINE' : '⚪ AKTIFKAN MODE KURIR'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Pendapatan Kurir Hari Ini</p>
             <p className="text-4xl font-black text-white mt-2 italic">Rp 45.000</p>
             <div className="mt-4 p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <p className="text-[9px] text-emerald-400 font-black uppercase">Service Rating: 5.0 ★</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Jobs List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Tugas Tersedia Disekitar Anda</h3>
            {isOnline ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableJobs.map((job) => (
                    <div key={job.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                       <div className="flex justify-between items-start mb-6">
                          <div className="text-5xl group-hover:scale-110 transition-transform">{job.icon}</div>
                          <div className="text-right">
                             <p className="text-xl font-black text-emerald-600 italic">{job.fee}</p>
                             <p className="text-[8px] font-black text-slate-400 uppercase">Biaya Jasa</p>
                          </div>
                       </div>
                       <div className="space-y-4 flex-1">
                          <div>
                             <h4 className="font-black text-slate-800 text-lg leading-tight">{job.item}</h4>
                             <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Jarak: {job.dist}</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-2xl space-y-2">
                             <div className="flex items-center gap-3">
                                <span className="text-xs">📍</span>
                                <p className="text-[10px] font-bold text-slate-600">Ambil: {job.from}</p>
                             </div>
                             <div className="flex items-center gap-3">
                                <span className="text-xs">🏁</span>
                                <p className="text-[10px] font-bold text-slate-600">Antar: {job.to}</p>
                             </div>
                          </div>
                       </div>
                       <button 
                        onClick={() => takeJob(job.id)}
                        className="w-full mt-6 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-indigo-700 transition-all"
                       >
                          Terima Tugas
                       </button>
                    </div>
                  ))}
               </div>
            ) : (
               <div className="bg-white p-20 rounded-[4rem] border border-slate-100 shadow-inner flex flex-col items-center text-center space-y-6 opacity-40 grayscale">
                  <div className="text-8xl">🛵</div>
                  <p className="max-w-xs font-bold text-xl">Aktifkan mode kurir untuk melihat tugas pengiriman di wilayah Anda.</p>
               </div>
            )}
         </div>

         {/* Courier Logic Side */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Kenapa Kurir Koperasi?</h4>
               <ul className="space-y-6">
                  {[
                    { t: 'Tidak Ada Potongan App', d: '100% biaya jasa kurir masuk ke dompet Anda. Koperasi hanya ambil Rp 100.', i: '💰' },
                    { t: 'Rute Searah', d: 'Gunakan AI untuk mencari tugas yang searah dengan tujuan harian Anda.', i: '🗺️' },
                    { t: 'Cair Instan', d: 'Begitu barang sampai & scan QR, upah langsung masuk saldo sukarela Anda.', i: '⚡' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                       <span className="text-2xl">{item.i}</span>
                       <div>
                          <h5 className="font-bold text-sm text-white">{item.t}</h5>
                          <p className="text-[10px] text-slate-400 leading-relaxed mt-1 italic">"{item.d}"</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">📦</div>
               <h4 className="font-bold text-indigo-900 uppercase text-xs tracking-widest">Gudang Duta Wilayah</h4>
               <p className="text-[10px] text-indigo-700 leading-relaxed italic">
                  "Anda bisa menitipkan barang di Hub Duta Wilayah jika penerima sedang tidak ada di tempat. Logistik sirkular yang fleksibel."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CourierDashboard;
