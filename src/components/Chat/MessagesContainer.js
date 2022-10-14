import React from "react";
import Message from "./Message";

const MessagesContainer = () => {
  return (
    <div className="basis-full bg-[#ddddf7] px-2 pb-4 overflow-y-auto scrollbar-hide">
=======
    <div className="basis-full bg-[#ddddf7] px-2 overflow-y-auto scrollbar-hide">
>>>>>>> 22787e0eed2501f778f9bd2c7a3115775862a9d2
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
