import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DisplayMainVideos from "../components/DisplayMainVideos";
import "../styles/pageStyles/HomePage.css";

const HomePage = ({ user }) => {
  return (
    <div className="homePage">
      <Header user={user}/>
      <div className="mainBody">
        <Sidebar user={user}/>
        <DisplayMainVideos />
      </div>
    </div>
  )
}

export default HomePage;