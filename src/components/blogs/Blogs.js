import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import { Grid, Typography } from '@mui/material'
import CardEl from '../../shared/CardEl'

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (data) {
      setPosts(data.posts)
    }
  }, [data])

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography>Error...</Typography>

  return (
    <Grid container spacing={2} >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} >
          <CardEl key={post.id} post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Blogs