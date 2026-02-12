import React from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { AppView } from '../types.ts';

const Membership: React.FC = () => {
  const { user, navigate } = useAppContext();
  const badges = [
    { name: 'Platinum Active', icon: '💎', color: 'bg-indigo-100 text-indigo-700', desc: 'Status tertinggi: Memiliki saldo simpanan > Rp 10jt dan aktif di seluruh fitur.' },
    { name: 'Anggota Aktif', icon: '✅', color: 'bg-emerald-100 text-emerald-700', desc: 'Telah menjadi anggota selama > 3 bulan dengan setoran wajib tanpa putus.' },
    { name: 'Peminjam Disiplin', icon: '⚡', color: 'bg-blue-100 text-blue-700', desc: 'Memiliki catatan pembayaran angsuran tepat waktu 100%.' },
    { name: 'Literasi Finansial', icon: '📚', color: 'bg-amber-100 text-amber-700', desc: 'Menyelesaikan 5+ modul edukasi AI di Smart Education.' },
    { name: 'Saksi Terpercaya', icon: '🤝', color: 'bg-rose-100 text-rose-700', desc: 'Telah memverifikasi integritas 10+ anggota baru di wilayahnya.' },
    { name: 'Biometric Verified', icon: '🤳', color: 'bg-emerald-100 text-emerald-700', desc: 'Identitas wajah telah tervalidasi sinkron dengan e-KTP melalui AI Vision.' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto pb-20">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Virtual ID Card */}
        <div className="relative w-full lg:w-96 h-64 bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden border border-white/20 group shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/20 rounded-full -ml-12 -mb-12 blur-2xl"></div>
          
          <div className="relative h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-black text-xl tracking-tight italic">KoperatifAI</h3>
                <p className="text-indigo-200 text-[8px] uppercase tracking-[0.2em] font-black">Digital Ownership Card</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold">◈</div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl shadow-inner relative">
                 👤
                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-indigo-700 flex items-center justify-center text-[10px] shadow-lg">✓</div>
              </div>
              <div>
                <p className="text-white font-black text-lg">{user?.name || 'Loading...'}</p>
                <p className="text-indigo-200 text-xs font-mono italic">Biometrically Secured</p>
                <div className="mt-1 flex gap-2">
                   <span className="px-2 py-0.5 bg-emerald-500/20 rounded-md border border-emerald-500/30 text-[8px] text-emerald-300 font-black uppercase">NIK VERIFIED</span>
                   <span className="px-2 py-0.5 bg-indigo-500/20 rounded-md border border-indigo-500/30 text-[8px] text-indigo-300 font-black uppercase">FACE OK</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-indigo-300 text-[8px] uppercase font-black tracking-widest">Valid Thru</p>
                <p className="text-white text-xs font-bold">12 / 2028</p>
              </div>
              <div className="text-right">
                <p className="text-indigo-300 text-[8px] uppercase font-black tracking-widest">Global Status</p>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-emerald-400 text-[10px] font-black uppercase tracking-tighter">PLATINUM ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-8">
          <div className="flex justify-between items-center border-b border-slate-50 pb-6">
            <h4 className="text-xl font-black text-slate-800 italic">Informasi Profil Pemilik</h4>
            <div className="flex items-center gap-3">
              <div className="text-right">
                 <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Skor Reputasi</p>
                 <p className="text-sm font-black text-indigo-600 tracking-tighter">{user?.reputationScore || 0} XP</p>
              </div>
              <button onClick={() => navigate(AppView.MEMBERSHIP_CERTIFICATE)} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg">
                 LIHAT SERTIFIKAT PDF
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Nama Lengkap (e-KTP)</p>
              <p className="text-slate-700 font-bold uppercase">{user?.name}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">NIK (Hashed)</p>
              <p className="text-slate-700 font-mono font-bold">3275***********0003</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Status Keamanan</p>
              <div className="flex items-center gap-2">
                 <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg uppercase">Biometric Enabled</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Nomor Anggota</p>
              <p className="text-emerald-600 font-black italic">{user?.memberId}</p>
            </div>
          </div>

          {/* e-KTP Verification Status Info */}
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">🆔</div>
                <div>
                   <p className="text-xs font-bold text-slate-800">Sinkronisasi Identitas 4 Lapis</p>
                   <p className="text-[10px] text-slate-400">Verified via KTP, GPS, SLIK, & Biometric</p>
                </div>
             </div>
             <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-widest animate-pulse">Ultimate Trust</span>
          </div>

          {/* Expanded Contribution Badges Section */}
          <div className="pt-8 border-t border-slate-50">
             <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                   <span className="text-lg">🏆</span>
                   <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Lencana Kontribusi & Achievement</h5>
                </div>
                <button onClick={() => navigate(AppView.SHU_DISTRIBUTION)} className="text-[9px] font-bold text-indigo-600 italic hover:underline">Download Laporan SHU (PDF)</button>
             </div>
             <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                   <div 
                    key={i} 
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl border border-current/10 shadow-sm transition-all hover:scale-105 hover:shadow-md cursor-help group relative ${badge.color}`}
                   >
                      <span className="text-lg">{badge.icon}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{badge.name}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;