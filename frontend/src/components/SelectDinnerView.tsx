import { useEffect, useState } from "react";
import axios from 'axios'; // Import axios for making API calls
import RecipeButton from "./RecipeButton";
import RecipeDisplay from "./RecipeDisplay";

const SelectDinnerView: React.FC = () => {
const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; ingredients: string[] } | null>(null);
const [showDetails, setShowDetails] = useState(false);
const [recipes, setRecipes] = useState<{ name: string; ingredients: string[] }[]>([]);
const [recipeSelectionView, setRecipeSelectionView] = useState(true);

const wfdtUrl = 'http://wfdt.com/recipes';

const fetchRecipes = async () => {
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
    fetchRecipes();
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
        <div className="p-4">
            <RecipeButton onClick={handleSelectRecipe} />
            <RecipeDisplay selectedRecipe={selectedRecipe} showDetails={showDetails} onShowDetails={handleShowDetails} />
        </div>
    );
}

export default SelectDinnerView;