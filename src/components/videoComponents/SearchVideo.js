import React from "react";
import "../../styles/componentStyles/SearchVideo.css";
import { NavLink } from "react-router-dom";

const SearchVideo = ({ video }) => {
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

  const formatDuration = (duration) => {
    const timeRegex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    const matches = duration.match(timeRegex);
  
    const hours = parseInt(matches[1] || 0, 10);
    const minutes = parseInt(matches[2] || 0, 10);
    const seconds = parseInt(matches[3] || 0, 10);
  
    const formattedHours = hours > 0 ? hours.toString() : '';
    const formattedMinutes = minutes > 0 || hours > 0 ? minutes.toString().padStart(2, "0") : '0';
    const formattedSeconds = seconds.toString().padStart(2, "0");
  
    return `${formattedHours}${formattedHours ? ':' : ''}${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <NavLink className="searchVideo" to={`/watch/${video.id}`}>
      <div className="searchThumbnailWrap">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          className="searchThumbnail"
        />
        <p className="videoDuration">{formatDuration(video.contentDetails.duration)}</p>
      </div>
      <div className="searchVideoInfo">
        <div className="topSearchInfo">
          <h3 className="searchTitle">{video.snippet.title}</h3>
          <div className="timeViews searchViews">
            <p className="views subTxt searchTxt">
              {formatViews(video.statistics.viewCount)}
            </p>
            <p className="dot subTxt searchTxt">&#x2022;</p>
            <p className="postDate subTxt searchTxt">{findHowLongAgo()}</p>
          </div>
        </div>
        <div className="channelSearchInfo">
          <img
            src={video.channelImage}
            alt={video.snippet.channelTitle}
            className="videoChannel"
          />
          <p className="channelName subTxt">{video.snippet.channelTitle}</p>
          <span className="material-symbols-outlined filled searchCheckIcon">
            check_circle
          </span>
        </div>
        <p className="searchDesc subTxt searchTxt">
          {video.snippet.description}
        </p>
      </div>
    </NavLink>
  );
};

export default SearchVideo;
