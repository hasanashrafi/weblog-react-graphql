import React from 'react'
import { useQuery } from '@apollo/client'
import { Avatar, Box, Grid, Typography } from '@mui/material'

import { GET_COMMENT_INFO } from '../../graphql/queries'
import getRandomColor from '../../helper/randomColor'

function Comments({ slug }) {
    const { loading, data, error } = useQuery(GET_COMMENT_INFO, {
        variables: { slug },
    })

    if (loading) return null
    if (error) return <Typography>Error: {error.message}</Typography>

    return (
        <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 1, mt: 5 }}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant='h6' fontWeight={700} color='primary'>کامنت ها </Typography>

                {
                    data.comments.map((comment) => (
                        <Grid item xs={12} key={comment.id} m={2} padding={2} border="1px silver solid" borderRadius={2} >
                            <Box component="div" display="flex" mb={3} alignItems="center">
                                <Avatar sx={{ bgcolor: getRandomColor() }} >{comment.name[0]}</Avatar>
                                <Typography component="span" variant='h6' mr={1}>{comment.name}</Typography>
                            </Box>
                            <Typography component="p" variant='p'>{comment.text}</Typography>
                        </Grid>
                    ))
                }


            </Grid>
        </Grid>
    )
}

export default Comments