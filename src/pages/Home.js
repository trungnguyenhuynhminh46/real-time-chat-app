import React, { useContext } from "react";
// Assets
import ChatContext from "../context/ChatContext";
// Components
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="flex justify-center">
      <div className="flex w-[75%] h-[600px] rounded-lg overflow-hidden shadow-lg">
        <Sidebar></Sidebar>
        {data.user.uid ? (
          <Chat></Chat>
        ) : (
          <div className=" basis-2/3 flex justify-center items-center bg-slate-200">
            <span className="text-3xl text-slate-500 uppercase">
              Chose a chat to start the conversation
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
