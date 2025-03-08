import { useQuery } from '@apollo/client'
import { Avatar, Box, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_POST_INFO } from '../../graphql/queries'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../templates/Loader'
import sanitizeHtml from 'sanitize-html'
import { ArrowBack } from '@mui/icons-material'
import CommentForm from '../comment/CommentForm'

function BlogPage() {
    const params = useParams()
    const navigate = useNavigate()

    const { loading, data, error } = useQuery(GET_POST_INFO, {
        variables: { slug: params.slug }
    })

    if (loading) return <Loader />
    if (error) return <p>{error.message}</p>

    const { post } = data

    return (
        <Container maxWidth="lg" sx={{ padding: 2, minHeight: '100vh' }}>
            <Grid container>

                <Grid item
                    xs={12}
                    mt={9}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between">

                    <Typography
                        color='primary'
                        fontWeight={900}
                        sx={{ fontFamily: "YekanBakhHeavy", textAlign: "center", fontSize: "24px" }}>
                        {post.title}
                    </Typography>
                    <ArrowBack className='hover:text-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => navigate(-1)} />
                </Grid>

                <Grid item mt={4} xs={12} sx={{ width: "100%", }} >
                    <CardMedia
                        component="img"
                        image={post.coverPhoto.url}
                        alt={post.title}
                        sx={{ height: 500, width: "100%", mx: "auto", borderRadius: "5px", }}
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: 5, }}>
                    <Link className='flex items-center' to={`/authors/${post.author.slug}`}>
                        <Avatar src={post.author.avatar.url} sx={{ width: 80, height: 80 }} />
                        <Box component="div">
                            <Typography component="p" variant='h6' fontWeight={600} mr={2}>{post.author.name}</Typography>
                            <Typography component="p" variant='p' color='text.secondary' mr={2}>{post.author.field}</Typography>

                        </Box>
                    </Link>

                </Grid>

                <Grid item xs={12} my={5}>
                    <div className=' text-start' dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.html) }}>
                    </div>
                </Grid>

                <Grid>
                    <CommentForm />
                </Grid>

            </Grid>
        </Container>
    )
}

export default BlogPage