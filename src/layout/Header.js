import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MenuBook } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }} maxWidth="lg" mx="auto" mb={10}>
            <AppBar position="fixed" sx={{ bgcolor: "#211C84" }}>
                <Toolbar className='flex items-center'>
                    <MenuBook />
                    <Typography variant="h6" mr={2} component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            وبلاگ برنامه نویسان
                        </Link>
                    </Typography>

                   
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        <Link to="/" className='hover:text-gray-400 transition-all ease-in-out'>صفحه اصلی</Link>
                        <Link to="/authors" className='hover:text-gray-400 transition-all ease-in-out'>نویسنده ها</Link>
                        <Link to="/blogs" className='hover:text-gray-400 transition-all ease-in-out'>مقالات</Link>
                    </Box>

                    <IconButton
                        ref={menuButtonRef}
                        onClick={() => setMenuOpen(!menuOpen)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'block', md: 'none' }, mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {menuOpen && (
                <Box
                    ref={menuRef}
                    padding={2}
                    position="fixed"
                    sx={{
                        bgcolor: "#101C94",
                        height: "100vh",
                        width: "50%",
                        top: 0,
                        left: 0,
                        zIndex: 1200,
                        color: "whitesmoke",
                        display: { xs: 'block', md: 'none' }
                    }}
                >
                    <Grid item display="flex" flexDirection="column" className='gap-y-4 px-3'>
                        <Link to="/" className='mt-10 hover:text-gray-400 transition-all ease-in-out border-b-2 p-2 border-b-white/10'>صفحه اصلی</Link>
                        <Link to="/authors" className='hover:text-gray-400 transition-all ease-in-out border-b-2 p-2 border-b-white/10'>نویسنده ها</Link>
                        <Link to="/blogs" className='hover:text-gray-400 transition-all ease-in-out border-b-2 p-2 border-b-white/10'>مقالات</Link>
                    </Grid>
                </Box>
            )}
        </Box>
    );
}

export default Header;