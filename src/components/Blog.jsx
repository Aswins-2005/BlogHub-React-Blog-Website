import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import blogs from '../data/BlogData';


const Blog = () => {
  const {id} = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id))
  return (
    <>
    <Header/>
      <div className='blog-outer'>
        <h1>{blog.title}</h1>
        <div className='blog-inner'>
          <img src={blog.img} alt=''/>
          <div className='blog-sinner'>
            <p>{blog.domain}</p>
            <p>12 November 2026 </p>
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Blog