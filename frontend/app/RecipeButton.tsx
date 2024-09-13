// "use client"
// components/RecipeButton.tsx
import React from 'react';

interface RecipeButtonProps {
  onClick: () => void;
}

const RecipeButton: React.FC<RecipeButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
      What's for dinner tonight?
    </button>
  );
};

export default RecipeButton;
