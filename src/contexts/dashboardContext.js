import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [showHome, setShowHome] = useState(true);
  const [showDashBorrow, setShowDashBorrow] = useState(false);
  const [showEarn, setShowEarn] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [borrow, setBorrow] = useState(true);
  const [vault, setVault] = useState(false);
  const [vaultId, setVaultId] = useState(null);
  const [payback, setPayback] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [depositRes, setDepositRes] = useState(null);
  const [withdrawRes, setWithdrawRes] = useState(null);
  const [paybackRes, setPaybackRes] = useState(null);

  const onHomeClick = () => {
    setShowHome(true);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onDashBorrowClick = () => {
    setShowHome(false);
    setShowDashBorrow(true);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onEarnClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(true);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onExchangeClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(true);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onHistoryClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(true);
    setShowSettings(false);
  };

  const onSettingsClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(true);
  };

  const onVaultClick = (id) => {
    setVault(true);
    setDeposit(false);
    setPayback(false);
    setBorrow(false);
    setWithdraw(false);
    setVaultId(id);
  };

  const onPaybackClick = () => {
    setVault(false);
    setPayback(true);
    setBorrow(false);
    setDeposit(false);
    setWithdraw(false);
  };

  const onDepositClick = () => {
    setVault(false);
    setDeposit(true);
    setPayback(false);
    setBorrow(false);
    setWithdraw(false);
  };

  const onWithdrawClick = () => {
    setVault(false);
    setWithdraw(true);
    setDeposit(false);
    setPayback(false);
    setBorrow(false);
  };

  const saveDepositRes = (res) => {
    setDepositRes(res);
  };

  const saveWithdrawRes = (res) => {
    setWithdrawRes(res);
  };

  const savePaybackRes = (res) => {
    setPaybackRes(res);
  };

  const resetBorrowSetup = () => {
    setVault(true);
    setWithdraw(false);
    setDeposit(false);
    setPayback(false);
    setBorrow(false);
    setDepositRes(null);
    setWithdrawRes(null);
    setPaybackRes(null);
  };

  return (
    <DashboardContext.Provider
      value={{
        showHome,
        setShowHome,
        showDashBorrow,
        setShowDashBorrow,
        showEarn,
        setShowEarn,
        showExchange,
        setShowExchange,
        showHistory,
        setShowHistory,
        showSettings,
        setShowSettings,
        onHomeClick,
        onDashBorrowClick,
        onEarnClick,
        onExchangeClick,
        onHistoryClick,
        onSettingsClick,
        onVaultClick,
        vault,
        vaultId,
        borrow,
        payback,
        deposit,
        withdraw,
        onPaybackClick,
        onDepositClick,
        onWithdrawClick,
        resetBorrowSetup,
        saveDepositRes,
        depositRes,
        saveWithdrawRes,
        withdrawRes,
        savePaybackRes,
        paybackRes,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export function useDashboard() {
  return useContext(DashboardContext);
}
