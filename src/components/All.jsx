import React from 'react'
import blogs from '../data/BlogData'
import { BlogCard } from './BlogCard'

export const All = () => {
  return (
  
    <div className='container'>
      {
      blogs.map((blog)=>(
        <BlogCard key={blog.id} blog = {blog}/>
      ))
    }
    </div>
   
  )
}
