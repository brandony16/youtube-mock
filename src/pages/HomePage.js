import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DisplayMainVideos from "../components/DisplayMainVideos";
import "../styles/pageStyles/HomePage.css";

const HomePage = ({ user, setKeyword }) => {
  return (
    <div className="homePage">
      <Header user={user} setKeyword={setKeyword}/>
      <div className="mainBody">
        <Sidebar user={user}/>
        <DisplayMainVideos />
      </div>
    </div>
  )
}

export default HomePage;