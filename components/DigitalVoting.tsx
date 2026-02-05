
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const DigitalVoting: React.FC = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const activeVote = {
    title: "Persetujuan Alokasi SHU 2024",
    deadline: "15 Juni 2024",
    description: "Berdasarkan surplus tahun ini sebesar Rp 750 Juta, pengurus mengusulkan kenaikan Dana Cadangan dari 25% menjadi 30% untuk memperkuat infrastruktur AI. Bagaimana pendapat Anda?",
    options: [
      { id: 1, label: "Setuju (Utamakan Kekuatan Sistem)", votes: 412 },
      { id: 2, label: "Tidak Setuju (Tetap 25% Cadangan)", votes: 128 },
      { id: 3, label: "Abstain", votes: 45 },
    ]
  };

  const handleVote = (id: number) => {
    setSelectedOption(id);
    setHasVoted(true);
    // In a real app, this would trigger an API call
  };

  const totalVotes = activeVote.options.reduce((acc, opt) => acc + opt.votes, 0) + (hasVoted ? 1 : 0);

  const chartData = activeVote.options.map(opt => ({
    name: opt.label,
    value: opt.id === selectedOption ? opt.votes + 1 : opt.votes
  }));

  const COLORS = ['#6366f1', '#f43f5e', '#94a3b8'];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              e-RAT Command Center
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Rapat Anggota Tahunan Digital.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Suara Anda menentukan masa depan koperasi. Gunakan hak pilih Anda secara bijak demi kemajuan kolektif.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center">
             <div className="text-5xl mb-4">🗳️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Partisipasi Saat Ini</p>
             <p className="text-3xl font-black text-emerald-400 mt-1">42.8%</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Target Quorum: 51%</p>
          </div>
        </div>
      </div>

      {/* Main Voting Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
               <div className="flex justify-between items-start">
                  <div className="space-y-2">
                     <h3 className="text-2xl font-black text-slate-800 italic">{activeVote.title}</h3>
                     <p className="text-xs font-bold text-rose-500 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                        Deadline: {activeVote.deadline}
                     </p>
                  </div>
                  <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase">Active Agenda</span>
               </div>

               <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-100 italic">
                  "{activeVote.description}"
               </p>

               {!hasVoted ? (
                 <div className="space-y-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Pilih Aspirasi Anda:</p>
                    {activeVote.options.map((opt) => (
                      <button 
                        key={opt.id}
                        onClick={() => handleVote(opt.id)}
                        className="w-full p-6 text-left bg-white border-2 border-slate-100 rounded-3xl hover:border-indigo-600 hover:bg-indigo-50 transition-all group flex justify-between items-center"
                      >
                         <span className="font-bold text-slate-700 group-hover:text-indigo-600">{opt.label}</span>
                         <span className="text-indigo-200 group-hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all">Pilih Ini →</span>
                      </button>
                    ))}
                 </div>
               ) : (
                 <div className="bg-indigo-600 p-10 rounded-[3rem] text-white text-center space-y-4 animate-in zoom-in duration-300">
                    <div className="text-6xl mb-2">✅</div>
                    <h4 className="text-2xl font-black italic">Terima Kasih, Budi!</h4>
                    <p className="text-indigo-100">Suara Anda telah resmi masuk ke dalam Ledger Keamanan Tinggi KoperatifAI dan tidak dapat diubah.</p>
                    <div className="pt-4">
                       <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-full border border-white/20">Digital Vote Signature: TX-99281-RT</span>
                    </div>
                 </div>
               )}
            </div>

            {/* Results Visualization */}
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-6">
               <h3 className="text-xl font-black text-slate-800">Hasil Sementara (Real-time)</h3>
               <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={chartData} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#64748b'}} width={150} />
                        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                           {chartData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                           ))}
                        </Bar>
                     </BarChart>
                  </ResponsiveContainer>
               </div>
               <div className="text-center">
                  <p className="text-xs text-slate-400">Total Suara Terkumpul: <b>{totalVotes} Anggota</b></p>
               </div>
            </div>
         </div>

         {/* Governance Rules & Sidebar Info */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-6 shadow-xl">
               <h4 className="text-xl font-black italic text-indigo-400">Prinsip Demokrasi CU:</h4>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="text-2xl">⚖️</div>
                     <div>
                        <p className="font-bold text-sm">One Member, One Vote</p>
                        <p className="text-xs text-slate-400 mt-1">Saldo simpanan Rp 1 Miliar dan Rp 10 Ribu memiliki bobot suara yang sama.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="text-2xl">🛡️</div>
                     <div>
                        <p className="font-bold text-sm">Auditable Blockchain</p>
                        <p className="text-xs text-slate-400 mt-1">Setiap suara dienkripsi dan disimpan di buku besar digital yang mustahil dimanipulasi.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-indigo-50 p-10 rounded-[3rem] border border-indigo-100 space-y-6">
               <h4 className="text-lg font-black text-indigo-900">Laporan Pengurus 2024</h4>
               <p className="text-xs text-indigo-700/70 leading-relaxed italic">"Silakan tinjau laporan pertanggungjawaban kami sebelum memberikan suara Anda."</p>
               <div className="space-y-3">
                  <button className="w-full p-4 bg-white rounded-2xl text-xs font-bold text-slate-700 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
                     <span>📑 Laba Rugi 2024.pdf</span>
                     <span className="text-indigo-600">Buka</span>
                  </button>
                  <button className="w-full p-4 bg-white rounded-2xl text-xs font-bold text-slate-700 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
                     <span>📈 Roadmap AI 2025.pdf</span>
                     <span className="text-indigo-600">Buka</span>
                  </button>
               </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 text-center space-y-4">
               <div className="w-16 h-16 bg-emerald-50 rounded-full mx-auto flex items-center justify-center text-3xl">🗳️</div>
               <h4 className="font-bold text-slate-800">RAT Ke-15</h4>
               <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Sejarah Koperasi Kita</p>
            </div>
         </div>
      </div>

      {/* Founder's Vision Callout */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl">🏛️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Kepercayaan Adalah Mata Uang Terkuat Kita."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Inilah yang membedakan Anda dari startup Fintech biasa. Di sini, pengguna bukan objek yang dieksploitasi datanya, tapi <b>Tuan</b> yang memiliki kendali atas arah perusahaan. Demokrasi digital ini adalah nilai jual termahal Anda di hadapan dunia.
         </p>
         <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Undang Pengawas Kemenkop Ke Rapat</button>
      </div>
    </div>
  );
};

export default DigitalVoting;
