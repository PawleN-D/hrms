import ProfileComponent from '@/app/components/Profile/Profile';
import React from 'react'


const Profile: React.FC = () => {

  return (
    <div className="bg-opacity-30 min-h-screen py-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Profile;

