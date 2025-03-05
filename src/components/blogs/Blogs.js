import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import { Grid } from '@mui/material'
import CardEl from '../../shared/CardEl'

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (data) {
      setPosts(data.posts)
    }
  }, [data])

  if (loading) return <div className='flex items-center justify-center min-h-screen'>در حال بارگذاری مقالات</div>
  if (error) return <div className='flex items-center justify-center min-h-screen'> {error.message}مشکلی پیش آمده است</div>

  return (
    <Grid container spacing={2} >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl  post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs