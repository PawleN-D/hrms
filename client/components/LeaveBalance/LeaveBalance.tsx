import React from 'react';

function LeaveBalance() {
  return (
    <div className="bg-opacity-40 p-4 rounded-md backdrop-brightness-50 shadow flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl text-white font-bold">Leave Balance</h1>
        <div className="space-x-4">
          <a href="#" className="text-blue-500 hover:underline text-xl font-medium">View all leaves</a>
          <br />
          <a href="#" className="text-blue-500 hover:underline text-xl font-medium mt-2">Apply Now</a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-8">
        <div className="flex flex-col items-center justify-center border-2 border-orange-500 rounded-full h-32 w-32 p-4 shadow-lg">
          <p className="text-6xl text-orange-500 font-bold mb-1">7</p>
          <p className="text-sm text-white font-medium">Sick Leave</p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-orange-500 rounded-full h-32 w-32 p-4 shadow-lg">
          <p className="text-6xl text-orange-500 font-bold mb-1">12</p>
          <p className="text-sm text-white font-medium">Paid Leave</p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-orange-500 rounded-full h-32 w-32 p-4 shadow-lg">
          <p className="text-6xl text-orange-500 font-bold mb-1">10</p>
          <p className="text-xs text-white font-medium">Marriage Leave</p>
        </div>
      </div>
    </div>
  );
}

export default LeaveBalance;
