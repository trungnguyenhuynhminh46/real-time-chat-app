import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// Assets
import images from "../img";
import { db, auth, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  // Handlers
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //  Variables
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    //
    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Store image
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          // Update Profile
          await updateProfile(userCredential.user, {
            displayName,
            photoURL: downloadURL,
          });
          // Add document
          await setDoc(doc(db, "users", userCredential.user.uid), {
            uid: userCredential.user.uid,
            displayName,
            email,
            password,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChats", userCredential.user.uid), {});
          navigate("/");
        });
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="w-[100%] max-w-[400px] py-5 px-12 mx-auto bg-white rounded-lg">
      <h1 className="mb-4 text-center font-bold text-3xl text-blue-900">
        My Chat App
      </h1>
      <p className="mb-2 text-xs text-gray-300 text-center">Register</p>
      <form action="#" onSubmit={handleSubmitForm}>
        <input
          className="w-full p-2 mb-5 outline-none border-2 border-transparent border-b-gray-100 placeholder:text-xs rounded focus:border-2 focus:border-blue-900"
          type="text"
          placeholder="Enter your display name"
          name="displayname"
          id="displayname"
        />
        <input
          className="w-full p-2 mb-5 outline-none border-2 border-transparent border-b-gray-100 placeholder:text-xs rounded focus:border-2 focus:border-blue-900"
          type="text"
          placeholder="Enter your email"
          name="email"
          id="email"
        />
        <input
          className="w-full p-2 mb-5 outline-none border-2 border-transparent border-b-gray-100 placeholder:text-xs rounded focus:border-2 focus:border-blue-900"
          type="password"
          placeholder="Enter your password"
          name="password"
          id="password"
        />
        <input type="file" name="image" id="image" className="hidden" />
        <label
          htmlFor="image"
          className="flex items-center gap-[10px] mb-5 text-xs text-blue-300 cursor-pointer"
        >
          <img
            src={images.add_avatar}
            alt=""
            className="w-[32px] h-auto object-cover"
          />
          <span>Add an avatar</span>
        </label>
        <button className="w-full p-2 rounded text-center font-bold text-white bg-purple-500 hover:bg-purple-800">
          Register
        </button>
      </form>

      {err ? (
        <p className="py-2 text-center text-xs text-red-500">
          Some thing went wrong!
        </p>
      ) : undefined}

      <p className="mt-5 text-center">
        You don have an account?{" "}
        <Link
          to="/login"
          className="text-purple-800 underline hover:opacity-80"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
