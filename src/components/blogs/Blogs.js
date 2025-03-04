import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import { Grid2 } from '@mui/material'

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO)
  const [posts, setPosts] = useState([])

  console.log(data)

  useEffect(() => {
    if (data) {
      setPosts(data.posts)
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <Grid2 container  spacing={2} padding={3} className=''>
      {posts.map((post) => (
        <Grid2 key={post.id} mt={4} size={{ xs: 12,sm:6, md: 4 }}>

          <img src={post.coverPhoto.url} alt='post.title'  />
          <p >{post.title}</p>


        </Grid2>
      ))}
    </Grid2>
  )
}

export default Blogs