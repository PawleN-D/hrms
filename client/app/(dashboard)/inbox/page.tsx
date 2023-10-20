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
  const initialInboxMessages: Message[] = [
    { id: 1, subject: 'Message 1', content: 'This is message 1 content.' },
    { id: 2, subject: 'Message 2', content: 'This is message 2 content.' },
  ];

  const initialLeaveRequests: LeaveRequest[] = [
    { id: 1, title: 'Leave Request 1', reason: 'Vacation' },
    { id: 2, title: 'Leave Request 2', reason: 'Sick leave' },
  ];
  return (
    <div className="bg-opacity-30 min-h-screen p-4">
      <InboxPageComponent initialInboxMessages={initialInboxMessages} initialLeaveRequests={initialLeaveRequests} />
    </div>
  );
};

export default InboxPage;
