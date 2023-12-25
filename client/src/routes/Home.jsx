// Home.jsx

import React from "react";
import Header from "./Header";
import BgImage from '../y4j bg.png';
import '../css/Home.css';
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  const handleUMRoute = () => {
    history.push("/userMasters");
  }

  const handleCustRoute = () => {
    history.push("/customers");
  }

  return (
    <>
      <Header />
      <div className="container1">
        <img src={BgImage} className="bg-image" alt="Y4jBgImage" />
        <div className="buttons-container">
          <button className="btn1" onClick={handleUMRoute}>Users</button>
          <button className="btn2" onClick={handleCustRoute}>Candidate</button>
        </div>
      </div>
    </>
  );
};

export default Home;