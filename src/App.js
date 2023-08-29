import React, { useState } from 'react';

function App() {

  let time = new Date().toLocaleTimeString();

  const [gTime, setGtime] = useState(time);
  const [aTime, setAtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setGtime(time);
  }

  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setAtime(time);
  })
  
  return (
    <div className='wrapper'>
      <div>
        <h1>Automatic time</h1>
        <h1> {aTime} </h1>
        {/* <button onClick={updateTime} > Get Time</button> */}
      </div>
      <div>
        <h1>Click to get time</h1>
        <h1> {gTime} </h1>
        <button onClick={updateTime} > Get Time</button>
      </div>
    </div>
  );
}

export default App;
