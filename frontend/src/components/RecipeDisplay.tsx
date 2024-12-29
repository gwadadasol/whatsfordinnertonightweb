import React from 'react';

interface RecipeDisplayProps {
  selectedRecipe: { name: string; ingredients: string[] } | null;
  showDetails: boolean;
  onShowDetails: () => void;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ selectedRecipe, showDetails, onShowDetails }) => {
  if (selectedRecipe == null) return null;
  const selectedRecipeDetails: string[] = selectedRecipe.ingredients;

  return (
    <div className="block text-lg">
       {showDetails && (
        <div className="mt-4">
          <h2 className="text-1xl font-bold mb-2">{selectedRecipe.name}</h2>
          <div className="flex flex-col items-start">
            <ul className="list-disc pl-5 mb-4">
              {selectedRecipeDetails.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDisplay;