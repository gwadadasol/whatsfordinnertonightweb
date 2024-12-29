// "use client"
// components/RecipeButton.tsx
import React from 'react';

interface RecipeButtonProps {
  onClick: () => void;
  onIngredientInput: (ingredient: string) => void;
}


const RecipeButton: React.FC<RecipeButtonProps> = ({ onClick, onIngredientInput }) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onIngredientInput(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <button type="button" className="text-white 
      bg-blue-700 
      hover:bg-blue-800 
      focus:ring-4 
      focus:ring-blue-300 
      focus:outline-none 
      font-medium 
      rounded-lg 
      text-sm 
      px-5 
      py-2.5 
      me-2 
      mb-2 
      dark:bg-blue-600 
      dark:hover:bg-blue-700 
      dark:focus:ring-blue-800" onClick={onClick} >What's for dinner tonight?</button>



      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" 
        className="block 
        py-2.5 
        px-0 
        w-full 
        text-sm 
        text-gray-900 
        bg-transparent 
        border-0 
        border-b-2 
        border-gray-300 
        appearance-none 
        dark:text-white 
        dark:border-gray-600 
        dark:focus:border-blue-500 
        focus:outline-none 
        focus:ring-0 
        focus:border-blue-600 
        peer" placeholder=" " required onChange={handleInputChange}/>

        <label 
        className="peer-focus:font-medium 
        absolute 
        text-sm 
        text-gray-500 
        dark:text-gray-400 
        duration-300 
        transform
        -translate-y-6 
        scale-75 
        top-3 -z-10 
        origin-[0] 
        peer-focus:start-0 
        rtl:peer-focus:translate-x-1/4 
        peer-focus:text-blue-600 
        peer-focus:dark:text-blue-500 
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 
        peer-focus:-translate-y-6">Any preferred Ingredient?</label>
      </div>
    </div>
  );
};

export default RecipeButton;
