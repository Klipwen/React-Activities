import React, { useState } from 'react';

export default function App2Page() {
  const [fruitInput, setFruitInput] = useState('');
  const [fruits, setFruits] = useState([]);

  const addFruit = () => {
    if (fruitInput.trim() === '') return;
    setFruits([...fruits, fruitInput]);
    setFruitInput('');
  };

  return (
    <div className="page" style={{ maxWidth: 720 }}>
      <div className="card">
        <h2 className="title">Favorite Fruits</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            value={fruitInput}
            onChange={(e) => setFruitInput(e.target.value)}
            placeholder="Enter a fruit"
            className="input"
            style={{ flex: 1 }}
          />
          <button className="btn btn-primary" onClick={addFruit}>Add</button>
        </div>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
