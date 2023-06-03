import React from "react";
import tokenizationData from "../../../data/tokenizationData";
import buyTokenDetails, { buyTokenDetails2 } from "../../../data/tokenDetails";

import xdc from "../../../assets/dashboard/xdc-d.png";
import stc from "../../../assets/dashboard/stc-w.svg";
import mark from "../../../assets/dashboard/mark.svg";

function Buy() {
  return (
    <div className="flex flex-col justify-between items-center">
      <p className="text-center text-[#585858] mb-[.75vh] text-xs">
        Welcome to the current tokenization round chose a vault to invest in.
      </p>
      <h1 className="text-[#865DFF] italic mb-[1.31vh] ">All Vault’s tokens</h1>

      <div className="flex items-center text-xs text-[#585858] justify-between w-full pl-[0.7vw]">
        <h2 className="w-[2.12vw]">Id</h2>
        <h2 className="w-[8.42vw]   ">Pair</h2>
        <h2 className="w-[6.25vw] ">Debt</h2>
        <h2 className="w-[6.25vw]">Max Sales</h2>
        <h2 className="w-[6.25vw]">Sales</h2>
      </div>
      <div className="w-full h-[10.46vh] pr-[0.52vw] overflow-y-auto flex flex-col gap-[.46vh] mb-[1.3vh] ">
        {tokenizationData.map((data, index) => (
          <div
            className="flex items-center text-xs text-[#B0B0B0] justify-between w-full py-[0.93vh]  bg-[#292C31] rounded-[10px] pl-[0.7vw]"
            key={data.id}
          >
            <h2 className="w-[2.12vw]">#{data.id}</h2>
            <div className="w-[8.42vw] flex items-center gap-2">
              <div className="flex items-center">
                <img src={xdc} alt="" className="w-[.88vw] " />
                <img src={stc} alt="" className="w-[.88vw] " />
              </div>
              <h2 className=" ">
                {data.token1}/{data.token2}
              </h2>
            </div>
            <h2 className="w-[6.25vw] ">${data.debt}</h2>
            <h2 className="w-[6.25vw]">${data.maxSales}</h2>
            <h2 className="w-[6.25vw]">${data.sales}</h2>
          </div>
        ))}
      </div>
      <h1 className="text-[#865DFF] italic mb-[1.21vh] ">Token Details</h1>
      <div className="flex w-full justify-between items-center text-[.625rem] gap-[1.88vw] ">
        <div className="bg-[#292C31] px-[1.25vw] py-[0.75vh] rounded-[10px] w-full ">
          {buyTokenDetails.map((data, index) => (
            <div className="flex justify-between items-center italic w-full ">
              <h3 className="text-[#515152] ">{data.title}</h3>
              <p className="text-[#9F9FA0] ">{data.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#292C31] px-[1.25vw] py-[0.75vh] rounded-[10px] w-full ">
          {buyTokenDetails2.map((data, index) => (
            <div className="flex justify-between items-center italic w-full ">
              <h3 className="text-[#515152] ">{data.title}</h3>
              <p className="text-[#9F9FA0] ">{data.value}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-[#585858] text-center my-[0.75vh] ">
        How much would you like to invest in this token to revive the vault and
        make profit when the collateral price increases?
      </p>
      <div className="flex-col items-center">
        <div className="flex items-center justify-end text-[.60rem] ">
          <h6 className="text-[#B0B0B0] ">Balance: 34654328.0987</h6>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#B0B0B0] w-[17.45vw] h-[4.17vh] rounded-[10px] flex  items-center justify-around">
            <input
              type="number"
              className="h-[3vh] w-[12vw] bg-inherit pl-[.78vw] placeholder:text-[#585858] text-sm  "
              placeholder="Enter XDC amount"
            />
            <div className="h-[2.96vh] w-[.10vw] bg-[#202225] "></div>
            <button className="text-[#B0B0B0] bg-[#202225] w-[2.65vw] h-[2.31vh] text-xs rounded-[6px] ">
              Max
            </button>
          </div>
        </div>
      </div>
      <button className="py-[.75vh] px-[2.29vw] bg-[#585858] rounded-[7px] text-[.75rem] text-[#B0B0B0] hover:bg-opacity-75 flex items-center justify-center gap-2 mt-[.93vh]">
        <img src={mark} alt="" className="w-[1.25vw] h-[1.25vw]" />
        Buy
      </button>
    </div>
  );
}

export default Buy;
