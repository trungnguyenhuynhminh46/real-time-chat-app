// Library
import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
// Assets
import { db } from "../../firebase";
// Components
import ChatItems from "./ChatItems";
const Search = () => {
  // States
  const [textSearch, setTextSearch] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [err, setErr] = useState(false);
  // Assets
  const usersRef = collection(db, "users");
  // Handlers
  const handleKeyDown = async (e) => {
    if (e.code === "Enter" && !!textSearch.trim()) {
      // Change matchedUsers
      const q = query(
        usersRef,
        where("displayName", ">=", textSearch),
        where("displayName", "<=", textSearch + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);
      let users = [];
      querySnapshot.docs.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      setMatchedUsers(users);
    }
  };
  return (
    <div>
      <input
        type="text"
        className="p-3 w-full text-xs font-light text-white border-0 outline-none border-b-[0.5px] border-b-gray-600 bg-transparent"
        placeholder="Find a user"
        value={textSearch}
        onChange={(e) => {
          setTextSearch(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <ChatItems data={matchedUsers}></ChatItems>
    </div>
  );
};

export default Search;
