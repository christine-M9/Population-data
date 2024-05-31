// importing dependencies
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

// functional component
const PopulationDataSearch = ({ onEnlist }) => {
  const [populationData, setPopulationData] = React.useState([]);
  const [searchYear, setSearchYear] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);

// use effect hook
  useEffect(() => {
    fetchPopulationData();
  }, []);

// GET request
  const fetchPopulationData = () => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setPopulationData(data.data);
          setFilteredData(data.data);
        }
      });
  };

// filtering populationdata
  useEffect(() => {
    const filteredResults = populationData.filter(
      (item) => item.Year.toString() === searchYear
    );
    setFilteredData(searchYear === '' ? populationData : filteredResults);
  }, [searchYear, populationData]);

  // input field
  return (
    <Box>
      <input
        type="text"
        placeholder="Search data by Year"
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)}
      />

 {/* mapping filtered data and enlisting */}
      {filteredData.map((item) => (
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
export default PopulationDataSearch;