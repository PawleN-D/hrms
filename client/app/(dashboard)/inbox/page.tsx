// pages/dashboard.tsx
import React from 'react';
import { employees } from '../../../Employees';
import InboxComponent from '@/app/components/InboxComponent/InboxComponent';
import TabbedComponent from '@/app/components/TabsComponent';

const InboxPage: React.FC = () => {
  const user = employees[0];
  return (
    <div className="bg-opacity-30 min-h-screen p-4">
      <TabbedComponent />
    </div>
  );
};

export default InboxPage;
