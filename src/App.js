import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>My first <br /> React-App-Counter</h1>
      <div className='main'>
        <button className='btn' onClick={() => setCount(count => count - 1)}>-</button>
        <p className='counter'>{count}</p>
        <button className='btn' id='plus' onClick={() => setCount(count => count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
