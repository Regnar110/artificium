import React from 'react'
import UserHeader from './Components/UserHeader'
import General from './Components/General'
import Groups from './Components/Groups'

const UserPanel = () => {
  return (
    <div className='bg-[#0D0F10] h-screen min-w-[200px] w-[300px] flex flex-col rounded-lg py-8 px-6 min-h-[681px]'>
      <UserHeader/>
      <General/>
      <Groups/>
    </div>
  )
}

export default UserPanel
