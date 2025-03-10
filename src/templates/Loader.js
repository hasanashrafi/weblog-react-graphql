import React from 'react'

import { CircularProgress, Container, Stack } from '@mui/material'

function Loader() {
    return (
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 2, minHeight: "100vh" }}>
          <Stack spacing={2} direction="row" alignItems="center">
            <CircularProgress size="3rem" />
          </Stack>
        </Container>
    )
}

export default Loader