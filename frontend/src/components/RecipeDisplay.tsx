import { Box, Button, Stack, ListItem } from '@mui/material';
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
    <div style={{ textAlign: 'center' }}>

      <Box sx={{ width: '100%' }} style={{ alignContent: "center" }} alignItems='left'>
        <Stack direction="column" spacing={2}>
          <ListItem>
            {!showDetails && (
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button variant="outlined" onClick={onShowDetails}>
                {selectedRecipe.name} 
                </Button>
              </div>
            )}
            {showDetails && (
              <table style={{ margin: 'auto', textAlign: 'center', border: '0px solid grey', borderCollapse: 'collapse' }}>
                <thead style={{ border: '1px solid grey', textAlign: 'left' }}>
                  <tr><th>{selectedRecipe.name} </th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: '0px solid grey', textAlign: 'left' }}>
                      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {selectedRecipeDetails.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </ListItem>
        </Stack>
      </Box>
    </div>
  );
};

export default RecipeDisplay;