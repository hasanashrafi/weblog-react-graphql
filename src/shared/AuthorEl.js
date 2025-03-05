import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'

function AuthorEl({ author }) {
  return (
    <Grid container  >
     <Avatar src={author.avatar.url} />
      <Typography variant="p" component="p" color='textSecondary'>
        {author.name}
      </Typography>
   
    </Grid>
  )
}

export default AuthorEl