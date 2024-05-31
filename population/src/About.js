import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: '#f0f0f0',
        color: '#000',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        ABOUT CEEJAY'S POPULATION DATA APP
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This app allows you to explore and save population data from different countries and years.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mb: 3 }}
        component={Link}
        to="/"
      >
        Back to Home
      </Button>
      <Typography variant="body1">
        Thank you for using my app. Have fun exploring the population data!
      </Typography>
    </Box>
  );
};

export default About;
