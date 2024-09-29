// "use client"
// components/RecipeButton.tsx
import React from 'react';

interface RecipeButtonProps {
  onClick: () => void;
  onIngredientInput: (ingredient:string) => void;
}


const RecipeButton: React.FC<RecipeButtonProps> = ({ onClick, onIngredientInput }) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onIngredientInput(event.target.value);
  };

  return (
    
    <div style={{ textAlign: 'center' }}>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    onClick={onClick} >
      What's for dinner tonight?
    </button>
    <br></br> 
    what do you have in your fridge?
    <input className='bg-transparent text-blue-700 border border-blue-500 rounded'
    onChange={handleInputChange}
    ></input>
    </div>
  );
};

export default RecipeButton;
