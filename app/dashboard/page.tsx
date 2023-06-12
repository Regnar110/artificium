import React from 'react'
import UserPanel from './DashBoardComponents/UserPanel/UserPanel'

const Dashboard = () => {
  return (
    <main className='dashboard box-border text-black bg-[#131619] w-full h-[2000px] p-5'>
        <UserPanel/>
    </main>
  )
}

export default Dashboard
