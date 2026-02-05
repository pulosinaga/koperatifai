
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LoanSimulator from './components/LoanSimulator';
import AIAdvisor from './components/AIAdvisor';
import Membership from './components/Membership';
import TransactionHistory from './components/TransactionHistory';
import SystemHealth from './components/SystemHealth';
import AccountingReports from './components/AccountingReports';
import MarketInsights from './components/MarketInsights';
import GlobalStandards from './components/GlobalStandards';
import TechEvolution from './components/TechEvolution';
import AntiOpportunism from './components/AntiOpportunism';
import GlobalNetwork from './components/GlobalNetwork';
import TrustTransparency from './components/TrustTransparency';
import SavingsGrowth from './components/SavingsGrowth';
import OnlineOnboarding from './components/OnlineOnboarding';
import DepositSystem from './components/DepositSystem';
import EscrowGovernance from './components/EscrowGovernance';
import LoanDisbursement from './components/LoanDisbursement';
import CurrentAdoption from './components/CurrentAdoption';
import CompetitiveLandscape from './components/CompetitiveLandscape';
import DaskopClaim from './components/DaskopClaim';
import MemberBenefits from './components/MemberBenefits';
import ServerInfrastructure from './components/ServerInfrastructure';
import EcosystemBridge from './components/EcosystemBridge';
import MemberAttraction from './components/MemberAttraction';
import LeanOperations from './components/LeanOperations';
import RealWorldFeasibility from './components/RealWorldFeasibility';
import CommunityMobilization from './components/CommunityMobilization';
import SafetyProtection from './components/SafetyProtection';
import GovernmentRelations from './components/GovernmentRelations';
import StartupPositioning from './components/StartupPositioning';
import GovernmentPartnership from './components/GovernmentPartnership';
import IntellectualProperty from './components/IntellectualProperty';
import GovSynergy from './components/GovSynergy';
import FundingSovereignty from './components/FundingSovereignty';
import RaiffeisenPhilosophy from './components/RaiffeisenPhilosophy';
import AntidotePinjol from './components/AntidotePinjol';
import GovKDMPIntegration from './components/GovKDMPIntegration';
import StrategicFederation from './components/StrategicFederation';
import MillionDollarRoadmap from './components/MillionDollarRoadmap';
import GlobalInfluence from './components/GlobalInfluence';
import CommunityImpact from './components/CommunityImpact';
import MembershipCertificate from './components/MembershipCertificate';
import ValuationTracker from './components/ValuationTracker';
import LoanHistory from './components/LoanHistory';
import MemberMarketplace from './components/MemberMarketplace';
import MerchantDashboard from './components/MerchantDashboard';
import MemberQRIS from './components/MemberQRIS';
import GlobalSHUSimulation from './components/GlobalSHUSimulation';
import DigitalVoting from './components/DigitalVoting';
import SmartEducation from './components/SmartEducation';
import CommunityForum from './components/CommunityForum';
import FoundersPlaybook from './components/FoundersPlaybook';
import TechSetup from './components/TechSetup';
import LoanWorkflow from './components/LoanWorkflow';
import AICreditScoring from './components/AICreditScoring';
import FraudDetection from './components/FraudDetection';
import AITreasury from './components/AITreasury';
import CrisisSimulator from './components/CrisisSimulator';
import PromotionKit from './components/PromotionKit';
import CommunityLeaders from './components/CommunityLeaders';
import LeaderCompensation from './components/LeaderCompensation';
import NewsAndUpdates from './components/NewsAndUpdates';
import TechProcess from './components/TechProcess';
import SecurityProtocol from './components/SecurityProtocol';
import LeaderOperations from './components/LeaderOperations';
import DutaEstablishment from './components/DutaEstablishment';
import CapitalSecurity from './components/CapitalSecurity';
import DailyOperations from './components/DailyOperations';
import InclusionStrategy from './components/InclusionStrategy';
import DigitalPiggyBank from './components/DigitalPiggyBank';
import FieldTransactions from './components/FieldTransactions';
import DutaSettlement from './components/DutaSettlement';
import AuditTrail from './components/AuditTrail';
import MarketPenetration from './components/MarketPenetration';
import PioneerManagement from './components/PioneerManagement';
import TransactionFlow from './components/TransactionFlow';
import VouchingSystem from './components/VouchingSystem';
import DigitalPassbook from './components/DigitalPassbook';
import AICreditCommittee from './components/AICreditCommittee';
import AICollector from './components/AICollector';
import InvestorPortal from './components/InvestorPortal';
import LoanReadiness from './components/LoanReadiness';
import AICollateral from './components/AICollateral';
import TransparencyProtocol from './components/TransparencyProtocol';
import AIGuardSimulation from './components/AIGuardSimulation';
import CyberSecurityShield from './components/CyberSecurityShield';
import DigitalInsurance from './components/DigitalInsurance';
import LaunchRoadmap from './components/LaunchRoadmap';
import PitchDeck from './components/PitchDeck';
import BusinessPlan from './components/BusinessPlan';
import DigitalContract from './components/DigitalContract';
import LoginScreen from './components/LoginScreen';
import { AppView, UserRole } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!currentRole) {
    return <LoginScreen onLogin={(role) => setCurrentRole(role)} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard setView={setCurrentView} role={currentRole} />;
      case AppView.TRANSACTIONS:
        return <TransactionHistory />;
      case AppView.LOAN_SIMULATOR:
        return <LoanSimulator />;
      case AppView.AI_ADVISOR:
        return <AIAdvisor />;
      case AppView.MEMBERSHIP_PROFILE:
        return <Membership />;
      case AppView.DASKOP_CLAIM:
        return <DaskopClaim />;
      case AppView.SYSTEM_HEALTH:
        return <SystemHealth />;
      case AppView.ACCOUNTING:
        return <AccountingReports />;
      case AppView.SAVINGS_GROWTH:
        return <SavingsGrowth />;
      case AppView.DEPOSIT_SYSTEM:
        return <DepositSystem />;
      case AppView.ESCROW_GOVERNANCE:
        return <EscrowGovernance />;
      case AppView.LOAN_DISBURSEMENT:
        return <LoanDisbursement />;
      case AppView.CURRENT_ADOPTION:
        return <CurrentAdoption />;
      case AppView.COMPETITIVE_LANDSCAPE:
        return <CompetitiveLandscape />;
      case AppView.SAFETY_PROTECTION:
        return <SafetyProtection />;
      case AppView.LEAN_OPERATIONS:
        return <LeanOperations />;
      case AppView.REAL_WORLD_FEASIBILITY:
        return <RealWorldFeasibility />;
      case AppView.COMMUNITY_MOBILIZATION:
        return <CommunityMobilization />;
      case AppView.GOVERNMENT_RELATIONS:
        return <GovernmentRelations />;
      case AppView.STARTUP_POSITIONING:
        return <StartupPositioning />;
      case AppView.GOV_ADOPTION:
        return <GovernmentPartnership />;
      case AppView.IP_PROTECTION:
        return <IntellectualProperty />;
      case AppView.GOV_SYNERGY:
        return <GovSynergy />;
      case AppView.FUNDING_SOVEREIGNTY:
        return <FundingSovereignty />;
      case AppView.RAIFFEISEN_PHILOSOPHY:
        return <RaiffeisenPhilosophy />;
      case AppView.ANTIDOTE_PINJOL:
        return <AntidotePinjol />;
      case AppView.GOV_KDMP_INTEGRATION:
        return <GovKDMPIntegration />;
      case AppView.STRATEGIC_FEDERATION:
        return <StrategicFederation />;
      case AppView.MILLION_DOLLAR_ROADMAP:
        return <MillionDollarRoadmap />;
      case AppView.GLOBAL_INFLUENCE:
        return <GlobalInfluence />;
      case AppView.COMMUNITY_IMPACT:
        return <CommunityImpact />;
      case AppView.MEMBERSHIP_CERTIFICATE:
        return <MembershipCertificate />;
      case AppView.VALUATION_TRACKER:
        return <ValuationTracker />;
      case AppView.LOAN_HISTORY:
        return <LoanHistory />;
      case AppView.MEMBER_MARKETPLACE:
        return <MemberMarketplace />;
      case AppView.MERCHANT_DASHBOARD:
        return <MerchantDashboard />;
      case AppView.MEMBER_QRIS:
        return <MemberQRIS />;
      case AppView.GLOBAL_SHU_SIMULATION:
        return <GlobalSHUSimulation />;
      case AppView.E_RAT:
        return <DigitalVoting />;
      case AppView.SMART_EDUCATION:
        return <SmartEducation />;
      case AppView.COMMUNITY_FORUM:
        return <CommunityForum />;
      case AppView.FOUNDER_PLAYBOOK:
        return <FoundersPlaybook />;
      case AppView.TECH_SETUP:
        return <TechSetup />;
      case AppView.LOAN_WORKFLOW:
        return <LoanWorkflow />;
      case AppView.AI_CREDIT_SCORING:
        return <AICreditScoring />;
      case AppView.FRAUD_DETECTION:
        return <FraudDetection />;
      case AppView.AI_TREASURY:
        return <AITreasury />;
      case AppView.CRISIS_SIMULATOR:
        return <CrisisSimulator />;
      case AppView.PROMOTION_KIT:
        return <PromotionKit />;
      case AppView.COMMUNITY_LEADERS:
        return <CommunityLeaders />;
      case AppView.LEADER_COMPENSATION:
        return <LeaderCompensation />;
      case AppView.NEWS_UPDATES:
        return <NewsAndUpdates />;
      case AppView.TECH_PROCESS:
        return <TechProcess />;
      case AppView.SECURITY_PROTOCOL:
        return <SecurityProtocol />;
      case AppView.LEADER_OPERATIONS:
        return <LeaderOperations />;
      case AppView.DUTA_ESTABLISHMENT:
        return <DutaEstablishment />;
      case AppView.CAPITAL_SECURITY:
        return <CapitalSecurity />;
      case AppView.DAILY_OPERATIONS:
        return <DailyOperations />;
      case AppView.INCLUSION_STRATEGY:
        return <InclusionStrategy />;
      case AppView.DIGITAL_PIGGYBANK:
        return <DigitalPiggyBank />;
      case AppView.FIELD_TRANSACTIONS:
        return <FieldTransactions />;
      case AppView.DUTA_SETTLEMENT:
        return <DutaSettlement />;
      case AppView.AUDIT_TRAIL:
        return <AuditTrail />;
      case AppView.MARKET_PENETRATION:
        return <MarketPenetration />;
      case AppView.PIONEER_MANAGEMENT:
        return <PioneerManagement />;
      case AppView.TRANSACTION_FLOW:
        return <TransactionFlow />;
      case AppView.VOUCHING_SYSTEM:
        return <VouchingSystem />;
      case AppView.DIGITAL_PASSBOOK:
        return <DigitalPassbook />;
      case AppView.AI_CREDIT_COMMITTEE:
        return <AICreditCommittee />;
      case AppView.AI_COLLECTOR:
        return <AICollector />;
      case AppView.INVESTOR_PORTAL:
        return <InvestorPortal />;
      case AppView.LOAN_READINESS:
        return <LoanReadiness />;
      case AppView.AI_COLLATERAL:
        return <AICollateral />;
      case AppView.TRANSPARENCY_PROTOCOL:
        return <TransparencyProtocol />;
      case AppView.AI_GUARD_SIMULATION:
        return <AIGuardSimulation />;
      case AppView.CYBER_SECURITY_SHIELD:
        return <CyberSecurityShield />;
      case AppView.DIGITAL_INSURANCE:
        return <DigitalInsurance />;
      case AppView.LAUNCH_ROADMAP:
        return <LaunchRoadmap />;
      case AppView.PITCH_DECK:
        return <PitchDeck />;
      case AppView.BUSINESS_PLAN:
        return <BusinessPlan />;
      case AppView.DIGITAL_CONTRACT:
        return <DigitalContract />;
      default:
        return <Dashboard setView={setCurrentView} role={currentRole} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar currentView={currentView} setView={setCurrentView} role={currentRole} onLogout={() => setCurrentRole(null)} />
      
      <main className="flex-1 overflow-y-auto flex flex-col">
        {!isOnline && (
          <div role="alert" className="bg-amber-500 text-white px-8 py-2 text-center text-sm font-bold flex items-center justify-center gap-2 animate-in slide-in-from-top duration-300">
            <span>⚠️</span> Anda sedang offline. Beberapa fitur mungkin tidak berfungsi.
          </div>
        )}

        <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 px-8 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Cari fitur atau transaksi..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-72 transition-all group-hover:bg-slate-200/50"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>
            <div className="px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full">
               <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">{currentRole} VIEW</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-all">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">3</span>
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200">
               <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Saldo Total</p>
                  <p className="text-sm font-bold text-slate-900 leading-none">Rp 19.600.000</p>
               </div>
               <button 
                onClick={() => setCurrentView(AppView.DEPOSIT_SYSTEM)}
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:shadow-indigo-200 transition-all transform active:scale-95 italic font-black">Setor</button>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl w-full mx-auto flex-1">
          {renderContent()}
        </div>

        <footer className="px-8 py-10 text-center text-slate-400 text-xs border-t border-slate-100/50">
          <p className="font-medium">© 2024 KoperatifAI - Koperasi Kredit Digital Indonesia</p>
          <p className="mt-1 italic">"Meneruskan Warisan Raiffeisen Melalui Kecerdasan Buatan."</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
