import React from "react";

const RightNotUser = () => {
  return (
    <div className="rightHeader">
      <div className="tooltip" data-tooltip="Settings">
        <span className="material-symbols-outlined weight700 dots">
          more_vert
        </span>
      </div>
      <button className="signIn">
        <span className="material-symbols-outlined actionBlue accountCircle thin">
          account_circle
        </span>
        <p className="signInTxt">Sign in</p>
      </button>
    </div>
  );
};

export default RightNotUser;
