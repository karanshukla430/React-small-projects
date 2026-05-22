import { useState, useEfect, useRef } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('');
  
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!input || input <= 0) return; 
    setCount(Number(input));
    setIsRunning(true);
    
  }
  const pauseTimer = () => {
    setIsRunning ((prev) => !prev);
  }
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
    setInput('');
  }

  useEffect (() => {
    if (isRunning) {
      intervalRef.current = setInterval (() => {
          setCount((prev) => {
            if (prev <= 0.01) {
              clearInterval(intervalRef.current);
              setIsRunning(false);
              return 0;
            }
            return +(prev - 0.01).toFixed(2);;
          });
        
      },10);
    }
    return () => clearInterval(intervalRef.current);
  },[isRunning]);


  return (
    <>
      <div>
        <input type='number' placeholder='Enter time'  value={input} onChange={(e) => setInput(e.target.value)}/>
        <h1>Timer: {count}</h1>
        <span>
          <button onClick={startTimer} style={{margin:'4px'}}>Start</button>
          <button onClick={pauseTimer} style={{margin:'4px'}}>{isRunning ? 'Pause' : 'Resume'}</button>
          <button onClick={handleReset} style={{margin:'4px'}}>Reset</button>
        </span>
      </div>
    </>
  )
}

export default App
