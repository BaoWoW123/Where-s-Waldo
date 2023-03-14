import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/image";
import SelectTarget from "./components/Targets";

const App = () => {
  let [time, setTime] = useState(0);
  let [coords, setCoords] = useState([]);
  let [start, setStart] = useState(false);
  let [targets, setTargets] = useState([
    { name: "odlaw", coords: [10, 78], found: false },
    { name: "waldo", coords: [28, 47], found: false },
    { name: "wizard", coords: [96, 94], found: false },
  ]);

  const updateCoords = (e) => {
    setCoords((coords = e));
    checkTarget();
  };

  const checkTarget = () => {
    //automatically checks all target
    let margin = Array(2);
    for (let i = 0; i < targets.length; i++) {
      margin[0] = Math.abs(targets[i].coords[0] - coords[0]);
      margin[1] = Math.abs(targets[i].coords[1] - coords[1]);
      if (margin[0] <= 3 && margin[1] <= 3) {
        console.log("found");
        //modified state directly without setting
        return targets[i].found = true;
      }
    }
  };

  /* const updateTargets = (i) => {
    let tempArr = targets;
    let newTarget = targets[i];
    newTarget.found = true;
    tempArr.splice(i,1, newTarget)
    setTargets(tempArr)
  } */

  //Run after startGameBtn at Home.js clicked
  const startTime = () => {
    setStart((start = true));
  };

  const timer = () => {
    setTime((time += 1));
  };

  useEffect(() => {
    //UPDATE when image shows, run timer
    let is = targets.every(function (target) {
      console.log(target)
      return target.found;
    });
    console.log(is);
    if (targets.every((target) => target.found)) {
      console.log("targets found");
      return setStart((start = false));
    }
    else if (start === true) {
      let interval = setInterval(timer, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="App">
      <Header time={time} />
      <div className="main" />
      <Image updateCoords={updateCoords} startTime={startTime} />
      <div />
      <Footer />
    </div>
  );
};

export default App;
