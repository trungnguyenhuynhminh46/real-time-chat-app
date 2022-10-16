// Library
import React, { useState, useContext } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
// Assets
import { db } from "../../firebase";
import AuthContext from "../../context/AuthContext";
// Components
import ChatItem from "./ChatItem";
const Search = () => {
  const { currentUser } = useContext(AuthContext);
  // States
  const [textSearch, setTextSearch] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [err, setErr] = useState(false);
  // Assets
  const usersRef = collection(db, "users");
  // Handlers
  const handleKeyDown = async (e) => {
    try {
      if (e.code === "Enter") {
        if (!!textSearch.trim()) {
          // Change matchedUsers
          const q = query(
            usersRef,
            where("displayName", ">=", textSearch),
            where("displayName", "<=", textSearch + "\uf8ff")
          );
          const querySnapshot = await getDocs(q);
          let users = [];
          querySnapshot.docs.forEach((doc) => {
            users.push({ uid: doc.id, ...doc.data() });
          });
          setMatchedUsers(users);
        } else {
          setMatchedUsers([]);
        }
      }
    } catch (err) {
      setErr(true);
    }
  };
  const handleUserSelect = async (user) => {
    const combinedId =
      currentUser.uid < user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    // If combinedID not existed, create
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // Create chats
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        // Update userChats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".user_info"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".user_info"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setMatchedUsers([]);
    setTextSearch("");
  };
  return (
    <div className="border-b-[0.5px] border-b-gray-600 ">
      <input
        type="text"
        className="p-3 w-full text-xs font-light text-white border-0 outline-none bg-transparent"
        placeholder="Find a user"
        value={textSearch}
        onChange={(e) => {
          setTextSearch(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {err && (
        <p className="p-2 text-center text-xs text-slate-200">
          Something went wrong. Try again!
        </p>
      )}
      {!!matchedUsers &&
        matchedUsers.map((user) => {
          return (
            <ChatItem
              key={user.uid}
              chatInfo={{ user_info: { ...user } }}
              onClick={() => {
                handleUserSelect(user);
              }}
            ></ChatItem>
          );
        })}
    </div>
  );
};

export default Search;
