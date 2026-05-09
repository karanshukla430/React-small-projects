import { useState, useRef } from 'react'
import './App.css';
function App() {

  const [counter, setCounter] = useState(0);
  const id = useRef()

  function startHandler () {
    if(id.current) return;

    id.current = setInterval (() => {
      setCounter((prev) => prev+1);
    },1000);
  }

  function resetHandler () {
    clearInterval(id.current);
    id.current = null;
    setCounter(0);
  }

  function pauseHandler () {
    clearInterval(id.current);
    id.current = null;
  }


  return (
    <>
    <div className="main">
      <div className="App">
        <p className="counter">Counter : {counter}</p>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn" onClick={startHandler}>
            Start
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn" onClick={pauseHandler}>
            Pause
          </button>
          <button className="btn" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
