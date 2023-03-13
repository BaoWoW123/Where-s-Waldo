import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/image";

const App = () => {
  let [time, setTime] = useState(0);
  let [coords, setCoords] = useState([]);
  let targets = [
    { name: "odlaw", coords: [10, 78], found: false },
    { name: "waldo", coords: [28, 47], found: false },
    { name: "wizard", coords: [96, 94], found: false },
  ];

  const refreshTime = () => {
    setTime((time += 1));
  };

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
        return (targets[i].found = true);
      }
    }
  };

  /* Run after startGameBtn clicked
   const startTime = () => {
    setTime(time+=1)
  }

  const timer = () => {
    setInterval(startTime, 1000)
  } */

  useEffect(() => {
    //UPDATE when image shows, run timer
    let interval = setInterval(refreshTime, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="App">
      <Header time={time} />
      <div className="main" />
      <Image updateCoords={updateCoords} /* startTime={startTime} */ />
      <div />
      <Footer />
    </div>
  );
};

export default App;
