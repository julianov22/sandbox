import React from 'react';

const UserTable = () => {
  const users = [
    {
      id: 1,
      fullName: 'John Smith',
      profilePic: 'https://example.com/profile1.jpg',
      createdAt: '2024-02-28',
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      profilePic: 'https://example.com/profile2.jpg',
      createdAt: '2024-02-27',
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="user-table-container">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Profile
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created At
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={user.profilePic}
                  alt={`${user.fullName}'s profile`}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable; 