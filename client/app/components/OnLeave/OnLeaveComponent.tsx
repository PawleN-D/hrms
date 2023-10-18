// src/components/LeaveComponent.tsx
import React from 'react';

interface LeaveProps {
  leaveDays: number;
}

const LeaveComponent: React.FC<LeaveProps> = ({ leaveDays }) => {
  return (
    <div className="bg-opacity-40 p-4 rounded-md backdrop-blur-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Leave Days</h2>
      <p>You have {leaveDays} leave days remaining.</p>
    </div>
  );
};

export default LeaveComponent;
