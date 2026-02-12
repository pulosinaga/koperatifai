import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { getFriendlyReminder } from '../services/geminiService.ts';

const NotificationCenter: React.FC = () => {
  const { user, navigate } = useAppContext();
  const [tasks, setTasks] = useState([
    { id: 1, type: 'Simpanan Wajib', amount: 'Rp 20.000', dueDate: '15 Feb', status: 'PENDING', icon: '🛡️', color: 'amber' },
    { id: 2, type: 'Angsuran Pinjaman', amount: 'Rp 450.000', dueDate: '15 Feb', status: 'OVERDUE', icon: '💸', color: 'rose' },
    { id: 3, type: 'Iuran Dana Sosial', amount: 'Rp 5.000', dueDate: '20 Feb', status: 'READY', icon: '🕊️', color: 'indigo' },
  ]);

  const [aiNudge, setAiNudge] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNudge = async () => {
      setIsLoading(true);
      const nudge = await getFriendlyReminder(user?.name || 'Anggota', 'Simpanan Wajib & Angsuran');
      setAiNudge(nudge);
      setIsLoading(false);
    };
    fetchNudge();
  }, [user]);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Integrity Monitoring Center
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pusat Amanah & <br/>Jaring Pengaman.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
               KoperatifAI membantu Bapak/Ibu tetap disiplin demi menjaga kedaulatan ekonomi keluarga dan komunitas.
            </p>
          </div>
          <div className="w-48 h-48 bg-white/5 backdrop-blur-xl p-6 rounded-[3rem] border border-white/10 flex items-center justify-center shadow-2xl animate-pulse">
             <div className="text-7xl">🔔</div>
          </div>
        </div>
      </div>

      {/* AI Smart Nudge Box */}
      <div className="bg-indigo-600 p-8 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
         <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-5xl shrink-0 border border-white/30">🤖</div>
         <div className="flex-1 space-y-3 relative z-10">
            <h4 className="text-xl font-black italic text-emerald-300 tracking-tight">Bisikan Sahabat AI:</h4>
            <div className="text-lg font-serif italic leading-relaxed">
               {isLoading ? (
                 <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                 </div>
               ) : (
                 <p>"{aiNudge}"</p>
               )}
            </div>
         </div>
      </div>

      {/* Pending Tasks List */}
      <div className="space-y-6">
         <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest px-4">Tugas Kedaulatan Anda</h3>
         <div className="space-y-4">
            {tasks.map((task) => (
               <div key={task.id} className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
                  <div className="flex items-center gap-6">
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner ${
                       task.color === 'rose' ? 'bg-rose-50 text-rose-600' : 
                       task.color === 'amber' ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-indigo-600'
                     }`}>
                        {task.icon}
                     </div>
                     <div>
                        <h4 className="text-xl font-black text-slate-800">{task.type}</h4>
                        <p className="text-xs text-slate-400 font-bold uppercase mt-1">Jatuh Tempo: {task.dueDate}</p>
                     </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                     <div className="text-center md:text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase">Nominal</p>
                        <p className="text-2xl font-black text-slate-800 italic">{task.amount}</p>
                     </div>
                     <button className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg transition-all active:scale-95 ${
                        task.color === 'rose' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-white'
                     }`}>
                        BERESKAN SEKARANG
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Psychology Tip */}
      <div className="p-10 bg-white border border-slate-100 rounded-[4rem] flex flex-col md:flex-row items-center gap-10 shadow-sm">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-6xl">⚖️</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-bold text-slate-800 italic leading-tight">"Disiplin Bukan Beban, Tapi Perlindungan."</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Setiap setoran tepat waktu membangun 'Benteng Kepercayaan' di mata AI. Anggota yang disiplin berhak mendapatkan bunga pinjaman lebih rendah dan limit penarikan lebih besar."
            </p>
         </div>
      </div>
    </div>
  );
};

export default NotificationCenter;