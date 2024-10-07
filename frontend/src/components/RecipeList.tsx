import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../helpers/RecipeHelper';

const RecipeList: React.FC = () => {
    // const [selectedRecipe, setSelectedRecipe] = useState<{ name: string; ingredients: string[] } | null>(null);
    // const [showDetails, setShowDetails] = useState(true);
    const [recipes, setRecipes] = useState<{ name: string; ingredients: string[] }[]>([]);
    // const [recipeSelectionView, setRecipeSelectionView] = useState(true);
    // const [ingredientFiler, setIngredientFilter] = useState("");

    useEffect(() => {
        fetchRecipes(setRecipes);
    }, []);

    return (
        <div>
            <table className="table-fixed">
            <thead>
                <tr>
                <th>Recipes</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((item, index) => (
                <tr key={index} className="hover:bg-yellow-200 cursor-pointer">
                    <td>{item.name}</td>
                </tr>
                ))}
                <tr className="hover:bg-yellow-200">
                <td>Witchy Woman</td>
                </tr>
                <tr className="hover:bg-yellow-200">
                <td>Shining Star</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default RecipeList;