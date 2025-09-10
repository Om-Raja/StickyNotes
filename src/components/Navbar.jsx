import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex flex-row gap-5 justify-center sticky top-0 bg-[var(--color-bg)] py-3">
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/notes">Notes</NavLink>
    </div>
  )
}

export default Navbar