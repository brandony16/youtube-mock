import React from "react";
import { auth } from "../../firebase/firebaseConfig";
import "../../styles/componentStyles/AcctDropdown.css";

const AcctDropdown = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="acctInner">
      <div className="acctItem topItem">
        <img src={user.photoURL} alt={user.displayName} className="acctImg" />
        <div className="nameWrap">
          <h3 className="username">{user.displayName}</h3>
          <p className="email">{user.email}</p>
        </div>
      </div>
      <div className="acctItem">
        <div className="acctOption" onClick={handleSignOut}>
          <span className="material-symbols-outlined thin">login</span>
          <p className="signOut">Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default AcctDropdown;
