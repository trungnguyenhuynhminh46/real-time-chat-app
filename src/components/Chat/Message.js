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
<<<<<<< HEAD
      <div className="message-content">
        <span>This is a message!</span>
        {/* <img
          src="https://images.unsplash.com/photo-1665609915337-9fb86ace571f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
          alt=""
        /> */}
      </div>
=======
      <div className="message-content">This is a message!</div>
>>>>>>> 22787e0eed2501f778f9bd2c7a3115775862a9d2
    </div>
  );
};

export default Message;
