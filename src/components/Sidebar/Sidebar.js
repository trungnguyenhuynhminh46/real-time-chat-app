import React, { useState, useContext, useEffect } from "react";
// Assets
import AuthContext from "../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
// Components
import Nav from "./Nav";
import Search from "./Search";
import ChatItem from "./ChatItem";
import ChatContext from "../../context/ChatContext";
const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const [userChatsInfo, setUserChatsInfo] = useState([]);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChatsInfo = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        let chatsInfo = [];
        for (let key in doc.data()) {
          chatsInfo.push({ uid: key, ...doc.data()[key] });
        }
        chatsInfo = chatsInfo.sort((a, b) => b.date - a.date);
        setUserChatsInfo(chatsInfo);
      });
      // Clean up
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChatsInfo();
  }, [currentUser.uid]);
  // Handlers
  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };
  return (
    <div className="basis-1/3 bg-[#3e3c61]">
      <Nav></Nav>
      <Search></Search>
      {!!userChatsInfo &&
        userChatsInfo.map((chatInfo) => {
          return (
            <ChatItem
              key={chatInfo.uid}
              chatInfo={chatInfo}
              onClick={() => {
                handleSelect(chatInfo.user_info);
              }}
            ></ChatItem>
          );
        })}
    </div>
  );
};

export default Sidebar;
