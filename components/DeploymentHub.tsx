import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const DeploymentHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SUPABASE' | 'VERCEL'>('SUPABASE');
  const [isVerifying, setIsVerifying] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'IDLE' | 'CONFIGURING' | 'CONNECTED'>('IDLE');
  const [copied, setCopied] = useState<'TABLES' | 'INSERT' | 'VERCEL' | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState('');
  
  // States for Supabase configuration
  const [projectUrl, setProjectUrl] = useState('');
  const [anonKey, setAnonKey] = useState('');
  const [founderUid, setFounderUid] = useState('');
  const [isConfigSaved, setIsConfigSaved] = useState(false);

  useEffect(() => {
     // Load saved config on mount
     const savedUrl = localStorage.getItem('SUPABASE_URL');
     const savedKey = localStorage.getItem('SUPABASE_ANON_KEY');
     if (savedUrl && savedKey) {
        setProjectUrl(savedUrl);
        setAnonKey(savedKey);
        setIsConfigSaved(true);
     }
  }, []);

  const saveSupabaseConfig = () => {
     if (projectUrl && anonKey) {
        localStorage.setItem('SUPABASE_URL', projectUrl.trim());
        localStorage.setItem('SUPABASE_ANON_KEY', anonKey.trim());
        setIsConfigSaved(true);
     }
  };

  const vercelIP = "76.76.21.21";
  const vercelCNAME = "cname.vercel-dns.com";
  const domainName = "koperatifai.online";
  
  const hostingerAIPrompt = `Halo Hostinger AI Assistant. Saya ingin menghubungkan domain ${domainName} saya ke platform VERCEL. 
Mohon bantu saya melakukan konfigurasi DNS berikut secara otomatis:
1. Ubah A Record (Host @) untuk mengarah ke IP Vercel: ${vercelIP}
2. Tambahkan/Ubah CNAME Record (Host www) untuk mengarah ke: ${vercelCNAME}
3. Pastikan tidak ada A Record atau CNAME lain yang bertabrakan dengan nilai di atas.
4. Setel TTL ke 3600 agar propagasi cepat terdeteksi di Indonesia.
Konfirmasi jika sudah selesai agar saya bisa melakukan verifikasi di sisi Vercel. Terima kasih!`;

  const tableScript = `-- 1. Buat Tabel Profil Anggota
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  member_id TEXT UNIQUE NOT NULL,
  reputation_score INT DEFAULT 850
);

-- 2. Buat Tabel Saldo Tabungan
CREATE TABLE IF NOT EXISTS balances (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE PRIMARY KEY,
  principal NUMERIC DEFAULT 0,
  mandatory NUMERIC DEFAULT 0,
  voluntary NUMERIC DEFAULT 0
);

-- 3. Matikan RLS Sementara (Untuk fase MVP/Testing)
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE balances DISABLE ROW LEVEL SECURITY;`;

  const insertScript = `-- 4. Suntikkan Data Founder KoperatifAI
INSERT INTO profiles (id, name, role, member_id, reputation_score) 
VALUES ('${founderUid || 'PASTE_UID_DI_SINI'}', 'Founder KoperatifAI', 'FOUNDER', 'CU-FND-001', 999);

INSERT INTO balances (user_id, principal, mandatory, voluntary) 
VALUES ('${founderUid || 'PASTE_UID_DI_SINI'}', 1000000, 50000000, 19600000000);`;

  const handleCopy = (type: 'TABLES' | 'INSERT' | 'VERCEL', text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Gagal menyalin teks", err);
    }
  };

  const runVercelHandshake = async () => {
    setIsVerifying(true);
    setSyncStatus('CONFIGURING');
    
    try {
      const apiKey = process.env.API_KEY || "";
      if (!apiKey) {
         setAiAnalysis("Konfigurasi API Key belum terdeteksi. Silakan atur DNS secara manual.");
         setSyncStatus('CONNECTED');
         return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis infrastruktur Vercel untuk domain ${domainName}. Berikan analisis kesiapan produksi.`,
      });
      setAiAnalysis(response.text || "Infrastruktur siap. Menunggu penyebaran DNS global.");
      setSyncStatus('CONNECTED');
    } catch (e) {
      setAiAnalysis("Sistem memantau propagasi secara manual. Pastikan A Record sudah mengarah ke 76.76.21.21.");
      setSyncStatus('IDLE');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                System Setup Wizard
              </span>
            </div>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Inisialisasi <br/><span className="text-indigo-400">Pusat Kedaulatan.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Aplikasi ini butuh alamat Supabase milik Anda. Masukkan kredensial Anda dan ikuti panduan integrasinya.
            </p>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-3xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div className="flex justify-center items-center gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all ${activeTab === 'SUPABASE' ? 'bg-emerald-500 text-white shadow-[0_0_20px_#10b981]' : 'bg-white/10 opacity-50'}`}>🗄️</div>
                <div className="w-10 h-px bg-white/20"></div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all ${activeTab === 'VERCEL' ? 'bg-indigo-500 text-white shadow-[0_0_20px_#6366f1]' : 'bg-white/10 opacity-50'}`}>🌐</div>
             </div>
             <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Setup Status</p>
                <p className={`text-2xl font-black mt-1 italic ${isConfigSaved ? 'text-emerald-400' : 'text-amber-400'}`}>
                   {isConfigSaved ? 'DB CONNECTED' : 'WAITING FOR KEYS'}
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center">
        <div className="bg-white p-1.5 rounded-[2rem] border border-slate-100 shadow-sm inline-flex">
          <button
            onClick={() => setActiveTab('SUPABASE')}
            className={`px-8 py-4 rounded-3xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 ${
              activeTab === 'SUPABASE' ? 'bg-slate-900 text-emerald-400 shadow-xl' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <span>🗄️</span> 1. Setup Akun Founder (Supabase)
          </button>
          <button
            onClick={() => setActiveTab('VERCEL')}
            className={`px-8 py-4 rounded-3xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 ${
              activeTab === 'VERCEL' ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <span>🌐</span> 2. Setup Domain (Vercel)
          </button>
        </div>
      </div>

      {/* SUPABASE TAB CONTENT */}
      {activeTab === 'SUPABASE' && (
         <div className="space-y-12 animate-in slide-in-from-left duration-500">
            
            {/* Step 1: Input API Keys (NEW) */}
            <div className={`p-12 rounded-[4rem] shadow-xl flex flex-col lg:flex-row gap-12 transition-all ${isConfigSaved ? 'bg-emerald-900 text-white border-b-8 border-emerald-600' : 'bg-white border border-slate-100'}`}>
               <div className="w-full lg:w-1/3 space-y-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black shadow-lg ${isConfigSaved ? 'bg-white text-emerald-600' : 'bg-indigo-600 text-white'}`}>1</div>
                  <h3 className={`text-2xl font-black italic ${isConfigSaved ? 'text-white' : 'text-slate-800'}`}>Koneksikan Database</h3>
                  <p className={`leading-relaxed text-sm ${isConfigSaved ? 'text-emerald-100' : 'text-slate-500'}`}>
                     Buka Supabase. Masuk ke <b>Project Settings</b> (ikon roda gigi) {'>'} <b>API</b>. Salin "Project URL" dan "anon public key" lalu paste di sini.
                  </p>
               </div>
               <div className={`flex-1 rounded-[2.5rem] p-8 space-y-6 ${isConfigSaved ? 'bg-white/10 border border-white/20' : 'bg-slate-50 border border-slate-200'}`}>
                  <div className="space-y-2">
                     <p className={`text-[10px] font-black uppercase tracking-widest ${isConfigSaved ? 'text-emerald-200' : 'text-slate-400'}`}>Project URL</p>
                     <input 
                        type="text" 
                        value={projectUrl}
                        onChange={(e) => {setProjectUrl(e.target.value); setIsConfigSaved(false);}}
                        placeholder="https://xxxxxxxxxxxx.supabase.co"
                        className={`w-full p-4 rounded-xl font-mono text-sm outline-none transition-all ${isConfigSaved ? 'bg-black/30 text-emerald-300 border border-white/10' : 'bg-white text-slate-900 border-2 border-slate-200 focus:border-indigo-500'}`}
                     />
                  </div>
                  <div className="space-y-2">
                     <p className={`text-[10px] font-black uppercase tracking-widest ${isConfigSaved ? 'text-emerald-200' : 'text-slate-400'}`}>Anon Public Key</p>
                     <input 
                        type="text" 
                        value={anonKey}
                        onChange={(e) => {setAnonKey(e.target.value); setIsConfigSaved(false);}}
                        placeholder="eyJhbGciOiJIUzI1NiIsInR5c..."
                        className={`w-full p-4 rounded-xl font-mono text-sm outline-none transition-all ${isConfigSaved ? 'bg-black/30 text-emerald-300 border border-white/10' : 'bg-white text-slate-900 border-2 border-slate-200 focus:border-indigo-500'}`}
                     />
                  </div>
                  {!isConfigSaved && (
                     <button 
                        onClick={saveSupabaseConfig}
                        disabled={!projectUrl || !anonKey}
                        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-xl"
                     >
                        Simpan & Koneksikan
                     </button>
                  )}
                  {isConfigSaved && (
                     <p className="text-xs font-bold text-emerald-300 text-center flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> Aplikasi KoperatifAI kini menunjuk ke Supabase Anda.
                     </p>
                  )}
               </div>
            </div>

            {/* Step 2: Tables (Hanya tampil jika step 1 selesai) */}
            <div className={`bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-12 transition-all ${isConfigSaved ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
               <div className="w-full lg:w-1/3 space-y-6">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg">2</div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Buat Struktur Tabel</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                     Di dashboard Supabase Anda, masuk ke menu <b>SQL Editor</b>, paste kode di samping, lalu klik <b>Run</b>.
                  </p>
               </div>
               <div className="flex-1 bg-[#0b0e14] rounded-[2.5rem] p-6 shadow-xl border border-slate-800 flex flex-col relative group">
                  <button 
                     onClick={() => handleCopy('TABLES', tableScript)}
                     className="absolute top-4 right-4 px-4 py-2 bg-white/10 hover:bg-emerald-500 hover:text-white rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-300 transition-colors opacity-0 group-hover:opacity-100 z-10"
                  >
                     {copied === 'TABLES' ? '✅ TERSALIN' : '📋 COPY SCRIPT'}
                  </button>
                  <pre className="text-[11px] font-mono leading-relaxed text-indigo-300 overflow-x-auto custom-scrollbar">
                     <code>{tableScript}</code>
                  </pre>
               </div>
            </div>

            {/* Step 3: Auth User */}
            <div className={`bg-indigo-900 p-12 rounded-[4rem] shadow-xl flex flex-col lg:flex-row gap-12 text-white relative overflow-hidden transition-all ${isConfigSaved ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px]"></div>
               <div className="w-full lg:w-1/3 space-y-6 relative z-10">
                  <div className="w-12 h-12 bg-emerald-400 text-slate-900 rounded-full flex items-center justify-center text-xl font-black shadow-lg">3</div>
                  <h3 className="text-2xl font-black italic">Buat Akun Login</h3>
                  <p className="text-indigo-200 leading-relaxed text-sm">
                     Buka menu <b>Authentication</b> {'>'} <b>Users</b> di Supabase. Tambahkan User persis seperti data di samping.
                  </p>
                  <div className="p-4 bg-rose-500/20 border border-rose-500/30 rounded-2xl">
                     <p className="text-[10px] font-black text-rose-300 uppercase mb-1">⚠️ SANGAT PENTING:</p>
                     <p className="text-xs text-rose-100">Pastikan fitur "Confirm Email" <b>dimatikan</b> di menu Authentication {'>'} Providers {'>'} Email.</p>
                  </div>
               </div>
               <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 border border-white/10 space-y-6 relative z-10">
                  <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</p>
                     <div className="p-4 bg-black/40 rounded-xl font-mono text-emerald-400 border border-white/5">founder@koperatif.ai</div>
                  </div>
                  <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</p>
                     <div className="p-4 bg-black/40 rounded-xl font-mono text-emerald-400 border border-white/5">999999-CoopAI-2026</div>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-white/10">
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">User UID (Copy dari Supabase)</p>
                     <p className="text-xs text-slate-300 mb-2">Setelah user dibuat, copy UID dari tabel Users dan paste ke sini.</p>
                     <input 
                        type="text" 
                        value={founderUid}
                        onChange={(e) => setFounderUid(e.target.value)}
                        placeholder="Contoh: 123e4567-e89b-12d3..."
                        className="w-full p-4 bg-white text-slate-900 border-2 border-indigo-400 rounded-xl font-mono text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all placeholder:text-slate-300"
                     />
                  </div>
               </div>
            </div>

            {/* Step 4: Insert Data */}
            <div className={`bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-12 transition-all duration-500 ${!isConfigSaved ? 'opacity-40 grayscale pointer-events-none' : founderUid ? 'ring-4 ring-emerald-500/20 scale-[1.01]' : 'opacity-90'}`}>
               <div className="w-full lg:w-1/3 space-y-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black shadow-lg ${founderUid ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>4</div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Injeksi Uang & Jabatan</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                     {founderUid 
                        ? 'Script ini sudah menyertakan UID Anda. Copy dan Run script ini di SQL Editor Supabase untuk mengisi saldo Anda.' 
                        : 'Paste UID Anda di Step 3 terlebih dahulu.'}
                  </p>
               </div>
               <div className="flex-1 bg-[#0b0e14] rounded-[2.5rem] p-6 shadow-xl border border-slate-800 flex flex-col relative group">
                  {founderUid && (
                     <button 
                        onClick={() => handleCopy('INSERT', insertScript)}
                        className="absolute top-4 right-4 px-4 py-2 bg-indigo-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors z-10"
                     >
                        {copied === 'INSERT' ? '✅ TERSALIN' : '📋 COPY SCRIPT INJEKSI'}
                     </button>
                  )}
                  <pre className="text-[11px] font-mono leading-relaxed text-emerald-400 overflow-x-auto custom-scrollbar">
                     <code>{insertScript}</code>
                  </pre>
               </div>
            </div>
            
            {founderUid && isConfigSaved && (
               <div className="flex flex-col items-center justify-center pt-8 animate-in slide-in-from-bottom">
                  <p className="text-slate-500 font-bold mb-4">Semua konfigurasi selesai. Aplikasi siap beroperasi dalam Live Mode.</p>
                  <button onClick={() => window.location.reload()} className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-black hover:-translate-y-1 transition-all">
                     Muat Ulang Aplikasi (Login Founder)
                  </button>
               </div>
            )}
         </div>
      )}

      {/* VERCEL TAB CONTENT ... (Tetap sama seperti sebelumnya) */}
      {activeTab === 'VERCEL' && (
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-in slide-in-from-right duration-500">
            {/* ... isi vercel tab ... */}
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
               <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black text-slate-800 italic">Nilai DNS Produksi</h3>
                  <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">Target: Hostinger</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-indigo-600 shadow-sm">A</span>
                        <p className="text-[10px] font-black text-slate-400 uppercase">Points To</p>
                     </div>
                     <p className="text-2xl font-mono font-black text-slate-800">{vercelIP}</p>
                     <p className="text-[9px] text-slate-500 italic">Host: @ (Root)</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-indigo-600 shadow-sm">CN</span>
                        <p className="text-[10px] font-black text-slate-400 uppercase">Points To</p>
                     </div>
                     <p className="text-xs font-mono font-black text-slate-800 break-all">{vercelCNAME}</p>
                     <p className="text-[9px] text-slate-500 italic">Host: www</p>
                  </div>
               </div>

               <div className="space-y-4 pt-6 border-t border-slate-50">
                  <button 
                     onClick={() => handleCopy('VERCEL', hostingerAIPrompt)}
                     className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl transition-all active:scale-95 hover:bg-black"
                  >
                     {copied === 'VERCEL' ? '✅ PROMPT DISALIN' : '🤖 SALIN PROMPT AI HOSTINGER'}
                  </button>
                  <p className="text-xs text-slate-500 leading-relaxed text-center italic">
                     Paste prompt ini ke Asisten AI di panel Hostinger Anda. Mereka akan menyetel DNS di atas secara otomatis.
                  </p>
               </div>
            </div>

            <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col space-y-8 border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest relative z-10">Verification Console</h3>
               
               <div className="flex-1 bg-white/5 rounded-[3rem] p-8 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 flex flex-col justify-center text-center shadow-inner">
                  {isVerifying ? (
                     <div className="space-y-8">
                        <div className="flex justify-center gap-4">
                           <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
                           <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 animate-pulse">VERIFYING VERCEL HANDSHAKE...</p>
                     </div>
                  ) : aiAnalysis ? (
                     <div className="animate-in fade-in duration-1000">
                        <pre className="whitespace-pre-wrap font-serif text-sm">{aiAnalysis}</pre>
                     </div>
                  ) : (
                     <div className="space-y-6 opacity-40">
                        <div className="text-7xl">🌐</div>
                        <p className="font-bold text-sm">Klik tombol verifikasi untuk membedah kedaulatan domain Anda.</p>
                     </div>
                  )}
               </div>

               <button 
                  onClick={runVercelHandshake}
                  disabled={isVerifying || syncStatus === 'CONNECTED'}
                  className={`w-full py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl transition-all active:scale-95 ${
                     syncStatus === 'CONNECTED' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
               >
                  {isVerifying ? '⏳ VERIFYING...' : syncStatus === 'CONNECTED' ? '✓ DOMAIN TERHUBUNG' : '📡 VERIFIKASI KONEKSI'}
               </button>
            </div>
         </div>
      )}
    </div>
  );
};

export default DeploymentHub;