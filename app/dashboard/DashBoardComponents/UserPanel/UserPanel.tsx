import React from 'react'
import UserHeader from './Components/UserHeader'
import General from './Components/General'
import Groups from './Components/Groups'
import BottomSettings from './Components/BottomSettings/BottomSettings'

const UserPanel = () => {
  return (
    <div className='bg-[#0D0F10] h-screen min-w-[200px] w-[300px] flex flex-col justify-between rounded-lg py-8 px-6 min-h-[681px]'>
      <div className='flex-wrapper flex flex-col'>
        <UserHeader/>
        <General/>
        <Groups/>        
      </div>
      <BottomSettings/>
    </div>
  )
}

export default UserPanel
