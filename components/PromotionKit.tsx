import React, { useState } from 'react';

const PromotionKit: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://koperatifai.online/join?ref=DUTA_SOVEREIGN_01";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const assets = [
    { title: 'Poster "Stop Pinjol"', desc: 'Cocok untuk warga yang terjerat hutang luar.', icon: '🛡️', color: 'bg-rose-600' },
    { title: 'Poster "SHU Melimpah"', desc: 'Menonjolkan bagi hasil yang adil.', icon: '💰', color: 'bg-emerald-600' },
    { title: 'Kartu Nama Digital', desc: 'Identitas resmi Duta dengan QR Code.', icon: '🆔', color: 'bg-indigo-600' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">Amunisi Promosi Duta.</h2>
        <p className="text-slate-500 font-medium">Alat bantu visual untuk memperluas jaringan kedaulatan di wilayah Anda.</p>
      </header>

      {/* Referral QR Card */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
         <div className="w-48 h-48 bg-slate-900 rounded-[2.5rem] flex items-center justify-center p-4 shadow-2xl relative">
            {/* Mock QR Pattern */}
            <div className="w-full h-full bg-white rounded-xl p-2">
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-600 to-white"></div>
            </div>
            <div className="absolute w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg border-2 border-slate-900">◈</div>
         </div>
         <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-black text-slate-800 italic">Pintu Masuk Digital Anda</h3>
            <p className="text-slate-500 font-medium">Calon anggota cukup scan kode ini untuk mendaftar di bawah bimbingan Anda. Uang Royalti Jasa Pembinaan otomatis masuk ke saldo Anda.</p>
            <div className="flex gap-4 p-2 bg-slate-50 rounded-2xl border border-slate-200">
               <code className="flex-1 px-4 py-2 text-xs font-mono text-indigo-600 truncate">{referralLink}</code>
               <button onClick={handleCopy} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white'}`}>
                  {copied ? 'BERHASIL' : 'SALIN LINK'}
               </button>
            </div>
         </div>
      </div>

      {/* Visual Assets Grid */}
      <div className="space-y-8">
         <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest px-4">Download Aset Desain</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assets.map((asset, i) => (
               <div key={i} className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className={`h-48 ${asset.color} flex items-center justify-center text-7xl group-hover:scale-110 transition-transform`}>
                     {asset.icon}
                  </div>
                  <div className="p-8 space-y-4">
                     <h4 className="text-xl font-black text-slate-800 italic">{asset.title}</h4>
                     <p className="text-xs text-slate-500 leading-relaxed italic">"{asset.desc}"</p>
                     <button className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-black uppercase text-[9px] tracking-widest border border-slate-100 hover:bg-indigo-600 hover:text-white transition-all">SIMPAN POSTER</button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl animate-bounce">📱</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-indigo-900 italic leading-tight">Guerilla Marketing Tip:</h4>
            <p className="text-indigo-700/70 text-sm mt-2 leading-relaxed">
               "Pasang poster ini di depan warung yang paling ramai di desa. Berikan pemilik warung poin reputasi tambahan jika ia mau membantu menempelkan stiker QR pendaftaran Anda."
            </p>
         </div>
      </div>
    </div>
  );
};

export default PromotionKit;