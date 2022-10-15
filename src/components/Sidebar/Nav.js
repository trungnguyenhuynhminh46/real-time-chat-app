// Library
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
// Assets
import AuthContext from "../../context/AuthContext";
import { auth } from "../../firebase";
// Components
const Nav = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="py-5 px-2 flex justify-between items-center bg-[#2f2d52]">
      <span className="text-lg font-semibold text-slate-200">My chat app</span>
      <div className="flex items-center ">
        <img
          src={currentUser.photoURL}
          alt=""
          className="mr-2 w-[30px] h-[30px] object-cover rounded-[50%]"
        />
        <span className="text-slate-200 mr-2">{currentUser.displayName}</span>
        <button
          className="py-1 px-2 bg-[#5d5b8d] hover:opacity-80 text-slate-200 text-xs"
          onClick={() => {
            signOut(auth);
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
