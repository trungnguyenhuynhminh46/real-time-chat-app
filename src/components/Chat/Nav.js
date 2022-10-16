import React, { useContext } from "react";
// Assets
import images from "../../img";
import ChatContext from "../../context/ChatContext";

const Nav = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="flex shrink-0 justify-between items-center h-[70px] py-5 pr-4 bg-[#5d5b8d]">
      <span className="text-lg text-slate-200 ml-3">
        {data.user?.displayName}
      </span>
      <div className="flex space-x-2">
        <button>
          <img src={images.camera} alt="" className="w-6 h-6" />
        </button>
        <button>
          <img src={images.add_user} alt="" className="w-6 h-6" />
        </button>
        <button>
          <img src={images.more} alt="" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
