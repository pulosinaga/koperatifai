import React, { useState } from 'react';
import { UserRole } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const LoginScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { login } = useAppContext();
  const [pin, setPin] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.MEMBER);
  const [isError, setIsError] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const roles = [
    { id: UserRole.MEMBER, label: 'Anggota', icon: '👤', pin: '123456' },
    { id: UserRole.LEADER, label: 'Duta', icon: '🛵', pin: '111111' },
    { id: UserRole.STAFF, label: 'Staf Ops', icon: '💻', pin: '555555' },
    { id: UserRole.BOARD, label: 'Pengurus', icon: '👔', pin: '888888' },
    { id: UserRole.GOVERNMENT, label: 'Negara', icon: '🇮🇩', pin: '112233' },
    { id: UserRole.FOUNDER, label: 'Founder', icon: '👑', pin: '999999' },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    const success = await login(selectedRole, pin);
    if (!success) {
      setIsError(true);
      setPin('');
      setTimeout(() => setIsError(false), 1500);
    }
    setIsAuthenticating(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[100px]"></div>
      
      <div className="w-full max-w-md relative z-10 space-y-8">
        <button 
          onClick={onBack}
          className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors mb-4"
        >
          ← Kembali ke Beranda
        </button>

        <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-[4rem] border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-emerald-500"></div>
          
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-4xl mx-auto shadow-xl mb-6">🛡️</div>
            <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Otorisasi Akses</h2>
            <p className="text-xs text-slate-400 mt-2 font-medium">Pilih peran dan masukkan PIN keamanan Anda.</p>
          </div>

          {/* Role Selection Grid */}
          <div className="grid grid-cols-3 gap-3 mb-10">
             {roles.map(r => (
               <button 
                key={r.id}
                onClick={() => { setSelectedRole(r.id); setPin(''); }}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all border-2 ${
                  selectedRole === r.id ? 'bg-indigo-600/20 border-indigo-500 scale-110 shadow-lg' : 'bg-white/5 border-transparent opacity-30 hover:opacity-100'
                }`}
               >
                 <span className="text-xl">{r.icon}</span>
                 <span className="text-[7px] font-black uppercase tracking-tighter text-white text-center leading-tight">{r.label}</span>
               </button>
             ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] block text-center">PIN Rahasia 6 Digit</label>
              <input 
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0,6))}
                placeholder="••••••"
                className={`w-full bg-black/40 border-2 rounded-[2rem] p-6 text-4xl text-center font-black tracking-[0.5em] text-white outline-none transition-all ${
                  isError ? 'border-rose-500 animate-shake bg-rose-500/10' : 'border-white/10 focus:border-indigo-500'
                }`}
              />
            </div>

            <button 
              type="submit"
              disabled={pin.length < 6 || isAuthenticating}
              className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-30"
            >
              {isAuthenticating ? 'MENYINKRONKAN...' : 'MASUK KE COCKPIT'}
            </button>
          </form>

          <p className="mt-8 text-center text-[9px] text-slate-500 font-bold uppercase tracking-widest">
             {selectedRole === UserRole.GOVERNMENT ? "Hint: 112233" : "Gunakan PIN Default Role"}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
};

export default LoginScreen;