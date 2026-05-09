import { useState, useEffect } from 'react'

function App() {

  const [memeData, setMemeData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [counter, setCounter] = useState(1);

  function onPrevClick() {
    if ((counter - 1) > 1) {
        const data = memeData.slice((counter - 1) * 8, (counter - 1) * 8 + 8);
        setPaginatedData(data);
    }
    setCounter(counter - 1);
  }

  function onNextClick() {
    if ((counter + 1) * 8 < memeData.length) {
      const lastIndex = (counter + 1) * 8 + 8 >= memeData.length ? memeData.length : (counter + 1) * 8 + 8
      const data = memeData.slice((counter + 1) * 8, lastIndex);
      setPaginatedData(data);
    }
    setCounter(counter + 1);

  }

  useEffect (() => {
    async function fetchData() {
      const data = await fetch('https://api.memegen.link/templates');
      const response = await data.json();
      // setting response object in the setMemeData
      setMemeData(response);
      const dataToSet = response.slice(0,8);
      setPaginatedData(dataToSet);
    }
    fetchData();
  },[])
  return (
    <>
    <div>
        <h1>Let's check some memes</h1>
        <div style={{display: "grid", gridTemplateColumns:"repeat(4, 1fr)"}}>
          {paginatedData.map((meme, index) => {
            return (
              <div key={index}>
                <div style={{ width: "300px", height: "300px"}}>
                  <h3>{meme.name}</h3>
                  <img style={{ width: "250px", height: "250px"}} src={meme.example?.url} alt={meme.name}/>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <button disabled={counter <= 1} style={{padding: "15px", margin:"10px", width:"150px"}} onClick={onPrevClick}>Previous</button>
          <button disabled={counter * 8 + 8 >= memeData.length} style={{padding: "15px", margin:"10px", width:"150px"}} onClick={onNextClick}>Next</button>

        </div>
      </div>
      
    </>
  )
}

export default App
