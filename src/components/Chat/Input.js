import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useRef, useState } from "react";
// Assets
import AuthContext from "../../context/AuthContext";
import ChatContext from "../../context/ChatContext";
import { db, storage } from "../../firebase";
import images from "../../img";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const textRef = useRef();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  // handlers
  const handleSend = async () => {
    // Send message here
    if (image) {
      // Store image
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              image: downloadURL,
            }),
          });
        });
      });
    } else {
      if (!!textRef.current.value.trim()) {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }
    }
    // Clean up input fields
    setText("");
    setImage(null);
    textRef.current.focus();
    // Update user chats
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".last_message"]: text,
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".last_message"]: text,
      [data.chatId + ".date"]: serverTimestamp(),
    });
  };
  const handleKeyDown = (e) => {
    e.code === "Enter" && handleSend();
  };
  return (
    <div className="flex justify-between items-center py-5 px-3 bg-gray-100">
      <input
        ref={textRef}
        type="text"
        name="text"
        id="text"
        placeholder="Type something..."
        className="basis-full bg-transparent border-none outline-none"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <div className="flex items-center gap-2">
        <button>
          <img src={images.attach_file} alt="" />
        </button>
        <input
          type="file"
          name="image"
          id="image"
          className="hidden"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <label htmlFor="image" className="cursor-pointer">
          <img src={images.add_img} alt="" />
        </label>
        <button
          className="px-4 py-2 text-slate-100 bg-[#8da4f1] hover:opacity-80"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
