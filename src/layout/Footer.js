import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

function Footer() {
    return (
        <Box sx={{ flexGrow: 1,height:50  }} maxWidth="lg" mx="auto" mt={10}   >
            <AppBar position="sticky" sx={{bgcolor:"#211C84",height:50}}  >
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