import React, { useState } from 'react';

function App() {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  
  return (
    <div className='container'>
      <h1> {ctime} </h1>
      <button onClick={updateTime} > Get Time</button>
    </div>
  );
}

export default App;
