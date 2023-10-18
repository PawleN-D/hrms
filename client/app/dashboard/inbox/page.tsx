// pages/dashboard.tsx
import React from 'react';
import { employees } from '../../../Employees';
import InboxComponent from '@/app/components/InboxComponent/InboxComponent';
import TabbedComponent from '@/app/components/TabsComponent';

const InboxPage: React.FC = () => {
  const user = employees[0];
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center bg-gray-100 py-2 sm:py-12">
      <TabbedComponent />
    </div>
  );
};

export default InboxPage;
