
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {

    return (
        <Box sx={{ flexGrow: 1 }} maxWidth="lg" mx="auto" >
            <AppBar position="sticky" className='rounded-b-3xl '  >
                <Toolbar className='flex items-center'  >
                    <MenuBook />
                    <Typography variant="h6" mr={2} component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" >
                            وبلاگ برنامه نویسان
                        </Link>
                    </Typography>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Grid container>
                <Grid item>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Header