import React, { Children } from 'react'
import Navbar from '../components/Header'
import Sidebar from '../components/Sidebar'

function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout