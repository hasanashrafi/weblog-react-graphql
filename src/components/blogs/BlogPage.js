import { useQuery } from '@apollo/client'
import { Avatar, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_POST_INFO } from '../../graphql/queries'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../templates/Loader'

function BlogPage() {
    const params = useParams()

    const { loading, data, error } = useQuery(GET_POST_INFO, {
        variables: { slug: params.slug }
    })

    if (loading) return <Loader />

    const { post } = data
    console.log(post)

    if (error) return <p>{error.message}</p>

    return (
        <Container maxWidth="lg" sx={{ padding: 2, minHeight: '100vh' }}>



            <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 2, minHeight: "100vh" }}>
                <Grid item sx={{ width: "100%", }} >
                    <CardMedia
                        component="img"
                        image={post.coverPhoto.url}
                        alt={post.title}
                        sx={{ height: 400, width: "90%", mx: "auto", borderRadius: "15px", }}
                    />
                </Grid>

                <Grid item m={5}>
                    <Typography mb={5} fontWeight={900} sx={{ fontFamily: "YekanBakhHeavy", textAlign: "center", fontSize: "24px" }}>
                        {post.title}
                    </Typography>
                    <Typography sx={{ textAlign: "justify" }}>
                        {post.content.text}
                    </Typography>
                </Grid>

                <Grid item sx={{ mb: 2, mx: "auto", width: "90%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <Grid item sx={{ display: "flex", alignItems: "center", }} >
                        <Link className='flex items-center' to={`/authors/${post.author.slug}`}>
                            <Avatar src={post.author.avatar.url} />
                            <Typography mr={2}>{post.author.name}</Typography>
                        </Link>
                    </Grid>
                    <Typography>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}                    </Typography>
                </Grid>


            </Grid>
        </Container>
    )
}

export default BlogPage