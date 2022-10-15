import React from "react";
// Components
import ChatItem from "./ChatItem";

const ChatItems = ({ data }) => {
  return (
    <div>
      {!!data &&
        data.map((user) => {
          return <ChatItem key={user.id} user={user}></ChatItem>;
        })}
    </div>
  );
};

export default ChatItems;
