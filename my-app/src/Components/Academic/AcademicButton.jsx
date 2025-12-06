import React from 'react'

export default function AcademicButton({ children, variant = 'primary', className = '', ...props }) {
  const classes = `button ${variant === 'secondary' ? 'secondary' : ''} ${className}`
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

