import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Actions</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => navigate('/admin/addRecipe')}
        >
          Add
        </button>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded"
          onClick={() => navigate('/admin/deleteRecipe')}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => navigate('/admin/updateRecipe')}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AdminActions;