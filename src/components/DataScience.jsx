import React from 'react'
import { BlogCard } from './BlogCard'
import blogs from '../data/BlogData'

export const DataScience = () => {
 const fliteredBlog = blogs.filter((blog) => (blog.domain === "Data Science"))
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