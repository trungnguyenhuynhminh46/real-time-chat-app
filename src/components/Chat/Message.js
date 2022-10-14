import React from "react";

const Message = ({ owner }) => {
  return (
    <div className={`message ${owner ? "owner" : ""}`}>
      <div className="info">
        <img
          src="https://images.unsplash.com/photo-1665609915337-9fb86ace571f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
          alt=""
          className="thumb"
        />
        <span>Just now</span>
      </div>
      <div className="message-content">This is a message!</div>
    </div>
  );
};

export default Message;
