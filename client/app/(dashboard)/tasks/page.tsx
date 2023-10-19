import TaskList from '@/app/components/Tasks/TasksComponent'
import React from 'react'

const Task = () => {
  return (
    <div className='bg-opacity-30 min-h-screen py-6'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <TaskList />
      </div>
    </div>
  )
}

export default Task