import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';

const MemberActivationWizard: React.FC = () => {
  const { user, navigate } = useAppContext();
  const [step, setStep] = useState(1);

  const steps = [
    { title: 'Selamat Datang!', desc: 'Anda bukan lagi nasabah. Anda kini PEMILIK KoperatifAI.', icon: '👑' },
    { title: 'Dua Cara Menabung', desc: 'Bulan depan, Bapak/Ibu punya dua dompet tabungan yang berbeda.', icon: '🪙' },
    { title: '1. Tabungan Wajib', desc: 'Setor Rp 20.000 sebulan untuk membangun kekuatan modal desa kita.', icon: '🛡️' },
    { title: '2. Celengan Sukarela', desc: 'Bebas nabung mulai Rp 1.000 kapan saja. Bisa ditarik kapan saja lewat Duta.', icon: '🐔' },
    { title: 'Aman & Berkah', desc: 'Kedaulatan ekonomi Bapak/Ibu kini dilindungi oleh sistem AI paling jujur.', icon: '🏛️' }
  ];

  const currentStep = steps[step - 1];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
      <div className="w-full max-w-md bg-white rounded-[4rem] p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
         
         <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-28 h-28 bg-indigo-50 rounded-[3rem] flex items-center justify-center text-7xl shadow-inner border border-indigo-100 animate-bounce">
               {currentStep.icon}
            </div>
            
            <div className="space-y-4">
               <h3 className="text-3xl font-black text-slate-800 italic leading-tight">{currentStep.title}</h3>
               <p className="text-slate-500 text-lg leading-relaxed font-medium">"{currentStep.desc}"</p>
            </div>

            <div className="flex gap-2">
               {steps.map((_, i) => (
                 <div key={i} className={`w-3 h-3 rounded-full transition-all duration-500 ${step === i + 1 ? 'bg-indigo-600 w-8' : 'bg-slate-200'}`}></div>
               ))}
            </div>

            <button 
              onClick={() => step < steps.length ? setStep(step + 1) : window.location.reload()}
              className="w-full py-6 bg-slate-900 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-black transition-all active:scale-95"
            >
               {step < steps.length ? 'LANJUTKAN →' : 'MULAI KEDAULATAN SAYA'}
            </button>
         </div>

         {step === 4 && (
            <div className="mt-8 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 animate-in slide-in-from-bottom">
               <p className="text-[10px] font-black text-emerald-600 uppercase mb-3 text-center">Bebas & Likuid</p>
               <div className="flex justify-between items-center text-[9px] font-bold text-slate-600">
                  <div className="text-center flex-1">
                     <p>Pagi Masuk</p>
                     <p className="text-slate-400">Rp 1.000</p>
                  </div>
                  <div className="w-px h-6 bg-slate-200"></div>
                  <div className="text-center flex-1">
                     <p className="text-indigo-600">Sore Tarik</p>
                     <p className="text-indigo-400">Rp 1.000</p>
                  </div>
               </div>
            </div>
         )}
      </div>
    </div>
  );
};

export default MemberActivationWizard;