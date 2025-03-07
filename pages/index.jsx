import React, { useState } from 'react';
import UserTable from '../components/UserTable';

const Home = () => {
  const [selected, setSelected] = useState('Option 1');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter Users
        </label>
        <div className="relative w-64">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <UserTable />
      </div>
    </div>
  );
};

export default Home; 