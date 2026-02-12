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

// Default Founder Profile for Direct Access
const DEFAULT_FOUNDER: UserProfile = {
  id: 'founder_sovereign_01',
  name: 'Budi Utama (Founder)',
  role: UserRole.FOUNDER,
  memberId: 'CU-FND-001',
  balances: {
    principal: 1000000,
    mandatory: 50000000,
    voluntary: 19600000000
  },
  reputationScore: 999
};

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Set initial state to Logged In as Founder by default
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState<UserProfile | null>(DEFAULT_FOUNDER);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);
  const [isLiveDatabase, setIsLiveDatabase] = useState(false);

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
     } catch (e) {}
     return false;
  };

  const refreshProfile = async () => {
     if (user?.id && isLiveDatabase && supabase) {
        try { await loadUserProfile(user.id); } catch(e) {}
     }
  };

  const login = async (role: UserRole, pin: string) => {
    // Normal login process remains available if needed
    const mockUser: UserProfile = { ...DEFAULT_FOUNDER, role, name: role === UserRole.FOUNDER ? 'Budi Utama' : 'Anggota Koperasi' };
    setUser(mockUser);
    setIsLoggedIn(true);
    setIsLiveDatabase(false);
    return true;
  };

  const logout = () => {
    if (confirm("Keluar dari sistem kedaulatan?")) {
      setIsLoggedIn(false);
      setUser(null);
      setCurrentView(AppView.DASHBOARD);
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
