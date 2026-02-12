import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';

const DutaEducationKit: React.FC = () => {
  const { navigate } = useAppContext();
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: 'piggy',
      title: 'Menabung Receh (Celengan Digital)',
      icon: '🐔',
      desc: 'Ajarkan warga menabung sisa belanja mulai Rp 1.000.',
      tutorial: 'Katakan kepada mereka: "Bu, daripada receh kembalian hilang, masukkan ke Celengan Ayam Digital ini. Kapanpun butuh buat jajan anak, tinggal ketuk, cair lewat saya."',
      cta: 'Buka Menu Celengan',
      view: 'DIGITAL_PASSBOOK'
    },
    {
      id: 'market',
      title: 'Pasar Rakyat (Beli Dari Teman)',
      icon: '🧺',
      desc: 'Sosialisasi belanja antar-anggota untuk menaikkan SHU.',
      tutorial: 'Katakan kepada mereka: "Pak, kalau beli beras ke toko Pak Slamet lewat HP ini, Bapak bantu Pak Slamet, dan di akhir tahun Bapak dapat bonus bagi hasil. Uang kita tidak lari ke luar desa."',
      cta: 'Cek Marketplace',
      view: 'MEMBER_MARKETPLACE'
    },
    {
      id: 'qris',
      title: 'QRIS (Stempel Bayar Digital)',
      icon: '🤳',
      desc: 'Cara termudah bayar belanja bagi yang masih gaptek.',
      tutorial: 'Ajarkan konsep "Ambil Foto Kotak". Katakan: "Tinggal arahkan kamera HP ke gambar kotak di warung. Nanti HP Bapak bersuara mengonfirmasi jumlahnya. Gampang seperti difoto saja."',
      cta: 'Simulasi QRIS',
      view: 'MEMBER_QRIS'
    },
    {
      id: 'daskop',
      title: 'Daskop & Perisai Sehat',
      icon: '🛡️',
      desc: 'Penjelasan dana perlindungan sosial Rp 5.000.',
      tutorial: 'Katakan: "Kita patungan Rp 5.000 sebulan buat jaga-jaga. Kalau ada anggota sakit atau musibah, kita semua yang nanggung. Jadi Bapak gak perlu pinjam rentenir buat bayar RS."',
      cta: 'Detail Proteksi',
      view: 'MEMBER_HEALTH_SHIELD'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">
              Duta Field Education Hub v1.2
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Senjata Edukasi Duta.</h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-xl">
               Gunakan panduan ini untuk menjelaskan sistem koperasi kepada warga dengan bahasa yang paling sederhana.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">📢</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Education Protocol</p>
             <p className="text-xl font-black text-emerald-400 mt-1 uppercase italic">"Lidah Rakyat"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {lessons.map((lesson) => (
           <div 
             key={lesson.id}
             onClick={() => setActiveLesson(lesson.id)}
             className={`bg-white p-10 rounded-[3.5rem] border-2 transition-all cursor-pointer group flex flex-col ${
               activeLesson === lesson.id ? 'border-indigo-600 shadow-2xl scale-[1.02]' : 'border-slate-100 hover:border-indigo-200'
             }`}
           >
              <div className="flex justify-between items-start mb-6">
                 <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner group-hover:scale-110 transition-transform">
                    {lesson.icon}
                 </div>
                 <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[9px] font-black uppercase tracking-widest">Lesson</span>
              </div>
              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4 italic">{lesson.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">"{lesson.desc}"</p>
              
              {activeLesson === lesson.id && (
                 <div className="space-y-6 animate-in slide-in-from-top duration-500">
                    <div className="p-6 bg-indigo-50 rounded-3xl border-l-8 border-indigo-600 italic">
                       <p className="text-[10px] font-black text-indigo-600 uppercase mb-2">Cara Bicara Ke Warga:</p>
                       <p className="text-sm text-indigo-900 font-medium leading-relaxed">{lesson.tutorial}</p>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(lesson.view as any); }}
                      className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-lg"
                    >
                      Buka Fitur Untuk Demonstrasi
                    </button>
                 </div>
              )}
           </div>
         ))}
      </div>

      {/* Psychology Reminder */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-6xl shrink-0 animate-bounce">💡</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Rahasia Sukses Duta:</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Rakyat kecil tidak butuh penjelasan teknologi cloud atau AI. Mereka hanya butuh kepastian: **Aman, Bisa ditarik, dan Tidak Ada yang Mencuri.** Jadilah wajah manusia bagi teknologi hebat Bapak."
            </p>
         </div>
      </div>
    </div>
  );
};

export default DutaEducationKit;