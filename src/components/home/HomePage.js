import React from 'react'
import { Container, Grid2, Typography } from '@mui/material'
import Authors from '../authors/Authors'
import Blogs from '../blogs/Blogs'

function HomePage() {
    return (
        <Container maxWidth="lg"  >
            <Grid2 container spacing={2} padding={3}>
                <Grid2 mt={4} size={{ xs: 12, md: 3 }}>
                    <Typography
                        component="h3"
                        variant='h5'
                        mb="3"
                        fontWeight={700}>
                        نویسنده ها
                    </Typography>
                    <Authors />
                </Grid2>

                <Grid2 mt={4} size={{ xs: 12, md: 3 }}>
                    <Typography
                        component="h3"
                        variant='h5'
                        mb="3"
                        fontWeight={700}>
                        مقالات
                    </Typography>
                    <Blogs />
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default HomePage