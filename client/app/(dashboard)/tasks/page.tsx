// pages/tasks.tsx
import React from 'react';
// import { user } from '../userData';
import { employees } from '../../../Employees';

const TasksPage: React.FC = () => {
  const user = employees[0];

  return (
    <div className="bg-opacity-30 min-h-screen p-4">
      <div className="backdrop-blur-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 p-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-white font-semibold mb-4">Tasks</h1>
        <div className="space-y-4">
          {user.tasks.map((task) => (
            <div key={task.id} className="backdrop-blur-lg p-4 rounded-lg shadow-lg">
              <h2 className="text-lg text-white font-semibold">{task.title}</h2>
              <p className="text-gray-900">{task.description}</p>
              <p className="text-gray-900">Status: {task.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
