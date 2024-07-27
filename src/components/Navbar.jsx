import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1200, // Higher zIndex to ensure it is on top
        backgroundImage: `url("https://img.freepik.com/free-vector/purple-bokeh-vector-digital-business-background_53876-110566.jpg?t=st=1722001626~exp=1722005226~hmac=185ea8ec0d51583563db3b6c0ff99699ae5a0787182366b264fd33f8e0720f9f&w=996")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Button>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Button>
          <Button>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
              Login
            </Link>
          </Button>
          <Button>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              Sign Up
            </Link>
          </Button>
          <Button>
            <Link to="/userdashboard" style={{ textDecoration: 'none', color: 'white' }}>
              User Dashboard
            </Link>
          </Button>
          <Button>
            <Link to="/admindashboard" style={{ textDecoration: 'none', color: 'white' }}>
              Admin Dashboard
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
