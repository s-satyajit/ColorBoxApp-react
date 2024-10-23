import { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('')

  const handleOnChange = (e) => {
    setColor(e.target.value)
  }
``
  return (

    <>
      <input 
      type="text" 
      className='w-[500px] h-[200px] m-5 p-10'
      readOnly
      placeholder='Color of the input box'
      style={{backgroundColor: `${color}`}}
      />
      <br />
      <input 
      type="text" 
      className='w-200 h-5 p-1'
      placeholder='Input Colour'
      onChange={handleOnChange}
      />
    </>
  )
}

export default App
