import React from "react";
import Message from "./Message";

const MessagesContainer = () => {
  return (
    <div className="basis-full bg-[#ddddf7] px-2 pb-4 overflow-y-auto scrollbar-hide">
      <Message owner></Message>
      <Message></Message>
      <Message></Message>
      <Message owner></Message>
      <Message></Message>
      <Message owner></Message>
      <Message></Message>
      <Message owner></Message>
      <Message></Message>
    </div>
  );
};

export default MessagesContainer;
