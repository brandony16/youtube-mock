import React, { useState } from "react";
import ytLogo from "../assets/yt_logo_rgb_light.png";
import "../styles/componentStyles/Header.css";

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <div className="header">
      <div className="leftHeader">
        <span class="material-symbols-outlined menu">menu</span>
        <img src={ytLogo} alt="YouTube" className="ytLogo" />
      </div>
      <div className="middleHeader">
        <div className={`searchWrap ${isSearchFocused ? "selectedAction" : ""}`}>
          <div className={`searchIcon ${isSearchFocused ? "active" : ""}`}>
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            type="text"
            className={`search`}
            placeholder="Search"
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </div>
        <button className="searchBtn">
          <span class="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="rightHeader">
        <span class="material-symbols-outlined weight700 dots">more_vert</span>
        <button className="signIn">
          <span class="material-symbols-outlined actionBlue accountCircle">
            account_circle
          </span>
          <p className="signInTxt">Sign in</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
