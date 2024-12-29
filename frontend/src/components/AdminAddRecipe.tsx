import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Ingredient {
  id: number;
  name: string;
}

const AdminAddRecipe: React.FC = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [newIngredient, setNewIngredient] = useState('');

  useEffect(() => {
    // Fetch ingredients from the backend
    axios.get('/api/ingredients')
      .then(response => setIngredients(response.data))
      .catch(error => console.error('Error fetching ingredients:', error));
  }, []);

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== '') {
      const newIng = { id: Date.now(), name: newIngredient };
      setSelectedIngredients([...selectedIngredients, newIng]);
      setNewIngredient('');
    }
  };

  const handleDeleteIngredient = (id: number) => {
    setSelectedIngredients(selectedIngredients.filter(ingredient => ingredient.id !== id));
  };

  const handleAddRecipe = () => {
    const recipe = { name: recipeName, ingredients: selectedIngredients.map(ing => ing.name) };
    axios.post('/api/recipes', recipe)
      .then(response => {
        console.log('Recipe added:', response.data);
        setRecipeName('');
        setSelectedIngredients([]);
      })
      .catch(error => console.error('Error adding recipe:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Recipe Name</label>
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={recipeName}
          onChange={e => setRecipeName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ingredients</label>
        <select
          className="border rounded w-full py-2 px-3 mb-2"
          onChange={e => {
            const selected = ingredients.find(ing => ing.id === parseInt(e.target.value));
            if (selected && !selectedIngredients.includes(selected)) {
              setSelectedIngredients([...selectedIngredients, selected]);
            }
          }}
        >
          <option value="">Select an ingredient</option>
          {ingredients.map(ingredient => (
            <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
          ))}
        </select>
        <input
          type="text"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Add new ingredient"
          value={newIngredient}
          onChange={e => setNewIngredient(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleAddIngredient}
        >
          Add Ingredient
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Ingredient</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedIngredients.map(ingredient => (
            <tr key={ingredient.id}>
              <td className="py-2 px-4 border-b">{ingredient.name}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => handleDeleteIngredient(ingredient.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
        onClick={handleAddRecipe}
      >
        Add Recipe
      </button>
    </div>
  );
};

export default AdminAddRecipe;