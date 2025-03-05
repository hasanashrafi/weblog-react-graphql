import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CardEl({ post }) {
    console.log(post)
    return (
        <Card sx={{ borderRadius: "15px", boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" }}>
            <CardHeader
                avatar={<Avatar sx={{ marginLeft: 2 }}
                    src={post.author.avatar.url} />}
                title={post.author.name}
            />

            <CardMedia
                component="img"
                image={post.coverPhoto.url}
                alt={post.title}
                sx={{ height: 200 }}
            />
            <CardContent >
                <Typography component="h3" variant="h6" color='text-primary' fontWeight={600} gutterBottom>{post.title}</Typography>
            </CardContent>
            <Divider variant='middle' sx={{ margin: "10px" }} />
            <CardActions>
            {/* <Link to={`/blogs/${post.slug}` } style={{textDecoration:"none", width:"100%"}}  >  */}
                <Button variant='outlined' size='small' sx={{width:"100%", borderRadius:3}}>مطالعه مقاله</Button>
            {/* </Link> */}
          
            </CardActions>
        </Card>

    )
}

export default CardEl