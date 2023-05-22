import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/borrow/logo.svg";
import back from "../../assets/borrow/back.svg";
import next from "../../assets/borrow/next.svg";
import addAvatar from "../../assets/earn/addAvatar.svg";
import CreateAvatar from "./CreateAvatar";
import editAvatar from "../../assets/earn/editAvatar.svg";
import { Web3ModalContext } from "../../contexts/web3ModalContext";

function Registration() {
  const { web3, stb, stc, account, address, connected, chainId, xdcBalance, xdcBlnc,  getXdcBalance } = useContext(Web3ModalContext)
  const [createAvatar, setCreateAvatar] = useState(false);
  const [showRegistration, setShowRegistration] = useState(true);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

   // verify connection status and chainId
   const verifyConnection = () => {
    const acceptIds = [50, 51]
    if(!connected && !chainId) {
      window.alert("You have to connect your wallet to proceed")
      navigate("/")
     }
     if(connected && !acceptIds.includes(chainId)){
      window.alert("You connected to wrong chain, disconnect and connect to Apothem or Xinfin.")
      navigate("/")
     } 
  }

  const handleCreateAvatar = () => {
    setCreateAvatar(true);
    setShowRegistration(false);
  };

  const handleCreateAvatarBackButtonClick = () => {
    setCreateAvatar(false);
    setShowRegistration(true);
  };


  // const handleFileSelect = (event) => {
  //   setLoading(true);
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setAvatar(reader.result);
  //     setLoading(false);
  //   };
  // };

  //   useEffect(() => {
  //     if (generalStoreState.avatarUrl !== "") {
  //       setLoading(true);
  //       (async () => {
  //         await get2dUrl(generalStoreState.avatarUrl);
  //         setLoading(false);
  //       })();
  //     }
  //   }, []);

  return (
    <div className="w-screen h-screen bg-[#292C31] ">
      <Link to={"/"}>
        <img
          src={logo}
          alt=""
          className=" pt-[6vh] pl-[6.2vw] mb-[5.87vh] h-[9.57vh] "
        />
      </Link>
      {showRegistration && (
        <div className="bg-[#202225]  text-white rounded-[15px] h-[80vh] mx-[253px] px-[29px] py-[15px] ">
          <div className="text-center mb-[3.3vh]">
            <h1 className="mb-[10px] text-[#009FBD] font-black text-xl ">
              Registration
            </h1>
            <p className="px-[70px] text-xs">
              We're excited to have you join our community. By creating an
              account, you'll be able to participate in decentralized
              applications, earn tokens, and take control of your digital
              identity. <br /> <br /> Creating an account is simple and secure.
              Simply connect your crypto wallet to get started. Don't worry, we
              respect your privacy and will never store or have access to your
              private keys.
            </p>
          </div>
          <div className="bg-[#292C31] w-full h-[40.8vh] rounded-[15px] flex gap-[25px] p-[10px] mb-[4vh] ">
            <div className="w-[246px] h-full rounded-[15px] bg-[#202225] pt-[1.6vh] pb-[5vh] ">
              <h1 className="text-center text-sm font-semibold text-[#009FBD] mb-[2.4vh] ">
                Step 1
              </h1>
              <div onClick={handleCreateAvatar} className="w-[150px] h-[150px] rounded-full mx-[26px] border border-dashed border-[#585858] flex justify-center items-center flex-col relative  ">
                {loading && (
                  <div>
                    <h1>Loading...</h1>
                  </div>
                )}
                <img
                  src={avatar || addAvatar}
                  alt=""
                  className={
                    avatar
                      ? "w-full h-full object-cover rounded-full"
                      : "w-[50px] h-[50px]"
                  }
                />
                {/* <input
                  className={`w-full h-full opacity-0  absolute inset-0 cursor-pointer ${
                    avatar ? "hidden" : "block"
                  } `}
                  onChange={handleCreateAvatar}
                /> */}
                {avatar ? (
                  ""
                ) : (
                  <p className="text-xs text-center text-[#B0B0B0] ">
                    Click to choose <br /> an Avatar
                  </p>
                )}
              </div>
              {avatar && (
                <div onClick={handleCreateAvatar} className="flex justify-center items-center text-xs mt-2 gap-1 relative">
                  <img src={editAvatar} alt="" className="w-[20px]" />
                  {/* <input
                    type="file"
                    accept="image/*"
                    className={`w-full h-full opacity-0  absolute inset-0 cursor-pointer 
                  } `}
                    onChange={handleCreateAvatar}
                  /> */}
                  <p className="text-[#B0B0B0] hover:underline ">Edit Avatar</p>
                </div>
              )}
            </div>
            <div className="w-full h-full rounded-[15px] bg-[#202225] pt-[1.6vh] pb-[5vh] px-[30px] ">
              <h1 className=" text-sm font-semibold text-[#009FBD] mb-[2.4vh] ">
                Step 2 - Fill the following Information
              </h1>
              <form action="" className="text-[#292C31] text-sm ">
                <input
                  type="text"
                  className=" w-full h-[5.4vh] rounded-lg bg-[#B0B0B0] pl-[21px] placeholder:text-[#292C31] mb-[10px]"
                  placeholder="Enter Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <textarea
                  name=""
                  id=""
                  placeholder="About"
                  className=" w-full h-[20.7vh] pt-[15px]  rounded-lg bg-[#B0B0B0] pl-[21px] placeholder:text-[#292C31] mb-[10px]"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[110px] mt-[5.19vh] mb-[5.5vh] ">
            <button
              className="border border-[#009FBD] w-[164px] h-[6.95vh] rounded-lg flex items-center justify-center gap-2 bg-inherit hover:opacity-75 "
              //   onClick={onBackButtonClicked}
            >
              <img src={back} alt="" />
              Back
            </button>
            <button
              onLoad={verifyConnection}
              className="bg-[#585858] w-[164px] h-[6.95vh] rounded-lg flex items-center justify-center gap-2  hover:bg-opacity-75 "
              onClick={handleCreateAvatar}
            >
              Next
              <img src={next} alt="" />
            </button>
          </div>
        </div>
      )}
      {
        //   Create Avatar
        createAvatar && (
          <CreateAvatar onBackButtonClick={handleCreateAvatarBackButtonClick} />
        )
      }
    </div>
  );
}

export default Registration;
