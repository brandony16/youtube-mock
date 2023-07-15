import React from "react";

const UserSavedVideos = () => {
  return (
    <div className="userSavedVideos sidebarElement">
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">video_library</span>
        <h3 className="sideItemLabel">Library</h3>
      </div>
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">history</span>
        <h3 className="sideItemLabel">History</h3>
      </div>
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">schedule</span>
        <h3 className="sideItemLabel">Watch Later</h3>
      </div>
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">thumb_up</span>
        <h3 className="sideItemLabel">Liked Videos</h3>
      </div>
    </div>
  );
};

export default UserSavedVideos;
