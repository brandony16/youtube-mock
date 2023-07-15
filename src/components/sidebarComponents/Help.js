import React from "react";

const Help = () => {
  return (
    <div className="help sidebarElement">
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">settings</span>
        <p className="sideItemLabel">Settings</p>
      </div>
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">flag</span>
        <p className="sideItemLabel">Report History</p>
      </div>
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">help</span>
        <p className="sideItemLabel">Help</p>
      </div>
      <div className="sideItemWrap">
        <span className="material-symbols-outlined sideIcon thin">feedback</span>
        <p className="sideItemLabel">Send Feedback</p>
      </div>
    </div>
  )
}

export default Help;