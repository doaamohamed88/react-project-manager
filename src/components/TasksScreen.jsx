import React from 'react'
import Sidebar from './Sidebar'
import NoProjects from './NoProjects'
import { Outlet } from 'react-router-dom'

export default function TasksScreen() {
    
  return (
    <div className='w-full flex  '>
        <Sidebar></Sidebar>
        <Outlet/>
    </div>
  )
}
