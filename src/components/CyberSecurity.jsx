import React from 'react'
import blogs from '../data/BlogData'
import { BlogCard } from './BlogCard'

export const CyberSecurity = () => {
 const filteredBlog =  blogs.filter((blog) => (blog.domain === "Cyber Security"))
 return (
  <div className='container'>
         {
           filteredBlog.map((blog) =>(
             <BlogCard key={blog.id} blog = {blog}/>
           ))
         }      
       </div>
  )}