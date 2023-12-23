import React, { useState } from "react";
import Header from "./Header";
import { BG_IMG_URL } from "../utils/constants";

const Login = () => {
  const [issignIn, setIsSignIn] = useState(true);
  const handleSignInToggle = () => {
    setIsSignIn(!issignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG_URL} alt="bg-img" />
      </div>
      <form className=" absolute text-white w-3/12 bg-black p-12 my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl py-4">
          {issignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!issignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg  bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {issignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-bold underline cursor-pointer"
          onClick={handleSignInToggle}
        >
          {issignIn
            ? "New to NetflixGPT? Sign Up Now"
            : "Already Have a Account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
