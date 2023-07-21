import React from "react";
import "../../styles/componentStyles/VideoAnalytics.css";

const VideoAnalytics = ({ video }) => {
  const formatNums = (views) => {
    if (views >= 1e9) {
      return `${(views / 1e9).toFixed(1)}B`;
    } else if (views >= 1e6) {
      return `${(views / 1e6).toFixed(1)}M`;
    } else if (views >= 1e3) {
      return `${(views / 1e3).toFixed(0)}K`;
    } else {
      return `${views}`;
    }
  };

  return (
    <div className="videoAnalytics">
      <div className="videoAnalyticsLeft">
        <img
          className="material-symbols-outlined thin videoChannelIcon"
          src={video.channelImage}
          alt={video.snippet.channelTitle}
        />
        <div className="mainVideoChannelInfo">
          <h4 className="mainVideoChannel">
            {video.snippet.channelTitle}
            <span className="material-symbols-outlined filled verifiedCheck">
              check_circle
            </span>
          </h4>
          <p className="channelSubs subTxt">
            {formatNums(video.subs) + " subscribers"}
          </p>
        </div>
        <button className="subscribe">Subscribe</button>
      </div>
      <div className="videoAnalyticsRight">
        <div className="analyticWrap">
          <div className="likesLeft">
            <span className="material-symbols-outlined thin">thumb_up</span>
            <p className="likes">35.2M</p>
          </div>
          <span className="material-symbols-outlined thin dislike">
            thumb_down
          </span>
        </div>
        <div className="analyticWrap normWrap">
          <span className="material-symbols-outlined thin">forward</span>
          <p className="share">Share</p>
        </div>
        <div className="analyticWrap normWrap">
          <span className="material-symbols-outlined thin">download</span>
          <p className="download">Download</p>
        </div>
        <div className="analyticWrap normWrap">
          <span className="material-symbols-outlined thin">cut</span>
          <p className="cut">Clip</p>
        </div>
        <span className="material-symbols-outlined more">more_horiz</span>
      </div>
    </div>
  );
};

export default VideoAnalytics;
