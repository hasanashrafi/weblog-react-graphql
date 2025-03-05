import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

function CardEl({ post }) {
    console.log(post)
    return (
        <Card sx={{  borderRadius:"15px" ,boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" }}>
            <CardHeader
                avatar={<Avatar sx={{marginLeft:2}} 
                src={post.author.avatar.url} />}
                title={post.author.name}
            />

            <CardMedia
                component="img"
                image={post.coverPhoto.url}
                alt={post.title}
               sx={{height:200}}
            />
            <CardContent >
                <Typography variant="h6" gutterBottom>{post.title}</Typography>
            </CardContent>
            <CardActions>
                
            </CardActions>
        </Card>

    )
}

export default CardEl