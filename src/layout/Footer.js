import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }} maxWidth="lg" mx="auto"   >
            <AppBar position="sticky" className='rounded-t-3xl' height={1} >
                <Toolbar className=' flex items-center justify-center text-center '  >
                    <Typography  variant="h6" mx="auto" component="div" sx={{ flexGrow: 1 }}>
                        Developed By HsN
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer