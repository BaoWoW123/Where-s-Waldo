import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/image";
import "firebase/compat/firestore";
import { Routes, Route, useNavigate } from "react-router-dom";
import Scoreboard from "./components/Scoreboard";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import db from "./firebase";

const App = () => {
  let [time, setTime] = useState(0);
  let [coords, setCoords] = useState([]);
  let [start, setStart] = useState(false);
  let [target, setTarget] = useState("");
  let [scores, setScores] = useState([]);
  let [targets] = useState([
    { name: "waldo", coords: [28, 47], found: false },
    { name: "wizard", coords: [96, 94], found: false },
    { name: "odlaw", coords: [10, 78], found: false },
  ]);
  const navigate = useNavigate();

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

  const saveScore = async (name) => {
    const scoreRef = doc(db, "scores", name);
    await setDoc(
      //sends data to cloud firestore
      scoreRef,
      {
        username: name,
        score: time,
        date: new Date().toLocaleDateString(),
      },
      { merge: true }
    );
    await loadScoreboard()
    return navigate("/scoreboard");
  };

  const loadScoreboard = async () => {
    console.log('running')
    const tempArr = [];
    const collectionRef = await collection(db, "scores");
    const q = query(collectionRef, orderBy("score", "asc"), limit(20));
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      tempArr.push(doc.data());
    });
    setScores((scores = tempArr));
    if (targets.every((target) => target.found)) {
      targets.forEach((target) => (target.found = false));
    }
  };

  useEffect(() => {
    if (targets.every((target) => target.found)) {
      //ENDED HERE display game over screen here
      const targetsDiv = document.querySelector(".targetsDiv");
      targetsDiv.className = "targetsDiv hidden";
      const home = document.querySelector(".home");
      home.className = "home";
      setStart((start = false)); //stops timer
    } else if (start === true) {
      let interval = setInterval(timer, 1000);
      return () => clearInterval(interval);
    }
  }, [time, start]);

  useEffect(()=> {
    loadScoreboard()
  }, [])

  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route
            index
            element={
              <>
                <Header time={time} />
                <Image
                  updateCoords={updateCoords}
                  startTime={startTime}
                  selectTarget={selectTarget}
                  time={time}
                  start={start}
                  saveScore={saveScore}
                />
              </>
            }
          />
          <Route
            path="/scoreboard"
            element={<Scoreboard time={time} scores={scores}/>}
          />
        </Routes>
        <div />
      </div>
      <Footer />
    </div>
  );
};

export default App;
