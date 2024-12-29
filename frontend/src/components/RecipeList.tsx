import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchRecipes } from '../helpers/RecipeHelper';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {

    fetchRecipes(setRecipes);
    // axios.get('/api/recipes')
    //   .then(response => setRecipes(response.data))
    //   .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
      <ul className="list-disc pl-5">
        {recipes.map(recipe => (
          <li
            key={recipe.id}
            className="cursor-pointer hover:bg-gray-200 p-2"
            onClick={() => setSelectedRecipe(recipe)}
          >
            {recipe.name}
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{selectedRecipe.name}</h2>
          <ul className="list-disc pl-5">
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeList;