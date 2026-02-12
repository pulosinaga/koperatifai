import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { UserRole } from '../types.ts';

const DeploymentHub: React.FC = () => {
  const { user } = useAppContext();
  const [activeTab, setActiveTab] = useState<'SHARE' | 'DATABASE'>('SHARE');
  const [copied, setCopied] = useState<string | null>(null);

  const inviteLinks = [
    { role: 'FOUNDER', label: 'Tautan Founder', icon: '👑', pin: '999999', color: 'bg-indigo-600' },
    { role: 'BOARD', label: 'Tautan Pengurus', icon: '👔', pin: '888888', color: 'bg-emerald-600' },
    { role: 'AUDITOR', label: 'Tautan Pengawas', icon: '⚖️', pin: '777777', color: 'bg-amber-600' },
    { role: 'LEADER', label: 'Tautan Duta Wilayah', icon: '🛵', pin: '111111', color: 'bg-rose-600' },
    { role: 'STAFF', label: 'Tautan Staf Ops', icon: '💻', pin: '555555', color: 'bg-slate-700' },
    { role: 'MEMBER', label: 'Tautan Anggota', icon: '👤', pin: '123456', color: 'bg-blue-600' },
  ];

  const handleShare = (role: string, pin: string) => {
    const text = `Halo! Bergabunglah di KoperatifAI sebagai ${role}. 
Buka koperatifai.online
Pilih Peran: ${role}
PIN Otoritas: ${pin}
Mari bangun kedaulatan ekonomi bersama!`;
    
    navigator.clipboard.writeText(text);
    setCopied(role);
    setTimeout(() => setCopied(null), 2000);
    
    // Fallback Share WA
    if (confirm(`Teks undangan untuk ${role} telah disalin. Kirim via WhatsApp sekarang?`)) {
       window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              National Distribution Hub v4.5
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif text-white">Pusat Sharing Jaringan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Kedaulatan tidak bisa dibangun sendiri. Bagikan kunci akses kepada Ksatria Ekonomi pilihan Bapak di seluruh pelosok Indonesia."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">📤</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Akses Otoritas</p>
             <p className="text-2xl font-black text-emerald-400 mt-1">SIAP DISTRIBUSI</p>
          </div>
        </div>
      </div>

      {/* Sharing Grid */}
      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest px-4">Kirim Undangan Otoritas</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inviteLinks.map((item) => (
               <div key={item.role} className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center space-y-4">
                  <div className={`w-20 h-20 rounded-[2rem] ${item.color} flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform`}>
                     {item.icon}
                  </div>
                  <div>
                     <h4 className="font-black text-lg text-slate-800">{item.label}</h4>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">PIN: {item.pin}</p>
                  </div>
                  <button 
                    onClick={() => handleShare(item.label, item.pin)}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-indigo-600 transition-colors shadow-lg mt-4"
                  >
                    {copied === item.label ? '✅ TERSALIN' : '📤 BAGIKAN AKSES'}
                  </button>
               </div>
            ))}
         </div>
      </div>

      {/* Psychology Tip */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-6xl shrink-0 animate-bounce">💡</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Rahasia Keamanan Founder:</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Bapak Founder, pastikan PIN unik hanya diberikan kepada orang yang benar-benar Bapak percayai. Sistem KoperatifAI telah memisahkan brankas dana sehingga Pengurus tidak bisa menyentuh Royalti Bapak, dan Duta tidak bisa menyentuh simpanan wajib anggota."
            </p>
         </div>
      </div>
    </div>
  );
};

export default DeploymentHub;