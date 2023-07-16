import React from "react";

const RightUser = () => {
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
      <span className="material-symbols-outlined userIcon filled">
        account_circle
      </span>
    </div>
  );
};

export default RightUser;
