// pages/dashboard.tsx
import InboxPageComponent from '@/components/InboxPageComponent/InboxPageComponent';
import React from 'react';

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
