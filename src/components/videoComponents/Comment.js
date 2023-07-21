import React from "react";

const Comment = ({ comment }) => {
  const findHowLongAgo = () => {
    const publishedAt = new Date(comment.snippet.topLevelComment.snippet.publishedAt);
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
    <div className="userComment">
      <img
        class="material-symbols-outlined thin commentAcct"
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt={comment.snippet.topLevelComment.snippet.authorDisplayName}
      />
      <div className="userCommentBody">
        <div className="commentHead">
          <p className="handle bold">
            {comment.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <span class="material-symbols-outlined thin commentSubTxt">
            check
          </span>
          <p className="commentAgo commentSubTxt">{findHowLongAgo()}</p>
        </div>
        <p className="commentTxt">
          {comment.snippet.topLevelComment.snippet.textDisplay}
        </p>
        <div className="commentFooter">
          <span class="material-symbols-outlined thin commentIcon">
            thumb_up
          </span>
          <p className="commentSubTxt">{formatNums(comment.snippet.topLevelComment.snippet.likeCount)}</p>
          <span class="material-symbols-outlined thin commentIcon commentDislike">
            thumb_down
          </span>
          <p className="handle bold reply">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
