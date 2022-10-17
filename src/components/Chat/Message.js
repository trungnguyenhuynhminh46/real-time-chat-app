import React, { useContext, useEffect, useRef } from "react";
import { formatRelative } from "date-fns/esm";
// Assets
import AuthContext from "../../context/AuthContext";
import ChatContext from "../../context/ChatContext";

const Message = ({ message }) => {
  // console.log(message.date.toDate());
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  // Effects
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  function formatDate(seconds) {
    let formattedDate = "";

    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());

      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
  }
  return (
    <div
      ref={ref}
      className={`message ${
        currentUser.uid === message.senderId ? "owner" : ""
      }`}
    >
      <div className="info">
        <img src={data.user.photoURL} alt="" className="thumb" />
        <span>{message.date && formatDate(message.date.seconds)}</span>
      </div>
      <div className="message-content">
        {message.text && <span>{message.text}</span>}
        {message.image && <img src={message.image} alt="" />}
      </div>
    </div>
  );
};

export default Message;
