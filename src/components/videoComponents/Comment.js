import React from "react";

const Comment = () => {
  return (
    <div className="userComment">
      <span class="material-symbols-outlined thin commentAcct">
        account_circle
      </span>
      <div className="userCommentBody">
        <div className="commentHead">
          <p className="handle bold">@BabySparta</p>
          <span class="material-symbols-outlined thin commentSubTxt">
            check
          </span>
          <p className="commentAgo commentSubTxt">2 seconds ago</p>
        </div>
        <p className="commentTxt">I love this video so much!</p>
        <div className="commentFooter">
          <span class="material-symbols-outlined thin commentIcon">thumb_up</span>
          <p className="commentSubTxt">3.6M</p>
          <span class="material-symbols-outlined thin commentIcon commentDislike">thumb_down</span>
          <p className="handle bold reply">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
