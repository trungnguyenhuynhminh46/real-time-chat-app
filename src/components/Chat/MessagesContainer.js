import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
// Assets
import ChatContext from "../../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const MessagesContainer = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  // Effects
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    // Clean up
    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className="basis-full bg-[#ddddf7] px-2 pb-4 overflow-y-auto scrollbar-hide">
      {messages &&
        messages.map((message) => {
          return <Message message={message} key={message.id}></Message>;
        })}
    </div>
  );
};

export default MessagesContainer;
