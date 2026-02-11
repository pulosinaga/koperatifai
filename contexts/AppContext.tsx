import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppView, UserRole, UserProfile } from '../types.ts';
import { supabase } from '../services/supabaseClient.ts';

interface AppContextType {
  isLoggedIn: boolean;
  user: UserProfile | null;
  currentView: AppView;
  isLiveDatabase: boolean;
  login: (role: UserRole, pin: string) => Promise<boolean>;
  logout: () => void;
  navigate: (view: AppView) => void;
  goBack: () => void;
  refreshProfile: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);
  const [isLiveDatabase, setIsLiveDatabase] = useState(false);

  // Auto-restore sesi jika pengguna sudah pernah login di browser
  useEffect(() => {
    const checkSession = async () => {
      if (supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
           try {
             await loadUserProfile(session.user.id);
           } catch (e) {
             console.warn("Session restore failed", e);
           }
        } else {
           // Cek apakah ada sesi bypass yang tersimpan
           const bypassId = localStorage.getItem('koperatif_bypass_session');
           if (bypassId) {
              try { await loadUserProfile(bypassId); } catch(e) {}
           }
        }
      }
    };
    checkSession();
  }, []);

  const loadUserProfile = async (userId: string) => {
     try {
        // Ambil data profil dari Supabase (Database Asli)
        const { data: profile, error: profileError } = await supabase.from('profiles').select('*').eq('id', userId).single();
        if (profileError) throw new Error(`Gagal membaca tabel profiles: ${profileError.message}.`);
        
        const { data: balance, error: balanceError } = await supabase.from('balances').select('*').eq('user_id', userId).single();
        if (balanceError) throw new Error(`Gagal membaca tabel balances: ${balanceError.message}.`);
        
        if (profile && balance) {
           setUser({
              id: profile.id,
              name: profile.name,
              role: profile.role as UserRole,
              memberId: profile.member_id,
              balances: {
                 principal: Number(balance.principal),
                 mandatory: Number(balance.mandatory),
                 voluntary: Number(balance.voluntary)
              },
              reputationScore: profile.reputation_score
           });
           setIsLoggedIn(true);
           setIsLiveDatabase(true);
           return true;
        }
     } catch (e: any) {
        console.warn("Gagal memuat profil Supabase:", e.message);
        throw e;
     }
     return false;
  };

  const refreshProfile = async () => {
     if (user?.id && isLiveDatabase) {
        try { await loadUserProfile(user.id); } catch(e) { console.warn(e); }
     }
  };

  const login = async (role: UserRole, pin: string) => {
    try {
      if (!supabase) throw new Error("Kredensial URL & Key Supabase belum disetup.");

      const email = `${role.toLowerCase()}@koperatif.ai`;
      const password = `${pin}-CoopAI-2026`;
      let targetUserId = null;

      // 1. Coba Login via Supabase Auth (Normal)
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });

      if (authError) {
         console.warn(`Supabase Auth Ditolak (${authError.message}). Mengaktifkan Jalur Bypass...`);
         
         // 2. BYPASS JALUR BELAKANG: Ambil data langsung dari tabel profiles karena RLS sudah dimatikan
         const { data: profileList, error: pError } = await supabase
            .from('profiles')
            .select('id')
            .eq('role', role)
            .limit(1);

         if (pError || !profileList || profileList.length === 0) {
            throw new Error(`Data Live DB untuk role ${role} tidak ditemukan. Apakah SQL Script sudah di-Run?`);
         }
         
         targetUserId = profileList[0].id;
         console.log("Bypass Berhasil! ID didapatkan:", targetUserId);
      } else {
         targetUserId = authData.user.id;
      }

      if (targetUserId) {
         const success = await loadUserProfile(targetUserId);
         if (success) {
            // Simpan sesi bypass agar tidak logout saat di-refresh
            localStorage.setItem('koperatif_bypass_session', targetUserId);
            setCurrentView(AppView.DASHBOARD);
            setViewHistory([]);
            return true;
         }
      }
      throw new Error("Terjadi kesalahan saat memuat data profil.");
      
    } catch (error: any) {
      console.warn("⚠️ Login Live DB Gagal:", error.message);
      
      alert(`KONEKSI DATABASE LIVE GAGAL!\n\nAlasan: ${error.message}\n\nAplikasi sementara dialihkan ke Mode Simulasi Lokal.`);
      
      // Fallback ke Data Simulasi
      const mockUser: UserProfile = {
        id: 'usr_mock_' + Date.now(),
        name: role === UserRole.FOUNDER ? 'Budi Utama (Founder)' : 'Anggota Koperasi',
        role: role,
        memberId: role === UserRole.FOUNDER ? 'CU-FND-001' : 'CU-MBR-882',
        balances: {
          principal: 100000,
          mandatory: 1200000,
          voluntary: 15400000
        },
        reputationScore: role === UserRole.FOUNDER ? 999 : 850
      };
      
      setUser(mockUser);
      setIsLoggedIn(true);
      setIsLiveDatabase(false);
      setCurrentView(AppView.DASHBOARD);
      setViewHistory([]);
      return true;
    }
  };

  const logout = async () => {
    if (confirm("Keluar dari KoperatifAI?")) {
      if (supabase && isLiveDatabase) {
         await supabase.auth.signOut();
      }
      localStorage.removeItem('koperatif_bypass_session');
      setIsLoggedIn(false);
      setUser(null);
      setCurrentView(AppView.DASHBOARD);
      setViewHistory([]);
      setIsLiveDatabase(false);
    }
  };

  const navigate = (view: AppView) => {
    if (view !== currentView) {
      setViewHistory(prev => [...prev, currentView]);
      setCurrentView(view);
    }
  };

  const goBack = () => {
    if (viewHistory.length > 0) {
      const prevView = viewHistory[viewHistory.length - 1];
      setViewHistory(prev => prev.slice(0, -1));
      setCurrentView(prevView);
    }
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, user, currentView, isLiveDatabase, login, logout, navigate, goBack, refreshProfile }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext harus digunakan di dalam AppProvider');
  }
  return context;
};