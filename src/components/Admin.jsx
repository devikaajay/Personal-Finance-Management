import React, { useState } from 'react';
import { Button, Box, Typography, Container, Paper } from '@mui/material';

// Placeholder components for each section
const UserManagement = () => (
  <Box mt={2}>
    <Typography variant="h5">User Management</Typography>
    <Box mt={2}>
      {/* User management functionality (list, edit, delete users) would go here */}
      <Typography variant="body1">List of Users</Typography>
      {/* Example User List */}
      <ul>
        <li>User 1 - <Button variant="outlined">Edit</Button> <Button variant="outlined">Delete</Button></li>
        <li>User 2 - <Button variant="outlined">Edit</Button> <Button variant="outlined">Delete</Button></li>
      </ul>
    </Box>
  </Box>
);

const ExpenseManagement = () => (
  <Box mt={2}>
    <Typography variant="h5">Expense Management</Typography>
    <Box mt={2}>
      {/* Expense management functionality (view, edit, delete expenses) would go here */}
      <Typography variant="body1">List of Expenses</Typography>
      {/* Example Expense List */}
      <ul>
        <li>Expense 1 - Amount: $100 <Button variant="outlined">Edit</Button> <Button variant="outlined">Delete</Button></li>
        <li>Expense 2 - Amount: $50 <Button variant="outlined">Edit</Button> <Button variant="outlined">Delete</Button></li>
      </ul>
    </Box>
  </Box>
);

const Reporting = () => (
  <Box mt={2}>
    <Typography variant="h5">Reporting</Typography>
    <Box mt={2}>
      {/* Reporting functionality (summary of user finances) would go here */}
      <Typography variant="body1">User Financial Summary</Typography>
      {/* Example Report */}
      <ul>
        <li>Total Income: $2000</li>
        <li>Total Expenses: $1500</li>
        <li>Net Balance: $500</li>
      </ul>
    </Box>
  </Box>
);

const Admin = () => {
  const [currentSection, setCurrentSection] = useState('userManagement');

  const renderSection = () => {
    switch (currentSection) {
      case 'userManagement':
        return <UserManagement />;
      case 'expenseManagement':
        return <ExpenseManagement />;
      case 'reporting':
        return <Reporting />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <Container
      sx={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '64px', // Adjust padding for fixed Navbar
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the top
      }}
    >
      <Typography variant="h4" gutterBottom style={{ color: 'white' }}>ADMIN DASHBOARD</Typography>
      <Paper style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 8, width: '80%', textAlign: 'center' }}>
        <Box mb={2}>
          <Button variant="contained" onClick={() => setCurrentSection('userManagement')} style={{ marginRight: 10 }}>
            User Management
          </Button>
          <Button variant="contained" onClick={() => setCurrentSection('expenseManagement')} style={{ marginRight: 10 }}>
            Expense Management
          </Button>
          <Button variant="contained" onClick={() => setCurrentSection('reporting')}>
            Reporting
          </Button>
        </Box>
        {renderSection()}
      </Paper>
    </Container>
  );
};

export default Admin;
