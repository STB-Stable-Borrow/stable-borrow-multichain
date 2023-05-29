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


function Home() {
  const { connect, disconnect } = useContext(Web3ModalContext);
  const { resetVaultBorrowSetup, setFromDashborrow, setFromDashearn } = useBorrow();
  const navigate = useNavigate();

  //reset vault setup
  useEffect(() => {
    resetVaultBorrowSetup();
    setFromDashborrow(false);
    setFromDashearn(false);
  }, []);

  //handles wallet connection
  const handleConnectWallet = async () => {
    await connect().then((res) => {
      if (res) {
        navigate("/info");
      }
    });
  };

  // handles wallet disconnection
  const handleDisconnectWallet = () => {
    disconnect();
  };

  return (
    <div className=" h-screen">
      <LandingBody _handleConnectWallet={handleConnectWallet}>
        <Web3ModalProvider></Web3ModalProvider>
        <div className="">
          <HeroSection _handleConnectWallet={handleConnectWallet} />
        </div>
        <Footer />
        
      </LandingBody>
    </div>
  );
}

export default Home;
