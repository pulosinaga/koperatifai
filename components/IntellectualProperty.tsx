
import React from 'react';

const IntellectualProperty: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Secure Header */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl shadow-lg border border-white/10">🔐</div>
             <div>
                <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Founder Assets Protection</span>
                <h2 className="text-4xl font-black mt-2">Benteng Kekayaan Intelektual Anda.</h2>
             </div>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
             Sebagai Founder, inovasi Anda bukan sekadar aplikasi, melainkan <b>Invensi Intelektual</b> yang memiliki nilai ekonomi tinggi dan dilindungi undang-undang.
          </p>
        </div>
      </div>

      {/* The 4 Pillars of IP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { t: 'Hak Cipta (Copyright)', d: 'Melindungi seluruh kode sumber (source code), desain UI/UX, dan teks instruksi sistem.', icon: '📝', law: 'UU No. 28/2014' },
           { t: 'Hak Paten (Patent)', d: 'Melindungi penemuan metode teknis AI untuk audit otomatis dan skor kredit digital.', icon: '💡', law: 'UU No. 13/2016' },
           { t: 'Merek Dagang (TM)', d: 'Melindungi nama "KoperatifAI", logo ◈, dan identitas visual unik startup Anda.', icon: '🏷️', law: 'UU No. 20/2016' },
           { t: 'Rahasia Dagang', d: 'Melindungi algoritma khusus dan struktur database yang tidak dipublikasikan.', icon: '🗝️', law: 'UU No. 30/2000' }
         ].map((p, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
              <h4 className="text-lg font-black text-slate-800 leading-tight italic">{p.t}</h4>
              <p className="text-[10px] font-black text-indigo-600 uppercase mt-1">{p.law}</p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">{p.d}</p>
           </div>
         ))}
      </div>

      {/* Founder Control Center */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12 overflow-hidden relative">
         <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
         
         <div className="text-center max-w-xl mx-auto space-y-2 relative z-10">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Status Perlindungan Founder</h3>
            <p className="text-slate-500">Log aktivitas perlindungan aset intelektual Anda secara real-time.</p>
         </div>

         <div className="space-y-4 relative z-10">
            {[
              { t: 'Source Code Encrypted', status: 'PROTECTED', time: 'Last Sync: 12m ago', icon: '💻' },
              { t: 'Trademark Application: KoperatifAI', status: 'PENDING', time: 'Phase: Substantive Review', icon: '📑' },
              { t: 'AI Scoring Algorithm Patent', status: 'DRAFTED', time: 'Ready for Filing', icon: '🧠' },
              { t: 'Server Access Control', status: 'FOUNDER ONLY', time: 'Multi-Auth Active', icon: '🔑' }
            ].map((item, i) => (
               <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                     <span className="text-2xl">{item.icon}</span>
                     <div>
                        <p className="text-sm font-bold text-slate-800">{item.t}</p>
                        <p className="text-[10px] text-slate-400">{item.time}</p>
                     </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     item.status === 'PROTECTED' ? 'bg-emerald-50 text-emerald-600' : 
                     item.status === 'FOUNDER ONLY' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-amber-50 text-amber-600'
                  }`}>
                     {item.status}
                  </span>
               </div>
            ))}
         </div>
      </div>

      {/* Advice for Founder */}
      <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl animate-pulse">💡</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-indigo-900 italic">"Gunakan Lisensi, Bukan Jual Putus."</h4>
            <p className="text-indigo-700/70 mt-2 leading-relaxed">
               Sebagai Founder, saran terbaik adalah menjaga kepemilikan saham mayoritas atas <b>Teknologi Inti</b>. Jika pemerintah atau investor ingin bergabung, berikan mereka hak penggunaan melalui sistem bagi hasil (Revenue Share), sehingga Anda tetap menjadi pemilik "Mesin" KoperatifAI selamanya.
            </p>
         </div>
      </div>

      {/* Final Safety Statement */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center space-y-6">
         <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-4xl text-white">⚖️</div>
         <h4 className="text-2xl font-black text-white max-w-xl italic">"Ide Anda Terlalu Mahal Untuk Tidak Dilindungi."</h4>
         <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            KoperatifAI dirancang dengan arsitektur **Plug-and-Play**. Siapa pun yang menggunakannya harus tunduk pada aturan *Founder's Agreement* Anda. Masa depan Anda aman secara hukum dan finansial.
         </p>
      </div>
    </div>
  );
};

export default IntellectualProperty;
