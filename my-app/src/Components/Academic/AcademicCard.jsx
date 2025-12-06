import React from 'react'

export default function AcademicCard({ title, children, className = '', style, ...props }) {
  return (
    <div className={`card ${className}`} style={style} {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

