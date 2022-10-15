import React from "react";

const ChatItem = ({ user }) => {
  return (
    <div className="flex items-center p-2 cursor-pointer transition ease-linear duration-200 hover:bg-[#4c4a76]">
      <img
        src={user.photoURL}
        alt=""
        className="w-[42px] h-[42px] mr-3 rounded-[50%] object-cover"
      />
      <div>
        <h4 className="font-semibold text-slate-200 text-base leading-tight">
          {user.displayName}
        </h4>
        <span className="text-xs text-slate-200 leading-tight">
          current message
        </span>
      </div>
    </div>
  );
};

export default ChatItem;
