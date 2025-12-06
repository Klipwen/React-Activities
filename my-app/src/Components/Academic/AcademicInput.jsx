import React from 'react'

export default function AcademicInput({ label, className = '', ...props }) {
  return (
    <div className={`field ${className}`}>
      {label && <label className="label">{label}</label>}
      <input className="input" {...props} />
    </div>
  )
}

