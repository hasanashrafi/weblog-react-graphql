import React from 'react'
import ButtonAppBar from '../../layout/Layout'
import { Container, Grid2, Typography } from '@mui/material'

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid2 container spacing={3}>
                <Grid2 item xs={12}>
                    <Typography>نویسنده ها</Typography>
                </Grid2>

                <Grid2 item xs={12}></Grid2>
                <Typography>مقالات</Typography>
            </Grid2>
        </Container>
    )
}

export default HomePage