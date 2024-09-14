"use client"
// import Image from "next/image";

import React, { useState } from 'react';
import RecipeButton from './components/RecipeButton';
import RecipeDisplay from './components/RecipeDisplay';
import { Grid2, ListItem } from '@mui/material';

// Sample list of recipes
const recipes = [
  { name: 'Spaghetti Bolognese', details: 'Spaghetti, ground beef, tomato sauce, garlic, onion.' },
  { name: 'Chicken Curry', details: 'Chicken, curry powder, coconut milk, onions, garlic.' },
  { name: 'Grilled Salmon', details: 'Salmon, lemon, garlic, herbs.' },
  { name: 'Veggie Stir-Fry', details: 'Mixed vegetables, soy sauce, ginger, garlic.' },
  { name: 'Tacos', details: 'Tortillas, ground beef, lettuce, cheese, tomatoes.' },
];

const App: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; details: string } | null>(null);
  const [showDetails, setShowDetails] = useState(false);

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <Grid2 spacing={0.5}>
      <ListItem>
      <RecipeButton onClick={handleSelectRecipe} />
      </ListItem>
      <ListItem>
      <RecipeDisplay selectedRecipe={selectedRecipe} showDetails={showDetails} onShowDetails={handleShowDetails} />
      </ListItem>
      </Grid2>
    </div>
  );
};

export default App;