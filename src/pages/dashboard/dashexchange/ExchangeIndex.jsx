import React, { useState } from "react";
import drag from "../../../assets/dashboard/drag.svg";
import SwapIndex from "./SwapIndex";
import PoolIndex from "./PoolIndex";
import FailedModal from "./FailedModal";
import SuccessModal from "./SuccessModal";

function ExchangeIndex() {
  const [isSwapToggleOn, setIsSwapToggleOn] = useState(true);

  const handleSwapToggle = () => {
    setIsSwapToggleOn(!isSwapToggleOn);
  };

  const handlePoolToggle = () => {
    setIsSwapToggleOn(!isSwapToggleOn);
  };

  return (
    <div className="rounded-[40px] bg-[#202225] h-full px-[1.30vw] py-[1.67vh] flex flex-col items-center justify-between  mx-auto ">
      <div className="flex flex-col items-center">
        <h1 className="text-[#B0B0B0] text-[] font-semibold italic ">
          Stable Swap
        </h1>
        <img src={drag} alt="" className="w-[3.70vw] h-[0.56vh] mb-[0.98vh] " />
      </div>
      <div className="py-[.65vh] px-[.52vw] bg-[#292C31] rounded-[10px] flex text-[0.75rem] items-center text-[#b0b0b0] mb-[1.31vh] ">
        <button
          className={`py-[.37vh] px-[1.56vw] ${
            isSwapToggleOn ? "bg-[#009FBD] text-white" : ""
          }  rounded-[7px] `}
          onClick={handleSwapToggle}
        >
          Swap
        </button>
        <button
          className={`py-[.37vh] px-[1.56vw] ${
            isSwapToggleOn ? "" : "bg-[#009fbd] text-white "
          } rounded-[7px] `}
          onClick={handlePoolToggle}
        >
          Pool{" "}
        </button>
      </div>
      {isSwapToggleOn ? <SwapIndex /> : <PoolIndex />}
      {/* <FailedModal /> */}
      {/* <SuccessModal /> */}
    </div>
  );
}

export default ExchangeIndex;
