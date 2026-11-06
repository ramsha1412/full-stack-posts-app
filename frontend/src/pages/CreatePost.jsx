import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreatePost() {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        
        const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

        axios.post(`BASE_URL}{/create-post`, formData)
        .then((res)=> {

            navigate("/feed")

        })
        .catch((err)=> {
            console.log(err)
            alert("Error creating post")
        })
    }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input type='file' name='image' accept='image/*'/>
            <input type='text' name='caption' placeholder='Enter Caption' required/>
            <button type='submit'>Submit</button>
        </form>

    </section>
  )
}

export default CreatePost