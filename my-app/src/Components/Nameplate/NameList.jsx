import * as React from 'react';
// Make sure to import the CSS file!
import './NameList.css'; 

export default function NameList({ platename, course, year, gender, definition }) {
  return (
    <div className="name-card">
      <h1 className="name-title">{platename}</h1>
      
      <div className="details-grid">
        <div className="detail-row">
          <span className="label">Course:</span>
          <span className="value">{course}</span>
        </div>
        <div className="detail-row">
          <span className="label">Year:</span>
          <span className="value">{year}</span>
        </div>
        <div className="detail-row">
          <span className="label">Gender:</span>
          <span className="value">{gender}</span>
        </div>
        <div className="detail-row">
          <span className="label">Definition:</span>
          <span className="value">{definition}</span>
        </div>
      </div>
    </div>
  );
}