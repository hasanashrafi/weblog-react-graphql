
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuBook } from '@mui/icons-material';


function Header() {

    return (
        <Box sx={{ flexGrow: 1 }} maxWidth="lg" mx="auto" >
            <AppBar position="sticky" className='rounded-b-3xl '  >
                <Toolbar className='flex items-center'  >
                    <Typography variant="h6" mr={2} component="div" sx={{ flexGrow: 1 }}>
                        وبلاگ برنامه نویسان
                    </Typography>

                    <Typography color="inherit"  >
                        <MenuBook />
                    </Typography>

                </Toolbar>
            </AppBar>

           
        </Box>
    )
}

export default Header