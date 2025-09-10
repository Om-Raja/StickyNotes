import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex flex-row gap-5 justify-center sticky top-0 bg-[var(--color-bg)] py-3">
        <NavLink to='/' className={({isActive})=>isActive? "active-link": ""}>Home</NavLink>
        <NavLink to="/notes" className={({isActive})=>isActive? "active-link": ""}>Notes</NavLink>
    </div>
  )
}

export default Navbar