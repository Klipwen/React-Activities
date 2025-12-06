import React, { useState } from 'react';
import NameList from '../Components/Nameplate/NameList.jsx';

export default function NameplatePage() {
  const people = [
    { platename: 'Gee Caliph A. Juen', course: 'BSIT', year: '3', gender: 'Male', definition: 'Student' },
    { platename: 'Lenon Ambot', course: 'BSIT', year: '3', gender: 'Male', definition: 'Student' },
    { platename: 'Gwapa Ko', course: 'BSIT', year: '4', gender: 'Female', definition: 'Student' },
  ];

  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(people.length - 1, i + 1));

  const p = people[idx];

  return (
    <div className="page name-page-container">
      {/* The Card Component */}
      <NameList {...p} />

      {/* Navigation Buttons */}
      <div className="controls-area">
        <button 
          className="nav-btn" 
          onClick={prev} 
          disabled={idx === 0}
        >
          Previous
        </button>
        
        <button 
          className="nav-btn primary" 
          onClick={next} 
          disabled={idx === people.length - 1}
        >
          Next
        </button>
      </div>

      <div className="counter">
        Card {idx + 1} of {people.length}
      </div>
    </div>
  );
}
