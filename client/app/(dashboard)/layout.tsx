import Sidebar from '@/components/Sidebar'
import React, { Children } from 'react'


function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar sidebarOpen={false} setSidebarOpen={function (arg: boolean): void {
        throw new Error('Function not implemented.')
      } } />
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

export default Layout