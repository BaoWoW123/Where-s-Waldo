import React from "react";
import waldo from "../images/waldoHead.png";
import wizard from "../images/wizard.png";
import odlaw from "../images/odlaw.png";

const SelectTarget = (props) => {
  return (
    <div className="targetsDiv hidden">
      <img className="waldo" src={waldo} onClick={props.selectTarget} />
      <img className="wizard" src={wizard} onClick={props.selectTarget} />
      <img className="odlaw" src={odlaw} onClick={props.selectTarget} />
    </div>
  );
};

export default SelectTarget;
