import React from "react";

const Nav = () => {
  return (
    <div className="py-5 px-2 flex justify-between items-center bg-[#2f2d52]">
      <span className="text-lg font-semibold text-slate-200">My chat app</span>
      <div className="flex items-center ">
        <img
          src="https://images.unsplash.com/photo-1665609915337-9fb86ace571f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
          alt=""
          className="mr-2 w-[30px] h-[30px] object-cover rounded-[50%]"
        />
        <span className="text-slate-200 mr-2">Minh Trung</span>
        <button className="py-1 px-2 bg-[#5d5b8d] hover:opacity-80 text-slate-200 text-xs">
          logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
