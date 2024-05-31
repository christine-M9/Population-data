// importing dependencies
import React from 'react';
import { BrowserRouter , Link, Route, Routes} from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Home from './Home';
import PopulationDataSearch from './PopulationDataSearch';
import AddNewPopulation from './AddNewPopulation';
import PopulationArmy from './PopulationArmy';
import PopulationData from './PopulationData';
import About from './About';
import Index from './index.css';

// state
const App = () => {
  const [enlistedPopulation, setEnlistedPopulation] = React.useState([]);
  const [newlyAddedPopulation, setNewlyAddedPopulation] = React.useState([]);

  // event handling functions
  const handleEnlist = (populationBot) => {
    if (!enlistedPopulation.find((bot) => bot["ID Year"] === populationBot["ID Year"])) {
      setEnlistedPopulation((prevEnlisted) => [...prevEnlisted, populationBot]);
    }
  };

  const handleRelease = (populationBot) => {
    setEnlistedPopulation((prevEnlisted) =>
      prevEnlisted.filter((bot) => bot["ID Year"] !== populationBot["ID Year"])
    );
  };

  const handleAddPopulation = (newPopulationData) => {

   // when the server returns the newly added data with an ID
    setNewlyAddedPopulation((prevNewlyAdded) => [...prevNewlyAdded, newPopulationData]);
  };

  // JSX and Routing (Browserrouter is indicated here so no need of having it in index.js as it wraps this App.js)
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" element="div" sx={{ flexGrow: 1 }}>
            CEEJAY'S POPULATION APP
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/data">
            Population Data
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/data"
            element={
              <Box>
                <h1>POPULATION DATA</h1>
                <AddNewPopulation onAddPopulation={handleAddPopulation} />
                <Box>
                  <h2>ADDED POPULATION</h2>
                  {newlyAddedPopulation.map((item, index) => (
                    <Box key={index} sx={{ border: 1, p: 2, my: 2, backgroundColor: '#f0f0f0' }}>
                      <Typography variant="h6">ID Year: {item["ID Year"]}</Typography>
                      <Typography>ID Nation: {item["ID Nation"]}</Typography>
                      <Typography>Nation: {item.Nation}</Typography>
                      <Typography>Year: {item.Year}</Typography>
                      <Typography>Population: {item.Population}</Typography>
                      <Typography>Slug Nation: {item["Slug Nation"]}</Typography>
                    </Box>
                  ))}
                </Box>
                <PopulationDataSearch onEnlist={handleEnlist} />
                <PopulationArmy enlistedPopulation={enlistedPopulation} onRelease={handleRelease} />
              </Box>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

// exporting(default method)
export default App;
