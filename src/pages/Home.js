import React from "react";
// Components
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[80%] h-[600px] rounded-lg overflow-hidden shadow-lg">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default Home;
