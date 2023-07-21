import React from "react";
import "../../styles/componentStyles/VideoDescription.css";

const VideoDescription = ({ video }) => {
  const formatDate = (dateString) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month} ${day}, ${year}`;
  };
  
  return (
    <div className="videoDescription">
      <div className="topDesc">
        <p className="views topDescTxt">135,124,623 views</p>
        <p className="datePosted topDescTxt">{formatDate(video.snippet.publishedAt)}</p>
        {video.snippet.tags.map((tag) => (
          <p className="tags topDescTxt" key={tag}>{"#" + tag}</p>
        ))}
      </div>
      <p className="mainDesc">
        {video.snippet.description}
      </p>
      <div className="videoAnalyticsLeft">
        <span className="material-symbols-outlined thin descChannelIcon">
          account_circle
        </span>
        <div className="mainVideoChannelInfo">
          <h4 className="descChannel">{video.snippet.channelTitle}</h4>
          <p className="descChannelSubs">274.3M subscribers</p>
        </div>
      </div>
      <div className="descBtnsWrap">
        <div className="descBtnWrap">
          <span className="material-symbols-outlined thin border filled btmDescTxt">
            play_arrow
          </span>
          <p className="topDescTxt btmDescTxt">Videos</p>
        </div>
        <div className="descBtnWrap">
          <span className="material-symbols-outlined thin border btmDescTxt">person</span>
          <p className="topDescTxt btmDescTxt">About</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
