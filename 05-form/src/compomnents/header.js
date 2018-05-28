import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header_wrapper">
      <Link to="/user">User</Link>
      <Link to="/control">Control</Link>
      <Link to="/uncontrol">UnControl</Link>
    </div>
  )
}

export default Header