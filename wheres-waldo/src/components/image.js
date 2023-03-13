import React from "react";
import waldo from "../images/waldo.jpg";
import Home from "./Home";
import SelectTarget from "./Targets";

const Image = (props) => {
  const selectTarget = (e) => {
    // updates coords & shows targetsDiv
    let x = Math.round((e.pageX / e.target.clientWidth) * 100);
    let y = Math.round((e.pageY / e.target.clientHeight) * 100);
    props.updateCoords([x, y]);

    const targetsDiv = document.querySelector(".targetsDiv");
    targetsDiv.className = "targetsDiv";
    targetsDiv.style.top = `${e.pageY - 200}px`;
    targetsDiv.style.left = `${e.pageX + 30}px`;
  };

  return (
    <div className="waldoImgWrapper">
      <img className="waldoImg" src={waldo} onClick={selectTarget} />
      <Home />
      <SelectTarget />
    </div>
  );
};

export default Image;
