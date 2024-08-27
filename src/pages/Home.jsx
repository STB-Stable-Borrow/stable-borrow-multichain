import React, { useContext, useEffect, useState } from "react";
import LandingBody from "../layouts/index";
import HeroSection from "../layouts/landingPage/HeroSection";
import Footer from "../layouts/landingPage/Footer";
import Web3ModalProvider from "../contexts/web3ModalContext";
import bgImage from "../assets/landing/bg.png";
import Header from "../layouts/landingPage/Header";
import { useBorrow } from "../contexts/borrowContext/borrowContext";
import { Web3ModalContext } from "../contexts/web3ModalContext";
import { useNavigate } from "react-router-dom";
import { useDashboard } from "../contexts/dashboardContext";
import { getXdcContract } from "../lib/stbSwapContract";
import { multiChainConfig, multiChainTheme } from "../data/config";
import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import { CancelButton } from "../assets/Icon/CancelButton";

function Home() {
  const { connect, disconnect } = useContext(Web3ModalContext);
  const { resetVaultBorrowSetup, setFromDashborrow, setFromDashearn } =
    useBorrow();

  const [chainModal, setChainModal] = useState(false);

  const navigate = useNavigate();
  const {
    setShowHome,
    setShowDashBorrow,
    setShowEarn,
    setShowExchange,
    setShowHistory,
    setShowSettings,
  } = useDashboard();

  //reset vault setup
  useEffect(() => {
    resetVaultBorrowSetup();
    setFromDashborrow(false);
    setFromDashearn(false);
  }, []);

  //handles wallet connection
  const handleConnectWallet = async () => {
    setChainModal(true);
  };

  // handles wallet disconnection
  const handleDisconnectWallet = () => {
    setChainModal(false);
  };

  useEffect(() => {
    setShowHome(true);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(false);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-none ">
      {chainModal ? (
        <div className="  w-full flex justify-center">
          <div className="w-full relative h-full overflow-y-scroll ">
            <div className="h-full overflow-y-scroll">

            <div
              className="absolute top-16 right-12 cursor-pointer rounded-lg"
              onClick={handleDisconnectWallet}
            >
              <CancelButton />
            </div>
            <WormholeConnect
              config={multiChainConfig}
              theme={multiChainTheme}
              className="bg-black"
            />
          </div>
          </div>

        </div>
      ) : (
        <LandingBody _handleConnectWallet={handleConnectWallet}>
          <Web3ModalProvider></Web3ModalProvider>
          <div className="">
            <HeroSection _handleConnectWallet={handleConnectWallet} />
          </div>
          <Footer />
        </LandingBody>
      )}
    </div>
  );
}

export default Home;
