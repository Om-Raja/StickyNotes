import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex flex-row gap-5 justify-center">
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/notes">Notes</NavLink>
    </div>
  )
}

export default Navbar