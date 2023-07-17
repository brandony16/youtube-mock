import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const RightNotUser = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rightHeader">
      <div className="tooltip" data-tooltip="Settings">
        <span className="material-symbols-outlined weight700 dots">
          more_vert
        </span>
      </div>
      <button className="signIn" onClick={handleSignInWithGoogle}>
        <span className="material-symbols-outlined actionBlue accountCircle thin">
          account_circle
        </span>
        <p className="signInTxt">Sign in</p>
      </button>
    </div>
  );
};

export default RightNotUser;
