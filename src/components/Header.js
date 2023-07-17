import React, { useRef, useState } from "react";
import RightNotUser from "./headerComponents/RightNotUser";
import RightUser from "./headerComponents/RightUser";
import ytLogo from "../assets/yt_logo_rgb_light.png";
import "../styles/componentStyles/Header.css";

const Header = ({ user }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const handleSearchFocus = () => {
    inputRef.current.focus();
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
            ref={inputRef}
          />
          <span
            className={
              "material-symbols-outlined thin delTxt " + (search.length > 0
                ? "visible"
                : "")
            }
            onClick={() => {setSearch(""); handleSearchFocus()}}
          >
            close
          </span>
        </div>
        <button className="searchBtn tooltip"  data-tooltip="Search">
          <span className="material-symbols-outlined thin">search</span>
        </button>
      </div>
      {user ? <RightUser user={user} /> : <RightNotUser />}
    </div>
  );
};

export default Header;
