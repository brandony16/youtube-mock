import React from "react";

const SideSignIn = () => {
  return (
    <div className="sideSignIn sidebarElement">
      <p className="sideItemLabel">
        Sign in to like videos, comment, and subscribe.
      </p>
      <button className="signIn">
        <span className="material-symbols-outlined actionBlue accountCircle thin">
          account_circle
        </span>
        <p className="signInTxt">Sign in</p>
      </button>
    </div>
  );
};

export default SideSignIn;
