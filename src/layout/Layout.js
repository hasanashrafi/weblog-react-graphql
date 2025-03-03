import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="sticky" className='max-w-7xl mx-auto '  >
        <Toolbar >
          <IconButton onClick={() => setIsOpen(!isOpen)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className='' />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dev's Weblog
          </Typography>
          <Typography
            color="inherit" fontFamily="YekanBakhMedium" >
            مقالات
          </Typography>
        </Toolbar>
      </AppBar>
      {
        isOpen ? (
          <div className='flex flex-col  shadow-lg rounded max-h-max w-full p-4 bg-white/20 border backdrop-blur-md'>
            <ul className='flex flex-col gap-4'>
              <li>home</li>
              <li>Blogs</li>
              <li>Comments</li>
              <li>Authors</li>
            </ul>
          </div>
        ) :
          null
      }
    </Box>
  );
}
