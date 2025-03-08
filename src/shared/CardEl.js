import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CardEl({ title, slug, coverPhoto, author }) {

    return (
        <Card sx={{ height: "450px", borderRadius: "15px", boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            {author && (<Link to={`/authors/${author.slug}`}>
                <CardHeader
                    avatar={<Avatar sx={{ marginLeft: 2 }}
                        src={author.avatar.url} />}
                    title={author.name}
                />
            </Link>)}

            <CardMedia
                component="img"
                image={coverPhoto.url}
                alt={title}
                sx={{ height: 200 }}
            />
            <CardContent >
                <Typography component="h3" variant="h6" color='text-primary' fontWeight={600} gutterBottom>{title}</Typography>
            </CardContent>
            <Divider variant='middle' sx={{ margin: "10px" }} />
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}  >
                    <Button variant='outlined' size='small' sx={{ width: "100%", borderRadius: 3 }}>مطالعه مقاله</Button>
                </Link>

            </CardActions>
        </Card>

    )
}

export default CardEl