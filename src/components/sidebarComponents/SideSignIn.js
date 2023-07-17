import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const SideSignIn = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="sideSignIn sidebarElement">
      <p className="sideItemLabel">
        Sign in to like videos, comment, and subscribe.
      </p>
      <button className="signIn" onClick={handleSignInWithGoogle}>
        <span className="material-symbols-outlined actionBlue accountCircle thin">
          account_circle
        </span>
        <p className="signInTxt">Sign in</p>
      </button>
    </div>
  );
};

export default SideSignIn;
