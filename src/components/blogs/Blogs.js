import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import { Grid } from '@mui/material'
import CardEl from '../../shared/CardEl'
import Loader from '../../templates/Loader'

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (data) {
      setPosts(data.posts)
    }
  }, [data])

  if (error) return <div className='flex items-center justify-center min-h-screen'> {error.message}مشکلی پیش آمده است</div>
  if (loading) return <Loader />

  return (
    <Grid container spacing={2} >
      
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl { ...post }/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs