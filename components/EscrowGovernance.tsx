
import React from 'react';

const EscrowGovernance: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Institutional Funds Ownership
            </span>
            <h2 className="text-4xl font-black mt-4 leading-tight">Uang Anda Adalah Milik Lembaga, Bukan Orang.</h2>
            <p className="text-slate-400 mt-4 text-lg leading-relaxed max-w-xl">
              Kepastian hukum adalah fondasi KoperatifAI. Semua dana penampung (Escrow) secara legal terdaftar atas nama <b>Badan Hukum Koperasi</b>.
            </p>
          </div>
          <div className="w-64 bg-white/5 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/10 text-center">
             <div className="text-5xl mb-4">🏛️</div>
             <p className="text-xs font-bold text-slate-300 uppercase">Sertifikat Rekening</p>
             <div className="mt-2 p-2 bg-emerald-500/20 rounded-lg text-[9px] font-black text-emerald-400 border border-emerald-500/30">
               DEPOSITED AT BANK PARTNER <br/> A/N: KSP KOPERATIF AI INDONESIA
             </div>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
           <h3 className="text-2xl font-black text-slate-800">Bahaya Rekening Pribadi</h3>
           <p className="text-sm text-slate-500">Inilah alasan mengapa banyak koperasi tradisional gagal atau berakhir dengan penipuan.</p>
           <div className="space-y-4">
              {[
                { t: 'Risiko Ahli Waris', d: 'Jika pengurus meninggal, uang koperasi dianggap harta warisan pribadi.', icon: '💀' },
                { t: 'Penyitaan Sepihak', d: 'Jika pengurus punya hutang pribadi, rekening bisa disita oleh pihak ketiga.', icon: '⚖️' },
                { t: 'Moral Hazard', d: 'Mudah digunakan untuk keperluan pribadi tanpa persetujuan anggota.', icon: '📉' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-rose-50 rounded-2xl border border-rose-100">
                   <div className="text-xl shrink-0">{item.icon}</div>
                   <div>
                      <p className="text-sm font-bold text-rose-900">{item.t}</p>
                      <p className="text-[10px] text-rose-700">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-indigo-600 p-10 rounded-[3rem] text-white space-y-6 shadow-xl shadow-indigo-100">
           <h3 className="text-2xl font-black">Keamanan Rekening Lembaga</h3>
           <p className="text-sm text-indigo-100">KoperatifAI menggunakan struktur hukum yang melindungi dana kolektif anggota.</p>
           <div className="space-y-4">
              {[
                { t: 'Badan Hukum Terpisah', d: 'Aset koperasi terpisah total dari aset pribadi pengurus (Entity Shielding).', icon: '🛡️' },
                { t: 'Multi-Signature Vault', d: 'Pencairan dana besar membutuhkan otorisasi 3 pihak + AI Validation.', icon: '🔑' },
                { t: 'Audit Kontinyu', d: 'Setiap aliran uang dipantau oleh sistem AI dan Pengawas Independen.', icon: '📊' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                   <div className="text-xl shrink-0">{item.icon}</div>
                   <div>
                      <p className="text-sm font-bold text-white">{item.t}</p>
                      <p className="text-[10px] text-indigo-200">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Visual Workflow */}
      <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
        <h3 className="text-2xl font-black text-slate-800 text-center mb-12">Tata Kelola Dana (Governance)</h3>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
           
           {[
             { label: 'Setoran Anggota', icon: '💸', desc: 'Dana masuk via VA Personal' },
             { label: 'Escrow Kolektif', icon: '🏦', desc: 'Penampungan Atas Nama CU' },
             { label: 'Alokasi AI', icon: '🤖', desc: 'Dipilah ke Dana Cadangan/Pinjaman' },
             { label: 'SHU Kembali', icon: '🔄', desc: 'Keuntungan balik ke Anggota' }
           ].map((step, i) => (
             <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10 group">
                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-3xl mb-4 group-hover:border-indigo-600 transition-all shadow-sm">
                   {step.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-800">{step.label}</h4>
                <p className="text-[10px] text-slate-400 mt-1">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Legal Footer */}
      <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">⚖️</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-900 leading-tight">Sesuai UU No. 25 Tahun 1992</h4>
            <p className="text-emerald-700/70 mt-2 leading-relaxed">
               "Koperasi adalah badan hukum..." Artinya, rekening bank koperasi adalah milik entitas hukum tersebut. Pengurus hanya memiliki <b>Mandat Kelola</b>, bukan hak milik. KoperatifAI memperkuat mandat ini dengan audit digital yang tidak bisa dimanipulasi.
            </p>
         </div>
      </div>
    </div>
  );
};

export default EscrowGovernance;
