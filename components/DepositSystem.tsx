
import React, { useState } from 'react';

const DepositSystem: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<'va' | 'qris' | 'minimarket'>('va');
  const [amount, setAmount] = useState('100000');
  const [showInvoice, setShowInvoice] = useState(false);
  
  const memberId = "CU-202406001"; // Mock member ID
  const vaNumber = `8899${memberId.replace(/\D/g, '')}`; // Generate VA from Member ID digits

  const steps = [
    { title: 'Inisiasi', desc: 'Pilih jenis simpanan & nominal di aplikasi.', icon: '📱', color: 'bg-indigo-100 text-indigo-600' },
    { title: 'Virtual Account', desc: 'Sistem membuat nomor unik terikat ID Anda.', icon: '🆔', color: 'bg-blue-100 text-blue-600' },
    { title: 'Validasi Otomatis', desc: 'Uang masuk terdeteksi tanpa kirim struk.', icon: '⚡', color: 'bg-emerald-100 text-emerald-600' },
    { title: 'Buku Besar', desc: 'Saldo terupdate real-time oleh AI.', icon: '📖', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10">
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Smart Payment Integration
          </span>
          <h2 className="text-4xl font-black mt-4 leading-tight">Setoran Berbasis ID Anggota.</h2>
          <p className="text-indigo-100 mt-4 text-lg leading-relaxed max-w-2xl">
            Tidak perlu menghafal rekening bank koperasi. Gunakan <b>Nomor Anggota</b> Anda sebagai identitas pembayaran otomatis.
          </p>
        </div>
      </div>

      {/* Logic Explanation */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-10">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">💡</div>
         <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-800 italic">"Nomor Anggota Anda adalah Nomor Rekening Anda."</h4>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
               Di KoperatifAI, kami menghubungkan <b>Nomor Anggota ({memberId})</b> langsung ke jaringan perbankan nasional melalui Virtual Account. Begitu Anda bayar ke nomor VA tersebut, sistem bank memberitahu sistem koperasi: <i>"Budi Utama baru saja setor!"</i>. Tanpa campur tangan manusia.
            </p>
         </div>
      </div>

      {/* Simulation Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {!showInvoice ? (
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 animate-in slide-in-from-left duration-300">
              <h3 className="text-2xl font-black text-slate-800">Langkah 1: Inisiasi Setoran</h3>
              
              <div className="space-y-4">
                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Metode Pembayaran</label>
                 <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'va', label: 'Virtual Account', icon: '💳' },
                      { id: 'qris', label: 'QRIS Scan', icon: '🤳' },
                      { id: 'minimarket', label: 'Alfamart/Indo', icon: '🏪' }
                    ].map((m) => (
                      <button 
                        key={m.id}
                        onClick={() => setSelectedMethod(m.id as any)}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
                          selectedMethod === m.id ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-slate-50 text-slate-400 hover:border-slate-100'
                        }`}
                      >
                        <span className="text-2xl">{m.icon}</span>
                        <span className="text-[9px] font-bold uppercase">{m.label}</span>
                      </button>
                    ))}
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Pilih Jenis Simpanan</label>
                 <select className="w-full p-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Simpanan Wajib (Rp 100.000)</option>
                    <option>Simpanan Sukarela</option>
                    <option>Simpanan Pokok (Pionir)</option>
                 </select>
              </div>

              <div className="space-y-4">
                 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Nominal Setoran (Rp)</label>
                 <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl text-xl font-black outline-none focus:ring-2 focus:ring-indigo-500"
                 />
              </div>

              <button 
                onClick={() => setShowInvoice(true)}
                className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
              >
                 Dapatkan Kode Pembayaran
              </button>
           </div>
         ) : (
           <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 animate-in zoom-in duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              <div className="text-center">
                 <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Nomor Virtual Account Anda</p>
                 <div className="flex items-center justify-center gap-3 mt-2">
                    <h4 className="text-3xl font-black tracking-tighter text-white">{vaNumber}</h4>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">📋</button>
                 </div>
                 <p className="text-[10px] text-indigo-300 mt-2 uppercase">Bank Tujuan: MANDIRI / BNI / PERMATA</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                 <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Nama Akun VA</span>
                    <span className="font-bold">KOP-AI BUDI UTAMA</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Nominal Setoran</span>
                    <span className="font-bold">Rp {Number(amount).toLocaleString('id-ID')}</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">ID Anggota</span>
                    <span className="font-bold">{memberId}</span>
                 </div>
              </div>

              <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-center">
                 <p className="text-xs text-emerald-400 font-bold italic">"Setelah transfer, saldo akan terupdate otomatis dalam 60 detik. Anda tidak perlu kirim bukti transfer."</p>
              </div>

              <button 
                onClick={() => setShowInvoice(false)}
                className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-xs font-bold uppercase hover:bg-white/20 transition-all"
              >
                 Batal / Ganti Nominal
              </button>
           </div>
         )}

         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kelebihan Sistem VA vs Transfer Manual</h3>
            <div className="space-y-4">
               {[
                 { t: 'Nama Muncul Otomatis', d: 'Saat anggota input nomor VA di ATM/Mobile Banking, nama mereka langsung muncul di layar bank.', icon: '👤' },
                 { t: 'Tidak Perlu Berita Transfer', d: 'Setiap anggota punya nomor unik. Sistem sudah tahu siapa yang setor tanpa perlu admin cek memo.', icon: '🏷️' },
                 { t: 'Settlement Real-time', d: 'Dana masuk langsung ke buku besar koperasi tanpa menunggu admin bangun tidur.', icon: '⚡' },
                 { t: 'Keamanan Escrow', d: 'Dana masuk ke rekening resmi Koperasi atas nama Lembaga, bukan pengurus.', icon: '🛡️' }
               ].map((f, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-white rounded-3xl border border-slate-50 shadow-sm hover:border-indigo-100 transition-all">
                    <div className="text-2xl shrink-0">{f.icon}</div>
                    <div>
                       <h5 className="font-bold text-slate-800 text-sm">{f.t}</h5>
                       <p className="text-xs text-slate-500 mt-1 leading-relaxed">{f.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Visual Journey */}
      <div className="space-y-8">
        <h3 className="text-2xl font-black text-slate-800 text-center">Alur Pembayaran Digital Kita</h3>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 relative">
           <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-slate-100 z-0"></div>
           {steps.map((s, i) => (
             <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10 group">
                <div className={`w-24 h-24 rounded-[2rem] ${s.color} flex items-center justify-center text-4xl mb-4 shadow-sm border-4 border-white group-hover:scale-110 transition-transform`}>
                   {s.icon}
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{s.title}</h4>
                <p className="text-[10px] text-slate-400 mt-2 leading-relaxed px-4">{s.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default DepositSystem;
