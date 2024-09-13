"use client"
// import Image from "next/image";

import React, { useState } from 'react';
import RecipeButton from './RecipeButton';
import RecipeDisplay from './RecipeDisplay';

// Sample list of recipes
const recipes = [
  { name: 'Spaghetti Bolognese', details: 'Ingredients: Spaghetti, ground beef, tomato sauce, garlic, onion.' },
  { name: 'Chicken Curry', details: 'Ingredients: Chicken, curry powder, coconut milk, onions, garlic.' },
  { name: 'Grilled Salmon', details: 'Ingredients: Salmon, lemon, garlic, herbs.' },
  { name: 'Veggie Stir-Fry', details: 'Ingredients: Mixed vegetables, soy sauce, ginger, garlic.' },
  { name: 'Tacos', details: 'Ingredients: Tortillas, ground beef, lettuce, cheese, tomatoes.' },
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
      <RecipeButton onClick={handleSelectRecipe} />
      <RecipeDisplay selectedRecipe={selectedRecipe} showDetails={showDetails} onShowDetails={handleShowDetails} />
    </div>
  );
};

export default App;