import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

const DepositSystem: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  
  const [selectedMethod, setSelectedMethod] = useState<'va' | 'qris' | 'minimarket'>('va');
  const [depositType, setDepositType] = useState<'voluntary' | 'mandatory' | 'principal'>('voluntary');
  const [amount, setAmount] = useState('100000');
  const [showInvoice, setShowInvoice] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const memberId = user?.memberId || "CU-2026001";
  const vaNumber = `8899${memberId.replace(/\D/g, '')}`;

  const handleBankWebhookSimulation = async () => {
    setIsProcessing(true);
    try {
      const depositAmount = Number(amount);
      if (isLiveDatabase && user && supabase) {
        // 1. Tentukan jenis saldo yang akan diupdate
        let updateData: any = {};
        if (depositType === 'voluntary') updateData = { voluntary: user.balances.voluntary + depositAmount };
        else if (depositType === 'mandatory') updateData = { mandatory: user.balances.mandatory + depositAmount };
        else if (depositType === 'principal') updateData = { principal: user.balances.principal + depositAmount };

        // 2. Update saldo di database
        const { error: balError } = await supabase.from('balances').update(updateData).eq('user_id', user.id);
        if (balError) throw balError;

        // 3. Catat di tabel transaksi
        let desc = depositType === 'voluntary' ? 'Simpanan Sukarela' : depositType === 'mandatory' ? 'Simpanan Wajib' : 'Simpanan Pokok';
        const { error: txError } = await supabase.from('transactions').insert({
          user_id: user.id,
          type: 'deposit',
          description: `Setoran ${desc} via VA`,
          amount: depositAmount,
          status: 'completed'
        });
        if (txError) throw txError;

        // 4. Update UI
        await refreshProfile();
      }
      
      setShowInvoice(false);
      alert(`🎉 Pembayaran Rp ${depositAmount.toLocaleString('id-ID')} Berhasil Diterima Oleh Koperasi!`);
      
    } catch (e: any) {
      alert("Gagal memproses setoran: " + e.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const steps = [
    { title: 'Inisiasi', desc: 'Pilih jenis simpanan & nominal di aplikasi.', icon: '📱', color: 'bg-indigo-100 text-indigo-600' },
    { title: 'Virtual Account', desc: 'Sistem membuat nomor unik terikat ID Anda.', icon: '🆔', color: 'bg-blue-100 text-blue-600' },
    { title: 'Validasi Otomatis', desc: 'Uang masuk terdeteksi tanpa kirim struk.', icon: '⚡', color: 'bg-emerald-100 text-emerald-600' },
    { title: 'Buku Besar', desc: 'Saldo terupdate real-time oleh AI.', icon: '📖', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10">
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Smart Payment Integration
          </span>
          <h2 className="text-4xl font-black mt-4 leading-tight">Setoran Berbasis ID Anggota.</h2>
          <p className="text-indigo-100 mt-4 text-lg leading-relaxed max-w-2xl">
            Tidak perlu menghafal rekening bank koperasi atau mengirim foto struk ke Admin. Gunakan <b>Nomor Anggota</b> Anda sebagai rekening pembayaran otomatis.
          </p>
        </div>
      </div>

      {/* Logic Explanation */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-10">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">💡</div>
         <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-800 italic">"Nomor Anggota Anda adalah Nomor Rekening Anda."</h4>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
               Saat Anda transfer ke Virtual Account (VA) Bank, sistem Bank akan memberikan notifikasi instan (Webhook) ke server KoperatifAI. Server lalu menambahkan saldo Anda secara mandiri dalam hitungan detik. Bebas human-error.
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
                 <select 
                    value={depositType}
                    onChange={(e: any) => setDepositType(e.target.value)}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                 >
                    <option value="mandatory">Simpanan Wajib Bulanan</option>
                    <option value="voluntary">Simpanan Sukarela (Bebas Tarik)</option>
                    <option value="principal">Simpanan Pokok (Modal Awal)</option>
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
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 animate-in zoom-in duration-300 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              <div className="text-center">
                 <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Nomor Virtual Account Anda</p>
                 <div className="flex items-center justify-center gap-3 mt-2">
                    <h4 className="text-3xl font-black tracking-tighter text-white font-mono bg-black/50 px-6 py-3 rounded-2xl border border-white/10">{vaNumber}</h4>
                 </div>
                 <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest">Bank Tujuan: MANDIRI / BCA / BNI / PERMATA</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                 <div className="flex justify-between items-center text-xs border-b border-white/10 pb-3">
                    <span className="text-slate-400">Nama Rekening VA</span>
                    <span className="font-bold text-indigo-300">KOP-AI {user?.name.toUpperCase()}</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Nominal Transfer</span>
                    <span className="font-bold text-emerald-400 text-base">Rp {Number(amount).toLocaleString('id-ID')}</span>
                 </div>
              </div>

              <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-center space-y-4">
                 <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Simulasi Server Webhook</p>
                 <p className="text-xs text-emerald-200/70 italic">Di dunia nyata, ketika Anda transfer uang di ATM, bank akan mengirim notifikasi ke server kami secara otomatis.</p>
                 <button 
                    onClick={handleBankWebhookSimulation}
                    disabled={isProcessing}
                    className="w-full py-4 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                 >
                    {isProcessing ? 'MEMPROSES DATABASE...' : 'KLIK UNTUK SIMULASIKAN TRANSFER BANK MASUK'}
                 </button>
              </div>

              <button 
                onClick={() => setShowInvoice(false)}
                className="w-full text-center text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest"
              >
                 Batal / Ubah Setoran
              </button>
           </div>
         )}

         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kelebihan Sistem Ini</h3>
            <div className="space-y-4">
               {[
                 { t: 'Tidak Perlu Konfirmasi Admin', d: 'Tidak perlu chat WA Admin sambil kirim bukti struk transfer yang berisiko dipalsukan.', icon: '🏷️' },
                 { t: 'Rekonsiliasi Real-time', d: 'Uang masuk langsung dicatat oleh database (Buku Besar) tanpa menunggu Admin rekap manual di sore hari.', icon: '⚡' },
                 { t: 'Dana Aman di Escrow', d: 'Uang masuk ke rekening resmi korporat Koperasi, bukan ke rekening pribadi pengurus.', icon: '🛡️' }
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
    </div>
  );
};

export default DepositSystem;