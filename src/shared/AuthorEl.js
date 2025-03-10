import React from 'react'
import { Link } from 'react-router-dom'

import { Avatar, Divider, Grid, Typography } from '@mui/material'

function AuthorEl({ author, index, authors }) {
    return (
        <>
            <Grid container padding={1} >
                <Link to={`/authors/${author.slug}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                    <Avatar src={author.avatar.url} />
                    <Typography mr={2} variant="p" component="p" color='textSecondary'>
                        {author.name}
                    </Typography>
                </Link>
            </Grid>
            {
                index !== authors.length - 1 && (
                    <Grid item xs={12}>
                        <Divider variant='middle' />
                    </Grid>
                )
            }

        </>
    )
}

export default AuthorEl