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
    <div>

      {!showDetails && (
        <div className="flex items-center p-2 justify-center" >
          <button className="items-center text-center"
          onClick={onShowDetails}>{selectedRecipe.name} </button>
        </div>
      )}
      {showDetails && (
        <div className="p-2 flex items-center text-center justify-center">
          <table >
            <thead >
              <tr><th>{selectedRecipe.name} </th></tr>
            </thead>
            <tbody>
              <tr>
                <td >
                  <ul>
                    {selectedRecipeDetails.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecipeDisplay;