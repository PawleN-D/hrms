// src/components/LeaveComponent.tsx
import React from 'react';

interface LeaveProps {
  leaveDays: number;
}

const LeaveComponent: React.FC<LeaveProps> = ({ leaveDays }) => {
  return (
    <div className="bg-opacity-40 p-4 rounded-md backdrop-brightness-50 shadow h-32">
      <h2 className="text-xl text-white font-semibold mb-4">Leave Days</h2>
      <p className='text-white'>You have {leaveDays} leave days remaining.</p>
    </div>
  );
};

export default LeaveComponent;
