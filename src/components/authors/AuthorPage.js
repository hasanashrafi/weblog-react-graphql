import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import CardEl from '../../shared/CardEl'
import Loader from '../../templates/Loader'
import { GET_AUTHOR_INFO } from '../../graphql/queries'

import sanitizeHtml from 'sanitize-html'

import { Container } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Avatar, Divider, Grid, Typography } from '@mui/material'


function AuthorPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
        variables: { slug }
    })

    if (loading) return <Loader />
    if (!data) return null
    
    const { author } = data

    return (
        <Container maxWidth="lg" sx={{ padding: 2, minHeight: '100vh' }} className='min-h-screen'>
            <Grid container display="flex" flexDirection="column">
                <ArrowBack className='self-end mt-4 hover:text-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => navigate(-1)} />

                <Grid item xs={12}>
                    <Typography variant="h6" color="error.main">{error}</Typography>
                </Grid>
                <Grid container mt={4} spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
                        <Avatar src={author.avatar.url} sx={{ width: 300, height: 300, marginBottom: 2, borderRadius: '50%' }} />
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>{author.name}</Typography>
                        <Typography variant="h6" component="p" gutterBottom sx={{ color: "#635cbd", marginBottom: 2, textAlign: 'center' }}>{author.field}</Typography>
                        <Grid item xs={12}>
                            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(author.description.html) }}></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} mt={10} container spacing={2} sx={{ padding: 2 }}>
                    <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'start' }}>مقالات {author.name}</Typography>
                    <Divider variant='start' sx={{ width: "100%", marginBottom: 3, marginTop: 1 }} />
                    {author.posts && author.posts.map((post) => (
                        <Grid item xs={12} sm={6} md={3} key={post.id}>
                            <CardEl
                                title={post.title}
                                slug={post.slug}
                                coverPhoto={post.coverPhoto}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}

export default AuthorPage