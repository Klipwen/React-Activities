import React from 'react'

export default function AcademicHeader({ brand = 'GEE CALIPH A. JUEN', title = 'ACADEMICS MANAGER', subtitle }) {
  return (
    <div className="header">
      <div className="brand">{brand}</div>
      <div className="title">{title}</div>
      {subtitle && <div className="subtle">{subtitle}</div>}
    </div>
  )
}

