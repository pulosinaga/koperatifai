
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { UserRole } from '../types.ts';

const DeploymentHub: React.FC = () => {
  const { user } = useAppContext();
  const [copied, setCopied] = useState<string | null>(null);

  const allInviteLinks = [
    { role: UserRole.FOUNDER, label: 'Akses Founder', icon: '👑', pin: '999999', color: 'bg-indigo-600' },
    { role: UserRole.GOVERNMENT, label: 'Akses Pemerintah', icon: '🏛️', pin: '112233', color: 'bg-slate-800' },
    { role: UserRole.LEADER_PROVINCE, label: 'Akses Duta Provinsi', icon: '🦅', pin: '222222', color: 'bg-indigo-400' },
    { role: UserRole.BOARD, label: 'Akses Pengurus', icon: '👔', pin: '888888', color: 'bg-emerald-600' },
    { role: UserRole.LEADER, label: 'Akses Duta Desa', icon: '🛵', pin: '111111', color: 'bg-rose-600' },
    { role: UserRole.MEMBER, label: 'Akses Anggota', icon: '👤', pin: '123456', color: 'bg-blue-600' },
  ];

  const getVisibleLinks = () => {
    const role = user?.role || UserRole.MEMBER;
    if (role === UserRole.FOUNDER) return allInviteLinks;
    if (role === UserRole.GOVERNMENT) return [];
    if (role === UserRole.LEADER_PROVINCE) return allInviteLinks.filter(l => [UserRole.LEADER, UserRole.MEMBER].includes(l.role as UserRole));
    return allInviteLinks.filter(l => l.role === UserRole.MEMBER);
  };

  const visibleLinks = getVisibleLinks();

  const handleShare = (targetRole: string, roleKey: string, pin: string) => {
    const deepLink = `${window.location.origin}/?targetRole=${roleKey}`;
    const text = `🚀 UNDANGAN OTORITAS KOPERATIFAI 🚀\n\nAnda diundang bergabung sebagai: *${targetRole}*\n\nLangkah Keamanan:\n1. Klik Link Aktivasi: ${deepLink}\n2. Masukkan PIN Otoritas: *${pin}*\n\n_Catatan: Akses ini terkunci khusus untuk peran Anda._`;
    
    navigator.clipboard.writeText(text);
    setCopied(targetRole);
    setTimeout(() => setCopied(null), 2000);
    
    if (confirm(`Tautan terkunci untuk ${targetRole} telah disalin. Kirim ke WhatsApp?`)) {
       window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Sovereign Invite Gateway v6.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif text-white">Distribusi Otoritas Terkunci.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Bapak Founder, gunakan link di bawah untuk membangun hierarki kedaulatan Anda secara aman dan terukur."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🔐</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Multi-Tier Access</p>
             <p className="text-2xl font-black text-emerald-400 mt-1 uppercase tracking-tighter">ENCRYPTED LINKS</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest px-4">Generate Tautan Baru</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleLinks.map((item) => (
               <div key={item.role} className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center space-y-4">
                  <div className={`w-20 h-20 rounded-[2rem] ${item.color} flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform text-white`}>
                     {item.icon}
                  </div>
                  <div>
                     <h4 className="font-black text-lg text-slate-800">{item.label}</h4>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">PIN: {item.pin}</p>
                  </div>
                  <button 
                    onClick={() => handleShare(item.label, item.role, item.pin)}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-indigo-600 transition-colors shadow-lg mt-4"
                  >
                    {copied === item.label ? '✅ TERSALIN' : '📤 COPY LINK TERKUNCI'}
                  </button>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default DeploymentHub;
