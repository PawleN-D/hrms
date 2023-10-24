
import React from 'react';
import { employees } from '../../../Employees';
import DateTimeDisplay from '@/components/DateCard/DateDisplay';
import CircularImageWithText from '@/components/GeneralComponent/CardComponent';
import HolidayComponent from '@/components/Holidays/Holidays';
import InboxComponent from '@/components/InboxComponent/InboxComponent';
import LeaveBalance from '@/components/LeaveBalance/LeaveBalance';
import LeaveComponent from '@/components/OnLeave/OnLeaveComponent';
import TodayComponent from '@/components/Today/TodayComponent';;

const Dashboard: React.FC = () => {
  const user = employees[0];
  return (  
    <div className="bg-opacity-30 min-h-screen">
      <div className="mx-auto p-4 sm:px-6 lg:px-8">
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
            <br />
            <CircularImageWithText heading={'Working Remotely'} subheading={'Everyone is at office'} message={'Nobody Remote today'} />
          </div>
          <div className="col-span-1">
            <LeaveBalance />
          </div>
          <div className="col-span-1">
            <DateTimeDisplay />
            <br />
            <CircularImageWithText heading={'On Leave'} subheading={'Everyone is at office'} message={'Nobody is on leave today'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
