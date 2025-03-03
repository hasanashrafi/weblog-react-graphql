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
      <AppBar position="sticky" className='rounded-b-3xl max-w-7xl mx-auto '  >
        <Toolbar className='flex items-center' >
         
          <IconButton onClick={() => setIsOpen(!isOpen)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className='' />
          </IconButton>

          <Typography variant="h6" fontFamily="Roboto" component="div" sx={{ flexGrow: 1 }}>
            Dev's Weblog
          </Typography>

          <Typography color="inherit"  >
            مقالات
          </Typography>

        </Toolbar>
      </AppBar>

      {
        isOpen ? (
          <div className='shadow-blue-200 z-20 absolute top-auto right-0 left-0 flex flex-col  shadow-lg  max-h-max  max-w-6xl w-[96%]  transition-all ease-in-out  rounded-b-3xl mx-auto p-4 bg-white/20 border backdrop-blur-md'>
            <ul className='child-hover:text-blue-800 cursor-pointer  child:w-fit child:font-semibold child:transition-all child:ease-in-out flex flex-col gap-4 text-blue-600'>
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
