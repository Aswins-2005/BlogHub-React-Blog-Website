import React from 'react'
import Header from './Header'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <>
        <Header/>
        <Nav/>

        <Outlet/>
    </>
  )
}
export default Template
