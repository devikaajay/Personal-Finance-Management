import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ pt: 8 }}> {/* Adjust padding-top based on the height of your Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userdashboard" element={<User />} />
          <Route path="/admindashboard" element={<Admin />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
