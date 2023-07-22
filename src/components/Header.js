import React, { useRef, useState } from "react";
import RightNotUser from "./headerComponents/RightNotUser";
import RightUser from "./headerComponents/RightUser";
import ytLogo from "../assets/yt_logo_rgb_light.png";
import "../styles/componentStyles/Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ user, setIsCollapsed }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSearchFocus = () => {
    inputRef.current.focus();
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <div className="header">
      <div className="leftHeader">
        <span
          className="material-symbols-outlined menu thin"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          menu
        </span>
        <NavLink to="/" className="ytLogoLink">
          <img src={ytLogo} alt="YouTube" className="ytLogo" />
        </NavLink>
      </div>
      <form onSubmit={handleSearchSubmit} className="middleHeader">
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
            onKeyUp={(e) => {
              if (isSearchFocused && e.key === "Enter") {
                handleSearchSubmit(e);
              }
            }}
          />
          <span
            className={
              "material-symbols-outlined thin delTxt " +
              (search.length > 0 ? "visible" : "")
            }
            onClick={() => {
              setSearch("");
              handleSearchFocus();
            }}
          >
            close
          </span>
        </div>
        <button
          type="submit"
          className="searchBtn tooltip"
          data-tooltip="Search"
        >
          <span className="material-symbols-outlined thin searchBtnIcon">
            search
          </span>
        </button>
      </form>
      {user ? <RightUser user={user} /> : <RightNotUser />}
    </div>
  );
};

export default Header;
