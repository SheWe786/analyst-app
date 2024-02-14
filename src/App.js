import './App.css';
import React, { useState, useEffect } from 'react';

function Template({ count, onIncrement }) {
  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <button className="btn" onClick={onIncrement}>Add</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Template count={count} onIncrement={handleIncrement} />
    </div>
  );
}

export default App;
