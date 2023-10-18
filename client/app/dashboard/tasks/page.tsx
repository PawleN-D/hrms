// pages/tasks.tsx
import React from 'react';
// import { user } from '../userData';
import { employees } from '../../../Employees';

const TasksPage: React.FC = () => {
  const user = employees[0];

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 p-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Tasks</h1>
        <div className="space-y-4">
          {user.tasks.map((task) => (
            <div key={task.id} className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-gray-500">{task.description}</p>
              <p className="text-gray-400">Status: {task.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
