import React from "react";

const RightUser = ({ user }) => {
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
      <img src={user.photoURL} alt="user" className="userIcon filled"/>
    </div>
  );
};

export default RightUser;
