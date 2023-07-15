import React, { useState } from "react";
import ytLogo from "../assets/yt_logo_rgb_light.png";
import "../styles/componentStyles/Header.css";

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <div className="header">
      <div className="leftHeader">
        <span className="material-symbols-outlined menu thin">menu</span>
        <img src={ytLogo} alt="YouTube" className="ytLogo" />
      </div>
      <div className="middleHeader">
        <div
          className={`searchWrap ${isSearchFocused ? "selectedAction" : ""}`}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        >
          <div className={`searchIcon ${isSearchFocused ? "active" : ""}`}>
            <span className="material-symbols-outlined thin">search</span>
          </div>
          <input
            type="text"
            className={`search`}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span
            className={
              "material-symbols-outlined thin delTxt " + (search.length > 0
                ? "visible"
                : "")
            }
            onClick={() => setSearch("")}
          >
            close
          </span>
        </div>
        <button className="searchBtn">
          <span className="material-symbols-outlined thin">search</span>
        </button>
      </div>
      <div className="rightHeader">
        <span className="material-symbols-outlined weight700 dots">
          more_vert
        </span>
        <button className="signIn">
          <span className="material-symbols-outlined actionBlue accountCircle thin">
            account_circle
          </span>
          <p className="signInTxt">Sign in</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
