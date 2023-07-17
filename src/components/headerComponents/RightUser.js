import React, { useState, useEffect, useRef } from "react";
import AcctDropdown from "./AcctDropdown";

const RightUser = ({ user }) => {
  const [acctVisible, setAcctVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleAcctVisible = () => {
    setAcctVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.classList.contains("userIcon")) {
      setAcctVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="rightHeader userInfo">
      <div className="tooltip" data-tooltip="Create">
        <span className="material-symbols-outlined thin headerBtn">
          video_call
        </span>
      </div>
      <div className="tooltip" data-tooltip="Notifications">
        <span className="material-symbols-outlined thin headerBtn">
          notifications
        </span>
      </div>
      <img
        src={user.photoURL}
        alt={user.displayName}
        className="userIcon filled"
        onClick={toggleAcctVisible}
      />
      {acctVisible && (
          <div className="acctDropdown" ref={dropdownRef}>
            <AcctDropdown user={user}/>
          </div>
      )}
    </div>
  );
};

export default RightUser;
