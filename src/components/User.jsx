import React, { useState } from 'react';
import { Button, Box, Typography, TextField, Container, Paper } from '@mui/material';

// Placeholder components for each section
const IncomeExpenseTracking = () => (
  <Paper style={{ padding: 20, marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)', width: '80%' }}>
    <Typography variant="h5">Income and Expense Tracking</Typography>
    <TextField label="Amount" fullWidth margin="normal" />
    <TextField label="Category" fullWidth margin="normal" />
    <TextField label="Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
    <TextField label="Description" fullWidth margin="normal" multiline rows={3} />
    <Button variant="contained" color="primary">Add Transaction</Button>
    <Box mt={2}>
      {/* List of transactions would go here */}
    </Box>
  </Paper>
);

const BudgetManagement = () => (
  <Paper style={{ padding: 20, marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)', width: '80%' }}>
    <Typography variant="h5">Budget Management</Typography>
    <TextField label="Category" fullWidth margin="normal" />
    <TextField label="Monthly Budget" fullWidth margin="normal" type="number" />
    <Button variant="contained" color="primary">Set Budget</Button>
    <Box mt={2}>
      {/* Budget tracking and visualization would go here */}
    </Box>
  </Paper>
);

const FinancialGoalSetting = () => (
  <Paper style={{ padding: 20, marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)', width: '80%' }}>
    <Typography variant="h5">Financial Goal Setting</Typography>
    <TextField label="Goal Name" fullWidth margin="normal" />
    <TextField label="Target Amount" fullWidth margin="normal" type="number" />
    <TextField label="Target Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
    <Button variant="contained" color="primary">Set Goal</Button>
    <Box mt={2}>
      {/* Goal tracking and progress would go here */}
    </Box>
  </Paper>
);

const User = () => {
  const [currentSection, setCurrentSection] = useState('incomeExpense');

  const renderSection = () => {
    switch (currentSection) {
      case 'incomeExpense':
        return <IncomeExpenseTracking />;
      case 'budgetManagement':
        return <BudgetManagement />;
      case 'financialGoals':
        return <FinancialGoalSetting />;
      default:
        return <IncomeExpenseTracking />;
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
        justifyContent: 'flex-start', // Align content at the top
      }}
    >
      <Typography variant="h4" gutterBottom style={{ color: 'white' }}>USER DASHBOARD</Typography>
      <Box mb={2} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 8, width: '80%', textAlign: 'center' }}>
        <Button variant="contained" onClick={() => setCurrentSection('incomeExpense')} style={{ marginRight: 10 }}>
          Income & Expense Tracking
        </Button>
        <Button variant="contained" onClick={() => setCurrentSection('budgetManagement')} style={{ marginRight: 10 }}>
          Budget Management
        </Button>
        <Button variant="contained" onClick={() => setCurrentSection('financialGoals')}>
          Financial Goals
        </Button>
      </Box>
      {renderSection()}
    </Container>
  );
};

export default User;
