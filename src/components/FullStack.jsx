import React from 'react'
import blogs from '../data/BlogData'
import { BlogCard } from './BlogCard'

export const FullStack = () => {
  const fliteredBlog = blogs.filter((blog) => (blog.domain === "Full Stack Development"))
  return (
    
      <div className='container'>
        {
          fliteredBlog.map((blog) =>(
            <BlogCard key={blog.id} blog = {blog}/>
          ))
        }      
      </div>
    
  )
}
