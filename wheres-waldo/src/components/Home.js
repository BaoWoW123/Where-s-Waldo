import React from "react";
import waldo from "../images/waldoHead.png";
import wizard from "../images/wizard.png";
import odlaw from "../images/odlaw.png";

const Home = (props) => {
  const hideHome = () => {
    const home = document.querySelector(".home");
    home.className = "home hidden";
    props.startTime();
    //start timer here
  };
  return (
    <div className="home">
      <div className="homeInfo">
        <div>Find the targets</div>
        <div className="homeTargets">
          <img style={{ border: "5px solid limegreen" }} src={waldo} />
          <img style={{ border: "5px solid orange" }} src={wizard} />
          <img style={{ border: "5px solid red" }} src={odlaw} />
        </div>
        <button className="startGameBtn" onClick={hideHome}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
