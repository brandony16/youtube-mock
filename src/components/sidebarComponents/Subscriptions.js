import React from "react";

const Subscriptions = ({ channels }) => {
  return (
    <div className="subscriptions sidebarElement">
      <h3 className="sideHeader">Subscriptions</h3>
      {channels.map((channel) => (
        <div className="sideItemWrap" key={channel}>
          <span className="material-symbols-outlined sideIcon filled">
            account_circle
          </span>
          <p className="sideItemLabel">Channel Name</p>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
