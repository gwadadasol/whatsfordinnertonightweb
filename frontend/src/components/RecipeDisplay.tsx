// "use client"

// components/RecipeDisplay.tsx
import { Box, Button, Stack, ListItem } from '@mui/material';
import React from 'react';

interface RecipeDisplayProps {
  selectedRecipe: { name: string; details: string } | null;
  showDetails: boolean;
  onShowDetails: () => void;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ selectedRecipe, showDetails, onShowDetails }) => {


  if (selectedRecipe == null) return null;
  const selectedRecipeDetails: string[] = selectedRecipe.details.split(',');


  return (
    <div style={{ textAlign: 'center' }}>
      <Box>
        <Stack direction="column" spacing={2}>
          <ListItem>
            <h2>{selectedRecipe.name}</h2>
          </ListItem>
          <ListItem>
            {!showDetails && (
              <Button onClick={onShowDetails} >
                Great!
              </Button>
            )}
            <table>
              <tr><th></th></tr>

              <tbody>
                {showDetails && selectedRecipeDetails.map((item, index) => (
                  <tr key={index}>
                    <td >{item}</td>
                  </tr>

                ))}
              </tbody>
            </table>

          </ListItem>
        </Stack>
      </Box>
    </div>
  );
};

export default RecipeDisplay;
