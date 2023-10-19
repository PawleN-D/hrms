"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import InteractiveButtons from './InteractiveButtons'; 

const InteractiveButtons = dynamic(() => import('../../components/Tasks/InteractiveButtons'), {
  ssr: false,
});

interface Task {
  id: number;
  title: string;
  description: string;
}

const TaskList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All Tasks'); // Initialize the activeTab state

  const allTasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
    // Add more tasks as needed
  ];

  const myTasks:Task[] =  [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  ]

  return (
    <div className="bg-opacity-40 p-4 rounded-md backdrop-brightness-50 shadow h-full">
      <div className="mb-8 border-b-4 border-white">
        <InteractiveButtons
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="My Tasks"
        />
        <InteractiveButtons
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="All Tasks"
        />
        <InteractiveButtons
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="Create a Task"
        />
      </div>
      {activeTab === 'My Tasks' && (
        <div>
          <h3>My Tasks</h3>
          <ul>
            {myTasks.map((task) => (
              <li key={task.id}>
                <h4 className='text-white'>{task.title}</h4>
                <p className='text-white'>{task.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'All Tasks' && (
        <div>
          <h3 className='text-white'>All Tasks</h3>
          <ul>
            {allTasks.map((task) => (
              <li key={task.id}>
                <h4 className='text-white'>{task.title}</h4>
                <p className='text-white'>{task.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'Create a Task' && (
        <div>
          <h3 className='text-white'>Create a Task</h3>
          {/* Render your task creation form here */}
        </div>
      )}
    </div>
  );
};

export default TaskList;
