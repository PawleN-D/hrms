import React from 'react'
import { employees } from '../../../Employees';
import Image from 'next/image';
import person from '../../../public/profile.png';

const ProfileComponent = () => {
    const user = employees[0];
  return (
    <div className="backdrop-brightness-50 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-lg font-medium text-white">{user.firstName} {user.lastName}</div>
                <div className="mt-2 text-sm text-white">{user.position} at {user.company}</div>
                <div className="mt-2 text-sm text-white">Department: {user.department}</div>
              </div>
              <div className="ml-6 relative">
                <Image
                  src={person}
                  alt={`${user.firstName} ${user.lastName}'s profile picture`}
                  className="h-40 w-40 rounded-full"
                />
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-white">Bio</h2>
              <p className="mt-2 text-sm text-white">{user.bio}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-white">Contact Information</h2>
              <ul className="mt-2 text-sm text-white">
                <li>Email: {user.email}</li>
                <li>Twitter: {user.twitterHandle}</li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default ProfileComponent