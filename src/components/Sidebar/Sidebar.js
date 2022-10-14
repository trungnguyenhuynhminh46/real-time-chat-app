import React from "react";
// Components
import Nav from "./Nav";
import Search from "./Search";
import ChatItems from "./ChatItems";
const Sidebar = () => {
  return (
    <div className="basis-1/3 bg-[#3e3c61]">
      <Nav></Nav>
      <Search></Search>
      <ChatItems></ChatItems>
    </div>
  );
};

export default Sidebar;
