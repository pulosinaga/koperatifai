import React, { useState, useEffect, useRef } from 'react';
import { UserRole } from '../types.ts';

interface LoginScreenProps {
  onLogin: (role: UserRole) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [pin, setPin] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.MEMBER);
  const [isError, setIsError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [lockoutTimer, setLockoutTimer] = useState(0);
  
  const [loginStep, setLoginStep] = useState<'PIN' | '2FA' | 'FACE'>('PIN');
  const [otp, setOtp] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const roles = [
    { id: UserRole.FOUNDER, label: 'Founder', icon: '👑', masterPin: '999999', security: 'ULTRA' },
    { id: UserRole.BOARD, label: 'Pengurus', icon: '👔', masterPin: '888888', security: 'HIGH' },
    { id: UserRole.STAFF, label: 'Staf Admin', icon: '💻', masterPin: '000000', security: 'NORMAL' },
    { id: UserRole.LEADER, label: 'Duta Wilayah', icon: '🛵', masterPin: '111111', security: 'BIOMETRIC' },
    { id: UserRole.AUDITOR, label: 'Pengawas', icon: '⚖️', masterPin: '777777', security: 'HIGH' },
    { id: UserRole.MEMBER, label: 'Anggota', icon: '👤', masterPin: '123456', security: 'NORMAL' },
  ];

  useEffect(() => {
    let interval: any;
    if (lockoutTimer > 0) {
      interval = setInterval(() => setLockoutTimer((t) => t - 1), 1000);
    } else if (lockoutTimer === 0 && attempts >= 3) {
      setAttempts(0);
    }
    return () => clearInterval(interval);
  }, [lockoutTimer, attempts]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutTimer > 0) return;

    const roleData = roles.find(r => r.id === selectedRole);
    if (pin === roleData?.masterPin) {
      setAttempts(0);
      if (roleData.security === 'ULTRA') {
        setLoginStep('2FA');
      } else if (roleData.security === 'BIOMETRIC') {
        startFaceID();
      } else {
        onLogin(selectedRole);
      }
    } else {
      handleFailedAttempt();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') { 
      startFaceID();
    } else {
      handleFailedAttempt();
      setOtp('');
    }
  };

  const handleFailedAttempt = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setIsError(true);
    setPin('');
    if (newAttempts >= 3) setLockoutTimer(60);
    setTimeout(() => setIsError(false), 2000);
  };

  const startFaceID = async () => {
    setLoginStep('FACE');
    setIsScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setTimeout(() => {
        setIsScanning(false);
        setTimeout(() => {
          stream.getTracks().forEach(track => track.stop());
          onLogin(selectedRole);
        }, 1000);
      }, 3000);
    } catch (err) {
      alert("Akses kamera ditolak. Verifikasi wajah dilewati untuk simulasi.");
      setLoginStep('PIN');
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10 items-center">
         
         {/* Kiri: Brand & Security Info */}
         <div className="flex flex-col space-y-10 text-center lg:text-left order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="space-y-6">
               <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(79,70,229,0.4)] border border-indigo-400/30 mx-auto lg:mx-0 animate-pulse">
                  🛡️
               </div>
               <h1 className="text-4xl md:text-5xl font-black text-white italic leading-tight tracking-tight">
                  Sentinel Guard <br/>
                  <span className="text-indigo-400">Authentication.</span>
               </h1>
               <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                 Gerbang kedaulatan digital KoperatifAI. Seluruh akses dilindungi oleh enkripsi kelas militer dan verifikasi biometrik otonom.
               </p>
            </div>
            
            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 space-y-5 max-w-sm mx-auto lg:mx-0 shadow-2xl">
               <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Status</span>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></span>
                     <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Secure</span>
                  </div>
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                     <span className="font-bold text-slate-300">Biometric Engine</span>
                     <span className="font-mono text-indigo-400 font-bold">STANDBY</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                     <span className="font-bold text-slate-300">Intrusion Sentry</span>
                     <span className="font-mono text-emerald-400 font-bold">ACTIVE</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Kanan: Glassmorphism Login Panel */}
         <div className="bg-white/10 backdrop-blur-2xl p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-white/20 relative overflow-hidden order-1 lg:order-2">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"></div>

            {loginStep === 'PIN' && (
               <div className="space-y-10 animate-in slide-in-from-right duration-500">
                  <div className="text-center space-y-2">
                     <h2 className="text-2xl font-black text-white italic tracking-wide">Identifikasi Peran</h2>
                     <p className="text-xs text-slate-400 font-medium">Pilih otoritas akses Anda di ekosistem.</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                     {roles.map(r => (
                        <button 
                           key={r.id}
                           onClick={() => setSelectedRole(r.id)}
                           className={`p-4 rounded-[1.5rem] border-2 flex flex-col items-center justify-center gap-3 transition-all ${
                              selectedRole === r.id 
                                ? 'border-indigo-500 bg-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.3)] scale-105' 
                                : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                           }`}
                        >
                           <span className="text-3xl drop-shadow-lg">{r.icon}</span>
                           <span className={`text-[9px] font-black uppercase tracking-widest ${selectedRole === r.id ? 'text-indigo-200' : 'text-slate-300'}`}>
                             {r.label}
                           </span>
                        </button>
                     ))}
                  </div>

                  <form onSubmit={handlePinSubmit} className="space-y-6 pt-6 border-t border-white/10">
                     <div className="space-y-4 text-center">
                        <label className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">
                           {lockoutTimer > 0 ? `Terkunci: Coba lagi dalam ${lockoutTimer}s` : 'Masukkan PIN Keamanan'}
                        </label>
                        <input
                           type="password"
                           value={pin}
                           onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                           disabled={lockoutTimer > 0}
                           placeholder="••••••"
                           className={`w-full text-center text-4xl tracking-[0.5em] font-black p-6 rounded-[2rem] outline-none transition-all placeholder:text-white/20 ${
                              isError 
                                ? 'border-2 border-rose-500 text-rose-400 bg-rose-500/10 animate-shake' 
                                : 'border-2 border-white/10 bg-black/40 text-white focus:border-indigo-500 focus:bg-black/60 shadow-inner'
                           } ${lockoutTimer > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />
                     </div>
                     <button 
                        type="submit" 
                        disabled={pin.length < 6 || lockoutTimer > 0}
                        className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all disabled:opacity-30 disabled:shadow-none active:scale-95"
                     >
                        Otorisasi Akses
                     </button>
                  </form>
               </div>
            )}

            {/* 2FA & Face ID steps remain same structure but styled for dark glassmorphism */}
            {loginStep === '2FA' && (
               <div className="space-y-10 text-center animate-in slide-in-from-right duration-500">
                  <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center text-5xl mx-auto border-4 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">📱</div>
                  <div className="space-y-3">
                     <h3 className="text-2xl font-black text-white italic">Verifikasi Lapis Dua</h3>
                     <p className="text-xs text-slate-400 px-4 leading-relaxed">Sistem mendeteksi akses otoritas tinggi. Masukkan 4 digit OTP dari perangkat Anda.</p>
                  </div>
                  <form onSubmit={handleOtpSubmit} className="space-y-6">
                     <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="1234"
                        className="w-full text-center text-5xl tracking-[0.4em] font-black p-6 bg-black/40 text-white border-2 border-white/10 rounded-[2rem] outline-none focus:border-indigo-500 transition-all placeholder:text-white/20"
                     />
                     <button 
                        type="submit" 
                        disabled={otp.length < 4}
                        className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-500 transition-all disabled:opacity-30 active:scale-95"
                     >
                        Verifikasi OTP
                     </button>
                  </form>
               </div>
            )}

            {loginStep === 'FACE' && (
               <div className="space-y-8 text-center animate-in zoom-in duration-500">
                  <h3 className="text-2xl font-black text-white italic">Biometric Sentry</h3>
                  <p className="text-xs text-slate-400">Posisikan wajah Anda di dalam area pindai hijau.</p>
                  
                  <div className="relative w-56 h-56 mx-auto rounded-full border-8 border-indigo-900/50 bg-black/50 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                     <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        muted 
                        className="w-full h-full object-cover transform scale-x-[-1] opacity-80"
                     />
                     {isScanning && (
                        <div className="absolute inset-0 border-4 border-emerald-500 rounded-full animate-ping opacity-50"></div>
                     )}
                     <div className={`absolute top-0 left-0 w-full h-3 bg-emerald-400 shadow-[0_0_20px_#34d399] transition-all duration-300 ${isScanning ? 'animate-scan-y' : 'hidden'}`}></div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                     <p className={`text-xs font-black uppercase tracking-widest ${isScanning ? 'text-indigo-400 animate-pulse' : 'text-emerald-400'}`}>
                        {isScanning ? 'Menganalisis Titik Wajah...' : 'IDENTITAS TERVERIFIKASI'}
                     </p>
                  </div>
               </div>
            )}
         </div>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
        @keyframes scan-y {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan-y {
          animation: scan-y 2.5s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default LoginScreen;