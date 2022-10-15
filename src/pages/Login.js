// Library
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// Assets
import { auth } from "../firebase";
// Components
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // Variables
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      // Login
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="w-[100%] max-w-[400px] py-5 px-12 mx-auto bg-white rounded-lg">
      <h1 className="mb-4 text-center font-bold text-3xl text-blue-900">
        My Chat App
      </h1>
      <p className="mb-2 text-xs text-gray-300 text-center">Login</p>
      <form action="#" onSubmit={handleSubmitForm}>
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
        <button className="w-full p-2 rounded text-center font-bold text-white bg-purple-500 hover:bg-purple-800">
          Sign in
        </button>
      </form>
      {err ? (
        <p className="py-2 text-center text-xs text-red-500">
          Some thing went wrong!
        </p>
      ) : undefined}
      <p className="mt-5 text-center">
        You don't have an account?{" "}
        <Link
          to="/register"
          className="text-purple-800 underline hover:opacity-80"
        >
          Register
        </Link>
      </p>
    </div>
  );
};
export default Login;
