"use client"

import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import SelectDinnerView from './components/SelectDinnerView';
import Menu from './components/Menu';



const App: React.FC = () => {
  return (
    // Add the Routes component
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<SelectDinnerView />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;