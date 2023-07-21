import React from "react";
import "../../styles/componentStyles/VideoPrev.css";
import { NavLink } from "react-router-dom";

const VideoPrev = ({ video }) => {
  const findHowLongAgo = () => {
    const publishedAt = new Date(video.snippet.publishedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - publishedAt.getTime();
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(monthsAgo / 12);

    if (yearsAgo >= 1) {
      return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
    } else if (monthsAgo >= 1) {
      return monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
    } else if (daysAgo >= 1) {
      return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
    } else if (hoursAgo >= 1) {
      return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
    } else if (minutesAgo >= 1) {
      return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
    } else {
      return "Just now";
    }
  };

  const formatViews = (views) => {
    if (views >= 1e9) {
      return `${(views / 1e9).toFixed(1)}B views`;
    } else if (views >= 1e6) {
      return `${(views / 1e6).toFixed(1)}M views`;
    } else if (views >= 1e3) {
      return `${(views / 1e3).toFixed(0)}K views`;
    } else {
      return `${views} views`;
    }
  };

  return (
    <NavLink to={`/watch/${video.id}`} className="videoWrap">
      <div className="thumbnailWrap">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          className="thumbnail"
        />
      </div>
      <div className="videoInfo">
        <img
          src={video.channelImage}
          alt={video.snippet.channelTitle}
          className="videoChannel"
        />
        <h4 className="videoTitle">{video.snippet.title}</h4>
        <div className="videoSubInfo">
          <p className="channelName subTxt">{video.snippet.channelTitle}</p>
          <div className="timeViews">
            <p className="views subTxt">
              {formatViews(video.statistics.viewCount)}
            </p>
            <p className="dot subTxt">&#x2022;</p>
            <p className="postDate subTxt">{findHowLongAgo()}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default VideoPrev;
