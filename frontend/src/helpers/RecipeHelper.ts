import axios from 'axios';

const wfdtUrl = 'http://wfdt.com/recipes';

export const fetchRecipesWithIngredient = async (setRecipes: (recipes: any) => void, ingredientFilter: string) => {
    try {
        const wfdtUrlWithIngredient = wfdtUrl + "/" + ingredientFilter;
        const responseCluster = await axios.get(wfdtUrlWithIngredient); // Replace with your REST service URL
        setRecipes(responseCluster.data);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};

export const fetchRecipes = async (setRecipes: (recipes: any) => void ) => {
    try {
      console.log(wfdtUrl);
      const responseCluster = await axios.get(wfdtUrl); // Replace with your REST service URL
      console.log(responseCluster);
      setRecipes(responseCluster.data);

    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

 