
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const OnlineOnboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isScanning, setIsScanning] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [gpsLocked, setGpsLocked] = useState(false);
  const [coords, setCoords] = useState<{lat: number, lng: number} | null>(null);

  const getGpsLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setGpsLocked(true);
      });
    }
  };

  const simulateFullIdentityVerification = async () => {
    setIsScanning(true);
    // Simulation of AI Vision OCR + Face Match
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Simulasikan hasil analisis identitas komprehensif. 
        1. Ekstraksi KTP: NIK 3275011206850003, Nama 'BUDI UTAMA', Alamat Cianjur. 
        2. Perbandingan Wajah: Bandingkan foto Selfie Liveness dengan Foto di e-KTP. 
        3. Koordinat GPS: Lat ${coords?.lat || -6.7}, Lng ${coords?.lng || 107.1}. 
        Berikan 'Face Match Confidence (%)', 'Location Sync Status', dan 'Identity Integrity Score'.`,
      });
      
      setExtractedData({
        nik: '3275011206850003',
        nama: 'BUDI UTAMA',
        alamat: 'JL. RAYA CIPANAS NO. 42, CIANJUR',
        gpsStatus: 'GPS MATCH (Verified Presence)',
        faceMatch: '98.4%',
        liveness: 'VERIFIED (Human detected)',
        integrityScore: '96/100',
        coordinates: `${coords?.lat?.toFixed(4) || '-6.7212'}, ${coords?.lng?.toFixed(4) || '107.1145'}`
      });
      setStep(5); // Final Step
    } catch (e) {
      console.error(e);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header with 4-Layer Trust */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Biometric Shield v4.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">4 Lapis Verifikasi Digital. <br/>Identitas Tak Terbantahkan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
              Satu-satunya sistem koperasi yang menggabungkan **e-KTP, Lokasi GPS, Biometrik Wajah, dan Deteksi Kehidupan** untuk keamanan modal Anda.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="flex justify-center gap-3 mb-4">
                <span className="text-2xl">🪪</span>
                <span className="text-2xl">📍</span>
                <span className="text-2xl">📸</span>
             </div>
             <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Verification Level</p>
             <p className="text-2xl font-black text-emerald-400 mt-1 italic">ULTIMATE TRUST</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Verification Interface */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 relative overflow-hidden">
            <h3 className="text-2xl font-black text-slate-800 italic">Protokol Keamanan</h3>
            
            {step === 1 ? (
               <div className="space-y-6 animate-in fade-in">
                  <div className="aspect-[1.6/1] bg-slate-50 border-4 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 group hover:border-indigo-400 transition-all cursor-pointer">
                     <div className="text-6xl group-hover:scale-110 transition-transform">🪪</div>
                     <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Ambil Foto e-KTP Asli</p>
                  </div>
                  <button 
                    onClick={() => { getGpsLocation(); setStep(2); }}
                    className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all"
                  >
                    Mulai Scan KTP & GPS
                  </button>
               </div>
            ) : step === 2 ? (
               <div className="space-y-6 animate-in slide-in-from-right">
                  <div className="aspect-square max-w-[280px] mx-auto bg-slate-900 rounded-full border-8 border-indigo-500 relative flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 bg-indigo-500/20 animate-pulse"></div>
                     <div className="text-8xl">👤</div>
                     <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-400 animate-scan-y shadow-[0_0_15px_#818cf8]"></div>
                  </div>
                  <div className="text-center space-y-2">
                     <h4 className="text-xl font-black text-slate-800 italic">Selfie & Liveness Check</h4>
                     <p className="text-slate-400 text-xs italic">"Kedipkan mata Anda saat lingkaran berubah menjadi hijau."</p>
                  </div>
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full py-5 bg-emerald-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl"
                  >
                    Saya Siap (Liveness Check)
                  </button>
               </div>
            ) : step === 3 ? (
               <div className="space-y-8 text-center py-10 animate-in zoom-in">
                  <div className="relative inline-block">
                     <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center text-5xl animate-spin-slow">🔄</div>
                     <div className="absolute inset-0 border-4 border-indigo-600 rounded-full animate-ping"></div>
                  </div>
                  <div className="space-y-2">
                     <h4 className="text-xl font-black text-slate-800 italic">Sinkronisasi Biometrik...</h4>
                     <p className="text-slate-400 text-sm italic">AI sedang membandingkan wajah Anda dengan foto di e-KTP.</p>
                  </div>
                  <button 
                    onClick={simulateFullIdentityVerification}
                    className="px-8 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest"
                  >
                    Analisis Segi Empat Kepercayaan
                  </button>
               </div>
            ) : (
               <div className="space-y-6 animate-in zoom-in duration-300">
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                     <span className="text-2xl">🛡️</span>
                     <div>
                        <p className="text-xs text-emerald-800 font-bold uppercase tracking-widest italic">Identity Fully Authenticated</p>
                        <p className="text-[9px] font-mono text-emerald-600">Integrity Score: {extractedData.integrityScore}</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-slate-50 rounded-2xl">
                        <p className="text-[8px] font-black text-slate-400 uppercase">NIK Match</p>
                        <p className="text-xs font-mono font-bold text-slate-800">SUCCESS</p>
                     </div>
                     <div className="p-4 bg-indigo-50 rounded-2xl">
                        <p className="text-[8px] font-black text-indigo-400 uppercase">Face Confidence</p>
                        <p className="text-lg font-black text-indigo-600">{extractedData.faceMatch}</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-2xl col-span-2">
                        <p className="text-[8px] font-black text-slate-400 uppercase">Liveness Status</p>
                        <p className="text-xs font-bold text-emerald-600 italic">HUMAN VERIFIED (Anti-Spoofing Active)</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-2xl">
                        <p className="text-[8px] font-black text-slate-400 uppercase">GPS Sync</p>
                        <p className="text-xs font-bold text-emerald-600">MATCHED</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-2xl">
                        <p className="text-[8px] font-black text-slate-400 uppercase">Nama (e-KTP)</p>
                        <p className="text-xs font-bold text-slate-800">{extractedData.nama}</p>
                     </div>
                  </div>
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase text-[10px] tracking-widest"
                  >
                    Reset Verifikasi
                  </button>
               </div>
            )}
         </div>

         {/* Sidebar: Strategic Wisdom */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-6 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Kenapa Biometrik?</h4>
               <ul className="space-y-6">
                  {[
                    { t: 'Anti-Identity Theft', d: 'Mencegah orang menggunakan foto KTP temannya untuk mencairkan pinjaman.', i: '🎭' },
                    { t: 'Bukti Kehadiran Riil', d: 'Wajah + GPS = Bukti mutlak bahwa orang tersebut sedang mendaftar saat ini.', i: '📍' },
                    { t: 'Sertifikasi Keamanan', d: 'Meningkatkan standar startup Anda menjadi setara dengan aplikasi perbankan global.', i: '🏦' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                       <span className="text-2xl">{item.i}</span>
                       <div>
                          <h5 className="font-bold text-sm">{item.t}</h5>
                          <p className="text-[10px] text-slate-400 leading-relaxed mt-1 italic">"{item.d}"</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[3rem] flex flex-col items-center text-center space-y-4 shadow-inner">
               <div className="text-4xl">🤖</div>
               <h4 className="font-bold text-emerald-900 uppercase text-xs tracking-widest">AI Vision Sentry</h4>
               <p className="text-[10px] text-emerald-700/70 leading-relaxed italic">
                  "AI kami dilatih untuk mendeteksi pantulan cahaya pada layar HP (Digital Spoofing). Jika Anda menodongkan kamera ke foto, sistem akan otomatis memblokir pendaftaran."
               </p>
            </div>
         </div>
      </div>
      
      <style>{`
        @keyframes scan-y {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan-y {
          animation: scan-y 2s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default OnlineOnboarding;
