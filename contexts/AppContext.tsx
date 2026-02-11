import React, { createContext, useContext, useState } from 'react';
import { AppView, UserRole, UserProfile } from '../types.ts';

interface AppContextType {
  isLoggedIn: boolean;
  user: UserProfile | null;
  currentView: AppView;
  login: (role: UserRole) => void;
  logout: () => void;
  navigate: (view: AppView) => void;
  goBack: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);

  const login = (role: UserRole) => {
    // Simulasi Profil Pengguna Global (Nantinya akan diganti dengan data dari Supabase)
    const mockUser: UserProfile = {
      id: 'usr_' + Date.now(),
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
    setCurrentView(AppView.DASHBOARD);
    setViewHistory([]);
  };

  const logout = () => {
    if (confirm("Keluar dari KoperatifAI?")) {
      setIsLoggedIn(false);
      setUser(null);
      setCurrentView(AppView.DASHBOARD);
      setViewHistory([]);
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
    <AppContext.Provider value={{ isLoggedIn, user, currentView, login, logout, navigate, goBack }}>
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