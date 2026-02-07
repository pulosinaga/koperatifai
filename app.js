
const { useState, useEffect, useMemo } = React;

// --- CONFIGURATION & CONSTANTS ---
const AppView = {
  DASHBOARD: 'DASHBOARD',
  SIMULATOR: 'SIMULATOR',
  MEMBERSHIP: 'MEMBERSHIP',
  TRANSACTIONS: 'TRANSACTIONS'
};

const UserRole = {
  MEMBER: 'MEMBER',
  FOUNDER: 'FOUNDER'
};

// --- REUSABLE COMPONENTS ---

const Header = ({ view, role, onLogout, onBack }) => (
  <header className="flex justify-between items-center mb-10">
    <div className="flex items-center gap-4">
      {view !== AppView.DASHBOARD && (
        <button onClick={onBack} className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 hover:bg-slate-50 transition-all">←</button>
      )}
      <div>
        <h1 className="text-2xl font-black text-indigo-600 italic tracking-tighter">KoperatifAI</h1>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sovereign Financial Hub</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="text-right hidden sm:block">
        <p className="text-[10px] font-black text-indigo-600 uppercase">{role}</p>
        <p className="text-xs font-bold text-slate-800">Budi Utama</p>
      </div>
      <button onClick={onLogout} className="p-3 bg-rose-50 text-rose-600 rounded-2xl border border-rose-100 font-black text-[10px] hover:bg-rose-600 hover:text-white transition-all">EXIT</button>
    </div>
  </header>
);

const Dashboard = ({ setView }) => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
       <h2 className="text-3xl font-black text-slate-800 italic">Selamat Malam, Budi</h2>
       <p className="text-slate-500 mt-2">Kedaulatan ekonomi Anda dalam genggaman AI.</p>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100">
             <p className="text-[10px] font-black uppercase opacity-60">Tabungan Sukarela</p>
             <p className="text-3xl font-black mt-2">Rp 15.400.000</p>
          </div>
          <div className="p-8 bg-emerald-500 rounded-[2.5rem] text-white shadow-xl shadow-emerald-100">
             <p className="text-[10px] font-black uppercase opacity-60">Estimasi SHU</p>
             <p className="text-3xl font-black mt-2">Rp 2.450.000</p>
          </div>
          <button 
            onClick={() => setView(AppView.SIMULATOR)}
            className="p-8 bg-slate-900 rounded-[2.5rem] text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all flex flex-col items-center justify-center gap-2"
          >
             <span>Mulai Simulasi Kredit</span>
             <span className="text-2xl">→</span>
          </button>
       </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {[
         { id: AppView.TRANSACTIONS, label: 'History', icon: '📜' },
         { id: AppView.MEMBERSHIP, label: 'Profile', icon: '👤' },
         { id: 'MARKET', label: 'Market', icon: '🛒' },
         { id: 'GOLD', label: 'Emas', icon: '📀' },
       ].map(item => (
         <button key={item.id} onClick={() => setView(item.id)} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center gap-3 hover:shadow-lg transition-all">
            <span className="text-3xl">{item.icon}</span>
            <span className="text-[10px] font-black uppercase text-slate-400">{item.label}</span>
         </button>
       ))}
    </div>
  </div>
);

const LoanSimulator = () => {
  const [amount, setAmount] = useState(5000000);
  const monthly = amount / 12 * 1.012; // Simple math for UI
  return (
    <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm animate-in zoom-in duration-300">
       <h3 className="text-2xl font-black text-slate-800 italic mb-8">Simulator Pinjaman Adil</h3>
       <div className="space-y-10">
          <div className="space-y-4">
             <div className="flex justify-between font-black text-xs uppercase text-slate-400">
                <span>Jumlah Pinjaman</span>
                <span className="text-indigo-600 text-lg">Rp {amount.toLocaleString('id-ID')}</span>
             </div>
             <input 
              type="range" min="1000000" max="50000000" step="500000" value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
             />
          </div>
          <div className="p-8 bg-slate-900 rounded-[3rem] text-white text-center">
             <p className="text-[10px] font-black uppercase text-indigo-400 mb-2">Angsuran Bulanan (12 Bln)</p>
             <p className="text-5xl font-black">Rp {Math.round(monthly).toLocaleString('id-ID')}</p>
          </div>
          <button className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700">Ajukan Sekarang</button>
       </div>
    </div>
  );
};

// --- LOGIN SCREEN ---

const LoginScreen = ({ onLogin }) => {
  const [pin, setPin] = useState('');
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
      <div className="bg-white w-full max-w-md rounded-[4rem] p-12 shadow-2xl relative z-10 text-center">
         <h2 className="text-3xl font-black text-slate-800 italic">Selamat Datang</h2>
         <p className="text-slate-400 text-sm mt-2">Masukkan PIN Aman Anda</p>
         
         <div className="my-10 space-y-4">
            <input 
              type="password" maxLength={6} placeholder="••••••" value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full p-6 bg-slate-50 border-none rounded-3xl text-center text-4xl tracking-[1em] outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
            />
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Demo PIN: 123456</p>
         </div>

         <button 
           disabled={pin.length < 6}
           onClick={() => onLogin(UserRole.MEMBER)}
           className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 disabled:opacity-30 transition-all"
         >
            Buka Gerbang Digital
         </button>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState(AppView.DASHBOARD);
  const [role, setRole] = useState(UserRole.MEMBER);

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    if(confirm("Logout dari sistem?")) setIsLoggedIn(false);
  };

  if (!isLoggedIn) return <LoginScreen onLogin={handleLogin} />;

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <Header 
          view={view} 
          role={role} 
          onLogout={handleLogout} 
          onBack={() => setView(AppView.DASHBOARD)} 
        />
        
        <main>
          {view === AppView.DASHBOARD && <Dashboard setView={setView} />}
          {view === AppView.SIMULATOR && <LoanSimulator />}
          {view !== AppView.DASHBOARD && view !== AppView.SIMULATOR && (
            <div className="p-20 bg-white rounded-[4rem] text-center border border-slate-100 shadow-sm">
               <div className="text-6xl mb-6">🚧</div>
               <h3 className="text-xl font-bold">Fitur "{view}" Sedang Diaktivasi.</h3>
               <p className="text-slate-400 mt-2">Mohon tunggu sinkronisasi data kedaulatan.</p>
               <button onClick={() => setView(AppView.DASHBOARD)} className="mt-8 text-indigo-600 font-black uppercase tracking-widest text-xs">Kembali</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// --- RENDER ---
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
console.log("KoperatifAI Kernel v4.0 Aktif.");
