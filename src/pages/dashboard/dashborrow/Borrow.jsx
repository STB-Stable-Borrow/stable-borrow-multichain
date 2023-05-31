import React from "react";
import filter from "../../../assets/dashboard/filter.svg";
import search from "../../../assets/dashboard/search.svg";
import edit from "../../../assets/dashboard/edit.svg";
import dashBorrowData from "../../../data/vaultsData";
import set from "../../../assets/dashboard/set.svg";
import { Big } from "big.js";

function Borrow({
  totalLck,
  totalDebt,
  xdcPrc,
  colRatio,
  allVaults,
  _onVaultClick,
}) {
  // const {vault, onVaultClick} = useDashboard();
  //gets vault status
  const getStatus = (ratio) => {
    let status;
    if (parseFloat(ratio) >= parseFloat(colRatio)) {
      if (parseFloat(ratio) > parseFloat(colRatio)) {
        status = "Active";
      } else {
        status = "Partial Active";
      }
    } else {
      status = "Haunted";
    }
    return status;
  };

  const handleSettings = (e) => {
    const id = e.target.id;
    _onVaultClick(id);
  };

  return (
    <div>
      <h1 className="w-full bg-[#202225] text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] py-[0.5vh] mb-[1.56vh] flex items-center  justify-center ">
        Overview
      </h1>
      <div className="flex justify-around text-[#D9D9D9] mb-[4.25vh] h-[11.4vh] ">
        <div className="w-[264px] pt-[2.44vh] pb-[3.027vh] rounded-[20px] bg-[#12A92A] flex justify-center items-center flex-col ">
          <h1 className="text-sm font-bold">Total Locked </h1>
          <p className="text-[1.875rem] font-medium ">
            ${(xdcPrc * totalLck).toFixed(4)}
          </p>
        </div>
        <div className="w-[264px] pt-[2.44vh] pb-[3.027vh] rounded-[20px] bg-[#FF1F1F] flex justify-center items-center flex-col ">
          <h1 className="text-sm font-bold">Total Debts </h1>
          <p className="text-[1.875rem] font-medium ">${1 * totalDebt}</p>
        </div>
        <div className="w-[264px] pt-[2.44vh] pb-[3.027vh] rounded-[20px] bg-[#865DFF] flex justify-center items-center flex-col ">
          <h1 className="text-sm font-bold">Collateralization Ratio</h1>
          <p className="text-[1.875rem] font-medium ">{colRatio}</p>
        </div>
      </div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] py-[0.5vh] mb-[2.73vh] ">
        Vaults
      </h1>
      <div className="flex w-full justify-between mb-[3.22vh] h-[4.1vh] ">
        <div className="h-full flex gap-4">
          <div className="relative h-full">
            <input
              type="search"
              name=""
              id=""
              className="h-full w-[426px] rounded-lg bg-[#B0B0B0] pl-[50px] placeholder:text-[#292C31] text-[#292C31] "
              placeholder="Search..."
            />
            <img
              src={search}
              alt=""
              className="w-[24px] h-[2.3vh] absolute top-1.5 left-3  "
            />
          </div>
          <button className="w-[2.9vw] h-full rounded-sm border border-[#B0B0B0] flex items-center justify-center ">
            <img src={filter} alt="" className="w-[24px] h-[2.34vh]" />
          </button>
        </div>
        {allVaults && (
          <h2 className="text-[#B0B0B0] font-bold bg-[#202225] rounded-lg w-[191px] text-center ">
            Total Vaults: {allVaults.length}
          </h2>
        )}
      </div>
      <div className="table w-full  text-[#B0B0B0] text-[1rem] ">
        <div className="bg-[#202225] w-full h-[5.76vh] flex justify-between  pl-[21px] items-center  border-b border-[#B0B0B0]  ">
          <h1 className="w-[5.13vw] ">Vault ID</h1>
          <h1 className=" w-[7.21vw]  ">Vault Name</h1>
          <h1 className="w-[2.60vw]">Asset</h1>
          <h1 className="w-[10.81vw]    ">Collateral Locked</h1>
          <h1 className=" w-[10.81vw] ">Liquidation Ratio</h1>
          <h1 className=" w-[6.25vw]  ">Debt</h1>
          <h1 className="w-[5.21vw]  ">Status</h1>
          <h1 className="w-[3.13vw]">Edit</h1>
        </div>
        <div>
          {allVaults && (
            <div className="max-h-[25.8vh] overflow-y-auto">
              {allVaults.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#292C31] w-full  h-[5.76vh] flex justify-between pl-[21px] items-center  border-b border-[#B0B0B0]  "
                >
                  <h1 className="w-[5.13vw]">#{item.id}</h1>
                  <h1 className="w-[7.21vw] text-center ">{item.id}</h1>
                  <h1 className="w-[2.60vw]   ">XDC</h1>
                  <h1 className="w-[10.81vw]  ">
                    $
                    {(
                      xdcPrc *
                      new Big(item.lck_collateral).div("10e17").toFixed(4)
                    ).toFixed(4)}
                  </h1>
                  <h1 className="w-[10.81vw]  ">
                    {new Big(item.col_ratio).div("10e17").toFixed(4)}
                  </h1>
                  <h1 className="w-[6.21vw] ">
                    ${new Big(item.debt).div("10e17").toFixed(4)}
                  </h1>
                  <h1
                    className={` w-[5.21vw] px-[0.52vw] rounded-lg text-center   text-xs ${
                      getStatus(
                        new Big(item.col_ratio).div("10e17").toFixed(4)
                      ) === "Partial Active" && "bg-[#FFF5E8] text-[#F9971E] "
                    } 
                  ${
                    getStatus(
                      new Big(item.col_ratio).div("10e17").toFixed(4)
                    ) === "Haunted" && "bg-[#FFEBEB] text-[#FF1F1F] "
                  } 
                  ${
                    getStatus(
                      new Big(item.col_ratio).div("10e17").toFixed(4)
                    ) === "Active" && "bg-[#E1FBDA] text-[#12A92A] "
                  } 
                  } `}
                  >
                    {getStatus(new Big(item.col_ratio).div("10e17").toFixed(4))}
                  </h1>
                  <button className="w-[3.21vw] flex items-center ">
                    <img
                      id={item.id}
                      onClick={(e) => handleSettings(e)}
                      src={set}
                      alt=""
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Borrow;
