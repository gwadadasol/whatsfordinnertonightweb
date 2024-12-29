"use client"

import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import SelectDinnerView from './components/SelectDinnerView';
import Menu from './components/Menu';
import AdminAddRecipe from './components/AdminAddRecipe';

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<SelectDinnerView />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/addRecipe" element={<AdminAddRecipe />} />
        {/* Placeholder routes for Delete and Update actions */}
        <Route path="/admin/deleteRecipe" element={<div>Delete Recipe</div>} />
        <Route path="/admin/updateRecipe" element={<div>Update Recipe</div>} />
      </Routes>
    </div>
  );
};

export default App;