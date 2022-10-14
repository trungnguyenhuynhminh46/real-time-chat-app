import React from "react";
// Components
import Nav from "./Nav";
import MessagesContainer from "./MessagesContainer";
import Input from "./Input";
const Chat = () => {
  return (
    <div className="basis-2/3 flex flex-col">
      <Nav></Nav>
      <MessagesContainer></MessagesContainer>
      <Input></Input>
    </div>
  );
};

export default Chat;
