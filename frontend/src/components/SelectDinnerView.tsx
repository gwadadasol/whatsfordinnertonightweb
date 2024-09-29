import { useEffect, useState } from "react";
import axios from 'axios'; // Import axios for making API calls
import RecipeButton from "./RecipeButton";
import RecipeDisplay from "./RecipeDisplay";
import { Recoverable } from "repl";

const SelectDinnerView: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; ingredients: string[] } | null>(null);
  const [showDetails, setShowDetails] = useState(true);
  const [recipes, setRecipes] = useState<{ name: string; ingredients: string[] }[]>([]);
  const [recipeSelectionView, setRecipeSelectionView] = useState(true);
  const [ingredientFiler, setIngredientFilter] = useState("");

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
    console.log(ingredientFiler);
    if (ingredientFiler === "") {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      setSelectedRecipe(randomRecipe);
      // setShowDetails(false);
    }
    else {
      // const filteredRecipes = recipes.filter((recipe) => { return recipe.ingredients.map((ingredient) => {return ingredient.toLowerCase()}).includes(ingredientFiler.toLocaleLowerCase()) });
      const filteredRecipes = recipes.filter((recipe) => 
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(ingredientFiler.toLocaleLowerCase())));
        
      const randomRecipe = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
      setSelectedRecipe(randomRecipe);
      // setShowDetails(false);
    }
  }

    // Function to show recipe details
    const handleShowDetails = () => {
      setShowDetails(true);
    };

    const handleIngredientFilter = (ingredient: string) => {
      console.log(ingredient);
      setIngredientFilter(ingredient);
    }

    return (
      <div className="p-4">
        <RecipeButton onClick={handleSelectRecipe} onIngredientInput={handleIngredientFilter} />
        <RecipeDisplay selectedRecipe={selectedRecipe} showDetails={showDetails} onShowDetails={handleShowDetails} />
      </div>
    );
  }

  export default SelectDinnerView;