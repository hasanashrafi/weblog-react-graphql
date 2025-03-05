import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Authors from '../authors/Authors'
import Blogs from '../blogs/Blogs'

function HomePage() {
    return (
        <Container maxWidth="lg" className='min-h-screen' >
            <Grid container spacing={2}  >
                <Grid item mt={4} sx={12} md={3} >
                    <Typography
                        component="h3"
                        variant='h5'
                        mb={2}
                       sx={{textShadow:"0px 0px 6px rgba(49,41,45,0.4)"}}
                        fontWeight={700}>
                        نویسنده ها
                    </Typography>
                    <Authors />

                </Grid>

                <Grid item mt={4} sx={12} md={9} >
                    <Typography
                        component="h3"
                        variant='h5'
                        mb={2}
                        sx={{textShadow:"0px 0px 6px rgba(49,41,45,0.4)"}}

                        fontWeight={700}>
                        مقالات
                    </Typography>
                    <Blogs />

                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage