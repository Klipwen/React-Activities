import React from 'react';
import QuizApp from '../Components/QuizApp.jsx';

export default function QuizPage() {
  return (
    <div className="page">
      <div className="card" style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 className="title">Quiz Maker</h1>
        <QuizApp />
      </div>
    </div>
  );
}
