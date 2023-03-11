import './App.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/image';
const App = () => {
  let [time, setTime ] = useState(0)
  
  function refreshTime() {
    setTime(time+=1)
  } 

  /* useEffect(() => { // when image shows, run timer?
    let interval = setInterval(refreshTime,1000)
    return () => clearInterval(interval);
  }, []) */
  return (
    <div className="App">
      <Header time={time}/>
      <Image/>
      <Footer/>
    </div>
  );
}

export default App;
