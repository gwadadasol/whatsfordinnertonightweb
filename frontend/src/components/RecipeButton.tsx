// "use client"
// components/RecipeButton.tsx
import { Button } from '@mui/material';
import React from 'react';

interface RecipeButtonProps {
  onClick: () => void;
}

const RecipeButton: React.FC<RecipeButtonProps> = ({ onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} >
      What's for dinner tonight?
    </Button>
  );
};

export default RecipeButton;
