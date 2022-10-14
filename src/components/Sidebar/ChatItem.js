import React from "react";

const ChatItem = () => {
  return (
    <div className="flex items-center p-2 cursor-pointer transition ease-linear duration-200 hover:bg-[#4c4a76]">
      <img
        src="https://images.unsplash.com/photo-1665609915337-9fb86ace571f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        alt=""
        className="w-[42px] h-[42px] mr-3 rounded-[50%] object-cover"
      />
      <div>
        <h4 className="font-semibold text-slate-200 text-base leading-tight">
          Minh Trung
        </h4>
        <span className="text-xs text-slate-200 leading-tight">
          current message
        </span>
      </div>
    </div>
  );
};

export default ChatItem;
