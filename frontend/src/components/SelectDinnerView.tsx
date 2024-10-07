import { useEffect, useState } from "react";
import axios from 'axios'; // Import axios for making API calls
import RecipeButton from "./RecipeButton";
import RecipeDisplay from "./RecipeDisplay";
import { Recoverable } from "repl";
import { fetchRecipes, fetchRecipesWithIngredient } from "../helpers/RecipeHelper";

const SelectDinnerView: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; ingredients: string[] } | null>(null);
  const [showDetails, setShowDetails] = useState(true);
  const [recipes, setRecipes] = useState<{ name: string; ingredients: string[] }[]>([]);
  const [recipeSelectionView, setRecipeSelectionView] = useState(true);
  const [ingredientFiler, setIngredientFilter] = useState("");

  

  // Use useEffect to fetch recipes when the component mounts
  useEffect(() => {
    fetchRecipes( setRecipes);
  }, []);

  // Function to select a random recipe
  const handleSelectRecipe = () => {
    console.log(ingredientFiler);
    if (ingredientFiler === "") 
    {
      fetchRecipes( setRecipes);
    }
    else 
    {
      fetchRecipesWithIngredient( setRecipes, ingredientFiler);
    }
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    setSelectedRecipe(randomRecipe);
}

    // Function to show recipe details
    const handleShowDetails = () => { setShowDetails(true); };

    const handleIngredientFilter = (ingredient: string) => { setIngredientFilter(ingredient);}

    return (
      <div className="p-4">
        <RecipeButton onClick={handleSelectRecipe} onIngredientInput={handleIngredientFilter} />
        <RecipeDisplay selectedRecipe={selectedRecipe} showDetails={showDetails} onShowDetails={handleShowDetails} />
      </div>
    );
  }

  export default SelectDinnerView;