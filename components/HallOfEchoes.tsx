import React, { useState, useRef } from 'react';

const HallOfEchoes: React.FC = () => {
  const [echoesSent, setEchoesSent] = useState(0);
  const [particles, setParticles] = useState<{ id: number, icon: string, left: number }[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordProgress, setRecordProgress] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const sendEcho = (icon: string) => {
    const id = Date.now();
    const newParticle = { id, icon, left: Math.random() * 80 + 10 };
    setParticles(prev => [...prev, newParticle]);
    setEchoesSent(prev => prev + 1);

    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 2000);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      
      setIsRecording(true);
      setRecordProgress(0);
      
      let p = 0;
      progressIntervalRef.current = window.setInterval(() => {
        p += (100 / 30); // 3 seconds total
        setRecordProgress(p);
        if (p >= 100) stopRecording();
      }, 100);

      recorder.start();
    } catch (err) {
      alert("Mohon izinkan akses mikrofon untuk mengirim sorakan suara.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setEchoesSent(prev => prev + 1);
      alert("Sorakan suara Anda telah terkirim ke Panggung Utama!");
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-4xl mx-auto text-center">
      <div className="bg-indigo-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 space-y-6">
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Collective Resonance Hub
          </span>
          <h2 className="text-4xl font-black leading-tight italic font-serif">Gema Rakyat. <br/>Kirim Energi Anda.</h2>
          <p className="text-indigo-200 text-lg max-w-xl mx-auto italic">
             "Sentuhan digital, suara kemerdekaan. Biarkan pahlawan kita mendengar dukungan Anda."
          </p>
        </div>
      </div>

      <div className="bg-white p-12 rounded-[5rem] border border-slate-100 shadow-sm relative overflow-hidden flex flex-col items-center justify-center space-y-12 min-h-[500px]">
         <div className="absolute inset-0 pointer-events-none">
            {particles.map(p => (
               <div key={p.id} className="absolute text-5xl animate-echo-fly" style={{ left: `${p.left}%`, bottom: '20%' }}>
                  {p.icon}
               </div>
            ))}
         </div>

         <div className="flex flex-col items-center gap-6">
            <div className="relative">
               {isRecording && (
                  <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-20"></div>
               )}
               <button 
                  onMouseDown={startRecording}
                  onMouseUp={stopRecording}
                  onTouchStart={startRecording}
                  onTouchEnd={stopRecording}
                  className={`w-32 h-32 rounded-full flex items-center justify-center text-5xl shadow-2xl transition-all active:scale-90 relative z-10 ${isRecording ? 'bg-rose-600 text-white' : 'bg-slate-900 text-white hover:bg-indigo-600'}`}
               >
                  {isRecording ? '🎙️' : '🎤'}
               </button>
               {isRecording && (
                  <svg className="absolute -inset-4 w-40 h-40 rotate-[-90deg]">
                     <circle cx="80" cy="80" r="74" fill="none" stroke="rgba(244,63,94,0.1)" strokeWidth="8" />
                     <circle cx="80" cy="80" r="74" fill="none" stroke="#f43f5e" strokeWidth="8" strokeDasharray={`${recordProgress * 4.65} 465`} strokeLinecap="round" />
                  </svg>
               )}
            </div>
            <div className="text-center space-y-1">
               <h4 className="font-black text-slate-800 uppercase tracking-widest">{isRecording ? 'Melepas Sorakan...' : 'Tahan untuk Rekam Sorakan'}</h4>
               <p className="text-xs text-slate-400 italic">Maksimal 3 detik pesan suara</p>
            </div>
         </div>

         <div className="flex gap-4">
            {['👏', '🔥', '❤️', '🙌'].map((icon, i) => (
               <button key={i} onClick={() => sendEcho(icon)} className="w-16 h-16 bg-slate-50 hover:bg-indigo-600 hover:text-white rounded-2xl flex items-center justify-center text-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 active:scale-90 border border-slate-100">
                  {icon}
               </button>
            ))}
         </div>

         <div className="text-center space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Gema Hari Ini</p>
            <p className="text-5xl font-black text-indigo-600 italic">{echoesSent}</p>
         </div>
      </div>

      <style>{`
        @keyframes echo-fly {
          0% { transform: translateY(0) scale(0.5); opacity: 1; }
          100% { transform: translateY(-400px) scale(2.5); opacity: 0; }
        }
        .animate-echo-fly { animation: echo-fly 2s ease-out forwards; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
      `}</style>
    </div>
  );
};

export default HallOfEchoes;