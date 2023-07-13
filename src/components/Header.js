import React from "react";
import menuIcon from "../assets/menu.svg";
import ytLogo from "../assets/yt_logo_rgb_light.png"
import search from "../assets/magnify.svg";
import dots from "../assets/dots-vertical.svg";
import account from "../assets/account.png";
import "../styles/componentStyles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <img src={menuIcon} alt="menu" className="menu" />
        <img src={ytLogo} alt="YouTube" className="ytLogo" />
      </div>
      <div className="middleHeader">
        <input type="text" className="search" />
        <button className="searchBtn">
          <img src={search} alt="search" className="searchIcon" />
        </button>
      </div>
      <div className="rightHeader">
        <img src={dots} alt="settings" className="settings" />
        <button className="signIn">
          <img src={account} alt="" className="accountIcon" />
          <p className="signInTxt">Sign in</p>
        </button>
      </div>
    </div>
  )
}

export default Header;