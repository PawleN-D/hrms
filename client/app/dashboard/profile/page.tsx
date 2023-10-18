import React from 'react'
import { employees } from '../../../Employees';

const Profile: React.FC = () => {
  const user = employees[0];

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-lg font-medium text-gray-900">{user.firstName} {user.lastName}</div>
                <div className="mt-2 text-sm text-gray-500">{user.position} at {user.company}</div>
                <div className="mt-2 text-sm text-gray-500">Department: {user.department}</div>
              </div>
              <div className="ml-6 relative">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.employeeImage}
                  alt={`${user.firstName} ${user.lastName}'s profile picture`}
                />
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Bio</h2>
              <p className="mt-2 text-sm text-gray-500">{user.bio}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
              <ul className="mt-2 text-sm text-gray-500">
                <li>Email: {user.email}</li>
                <li>Twitter: {user.twitterHandle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

