import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const HomePage = ({ user }) => {
  return (
    <div className="homePage">
      <Header user={user}/>
      <div className="mainBody">
        <Sidebar user={user}/>
      </div>
    </div>
  )
}

export default HomePage;