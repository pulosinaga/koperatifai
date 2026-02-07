
import React, { useState } from 'react';
import { AppView, UserRole } from './types.js';
import Sidebar from './components/Sidebar.js';
import Dashboard from './components/Dashboard.js';
import LoginScreen from './components/LoginScreen.js';
import Header from './components/Header.js';
import TransactionHistory from './components/TransactionHistory.js';
import LoanSimulator from './components/LoanSimulator.js';
import LoanHistory from './components/LoanHistory.js';
import AIAdvisor from './components/AIAdvisor.js';
import Membership from './components/Membership.js';
import SHUDistribution from './components/SHUDistribution.js';
import MemberMarketplace from './components/MemberMarketplace.js';
import MerchantDashboard from './components/MerchantDashboard.js';
import BillPayments from './components/BillPayments.js';
import DigitalPassbook from './components/DigitalPassbook.js';
import SmartEducation from './components/SmartEducation.js';
import DeploymentHub from './components/DeploymentHub.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [currentView, setCurrentView] = useState(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState([]);

  const handleLogin = (role) => {
    setCurrentRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    if (confirm("Keluar dari sistem?")) {
      setIsLoggedIn(false);
      setCurrentRole(null);
      setCurrentView(AppView.DASHBOARD);
    }
  };

  const handleSetView = (newView) => {
    if (newView !== currentView) {
      setViewHistory(prev => [...prev, currentView]);
      setCurrentView(newView);
    }
  };

  const handleBack = () => {
    if (viewHistory.length > 0) {
      const prevView = viewHistory[viewHistory.length - 1];
      setViewHistory(prev => prev.slice(0, -1));
      setCurrentView(prevView);
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) return <LoginScreen onLogin={handleLogin} />;

    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard setView={handleSetView} role={currentRole} />;
      case AppView.TRANSACTIONS: return <TransactionHistory />;
      case AppView.SHU_DISTRIBUTION: return <SHUDistribution />;
      case AppView.DIGITAL_PASSBOOK: return <DigitalPassbook />;
      case AppView.LOAN_SIMULATOR: return <LoanSimulator />;
      case AppView.LOAN_HISTORY: return <LoanHistory />;
      case AppView.MEMBER_MARKETPLACE: return <MemberMarketplace />;
      case AppView.MERCHANT_DASHBOARD: return <MerchantDashboard />;
      case AppView.BILL_PAYMENTS: return <BillPayments />;
      case AppView.SMART_EDUCATION: return <SmartEducation />;
      case AppView.AI_ADVISOR: return <AIAdvisor />;
      case AppView.MEMBERSHIP_PROFILE: return <Membership />;
      case AppView.DEPLOYMENT_HUB: return <DeploymentHub />;
      default: return <Dashboard setView={handleSetView} role={currentRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden">
      {isLoggedIn && (
        <Sidebar currentView={currentView} setView={handleSetView} role={currentRole} onLogout={handleLogout} />
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        {isLoggedIn && (
          <Header currentView={currentView} onBack={handleBack} role={currentRole} onLogout={handleLogout} />
        )}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
