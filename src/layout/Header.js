import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the menu and not on the menu button
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
        <Box sx={{ flexGrow: 1 }} maxWidth="lg" mx="auto" mb={4}>
            <AppBar position="fixed" sx={{ bgcolor: "#211C84" }}>
                <Toolbar className='flex items-center'>
                    <MenuBook />
                    <Typography variant="h6" mr={2} component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            وبلاگ برنامه نویسان
                        </Link>
                    </Typography>

                    {/* Desktop Menu Items (Hidden on Mobile) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        <Link to="/" className='hover:text-gray-400 transition-all ease-in-out'>صفحه اصلی</Link>
                        <Link to="/authors" className='hover:text-gray-400 transition-all ease-in-out'>نویسنده ها</Link>
                        <Link to="/blogs" className='hover:text-gray-400 transition-all ease-in-out'>مقالات</Link>
                    </Box>

                    {/* Mobile Menu Button (Hidden on Desktop) */}
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

            {/* Mobile Menu (Hidden on Desktop) */}
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