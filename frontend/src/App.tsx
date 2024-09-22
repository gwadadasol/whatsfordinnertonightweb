"use client"
// import Image from "next/image";

import React, { useEffect, useState } from 'react';
import RecipeButton from './components/RecipeButton';
import RecipeDisplay from './components/RecipeDisplay';
import { Box, Container, Divider, ListItem, Stack } from '@mui/material';
import axios from 'axios'; // Import axios for making API calls


// Sample list of recipes
// const recipes = [
//   { name: 'Spaghetti Bolognese', details: 'Spaghetti, ground beef, tomato sauce, garlic, onion.' },
//   { name: 'Chicken Curry', details: 'Chicken, curry powder, coconut milk, onions, garlic.' },
//   { name: 'Grilled Salmon', details: 'Salmon, lemon, garlic, herbs.' },
//   { name: 'Veggie Stir-Fry', details: 'Mixed vegetables, soy sauce, ginger, garlic.' },
//   { name: 'Tacos', details: 'Tortillas, ground beef, lettuce, cheese, tomatoes.' },
// ];

const App: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; ingredients: string[] } | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [recipes, setRecipes] = useState<{ name: string; ingredients: string[] }[]>([]);

  const clusterUrl = 'http://recipes-clusterip-srv/recipes';
  const localUrl = 'http://localhost:3000/recipes';
  const wfdtUrl = 'http://wfdt.com:30080/recipes';

  // Function to fetch recipes from the REST service
  // const fetchRecipesLocal = async () => {
  //   try {
  //     console.log(localUrl);
  //     const response = await axios.get(localUrl); // Replace with your REST service URL
  //     setRecipes(response.data);
  //   } catch (error) {
  //     console.error('Error fetching recipes:', error);
  //   }
  // }


  // const fetchRecipes = async () => {
  //   try {
  //     // const response = await axios.get('http://localhost:32333/recipes'); // Replace with your REST service URL
  //     console.log(clusterUrl);
  //     const response = await axios.get(clusterUrl); // Replace with your REST service URL
  //     setRecipes(response.data);
  //   } catch (error) {
  //     console.error('Error fetching recipes:', error);
  //   }
  // }
    const fetchRecipesWfdt = async () => {
      try {
        console.log(wfdtUrl);
        const responseCluster = await axios.get(wfdtUrl); // Replace with your REST service URL
        console.log(responseCluster);
        setRecipes(responseCluster.data);
      
      
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
  
  };

  // Use useEffect to fetch recipes when the component mounts
  useEffect(() => {
    // fetchRecipes();
    fetchRecipesWfdt();
    // fetchRecipesLocal();
  }, []);


  // Function to select a random recipe
  const handleSelectRecipe = () => {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    setSelectedRecipe(randomRecipe);
    setShowDetails(false);
  };

  // Function to show recipe details
  const handleShowDetails = () => {
    setShowDetails(true);
  };

  return (
    // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <div>
      <Container maxWidth="sm">
        <Box sx={{ width: '100%' }} style={{ alignContent: "center" }} alignItems='center'>
          <Stack spacing={0.5} divider={<Divider orientation="vertical" flexItem />}>
            <ListItem>
              <RecipeButton onClick={handleSelectRecipe} />
            </ListItem>
          </Stack>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ width: '100%' }} style={{ alignContent: "center" }} alignItems='center'>
          <Stack spacing={0.5} divider={<Divider orientation="vertical" flexItem />}>
            <ListItem>
              <RecipeDisplay selectedRecipe={selectedRecipe} showDetails={showDetails} onShowDetails={handleShowDetails} />
            </ListItem>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default App;