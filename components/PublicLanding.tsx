import React from 'react';

const PublicLanding: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30 font-sans">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center font-black shadow-lg shadow-indigo-500/20">◈</div>
          <span className="font-black text-xl tracking-tighter italic">KoperatifAI<span className="text-indigo-500">.online</span></span>
        </div>
        <button 
          onClick={onStart}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
        >
          Masuk Cockpit
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Kedaulatan Ekonomi Rakyat 4.0</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight italic">
            Bukan Bank.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Tapi Milik Anda.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            Hentikan pemerasan bunga pinjol. Bergabunglah dengan ekosistem koperasi kredit digital tercanggih. Kelola modal kolektif secara transparan dengan bantuan AI.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button 
              onClick={onStart}
              className="px-12 py-6 bg-white text-slate-900 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-indigo-500 hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Mulai Bangun Aset
            </button>
            <button className="px-12 py-6 bg-white/5 text-white border border-white/10 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Lihat Live Transparansi
            </button>
          </div>
        </div>

        {/* Floating Trust Stats */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 relative z-10">
          {[
            { l: 'Anggota Aktif', v: '1,248+', i: '👥' },
            { l: 'SHU Terdistribusi', v: 'Rp 452M+', i: '💰' },
            { l: 'Bunga Mikro', v: '0.9%', i: '📉' },
            { l: 'Sistem Audit', v: 'AI Sentinel', i: '🛡️' },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/5 text-center hover:border-indigo-500/30 transition-all group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{s.i}</div>
              <p className="text-2xl font-black italic">{s.v}</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-32 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5">
        <div className="space-y-6">
          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-600/20">⚖️</div>
          <h3 className="text-3xl font-black italic">Bunga Adil</h3>
          <p className="text-slate-400 leading-relaxed font-medium">Tanpa biaya admin tersembunyi. Keuntungan dari jasa pinjaman dikembalikan 100% ke anggota dalam bentuk SHU harian.</p>
        </div>
        <div className="space-y-6">
          <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-emerald-600/20">🤖</div>
          <h3 className="text-3xl font-black italic">Dipandu AI</h3>
          <p className="text-slate-400 leading-relaxed font-medium">Asisten keuangan AI memantau risiko 24/7 dan memberikan strategi kelola kas bagi pedagang kecil agar bisnisnya tidak pernah mati.</p>
        </div>
        <div className="space-y-6">
          <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-amber-600/20">🛡️</div>
          <h3 className="text-3xl font-black italic">Aman & Legal</h3>
          <p className="text-slate-400 leading-relaxed font-medium">Terakreditasi resmi dengan sistem Ledger Imutabel. Pengurus tidak bisa memanipulasi saldo karena setiap transaksi diaudit algoritma.</p>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center space-y-4">
        <div className="flex justify-center gap-6 grayscale opacity-30 mb-8">
           <span className="font-black text-xs italic tracking-widest uppercase">Kemenkop-UKM</span>
           <span className="font-black text-xs italic tracking-widest uppercase">WOCCU Global</span>
           <span className="font-black text-xs italic tracking-widest uppercase">Bank Indonesia</span>
        </div>
        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">KoperatifAI Indonesia v1.0 © 2026</p>
        <p className="text-[9px] text-slate-700 italic">"Membangun Kemakmuran Melalui Kecerdasan Kolektif."</p>
      </footer>
    </div>
  );
};

export default PublicLanding;