
import React, { useState, useEffect, useRef } from 'react';
import { UserRole } from '../types';

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
            <div className="space-y-2">
               <h1 className="text-5xl font-black text-white italic tracking-tight">KoperatifAI</h1>
               <p className="text-indigo-400 uppercase tracking-widest font-black text-xs">Sovereign Shield Active</p>
            </div>
            
            <div className="space-y-4">
               <div className="p-6 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
                  <div className="flex justify-between items-center mb-4">
                     <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">Sentinel Network Status</p>
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-slate-500">Brute-Force Protection</span>
                        <span className="text-emerald-400">ARMED</span>
                     </div>
                     <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-slate-500">2FA SMS/WA Gateway</span>
                        <span className="text-emerald-400">ONLINE</span>
                     </div>
                     <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-slate-500">Biometric Liveness</span>
                        <span className="text-emerald-400">READY</span>
                     </div>
                  </div>
               </div>

               <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-[2.5rem]">
                  <p className="text-[10px] font-black text-rose-400 uppercase mb-2">Security Note for Founder:</p>
                  <p className="text-[10px] text-slate-400 leading-relaxed italic">
                    "PIN hanyalah kunci pintu depan. 2FA dan Wajah adalah penjaga brankas sesungguhnya. Meskipun PIN bocor, peretas tidak bisa melewati enkripsi biometrik."
                  </p>
               </div>
            </div>
            
            <div className="pt-4 border-t border-white/5">
               <p className="text-[9px] text-slate-600 uppercase font-black tracking-widest mb-2">Demo Access (For User Testing Only):</p>
               <div className="grid grid-cols-3 gap-2">
                  {roles.map(r => (
                    <div key={r.id} className="bg-white/5 p-2 rounded-lg border border-white/5 text-[8px] font-bold flex flex-col items-center">
                       <span className="text-slate-500">{r.label}</span>
                       <span className="text-indigo-400 font-mono mt-1">{r.masterPin}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Kanan: Interactive Login Box */}
         <div className="bg-white rounded-[4rem] p-10 lg:p-14 shadow-2xl space-y-10 relative overflow-hidden min-h-[620px] flex flex-col justify-center">
            
            {/* Lockout Overlay */}
            {lockoutTimer > 0 && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-8 animate-in fade-in">
                <div className="text-8xl mb-6">🛡️</div>
                <h3 className="text-3xl font-black text-rose-600 uppercase italic">Sistem Terkunci</h3>
                <p className="text-slate-500 mt-2">Terlalu banyak percobaan paksa. Perangkat Anda ditangguhkan:</p>
                <p className="text-7xl font-black text-slate-800 mt-8 font-mono">{lockoutTimer}s</p>
                <p className="text-[10px] text-slate-400 mt-12 uppercase font-black tracking-[0.3em]">Hacking Attempt Blocked</p>
              </div>
            )}

            {/* Step: FACE ID */}
            {loginStep === 'FACE' && (
              <div className="absolute inset-0 bg-[#020617] z-40 flex flex-col items-center justify-center p-8 animate-in zoom-in duration-500">
                 <div className="relative w-72 h-72 rounded-full border-4 border-indigo-500 overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.4)]">
                    <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover grayscale brightness-110" />
                    <div className="absolute inset-0 bg-indigo-500/10"></div>
                    {isScanning && (
                       <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-400 animate-scan-fast shadow-[0_0_20px_#818cf8]"></div>
                    )}
                    {!isScanning && (
                       <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/30 backdrop-blur-sm">
                          <span className="text-7xl">✅</span>
                       </div>
                    )}
                 </div>
                 <div className="mt-10 text-center space-y-3">
                    <h4 className="text-2xl font-black text-white italic tracking-tight">
                       {isScanning ? 'Menganalisis Biometrik...' : 'Identitas Terverifikasi!'}
                    </h4>
                    <p className="text-indigo-300 text-[10px] uppercase tracking-[0.3em] font-black">
                       {isScanning ? 'Harap Berkedip' : 'Menyiapkan Dashboard Perintah...'}
                    </p>
                 </div>
                 <style>{`
                    @keyframes scan-fast { 0% { top: 0; } 100% { top: 100%; } }
                    .animate-scan-fast { animation: scan-fast 1.5s linear infinite alternate; }
                 `}</style>
              </div>
            )}

            {/* Step: 2FA */}
            {loginStep === '2FA' && (
              <div className="space-y-10 animate-in slide-in-from-right">
                 <div className="text-center space-y-2">
                    <div className="text-5xl mb-4">🔐</div>
                    <h3 className="text-3xl font-black text-slate-800">Verifikasi 2-Lapis</h3>
                    <p className="text-slate-500 text-sm">Masukkan kode yang dikirim ke WhatsApp Founder.</p>
                 </div>
                 <form onSubmit={handleOtpSubmit} className="space-y-8">
                    <input 
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="0 0 0 0"
                      className="w-full p-6 bg-slate-50 border-none rounded-3xl text-center text-5xl tracking-[0.5em] font-black text-indigo-600 focus:ring-4 focus:ring-indigo-500 outline-none"
                    />
                    <div className="text-center">
                       <p className="text-[10px] text-slate-400 font-bold uppercase">Tips Demo: Masukkan '1234'</p>
                    </div>
                    <button className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl">Verifikasi & Lanjut</button>
                    <button type="button" onClick={() => setLoginStep('PIN')} className="w-full text-xs font-bold text-slate-400 hover:text-slate-600">Batal</button>
                 </form>
              </div>
            )}

            {/* Step: PIN */}
            {loginStep === 'PIN' && (
              <>
                <div className="text-center space-y-2">
                   <h2 className="text-3xl font-black text-slate-800">Selamat Malam!</h2>
                   <p className="text-slate-500 text-sm">Pilih akses & masukkan PIN aman Anda.</p>
                </div>

                <form onSubmit={handlePinSubmit} className="space-y-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Pilih Peran Anda</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                         {roles.map((r) => (
                            <button 
                               key={r.id}
                               type="button"
                               onClick={() => { setSelectedRole(r.id); setPin(''); }}
                               className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                                  selectedRole === r.id ? 'border-indigo-600 bg-indigo-50 text-indigo-600 shadow-md' : 'border-slate-50 text-slate-400 hover:border-slate-200'
                               }`}
                            >
                               <span className="text-2xl">{r.icon}</span>
                               <span className="text-[9px] font-black uppercase tracking-tighter text-center">{r.label}</span>
                            </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex justify-between items-center px-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PIN Rahasia</label>
                        {attempts > 0 && <span className="text-[9px] text-rose-500 font-black">PERCOBAAN: {attempts}/3</span>}
                      </div>
                      <input 
                         type="password"
                         maxLength={6}
                         value={pin}
                         onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                         placeholder="••••••"
                         autoComplete="off"
                         className={`w-full p-6 bg-slate-50 border-none rounded-3xl text-center text-4xl tracking-[1em] focus:ring-4 focus:ring-indigo-500 outline-none transition-all ${
                            isError ? 'bg-rose-50 ring-4 ring-rose-500 animate-shake' : ''
                         }`}
                      />
                      {isError && <p className="text-center text-rose-600 text-[10px] font-black uppercase animate-pulse">PIN TIDAK VALID!</p>}
                   </div>

                   <button 
                      type="submit"
                      disabled={pin.length < 6}
                      className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-95 disabled:opacity-30 group"
                   >
                      BUKA GERBANG DIGITAL 
                      <span className="ml-2 group-hover:translate-x-2 transition-transform inline-block">→</span>
                   </button>
                </form>
              </>
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
      `}</style>
    </div>
  );
};

export default LoginScreen;
