// "use client"

// components/RecipeDisplay.tsx
import React, { useState } from 'react';

interface RecipeDisplayProps {
  selectedRecipe: { name: string; details: string } | null;
  showDetails: boolean;
  onShowDetails: () => void;
}



const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ selectedRecipe, showDetails, onShowDetails }) => {


  if (!selectedRecipe) return null;

  const [selectedRecipeDetails, setState] = useState(selectedRecipe.details.split(','));

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h2>{selectedRecipe.name}</h2>
      {!showDetails && (
        <button onClick={onShowDetails} style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}>
          Great!
        </button>
      )}
      {showDetails && <p>{selectedRecipe.details}</p>}

      <table>
        <tr><th></th></tr>

        <tbody>
       {showDetails &&  selectedRecipe.details.split(',').map((item, index) => (
        <tr key={index}>
        <td >{item}</td>
        </tr>

       ))}
       </tbody>
      </table>
    </div>
  );
};

export default RecipeDisplay;
