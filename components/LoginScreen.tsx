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
  
  // Security States
  const [loginStep, setLoginStep] = useState<'PIN' | '2FA' | 'FACE'>('PIN');
  const [otp, setOtp] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const roles = [
    { id: UserRole.FOUNDER, label: 'Founder', icon: '💎', masterPin: '999999', security: 'ULTRA' },
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
    if (otp === '1234') { // Mock OTP
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
      // Simulasi AI memproses biometrik
      setTimeout(() => {
        setIsScanning(false);
        setTimeout(() => {
          stream.getTracks().forEach(track => track.stop());
          onLogin(selectedRole);
        }, 1000);
      }, 3000);
    } catch (err) {
      alert("Akses kamera ditolak. Keamanan tingkat tinggi mewajibkan verifikasi wajah.");
      setLoginStep('PIN');
    }
  };

  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center p-4 z-[100] overflow-y-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
         {/* Kiri: Security Status Dashboard */}
         <div className="hidden lg:flex flex-col space-y-8">
            <div className="space-y-4">
               <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl shadow-2xl border border-white/10">🛡️</div>
               <h1 className="text-4xl font-black text-white italic leading-tight">Sentinel Guard <br/><span className="text-indigo-400">Authentication</span></h1>
               <p className="text-slate-400 text-sm leading-relaxed">
                 Sistem keamanan kelas militer KoperatifAI. Silakan pilih otoritas akses Anda dan verifikasi identitas melalui modul AI.
               </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 space-y-6">
               <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Status</span>
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                     <span className="text-[10px] font-bold text-emerald-400 uppercase">Secure</span>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-bold text-slate-300">Biometric Sentry</span>
                     <span className="text-xs font-mono text-indigo-400">STANDBY</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-bold text-slate-300">Intrusion Detection</span>
                     <span className="text-xs font-mono text-emerald-400">ACTIVE</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Kanan: Login Form */}
         <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            {loginStep === 'PIN' && (
               <div className="space-y-8 animate-in slide-in-from-right duration-500">
                  <div className="text-center space-y-2">
                     <h2 className="text-2xl font-black text-slate-800 italic">Identifikasi Peran</h2>
                     <p className="text-xs text-slate-500">Pilih otoritas akses yang sesuai dengan Anda.</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                     {roles.map(r => (
                        <button 
                           key={r.id}
                           onClick={() => setSelectedRole(r.id)}
                           className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                              selectedRole === r.id ? 'border-indigo-600 bg-indigo-50 shadow-md scale-105' : 'border-slate-100 hover:border-indigo-200'
                           }`}
                        >
                           <span className="text-2xl">{r.icon}</span>
                           <span className="text-[9px] font-black text-slate-700 uppercase tracking-tighter">{r.label}</span>
                        </button>
                     ))}
                  </div>

                  <form onSubmit={handlePinSubmit} className="space-y-6 pt-4 border-t border-slate-100">
                     <div className="space-y-3 text-center">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                           {lockoutTimer > 0 ? `Terkunci: Coba lagi dalam ${lockoutTimer}s` : 'Masukkan Security PIN'}
                        </label>
                        <input
                           type="password"
                           value={pin}
                           onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                           disabled={lockoutTimer > 0}
                           placeholder="••••••"
                           className={`w-full text-center text-3xl tracking-[1em] font-black p-6 bg-slate-50 border-2 rounded-[2rem] outline-none transition-all ${
                              isError ? 'border-rose-500 text-rose-600 bg-rose-50 animate-shake' : 'border-slate-100 focus:border-indigo-600 focus:bg-white'
                           } ${lockoutTimer > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />
                     </div>
                     <button 
                        type="submit" 
                        disabled={pin.length < 6 || lockoutTimer > 0}
                        className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all disabled:opacity-50 active:scale-95"
                     >
                        Otorisasi Akses
                     </button>
                  </form>
               </div>
            )}

            {loginStep === '2FA' && (
               <div className="space-y-8 text-center animate-in slide-in-from-right duration-500">
                  <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl mx-auto border-4 border-indigo-100">📱</div>
                  <div className="space-y-2">
                     <h3 className="text-2xl font-black text-slate-800 italic">Verifikasi 2 Langkah</h3>
                     <p className="text-xs text-slate-500 px-4">Masukkan 4 digit OTP yang dikirim ke Authenticator / WhatsApp Anda.</p>
                  </div>
                  <form onSubmit={handleOtpSubmit} className="space-y-6">
                     <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="1234"
                        className="w-full text-center text-4xl tracking-[0.5em] font-black p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] outline-none focus:border-indigo-600 focus:bg-white transition-all"
                     />
                     <button 
                        type="submit" 
                        disabled={otp.length < 4}
                        className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all disabled:opacity-50"
                     >
                        Verifikasi OTP
                     </button>
                  </form>
               </div>
            )}

            {loginStep === 'FACE' && (
               <div className="space-y-8 text-center animate-in zoom-in duration-500">
                  <h3 className="text-2xl font-black text-slate-800 italic">Face ID Sentry</h3>
                  <p className="text-xs text-slate-500">Posisikan wajah Anda di dalam area pindai.</p>
                  
                  <div className="relative w-48 h-48 mx-auto rounded-full border-8 border-indigo-100 overflow-hidden shadow-inner">
                     <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        muted 
                        className="w-full h-full object-cover transform scale-x-[-1]"
                     />
                     {isScanning && (
                        <div className="absolute inset-0 border-4 border-indigo-500 rounded-full animate-ping"></div>
                     )}
                     <div className={`absolute top-0 left-0 w-full h-2 bg-emerald-500 shadow-[0_0_15px_#10b981] transition-all duration-300 ${isScanning ? 'animate-scan-y' : 'hidden'}`}></div>
                  </div>
                  
                  <div className="space-y-2">
                     <p className="text-xs font-black uppercase tracking-widest text-indigo-600">
                        {isScanning ? 'Menganalisis Biometrik...' : 'Verifikasi Berhasil!'}
                     </p>
                     {isScanning && (
                        <div className="flex justify-center gap-1">
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
        @keyframes scan-y {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan-y {
          animation: scan-y 2s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default LoginScreen;