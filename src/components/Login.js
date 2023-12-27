import React, { useRef, useState } from "react";
import Header from "./Header";

import BG_IMG_URL from "../images/BG_IMG_URL.jpg";
import { validate } from "../utils/validator";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
//import { USER_AVATAR } from "../utils/constants";
import USER_AVATAR from "../images/avatar.png";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [issignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const handleSignInToggle = () => {
    setIsSignIn(!issignIn);
  };
  const name = useRef("");
  const email = useRef("");
  const password = useRef();

  const handleBtnSubmit = () => {
    const message = validate(
      issignIn ? "Default Name" : name.current.value,
      email.current.value,
      password.current.value
    );

    if (message) {
      setErrorMsg(message);
      return;
    }
    // sign in or sign up Logic
    if (!issignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((err) => {
              setErrorMsg(err.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
        })
        .catch((error) => {});
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG_URL} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute text-white w-3/12 bg-black p-12 my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl py-4">
          {issignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!issignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg  bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
        <button
          onClick={handleBtnSubmit}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
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
