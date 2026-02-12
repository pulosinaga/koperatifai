import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';

const StaffDashboard: React.FC = () => {
  const { user } = useAppContext();
  
  const [queues, setQueues] = useState([
    { id: 'Q-991', type: 'VERIFIKASI_KTP', target: 'Bpk. Sumarno', source: 'Duta Joni', priority: 'HIGH', time: '12m ago' },
    { id: 'Q-992', type: 'ANOMALI_SETORAN', target: 'Warung Barokah', source: 'Sistem AI', priority: 'URGENT', time: '5m ago' },
    { id: 'Q-993', type: 'UPDATE_PROFIL', target: 'Ibu Lilis', source: 'Mandiri', priority: 'LOW', time: '1h ago' },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic tracking-tight">Staff Cockpit.</h2>
        <p className="text-slate-500 font-medium">Monitoring sistem & penanganan antrean manual.</p>
      </header>

      {/* Staff Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { l: 'Tugas Menunggu', v: queues.length, i: '📥', c: 'text-indigo-600' },
          { l: 'SLA Respon AI', v: '0.8s', i: '⚡', c: 'text-emerald-600' },
          { l: 'Kas Pending Sync', v: 'Rp 12.4jt', i: '⏳', c: 'text-amber-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">{s.i}</div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{s.l}</p>
              <h4 className={`text-xl font-black ${s.c}`}>{s.v}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Task Queue */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-6">
           <div className="flex justify-between items-center px-2">
              <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest italic">Antrean Validasi Manual</h3>
              <button className="text-[10px] font-black text-indigo-600 hover:underline">REFRESH QUEUE</button>
           </div>
           
           <div className="space-y-3">
              {queues.map((q) => (
                <div key={q.id} className="p-5 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between hover:bg-white hover:shadow-md transition-all group">
                   <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-lg shadow-sm">{q.type === 'VERIFIKASI_KTP' ? '🪪' : '🚨'}</div>
                      <div>
                         <p className="font-bold text-slate-800 text-sm">{q.target}</p>
                         <p className="text-[10px] text-slate-400 uppercase">Dari: {q.source} • {q.time}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-lg text-[8px] font-black ${q.priority === 'URGENT' ? 'bg-rose-100 text-rose-600 animate-pulse' : 'bg-indigo-50 text-indigo-600'}`}>
                         {q.priority}
                      </span>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg group-hover:scale-105 transition-transform">PROSES</button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* System Logs for Staff */}
        <div className="bg-slate-900 rounded-[3.5rem] p-8 text-white space-y-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
           <h3 className="text-xl font-black text-indigo-400 italic">Security Logs</h3>
           <div className="space-y-4 font-mono text-[10px] text-slate-400">
              <p className="border-l-2 border-emerald-500 pl-3"> [09:12] IP Address 192.168.x.x Authorized.</p>
              <p className="border-l-2 border-emerald-500 pl-3"> [09:15] Daily Ledger Snapshot: SUCCESS.</p>
              <p className="border-l-2 border-rose-500 pl-3"> [10:02] AI Flagged: Duta Joni (Low Confidence KTP).</p>
              <p className="border-l-2 border-indigo-500 pl-3"> [10:05] Webhook Bank Mandiri: OK.</p>
           </div>
           <div className="pt-4 border-t border-white/10">
              <p className="text-[9px] italic text-slate-500 leading-relaxed">
                 "Tugas Staf adalah memastikan tidak ada data 'abu-abu' yang lolos tanpa pengawasan manusia."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;