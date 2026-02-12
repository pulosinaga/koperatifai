import React, { useState, useRef } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

const MemberInstallmentPayment: React.FC = () => {
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  const installmentAmount = 450000;
  const loanId = "LN-2026-004";
  const voluntaryBalance = user?.balances?.voluntary || 0;

  const handlePay = async () => {
    if (voluntaryBalance < installmentAmount) {
      alert("Saldo Sukarela Anda tidak cukup untuk membayar angsuran ini.");
      return;
    }

    setIsProcessing(true);
    try {
      if (isLiveDatabase && user && supabase) {
        const newBalance = voluntaryBalance - installmentAmount;
        await supabase.from('balances').update({ voluntary: newBalance }).eq('user_id', user.id);
        await supabase.from('transactions').insert({
          user_id: user.id,
          type: 'loan_installment',
          description: `Angsuran Pinjaman ${loanId}`,
          amount: installmentAmount,
          status: 'completed'
        });
        await refreshProfile();
      }
      setShowReceipt(true);
    } catch (e: any) {
      alert("Gagal memproses pembayaran: " + e.message);
    } finally {
      setIsProcessing(false);
    }
  };

  // --- LOGIKA PENCETAKAN BLUETOOTH (ESC/POS) ---
  const printBluetooth = async () => {
    if (!('bluetooth' in navigator)) {
      alert("Browser Anda tidak mendukung Bluetooth. Gunakan Chrome di Android/PC.");
      return;
    }

    setIsPrinting(true);
    try {
      // 1. Hubungkan ke Printer Thermal Portabel
      const device = await (navigator as any).bluetooth.requestDevice({
        filters: [{ services: ['000018f0-0000-1000-8000-00805f9b34fb'] }],
        optionalServices: ['000018f0-0000-1000-8000-00805f9b34fb']
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService('000018f0-0000-1000-8000-00805f9b34fb');
      const characteristic = await service.getCharacteristic('00002af1-0000-1000-8000-00805f9b34fb');

      // 2. Format Struk ESC/POS (Standar Printer 58mm)
      const date = new Date().toLocaleString('id-ID');
      const receiptText = 
        "\x1B\x40" + // Initialize
        "\x1B\x61\x01" + "KOPERATIFAI INDONESIA\n" + 
        "Desa Digital Berdaulat\n" +
        "--------------------------------\n" +
        "\x1B\x61\x00" + 
        `STRUK  : PEMBAYARAN ANGSURAN\n` +
        `TANGGAL: ${date}\n` +
        `NOMOR  : ${loanId}\n` +
        `NAMA   : ${user?.name.toUpperCase()}\n` +
        "--------------------------------\n" +
        "\x1B\x21\x10" + `TOTAL  : Rp ${installmentAmount.toLocaleString()}\n` +
        "\x1B\x21\x00" + "--------------------------------\n" +
        "\x1B\x61\x01" + "STATUS : LUNAS\n\n" +
        "Terima kasih atas amanahnya.\n" +
        "Uang Anda memutar roda ekonomi\n" +
        "desa kita sendiri.\n\n\n\n";

      const encoder = new TextEncoder();
      await characteristic.writeValue(encoder.encode(receiptText));
      alert("Struk sedang dicetak!");
    } catch (err: any) {
      console.error("Bluetooth Print Error:", err);
      alert("Gagal mencetak. Pastikan Bluetooth aktif dan printer menyala.");
    } finally {
      setIsPrinting(false);
    }
  };

  const sharePDF = async () => {
    if (!receiptRef.current) return;
    setIsSharing(true);
    try {
      const canvas = await (window as any).html2canvas(receiptRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = (window as any).jspdf;
      const pdf = new jsPDF('p', 'mm', [80, 150]); // Ukuran struk thermal
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], `Struk_KoperatifAI_${Date.now()}.pdf`, { type: 'application/pdf' });

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: 'Struk Pembayaran KoperatifAI',
          text: `Halo! Ini bukti sah pembayaran angsuran saya di KoperatifAI.`
        });
      } else {
        pdf.save(`Struk_KoperatifAI_${loanId}.pdf`);
        alert("PDF diunduh. Silakan kirim manual via WhatsApp.");
      }
    } catch (err) {
      console.error("PDF Export Error:", err);
      alert("Gagal membuat dokumen PDF.");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto">
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-50 pb-8">
           <div>
              <h3 className="text-3xl font-black text-slate-800 italic uppercase">Pembayaran Angsuran</h3>
              <p className="text-slate-400 font-bold text-xs mt-1">ID PINJAMAN: {loanId}</p>
           </div>
           <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Saldo Sukarela</p>
              <p className="text-xl font-black text-indigo-600 italic">Rp {voluntaryBalance.toLocaleString('id-ID')}</p>
           </div>
        </div>

        <div className="space-y-8">
           <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center space-y-4">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Tagihan Bulan Ini</p>
              <h4 className="text-5xl font-black text-slate-900 italic tracking-tighter">Rp {installmentAmount.toLocaleString('id-ID')}</h4>
              <span className="px-3 py-1 bg-amber-100 text-amber-600 rounded-lg text-[9px] font-black uppercase">Jatuh Tempo: 15 Pebruari 2026</span>
           </div>

           <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 flex gap-4 items-center">
              <span className="text-3xl">🤖</span>
              <p className="text-xs text-indigo-900 leading-relaxed font-bold italic">
                 "Bayar sekarang via Saldo Sukarela untuk menaikkan Skor Integritas Anda sebesar +12 poin."
              </p>
           </div>

           <button 
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50"
           >
              {isProcessing ? 'MENYINKRONKAN LEDGER...' : 'BAYAR SEKARANG'}
           </button>
        </div>
      </div>

      {showReceipt && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
            <div className="bg-white w-full max-w-sm rounded-[3rem] p-1 shadow-2xl relative">
               <div ref={receiptRef} className="bg-white p-10 flex flex-col items-center text-center space-y-8 rounded-[2.8rem] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                  <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center text-4xl shadow-lg animate-bounce">✓</div>
                  <div>
                     <h3 className="text-2xl font-black text-slate-800 italic uppercase">LUNAS!</h3>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Payment Receipt</p>
                  </div>

                  <div className="w-full space-y-4 border-y-2 border-dashed border-slate-200 py-8 font-mono text-[10px] text-left">
                     <div className="flex justify-between"><span>TANGGAL</span><span>05-02-2026</span></div>
                     <div className="flex justify-between"><span>NOMOR</span><span>{loanId}</span></div>
                     <div className="flex justify-between"><span>NAMA</span><span>{user?.name.toUpperCase()}</span></div>
                     <div className="h-px bg-slate-100 my-2"></div>
                     <div className="flex justify-between font-black text-sm"><span>TOTAL</span><span>Rp {installmentAmount.toLocaleString('id-ID')}</span></div>
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                     <button 
                        onClick={printBluetooth}
                        disabled={isPrinting}
                        className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-lg"
                     >
                        {isPrinting ? '🌀 CONNECTING...' : '🖨️ CETAK STRUK (BLUETOOTH)'}
                     </button>
                     <button 
                        onClick={sharePDF}
                        disabled={isSharing}
                        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-indigo-700 flex items-center justify-center gap-2 shadow-lg"
                     >
                        {isSharing ? '🌀 PROCESSING...' : '📤 SHARE PDF KE WHATSAPP'}
                     </button>
                     <button 
                        onClick={() => setShowReceipt(false)}
                        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-black"
                     >
                        TUTUP
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};

export default MemberInstallmentPayment;