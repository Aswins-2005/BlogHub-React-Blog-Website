import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='navbar'>
        <Link to={"/"}>All</Link>
        <Link to={"/cybersecurity"}>CyberSecurity</Link>
        <Link to={"/datascience"}>DataScience</Link>
        <Link to={"/fullstack"}>FullStack</Link>
      </div>
        
    </>
  )
}

export default Nav