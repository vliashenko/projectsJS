import React from 'react'
import { useState, useEffect } from 'react';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";


import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

import './App.css';


function App() {
  let timer;
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);

  useEffect(() => {

    const unsubscribe = new Subject();
    interval(10)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (watchOn) {
            setTime(val => val + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);


  const handleStart = () => {
    setWatchOn(true);
  }

  const handleResume = (event) => {
    if(event.detail === 1){
      timer = setTimeout(()=> {
      },200)
    }else if (event.detail === 2) {
      setWatchOn(false);
    }
    
  }

  const handleStop = () => {
    if (time !== 0) {
      setWatchOn(false);
      setTime(0);
    }
  }

  const handleReset = () => {
    setTime(0);
  } 

  return (
    <div className="App">
      <div className="Timer">
        <DisplayComponent
        time={time}
        />
      </div>
      <div>
       <BtnComponent 
        start={handleStart}
        stop={handleStop}
        reset={handleReset}
        resume={handleResume}
        />
      </div>
    </div>
  );
}

export default App;
