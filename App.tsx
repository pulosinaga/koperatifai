
import React, { useState } from 'react';
import { AppView, UserRole } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import TransactionHistory from './components/TransactionHistory';
import LoanSimulator from './components/LoanSimulator';
import LoanHistory from './components/LoanHistory';
import AIAdvisor from './components/AIAdvisor';
import Membership from './components/Membership';
import MembershipCertificate from './components/MembershipCertificate';
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
import ValuationTracker from './components/ValuationTracker';
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
import JDIHIntegration from './components/JDIHIntegration';
import BrandingIdentity from './components/BrandingIdentity';
import SmartProcurement from './components/SmartProcurement';
import BillPayments from './components/BillPayments';
import CoopVsBank from './components/CoopVsBank';
import RemittanceService from './components/RemittanceService';
import LeaderLiquidity from './components/LeaderLiquidity';
import DutaVetting from './components/DutaVetting';
import PensionFund from './components/PensionFund';
import ProductiveElderDashboard from './components/ProductiveElderDashboard';
import ElderImpactHub from './components/ElderImpactHub';
import LegacyVault from './components/LegacyVault';
import CompetitiveEdge from './components/CompetitiveEdge';
import DemandAggregator from './components/DemandAggregator';
import FoodSovereigntyMonitor from './components/FoodSovereigntyMonitor';
import MicroInvestmentHub from './components/MicroInvestmentHub';
import CoopHealthCheck from './components/CoopHealthCheck';
import GlobalTradeBridge from './components/GlobalTradeBridge';
import CoopPhilanthropyHub from './components/CoopPhilanthropyHub';
import GlobalGrantsHub from './components/GlobalGrantsHub';
import AIBoardroom from './components/AIBoardroom';
import FounderReport from './components/FounderReport';
import FinalDrill from './components/FinalDrill';
import InvestorPitch from './components/InvestorPitch';
import ExecutivePitchSimulator from './components/ExecutivePitchSimulator';
import DueDiligenceVault from './components/DueDiligenceVault';
import SovereignMigrationMap from './components/SovereignMigrationMap';
import SovereignGoldReserve from './components/SovereignGoldReserve';
import GlobalBondPortfolio from './components/GlobalBondPortfolio';
import ExecutiveGovernanceDashboard from './components/ExecutiveGovernanceDashboard';
import NationalBondPortfolio from './components/NationalBondPortfolio';
import CoopCreditRating from './components/CoopCreditRating';
import CoopLogisticsHub from './components/CoopLogisticsHub';
import CooperativeProfitStrategy from './components/CooperativeProfitStrategy';
import CooperativeEnergyGrid from './components/CooperativeEnergyGrid';
import CooperativeHealthcare from './components/CooperativeHealthcare';
import CooperativeHousing from './components/CooperativeHousing';
import GovTaxAI from './components/GovTaxAI';
import GlobalCoopSwap from './components/GlobalCoopSwap';
import AutonomousCharity from './components/AutonomousCharity';
import SovereignSafetyNetwork from './components/SovereignSafetyNetwork';
import MicroFranchiseHub from './components/MicroFranchiseHub';
import SHUDistribution from './components/SHUDistribution';
import DutaSOP from './components/DutaSOP';
import DutaManagementCenter from './components/DutaManagementCenter';
import DutaFieldVerification from './components/DutaFieldVerification';
import FounderRevenueHub from './components/FounderRevenueHub';
import StrategicDirectiveCenter from './components/StrategicDirectiveCenter';
import DualRoleStrategy from './components/DualRoleStrategy';
import NationalScaleStrategy from './components/NationalScaleStrategy';
import FoundingDeedGenerator from './components/FoundingDeedGenerator';
import ManagerSelectionGuide from './components/ManagerSelectionGuide';
import ElectionDashboard from './components/ElectionDashboard';
import DutaRightsObligations from './components/DutaRightsObligations';
import DutaTerritoryExpansion from './components/DutaTerritoryExpansion';
import GlobalCommandCenter from './components/GlobalCommandCenter';
import DutaRecruitmentDashboard from './components/DutaRecruitmentDashboard';
import DutaContract from './components/DutaContract';
import NationalSummit from './components/NationalSummit';
import ShariaGovernance from './components/ShariaGovernance';
import SpiritualJourneys from './components/SpiritualJourneys';
import DeploymentHub from './components/DeploymentHub';
import DutaPerformance from './components/DutaPerformance';
import TerritoryCommand from './components/TerritoryCommand';
import IPLicenseMonitor from './components/IPLicenseMonitor';
import EcosystemRevenue from './components/EcosystemRevenue';
import DutaScalingSimulator from './components/DutaScalingSimulator';
import StrategicProfitCalculator from './components/StrategicProfitCalculator';
import ArisanDigital from './components/ArisanDigital';
import MemberHealthShield from './components/MemberHealthShield';
import PersonalGoldSavings from './components/PersonalGoldSavings';
import CourierDashboard from './components/CourierDashboard';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);

  const handleLogin = (role: UserRole) => {
    setCurrentRole(role);
    setIsLoggedIn(true);
    setCurrentView(AppView.DASHBOARD);
    setViewHistory([]);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentRole(null);
    setCurrentView(AppView.DASHBOARD);
    setViewHistory([]);
  };

  const handleSetView = (newView: AppView) => {
    if (newView !== currentView) {
      setViewHistory(prev => [...prev, currentView]);
      setCurrentView(newView);
    }
  };

  const handleBack = () => {
    if (viewHistory.length > 0) {
      const prev = viewHistory[viewHistory.length - 1];
      setViewHistory(prevHistory => prevHistory.slice(0, -1));
      setCurrentView(prev);
    } else {
      setCurrentView(AppView.DASHBOARD);
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) return <LoginScreen onLogin={handleLogin} />;

    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard setView={handleSetView} role={currentRole!} />;
      
      // Ekonomi Aktif
      case AppView.ARISAN_DIGITAL: return <ArisanDigital />;
      case AppView.COURIER_DASHBOARD: return <CourierDashboard />;
      case AppView.MEMBER_MARKETPLACE: return <MemberMarketplace />;
      case AppView.MERCHANT_DASHBOARD: return <MerchantDashboard />;
      case AppView.MEMBER_QRIS: return <MemberQRIS />;
      case AppView.SMART_PROCUREMENT: return <SmartProcurement />;
      /* Added handle for BILL_PAYMENTS view */
      case AppView.BILL_PAYMENTS: return <BillPayments />;
      
      // Proteksi & Masa Depan
      case AppView.MEMBER_HEALTH_SHIELD: return <MemberHealthShield />;
      case AppView.DASKOP_CLAIM: return <DaskopClaim />;
      case AppView.AUTONOMOUS_CHARITY: return <AutonomousCharity />;
      case AppView.SOVEREIGN_SAFETY_NETWORK: return <SovereignSafetyNetwork />;
      case AppView.PERSONAL_GOLD: return <PersonalGoldSavings />;
      case AppView.PENSION_FUND: return <PensionFund />;
      case AppView.MICRO_INVESTMENT: return <MicroInvestmentHub />;
      case AppView.GLOBAL_COOP_SWAP: return <GlobalCoopSwap />;
      
      // Edukasi & Lainnya
      case AppView.SMART_EDUCATION: return <SmartEducation />;
      case AppView.COMMUNITY_FORUM: return <CommunityForum />;
      case AppView.MEMBERSHIP_PROFILE: return <Membership />;
      case AppView.MEMBERSHIP_CERTIFICATE: return <MembershipCertificate />;
      case AppView.AI_ADVISOR: return <AIAdvisor />;
      case AppView.SHU_DISTRIBUTION: return <SHUDistribution />;
      case AppView.TRANSACTIONS: return <TransactionHistory />;
      case AppView.LOAN_SIMULATOR: return <LoanSimulator />;
      case AppView.LOAN_HISTORY: return <LoanHistory />;
      // Added handle for LOAN_READINESS view
      case AppView.LOAN_READINESS: return <LoanReadiness />;

      // Duta & Operasional
      case AppView.DUTA_CONTRACT: return <DutaContract />;
      case AppView.DUTA_PERFORMANCE: return <DutaPerformance />;
      case AppView.DUTA_SCALING_SIMULATOR: return <DutaScalingSimulator />;
      case AppView.DUTA_FIELD_VERIFICATION: return <DutaFieldVerification />;
      case AppView.DUTA_MANAGEMENT_CENTER: return <DutaManagementCenter />;
      case AppView.TERRITORY_COMMAND: return <TerritoryCommand />;

      // Founder Command
      case AppView.GLOBAL_COMMAND_CENTER: return <GlobalCommandCenter />;
      case AppView.STRATEGIC_PROFIT_CALCULATOR: return <StrategicProfitCalculator />;
      case AppView.DEPLOYMENT_HUB: return <DeploymentHub />;
      case AppView.IP_LICENSE_MONITOR: return <IPLicenseMonitor />;
      case AppView.ECOSYSTEM_REVENUE: return <EcosystemRevenue />;
      case AppView.SYSTEM_HEALTH: return <SystemHealth />;
      case AppView.ACCOUNTING: return <AccountingReports />;
      case AppView.AI_BOARDROOM: return <AIBoardroom />;
      case AppView.FOUNDER_REPORT: return <FounderReport />;
      case AppView.INVESTOR_PITCH: return <InvestorPitch />;
      case AppView.COOP_HEALTH_CHECK: return <CoopHealthCheck />;
      case AppView.GOV_TAX_AI: return <GovTaxAI />;
      /* Added handle for AI_CREDIT_COMMITTEE view */
      case AppView.AI_CREDIT_COMMITTEE: return <AICreditCommittee />;
      
      default: return <Dashboard setView={handleSetView} role={currentRole!} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden font-sans">
      {isLoggedIn && currentRole && (
        <Sidebar currentView={currentView} setView={handleSetView} role={currentRole} onLogout={handleLogout} />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {isLoggedIn && currentRole && (
          <Header 
            currentView={currentView} 
            onBack={handleBack} 
            role={currentRole} 
            onLogout={handleLogout} 
          />
        )}
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
