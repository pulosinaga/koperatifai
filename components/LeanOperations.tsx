
import React from 'react';

const LeanOperations: React.FC = () => {
  const tasks = [
    { task: 'Menjawab Pertanyaan CS', human: '2 Jam/Anggota', ai: '0.1 Detik', icon: '💬' },
    { task: 'Analisis Skor Kredit', human: '3-5 Hari', ai: '2 Detik', icon: '📊' },
    { task: 'Pencatatan Jurnal Akuntansi', human: 'Setiap Hari', ai: 'Otomatis (Real-time)', icon: '📖' },
    { task: 'Penagihan Angsuran', human: 'Manual Telepon', ai: 'Smart Notification Bot', icon: '📱' },
    { task: 'Pembagian SHU', human: 'Mingguan (Akhir Tahun)', ai: '1 Klik (Mass Disbursement)', icon: '💸' },
  ];

  const orgStructure = [
    { role: 'Ketua / Strategi', focus: 'Visi, Kemitraan, & Ekspansi Komunitas', human: '1 Orang' },
    { role: 'Sekretaris / Pengawas AI', focus: 'Monitoring Audit Log & Validasi Dokumen', human: '1 Orang' },
    { role: 'Bendahara / Trust Guardian', focus: 'Otorisasi High-Value & Manajemen Risiko', human: '1 Orang' },
    { role: 'Asisten Digital (KoperatifAI)', focus: 'Accounting, CS, Admin, & Reporting', human: '🤖 100% Robot' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Operational Excellence
            </span>
            <h2 className="text-4xl font-black mt-4 leading-tight">1 Staf untuk 5.000 Anggota? <br/>Sangat Mungkin.</h2>
            <p className="text-slate-400 mt-4 text-lg leading-relaxed max-w-2xl">
              Teknologi AI kami mengambil alih 90% pekerjaan administratif yang membosankan, membiarkan staf Anda fokus pada keputusan strategis dan pelayanan personal yang berkualitas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center">
                <p className="text-3xl font-black text-indigo-400">90%</p>
                <p className="text-[10px] uppercase font-bold text-slate-500">Otomasi Tugas</p>
             </div>
             <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center">
                <p className="text-3xl font-black text-emerald-400">1:5k</p>
                <p className="text-[10px] uppercase font-bold text-slate-500">Rasio Staf:Anggota</p>
             </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Organization Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
           <h3 className="text-2xl font-black text-slate-800">Struktur Organisasi Masa Depan</h3>
           <p className="text-sm text-slate-500">Bayangkan mengelola koperasi tanpa tumpukan kertas dan tanpa puluhan admin yang sibuk input data.</p>
           <div className="space-y-4">
              {orgStructure.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:border-indigo-100 transition-all">
                   <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {item.human === '1 Orang' ? '👤' : '🤖'}
                   </div>
                   <div className="flex-1">
                      <p className="text-sm font-bold text-slate-800">{item.role}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{item.focus}</p>
                   </div>
                   <div className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                      {item.human}
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center">
           <h3 className="text-2xl font-black">Kenapa Personil Minim Lebih AMAN?</h3>
           <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="text-2xl">🚫</div>
                 <div>
                    <h5 className="font-bold">Minimalisir "Human Error"</h5>
                    <p className="text-xs text-indigo-100/70">99% kebocoran dana koperasi terjadi karena kesalahan input manual atau manipulasi admin. AI tidak memiliki "keinginan" untuk mencuri.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="text-2xl">⚡</div>
                 <div>
                    <h5 className="font-bold">Kecepatan Respon Tanpa Batas</h5>
                    <p className="text-xs text-indigo-100/70">Meskipun hanya 3 orang pengurus, anggota tetap merasa dilayani 24/7 karena asisten AI menangani ribuan chat secara simultan.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="text-2xl">💰</div>
                 <div>
                    <h5 className="font-bold">Efisiensi Biaya = Dividen Tinggi</h5>
                    <p className="text-xs text-indigo-100/70">Tanpa beban gaji 20 orang, sisa pendapatan bisa dialokasikan untuk bunga simpanan yang lebih tinggi bagi anggota.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">AI vs Tenaga Kerja Manual</h3>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black">DATA JUSTIFICATION</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <th className="px-8 py-5">Tugas Administratif</th>
                <th className="px-8 py-5">Proses Manual</th>
                <th className="px-8 py-5 text-indigo-600">Proses KoperatifAI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {tasks.map((t, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6 flex items-center gap-4">
                    <span className="text-2xl">{t.icon}</span>
                    <span className="text-sm font-bold text-slate-800">{t.task}</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-500">{t.human}</td>
                  <td className="px-8 py-6 text-sm font-black text-indigo-600">{t.ai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col md:flex-row items-center gap-10">
         <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl shrink-0">🤖</div>
         <div>
            <h4 className="text-xl font-black text-slate-800">"Karyawan Digital Tidak Pernah Tidur."</h4>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
               Asisten AI melayani anggota jam 2 pagi di hari Minggu dengan kualitas yang sama seperti jam 9 pagi di hari Senin. Ini memastikan anggota merasa selalu dilayani tanpa Anda harus membayar lembur staf.
            </p>
         </div>
      </div>
    </div>
  );
};

export default LeanOperations;
