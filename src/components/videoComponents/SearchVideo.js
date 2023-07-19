import React from "react";
import "../../styles/componentStyles/SearchVideo.css";

const SearchVideo = ({ video }) => {
  return (
    <div className="searchVideo">
      <img src="" alt="video" className="searchThumbnail" />
      <div className="searchVideoInfo">
        <div className="topSearchInfo">
          <h3 className="searchTitle">Placeholder</h3>
          <div className="timeViews searchViews">
            <p className="views subTxt searchTxt">99.3M</p>
            <p className="dot subTxt searchTxt">&#x2022;</p>
            <p className="postDate subTxt searchTxt">2 minutes ago</p>
          </div>
        </div>
        <div className="channelSearchInfo">
          <span class="material-symbols-outlined thin searchChannelIcon">account_circle</span>
          <p className="channelName subTxt">Baby Sparta</p>
          <span class="material-symbols-outlined filled searchCheckIcon">check_circle</span>
        </div>
      <p className="searchDesc subTxt searchTxt">Come join me on our epic adventure. Sponsored by RAID SHADOW LEGENDS! DOWNLOAD HERE: www.downloadGame.com</p>
      </div>
    </div>
  );
};

export default SearchVideo;
