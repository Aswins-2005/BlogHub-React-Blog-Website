import React from 'react'

const Header = () => {
  return (
    <>
    <div className='header-container'>
      <h2>Logo</h2>
      <div className='search-box'>
      <input type='text' placeholder='Search Blog'/>
      <i class="fa-solid fa-magnifying-glass"></i></div>
      <div className='sign'>
        <h2>Sign In</h2>
      </div>
      </div>
    </>
  )
}

export default Header