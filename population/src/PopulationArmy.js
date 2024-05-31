// importing dependencies
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// functional component
const PopulationArmy = ({ enlistedPopulation, onRelease }) => {
 
 //JSX ,mapping ,custom styling,enlisted population display  
  return (
    <Box>
      <Typography variant="h4">POPULATION ARMY</Typography>
      {enlistedPopulation.map((item) => (
        <Box key={item["ID Year"]} sx={{ border: 1, p: 2, my: 2, backgroundColor: '#f0f0f0' }}>
          <Typography>ID Year: {item["ID Year"]}</Typography>
          <Typography>ID Nation: {item["ID Nation"]}</Typography>
          <Typography>Nation: {item.Nation}</Typography>
          <Typography>Year: {item.Year}</Typography>
          <Typography>Population: {item.Population}</Typography>
          <Typography>Slug Nation: {item["Slug Nation"]}</Typography>
          <Button onClick={() => onRelease(item)}>Release</Button>
        </Box>
      ))}
    </Box>
  );
};

// default export
export default PopulationArmy;