
import React from 'react';

const SystemHealth: React.FC = () => {
  const stats = [
    { label: 'Database Latency', value: '14ms', status: 'Optimal', color: 'text-emerald-500' },
    { label: 'Uptime (30 hari)', value: '99.98%', status: 'Stable', color: 'text-emerald-500' },
    { label: 'Keamanan (SSL/TLS)', value: 'AES-256', status: 'Encrypted', color: 'text-indigo-500' },
    { label: 'Backup Terakhir', value: '2 jam lalu', status: 'Secure', color: 'text-emerald-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
            <h3 className="text-xl font-bold text-slate-800 mt-1">{s.value}</h3>
            <p className={`text-[10px] font-bold mt-2 flex items-center gap-1 ${s.color}`}>
              <span className="w-1 h-1 rounded-full bg-current animate-pulse"></span>
              {s.status}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="text-emerald-400">🛡️</span> Arsitektur Cloud Skalabilitas Tinggi
          </h3>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Sistem KoperatifAI menggunakan database relasional terdistribusi. Ini berarti data Anda tidak disimpan di satu komputer saja, melainkan di jaringan server cloud yang saling mencadangkan.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[15%]"></div>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Kapasitas Penyimpanan (Terpakai: 15GB/100GB)</p>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[42%]"></div>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Beban CPU Server (42% Load)</p>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[28%]"></div>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Traffic Anggota (2.4k Aktif)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest">Audit Logs (Transparansi Sistem)</h4>
          <button className="text-[10px] font-bold text-indigo-600 hover:underline">Download Laporan Audit</button>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { action: 'Database Backup', user: 'System', time: '10:00 AM', status: 'Success' },
            { action: 'Mass Dividend Disbursement', user: 'Admin (Dina)', time: '09:15 AM', status: 'Success' },
            { action: 'Security Patch Update', user: 'System', time: 'Yesterday', status: 'Verified' },
            { action: 'New Member Approval (x14)', user: 'Secretary', time: 'Yesterday', status: 'Completed' },
          ].map((log, i) => (
            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs">📜</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{log.action}</p>
                  <p className="text-[10px] text-slate-400 font-medium">Oleh: {log.user} • {log.time}</p>
                </div>
              </div>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-tighter">
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;
