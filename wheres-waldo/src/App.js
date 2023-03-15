import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/image";

const App = () => {
  let [time, setTime] = useState(0);
  let [coords, setCoords] = useState([]);
  let [start, setStart] = useState(false);
  let [target, setTarget] = useState("");
  let [targets, setTargets] = useState([
    { name: "waldo", coords: [28, 47], found: false },
    { name: "wizard", coords: [96, 94], found: false },
    { name: "odlaw", coords: [10, 78], found: false },
  ]);

  const updateCoords = (e) => {
    setCoords((coords = e));
  };

  const selectTarget = (e) => {
    setTarget((target = e.target.className));
    let current = targets.find((el) => el.name === target);
    checkTarget(current);
  };
  const checkTarget = (current) => {
    //checks if target is near coords
    let margin = Array(2);
    margin[0] = Math.abs(current.coords[0] - coords[0]);
    margin[1] = Math.abs(current.coords[1] - coords[1]);
    if (margin[0] <= 3 && margin[1] <= 3) {
      let targetImgs = document.querySelectorAll(`.${current.name}`);
      targetImgs.forEach((img) => (img.style.display = "none"));
      return (current.found = true); //modified state directly without setting!!
    }
  };

  //Run after startGameBtn at Home.js clicked
  const startTime = () => {
    setStart((start = true));
  };

  const timer = () => {
    setTime((time += 1));
  };

  useEffect(() => {
    if (targets.every((target) => target.found)) {
      console.log("targets found");
      //ENDED HERE display game over screen here
      return setStart((start = false)); //stops timer
    } else if (start === true) {
      let interval = setInterval(timer, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="App">
      <Header time={time} />
      <div className="main" />
      <Image
        updateCoords={updateCoords}
        startTime={startTime}
        selectTarget={selectTarget}
      />
      <div />
      <Footer />
    </div>
  );
};

export default App;
