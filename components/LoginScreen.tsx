
import React, { useState, useEffect } from 'react';
import { UserRole } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const LoginScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { login } = useAppContext();
  const [pin, setPin] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.MEMBER);
  const [isError, setIsError] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const roleAccess = {
    [UserRole.MEMBER]: '123456',
    [UserRole.LEADER]: '111111', 
    [UserRole.STAFF]: '555555',
    [UserRole.BOARD]: '888888', 
    [UserRole.AUDITOR]: '777777', 
    [UserRole.GOVERNMENT]: '112233',
    [UserRole.FOUNDER]: '999999',
    [UserRole.LEADER_PROVINCE]: '222222',
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    
    if (pin === roleAccess[selectedRole]) {
       await login(selectedRole, pin);
    } else {
       setIsError(true);
       setPin('');
       setTimeout(() => setIsError(false), 2000);
    }
    setIsAuthenticating(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl p-10 rounded-[4rem] border border-white/20 shadow-2xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white italic uppercase">Cockpit Otoritas</h2>
            <p className="text-xs text-slate-400 mt-2">Pilih peran Anda dan masukkan PIN.</p>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-10">
             {Object.keys(roleAccess).map(role => (
               <button 
                key={role}
                onClick={() => setSelectedRole(role as UserRole)}
                className={`p-3 rounded-2xl transition-all ${selectedRole === role ? 'bg-indigo-600 text-white scale-110 shadow-lg' : 'bg-white/5 text-slate-500'}`}
               >
                 <span className="text-[7px] font-black uppercase">{role}</span>
               </button>
             ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0,6))}
              placeholder="PIN"
              className="w-full bg-black/40 border-2 border-white/10 rounded-[2rem] p-6 text-4xl text-center font-black tracking-[0.5em] text-white outline-none focus:border-indigo-500"
            />
            <button className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase text-xs">MASUK SISTEM</button>
          </form>
          
          <button onClick={onBack} className="w-full mt-4 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest">KEMBALI KE BERANDA</button>
      </div>
    </div>
  );
};

export default LoginScreen;
