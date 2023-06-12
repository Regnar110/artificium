import React from 'react'
import UserHeader from './Components/UserHeader'
import General from './Components/General'

const UserPanel = () => {
  return (
    <div className='bg-[#0D0F10] h-full min-w-[300px] max-w-[400px] flex flex-col rounded-lg px-3 py-8'>
      <UserHeader/>
      <General/>
    </div>
  )
}

export default UserPanel
