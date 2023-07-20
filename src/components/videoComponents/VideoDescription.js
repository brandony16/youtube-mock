import React from "react";
import "../../styles/componentStyles/VideoDescription.css";

const VideoDescription = () => {
  return (
    <div className="videoDescription">
      <div className="topDesc">
        <p className="views topDescTxt">135,124,623 views</p>
        <p className="datePosted topDescTxt">Jul 19, 2023</p>
        <p className="tags topDescTxt">#Epic #Gamer</p>
      </div>
      <p className="mainDesc">
        Do the things like follow subscribe and other things.
      </p>
      <div className="videoAnalyticsLeft">
        <span class="material-symbols-outlined thin descChannelIcon">
          account_circle
        </span>
        <div className="mainVideoChannelInfo">
          <h4 className="descChannel">Baby Sparta</h4>
          <p className="descChannelSubs">274.3M subscribers</p>
        </div>
      </div>
      <div className="descBtnsWrap">
        <div className="descBtnWrap">
          <span class="material-symbols-outlined thin border filled btmDescTxt">
            play_arrow
          </span>
          <p className="topDescTxt btmDescTxt">Videos</p>
        </div>
        <div className="descBtnWrap">
          <span class="material-symbols-outlined thin border btmDescTxt">person</span>
          <p className="topDescTxt btmDescTxt">About</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
