import React from 'react';
import UserTable from '../components/UserTable';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="bg-white rounded-lg shadow">
        <UserTable />
      </div>
    </div>
  );
};

export default Home; 