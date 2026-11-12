import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './components/Blog'
import Template from './components/Template'
import { All } from './components/All'
import { CyberSecurity } from './components/CyberSecurity'
import { DataScience } from './components/DataScience'
import { FullStack } from './components/FullStack'
import "./App.css"

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Template/>,
      children:[
        {
          path:"/",
          element: <All/>
        },
        {
          path: "/cybersecurity",
          element: <CyberSecurity/>
        },
        {
          path: "/datascience",
          element:<DataScience/>
        },
        {
          path: "/fullstack",
          element: <FullStack/>
        }
      ]
    },
    {
      path:"/blog/:id",
      element: <Blog/>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App