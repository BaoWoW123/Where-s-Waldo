import React from "react";
import waldo from "../images/waldoHead.png";
import wizard from "../images/wizard.png";
import odlaw from "../images/odlaw.png";

const Home = (props) => {
  const hideHome = () => {
    const home = document.querySelector(".home");
    home.className = "home hidden";
    props.startTime();
  };
  const addScore = () => {
    let input = document.querySelector('.input').value;
    props.saveScore(input);
  };
  
  return (
    <div className="home">
      {props.start == false && props.time === 0 ? (
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
      ) : (
        <div className="homeInfo">
          <div>Found all targets in </div>
            <div>{props.time} seconds</div>
          <div className="username">
            Username: <input type="text" className="input"/>
          </div>
          <button className="startGameBtn" onClick={addScore}>
            Add to Scoreboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
