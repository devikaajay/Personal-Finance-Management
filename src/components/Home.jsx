import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1, // Ensure it's above the global background image
        backgroundColor: 'transparent', // Transparent background
      }}
    >
      <Typography variant="h5" color="white" sx={{ mb: 4 }}>
        WELCOME TO
      </Typography>
      <Typography variant="h3" color="white" sx={{ mb: 4 }}>
        PERSONAL FINANCE MANAGEMENT SYSTEM
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleGetStarted}
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black' }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
