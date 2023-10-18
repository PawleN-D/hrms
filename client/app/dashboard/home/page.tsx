// pages/dashboard.tsx
import React from 'react';
// import Navbar from '../components/Navbar';
// import InboxComponent from '../components/InboxComponent';
// import HolidayComponent from '../components/HolidayComponent';
// import LeaveComponent from '../components/LeaveComponent';
// import TodayComponent from '../components/TodayComponent';
import { employees } from '../../../Employees';
import HolidayComponent from '@/app/components/Holidays/Holidays';
import InboxComponent from '@/app/components/InboxComponent/InboxComponent';
import LeaveComponent from '@/app/components/OnLeave/OnLeaveComponent';
import TodayComponent from '@/app/components/Today/TodayComponent';

const Dashboard: React.FC = () => {
  const user = employees[0];
  return (  
    <div className="bg-gray-200 min-h-screen">
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="col-span-1">
            <InboxComponent messages={user.messages} />
            <br />
            <LeaveComponent leaveDays={user.leaveDays} />
            <br />
            <HolidayComponent holidays={["Holiday 1", "Holiday 2"]} />
          </div>
          <div className="col-span-1">
            <TodayComponent news={["News 1", "News 2"]} posts={["Post 1", "Post 2"]} />
          </div>
          <div className="col-span-1">
          </div>
          <div className="col-span-1">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
