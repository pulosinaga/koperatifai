
import React from 'react';

const GlobalNetwork: React.FC = () => {
  const initiatives = [
    {
      title: 'Pertukaran Teknologi (R&D)',
      desc: 'Berbagi modul AI dengan Credit Union di Kanada & Jerman untuk mempercepat inovasi tanpa biaya lisensi mahal.',
      status: 'Ready for Integration',
      icon: '⚙️'
    },
    {
      title: 'Standar Monitoring PEARLS',
      desc: 'Sistem pelaporan otomatis yang sesuai dengan standar World Council of Credit Unions (WOCCU).',
      status: 'Fully Compliant',
      icon: '📊'
    },
    {
      title: 'Edukasi Lintas Negara',
      desc: 'Akses ke kurikulum finansial internasional yang dipersonalisasi oleh AI untuk anggota kita.',
      status: 'Knowledge Sharing',
      icon: '📖'
    },
    {
      title: 'Protokol Inter-Koperasi',
      desc: 'Kerangka kerja teknis untuk memfasilitasi transaksi antar-koperasi global di masa depan.',
      status: 'Conceptual Phase',
      icon: '🌐'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
        <div className="relative z-10">
          <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Principle 6: Cooperation
          </span>
          <h2 className="text-4xl font-black mt-4 leading-tight">Jaringan Pengembangan Global</h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed max-w-2xl">
            Kita tidak menerima modal asing, tapi kita berbagi <strong>Kecerdasan Kolektif</strong>. KoperatifAI dirancang untuk bersinergi dengan ekosistem Credit Union internasional.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initiatives.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-indigo-200 transition-all group">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-indigo-50 transition-colors">
              {item.icon}
            </div>
            <h4 className="text-xl font-black text-slate-800 mb-2">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              {item.status}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-[2.5rem] p-10 border border-indigo-100">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
             <h3 className="text-2xl font-black text-indigo-900 leading-tight">Keunggulan Kerjasama Non-Modal</h3>
             <p className="text-indigo-700/70 text-sm leading-relaxed">
               Dengan fokus pada kerjasama pengembangan (bukan modal), KoperatifAI menjaga **Kedaulatan Anggota**. Kita tetap memiliki 100% kendali atas arah kebijakan koperasi, namun mendapatkan manfaat dari kemajuan teknologi global.
             </p>
             <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                   <p className="text-indigo-600 font-black text-lg">0%</p>
                   <p className="text-[10px] text-slate-400 uppercase font-bold">Intervensi Pihak Luar</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                   <p className="text-indigo-600 font-black text-lg">100%</p>
                   <p className="text-[10px] text-slate-400 uppercase font-bold">Kedaulatan Teknologi</p>
                </div>
             </div>
          </div>
          <div className="bg-white p-2 rounded-[2rem] shadow-xl">
             <div className="bg-indigo-900 text-white p-8 rounded-[1.8rem] text-center w-64">
                <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-2">Target Mitra</p>
                <div className="space-y-4">
                   <p className="font-bold border-b border-white/10 pb-2">ACCU (Asia)</p>
                   <p className="font-bold border-b border-white/10 pb-2">DGRV (Jerman)</p>
                   <p className="font-bold border-b border-white/10 pb-2">Credit Union Solutions (AS)</p>
                   <p className="font-bold">Desjardins (Kanada)</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
