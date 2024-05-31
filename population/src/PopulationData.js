// importing
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// functional component
const PopulationData = ({ onEnlist }) => {
  const [populationData, setPopulationData] = React.useState([]);

// state and use effect hook
  React.useEffect(() => {
    fetchPopulationData();
  }, []);

  const fetchPopulationData = () => {

// Trying fetching data from the API
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setPopulationData(data.data);
        }
      })
      .catch((apiError) => {
        console.error("Failed to fetch data from the API:", apiError);
        
// Fetching from the JSON server if API request fails
        fetch('/population.json')
          .then((response) => response.json())
          .then((data) => {
            if (data && data.populationData) {
              setPopulationData(data.populationData);
            }
          })
          .catch((jsonError) => {
            console.error("Failed to fetch data from the JSON server:", jsonError);
          });
      });
  };

  // JSX,mapping population data,custom styling
  return (
    <Box>
      {populationData.map((item) => (
        <Box key={item["ID Year"]} sx={{ border: 1, p: 2, my: 2, cursor: 'pointer', backgroundColor: '#f0f0f0' }} onClick={() => onEnlist(item)}>
          <Typography variant="h6">ID Year: {item["ID Year"]}</Typography>
          <Typography>ID Nation: {item["ID Nation"]}</Typography>
          <Typography>Nation: {item.Nation}</Typography>
          <Typography>Year: {item.Year}</Typography>
          <Typography>Population: {item.Population}</Typography>
          <Typography>Slug Nation: {item["Slug Nation"]}</Typography>
        </Box>
      ))}
    </Box>
  );
};

// default export
export default PopulationData;