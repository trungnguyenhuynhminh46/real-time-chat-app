import React, { useContext, useEffect, useRef } from "react";
// Assets
import AuthContext from "../../context/AuthContext";
import ChatContext from "../../context/ChatContext";

const Message = ({ message }) => {
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  // Effects
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`message ${
        currentUser.uid === message.senderId ? "owner" : ""
      }`}
    >
      <div className="info">
        <img src={data.user.photoURL} alt="" className="thumb" />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <span>{message.text}</span>
        {message.image && <img src={message.image} alt="" />}
      </div>
    </div>
  );
};

export default Message;
