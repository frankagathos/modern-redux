import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { updateMsg , selectMsg } from '../application/msg'
import React, { useState } from 'react'

function App() {
  const msg = useSelector(selectMsg)
  const dispatch = useDispatch()
  const [inputValue, setinputValue] = useState('')


  const handleChange = (e) => {
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    dispatch(updateMsg(inputValue))
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Simple example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        our message:{msg}
      </div>
      <h1>Async example</h1>
    </div>
  );
}

export default App;
