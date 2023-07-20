import React from "react";
import "../../styles/componentStyles/VideoAnalytics.css";

const VideoAnalytics = () => {
  return (
    <div className="videoAnalytics">
      <div className="videoAnalyticsLeft">
        <span class="material-symbols-outlined thin videoChannelIcon">
          account_circle
        </span>
        <div className="mainVideoChannelInfo">
          <h4 className="mainVideoChannel">
            Baby Sparta
            <span class="material-symbols-outlined filled verifiedCheck">check_circle</span>
          </h4>
          <p className="channelSubs subTxt">274.3M subscribers</p>
        </div>
        <button className="subscribe">Subscribe</button>
      </div>
      <div className="videoAnalyticsRight">
        <div className="analyticWrap">
          <div className="likesLeft">
            <span class="material-symbols-outlined thin">thumb_up</span>
            <p className="likes">35.2M</p>
          </div>
          <span class="material-symbols-outlined thin dislike">thumb_down</span>
        </div>
        <div className="analyticWrap normWrap">
          <span class="material-symbols-outlined thin">forward</span>
          <p className="share">Share</p>
        </div>
        <div className="analyticWrap normWrap">
          <span class="material-symbols-outlined thin">download</span>
          <p className="download">Download</p>
        </div>
        <div className="analyticWrap normWrap">
          <span class="material-symbols-outlined thin">cut</span>
          <p className="cut">Clip</p>
        </div>
        <span class="material-symbols-outlined more">more_horiz</span>
      </div>
    </div>
  );
};

export default VideoAnalytics;
