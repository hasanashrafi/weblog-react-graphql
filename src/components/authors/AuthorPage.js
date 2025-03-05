import { useQuery } from '@apollo/client'
import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_AUTHOR_INFO } from '../../graphql/queries'
import { useParams } from 'react-router-dom'
import CardEl from '../../shared/CardEl'
import { Container } from '@mui/material'

function AuthorPage() {
  const params = useParams()
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: params.slug }
  })

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography>Error: {error.message}</Typography>

  if (!data) return null

  const { author } = data

  return (
    <Container maxWidth="lg" sx={{ padding: 2, minHeight: '100vh' }}>
      <Grid container mt={4}  spacing={2} sx={{display:"flex",justifyContent:"center",  marginBottom: 2  }}>
        <Grid  item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column',justifyContent:"center", alignItems: 'center',justifyItems:"center" }}>
          <Avatar src={author.avatar.url} sx={{ width: 300, height: 300, marginBottom: 2   }} />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, marginBottom: 1 }}>{author.name}</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>{author.description.text}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {author.posts && author.posts.map((post) => (
          <Grid item xs={12} sm={6} md={3} mt={20} key={post.id} >
            <CardEl post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default AuthorPage