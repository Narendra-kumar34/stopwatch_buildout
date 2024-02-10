import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const formatTime = (secs) => {
    let mins = Math.floor(secs/60);
    let remsecs = secs % 60;
    return `${mins}:${remsecs<10? "0" : ""}${remsecs}`;
  };

  useEffect(() => {
    let intervalId;
    if(isRunning){
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsed) => prevElapsed + 1)
      }, 1000);
    }
    else{
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={handleStartStop}>{isRunning? "Stop" : "Start"}</button>
      <button onClick={handleReset} >Reset</button>
    </div>
  );
}

export default App;
