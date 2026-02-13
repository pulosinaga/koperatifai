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

const ROLE_PROFILES: Record<UserRole, UserProfile> = {
  [UserRole.FOUNDER]: {
    id: 'fnd_01',
    name: 'Budi Utama (Founder)',
    role: UserRole.FOUNDER,
    memberId: 'CU-FND-001',
    balances: { principal: 1000000, mandatory: 50000000, voluntary: 19600000000 },
    reputationScore: 999
  },
  [UserRole.LEADER]: {
    id: 'ldr_01',
    name: 'Joni Setiawan (Duta)',
    role: UserRole.LEADER,
    memberId: 'CU-LDR-042',
    balances: { principal: 100000, mandatory: 500000, voluntary: 1900000 },
    reputationScore: 850
  },
  [UserRole.MEMBER]: {
    id: 'mbr_01',
    name: 'Rakyat Jelata (Anggota)',
    role: UserRole.MEMBER,
    memberId: 'CU-MBR-882',
    balances: { principal: 100000, mandatory: 20000, voluntary: 50000 },
    reputationScore: 650
  },
  [UserRole.BOARD]: {
    id: 'brd_01',
    name: 'Dewan Pengurus',
    role: UserRole.BOARD,
    memberId: 'CU-BRD-005',
    balances: { principal: 500000, mandatory: 1000000, voluntary: 5000000 },
    reputationScore: 900
  },
  [UserRole.STAFF]: {
    id: 'stf_01',
    name: 'Staf Operasional',
    role: UserRole.STAFF,
    memberId: 'CU-STF-099',
    balances: { principal: 100000, mandatory: 100000, voluntary: 250000 },
    reputationScore: 800
  },
  [UserRole.AUDITOR]: {
    id: 'aud_01',
    name: 'Pengawas Independen',
    role: UserRole.AUDITOR,
    memberId: 'CU-AUD-007',
    balances: { principal: 100000, mandatory: 100000, voluntary: 0 },
    reputationScore: 950
  },
  [UserRole.GOVERNMENT]: {
    id: 'gov_01',
    name: 'Admin Kemenkop/Pemda',
    role: UserRole.GOVERNMENT,
    memberId: 'GOV-RI-001',
    balances: { principal: 0, mandatory: 0, voluntary: 0 },
    reputationScore: 1000
  }
};

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);
  const [isLiveDatabase, setIsLiveDatabase] = useState(false);

  // DETEKSI PERUBAHAN PERAN VIA URL (PROTEKSI OTORITAS)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const targetRole = params.get('targetRole');
    
    // Jika ada permintaan peran baru di URL tapi kita sedang login sebagai peran lain (misal: Founder)
    if (targetRole && isLoggedIn && user && user.role !== targetRole) {
       console.log("Otoritas tidak cocok. Melakukan reset keamanan...");
       setIsLoggedIn(false);
       setUser(null);
       // Biarkan LoginScreen menangani pemilihan peran sesuai URL
    }
  }, [isLoggedIn, user]);

  useEffect(() => {
    const checkSession = async () => {
      if (supabase && localStorage.getItem('SUPABASE_URL')) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
           try { await loadUserProfile(session.user.id); } catch (e) {}
        }
      }
    };
    checkSession();
  }, []);

  const loadUserProfile = async (userId: string) => {
     if (!supabase) return false;
     try {
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', userId).single();
        const { data: balance } = await supabase.from('balances').select('*').eq('user_id', userId).single();
        if (profile && balance) {
           setUser({
              id: profile.id, name: profile.name,
              role: profile.role as UserRole, memberId: profile.member_id,
              balances: { principal: Number(balance.principal), mandatory: Number(balance.mandatory), voluntary: Number(balance.voluntary) },
              reputationScore: profile.reputation_score
           });
           setIsLoggedIn(true);
           setIsLiveDatabase(true);
           return true;
        }
     } catch (e) {}
     return false;
  };

  const refreshProfile = async () => {
     if (user?.id && isLiveDatabase && supabase) {
        try { await loadUserProfile(user.id); } catch(e) {}
     }
  };

  const login = async (role: UserRole, pin: string) => {
    const targetProfile = ROLE_PROFILES[role];
    if (targetProfile) {
       setUser(targetProfile);
       setIsLoggedIn(true);
       setIsLiveDatabase(false);
       setCurrentView(AppView.DASHBOARD);
       return true;
    }
    return false;
  };

  const logout = () => {
    if (confirm("Keluar dari sistem kedaulatan?")) {
      setIsLoggedIn(false);
      setUser(null);
      setCurrentView(AppView.DASHBOARD);
      setViewHistory([]);
      window.history.replaceState({}, '', '/');
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
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};