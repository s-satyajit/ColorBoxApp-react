import React, { useState } from 'react';
import './App.css';
import Callback from './Callback'; // Ensure Callback is imported

function App() {
  const [UIcolor, setUIColor] = useState('');

  // our callback function
  const xetColor = (dolor) => {
    setUIColor(dolor);
  }

  return (
    <div className='App'>
      <div className='App_color_container'
        style={{ background: `${UIcolor}` }}
      ></div>
      <Callback zetColor={xetColor} />
    </div>
  );
}

export default App;
