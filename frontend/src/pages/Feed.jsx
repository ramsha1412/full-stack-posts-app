import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Feed() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

        axios.get(`${BASE_URL}/posts`)
        .then((res)=>{
            setPosts(res.data.posts)
        })
    }, [])

  return (
    <section className='feed-section'>
        <button onClick={()=> navigate('/create-post')}>+ New Post</button>
{
    posts.length > 0 ? (
        posts.map( (post) => (
            <div key={post.id || post._id} className='post-card' >
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
            </div>
        ))
        ) : (
            <h1>No posts available</h1>
        )
}
    </section>
  )
}

export default Feed