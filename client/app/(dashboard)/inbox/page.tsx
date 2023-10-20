// pages/dashboard.tsx
import React from 'react';
import { employees } from '../../../Employees';
import InboxComponent from '@/app/components/InboxComponent/InboxComponent';
import TabbedComponent from '@/app/components/TabsComponent';
import InboxPageComponent from '@/app/components/InboxPageComponent/InboxPageComponent';
interface Message {
  id: number;
  subject: string;
  content: string;
}

interface LeaveRequest {
  id: number;
  title: string;
  reason: string;
}

const InboxPage: React.FC = () => {

  return (
    <div className="bg-opacity-30 min-h-screen p-4">
      <InboxPageComponent  />
    </div>
  );
};

export default InboxPage;
