
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginScreenProps {
  onLogin: (role: UserRole) => void;
}

// Added correct prop typing for LoginScreen using the defined interface
const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [pin, setPin] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.MEMBER);
  const [isError, setIsError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For this prototype, any 6 digit pin works, but we can simulate a check
    if (pin.length === 6) {
      onLogin(selectedRole);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
    }
  };

  const roles = [
    { id: UserRole.FOUNDER, label: 'Founder', icon: '💎', desc: 'Pemilik Visi & Aset IP.', masterPin: '999999' },
    { id: UserRole.BOARD, label: 'Pengurus', icon: '👔', desc: 'Pengelola Likuiditas & Kebijakan.', masterPin: '888888' },
    { id: UserRole.STAFF, label: 'Staf Admin', icon: '💻', desc: 'Pelaksana Teknis & Verifikasi.', masterPin: '000000' },
    { id: UserRole.LEADER, label: 'Duta Wilayah', icon: '🛵', desc: 'Penggerak Komunitas Lapangan.', masterPin: '111111' },
    { id: UserRole.AUDITOR, label: 'Pengawas', icon: '⚖️', desc: 'Audit Independen & Anti-Fraud.', masterPin: '777777' },
    { id: UserRole.MEMBER, label: 'Anggota', icon: '👤', desc: 'Pemilik Modal & Pengguna Jasa.', masterPin: '123456' },
  ];

  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center p-4 z-[100] overflow-y-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
         {/* Brand Section */}
         <div className="hidden lg:flex flex-col space-y-8">
            <div className="flex flex-col">
               <h1 className="text-4xl font-black text-white italic tracking-tight">KoperatifAI</h1>
               <p className="text-indigo-400 uppercase tracking-widest font-black text-xs mt-2">The Future of Credit Unions</p>
            </div>
            <div className="space-y-6">
               <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-white/10 shadow-xl">🛡️</div>
                  <p className="text-slate-400 text-sm italic">"Keamanan setara bank, kedaulatan milik rakyat."</p>
               </div>
               <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-white/10 shadow-xl">🧠</div>
                  <p className="text-slate-400 text-sm italic">"Dipandu AI untuk kejujuran yang tak terbantahkan."</p>
               </div>
            </div>
            
            {/* Master PIN Cheat Sheet for Founder during Demo */}
            <div className="pt-8 border-t border-white/5">
               <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-4">Akses Cepat (Demo Only):</p>
               <div className="grid grid-cols-2 gap-2">
                  {roles.map(r => (
                    <div key={r.id} className="flex justify-between text-[9px] font-bold bg-white/5 p-2 rounded-lg border border-white/5">
                       <span className="text-slate-400">{r.label}</span>
                       <span className="text-indigo-400 font-mono">{r.masterPin}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Form Section */}
         <div className="bg-white rounded-[4rem] p-10 lg:p-16 shadow-2xl space-y-10 relative overflow-hidden">
            <div className="text-center space-y-2">
               <h2 className="text-3xl font-black text-slate-800">Selamat Malam!</h2>
               <p className="text-slate-500 text-sm">Pilih akses Anda & masukkan angka unik.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-8">
               <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Pilih Role Akses</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                     {roles.map((r) => (
                        <button 
                           key={r.id}
                           type="button"
                           onClick={() => setSelectedRole(r.id)}
                           className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                              selectedRole === r.id ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-slate-50 text-slate-400 hover:border-slate-100'
                           }`}
                        >
                           <span className="text-xl">{r.icon}</span>
                           <span className="text-[9px] font-black uppercase tracking-tighter leading-tight">{r.label}</span>
                        </button>
                     ))}
                  </div>
                  <p className="text-[10px] text-slate-400 text-center italic mt-2">
                    {roles.find(r => r.id === selectedRole)?.desc}
                  </p>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">PIN Keamanan (6 Angka)</label>
                    <span className="text-[9px] text-indigo-500 font-bold italic">PIN Demo: {roles.find(r => r.id === selectedRole)?.masterPin}</span>
                  </div>
                  <input 
                     type="password"
                     maxLength={6}
                     value={pin}
                     onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                     placeholder="••••••"
                     className={`w-full p-6 bg-slate-50 border-none rounded-3xl text-center text-4xl tracking-[1em] focus:ring-4 focus:ring-indigo-500 outline-none transition-all ${
                        isError ? 'bg-rose-50 ring-4 ring-rose-500' : ''
                     }`}
                  />
                  {isError && <p className="text-center text-rose-500 text-[10px] font-bold uppercase animate-bounce">PIN Harus 6 Angka!</p>}
               </div>

               <button 
                  type="submit"
                  className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-95 flex items-center justify-center gap-4 group"
               >
                  BUKA AKSES DIGITAL 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
               </button>
            </form>

            <div className="pt-6 text-center">
               <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 hover:underline">Butuh bantuan login?</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LoginScreen;
