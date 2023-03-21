import React from "react";
import waldo from "../images/waldo.jpg";
import Home from "./Home";
import SelectTarget from "./Targets";

const Image = (props) => {
  const selectTarget = (e) => {
    // updates coords & shows targetsDiv
    let x = Math.round((e.pageX / e.target.clientWidth) * 100);
    let y = Math.round((e.pageY / e.target.clientHeight) * 100);
    let edgeX;
    let edgeY;
    props.updateCoords([x, y]);
    //prevents targetsDiv appearing outside of image
    if (x >= 90) edgeX = 0.9 * e.pageX;
    if (y >= 90) edgeY = 0.6 * e.pageY;
    if (y <= 20) edgeY = 0.6 * e.pageY;
    const targetsDiv = document.querySelector(".targetsDiv");
    targetsDiv.className = "targetsDiv";
    targetsDiv.style.top = `${edgeY || e.pageY - 200}px`;
    targetsDiv.style.left = `${edgeX || e.pageX + 30}px`;
  };

  return (
    <div className="waldoImgWrapper">
      <img className="waldoImg" src={waldo} onClick={selectTarget} />
      <Home
        startTime={props.startTime}
        time={props.time}
        start={props.start}
        saveScore={props.saveScore}
      />
      <SelectTarget selectTarget={props.selectTarget} />
    </div>
  );
};

export default Image;
