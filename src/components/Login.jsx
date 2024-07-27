import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const isValidUser = email === 'user@example.com' && password === 'password';
    const isValidAdmin = email === 'admin@example.com' && password === 'admin';

    if (isValidUser) {
      navigate('/userdashboard');
    } else if (isValidAdmin) {
      navigate('/admindashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          padding: 3,
          marginTop: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
          borderRadius: 2,
          backdropFilter: 'blur(10px)', // Optional: Adds a blur effect
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
