import React from 'react'
import UserWithStatus from '../UserWithStatus/UserWithStatus'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
const CurrentlyOnline = () => {
  return (
    <div id='currently_online' className='flex flex-col gap-4'>
        <h3 className='list_header text-[12px] xl:text-[14px] text-[#9B9C9E]'>Currently Offline</h3>
        <div id='online_list' className='flex flex-col gap-3'>
            <UserWithStatus status='OFFLINE' user_avatar={user_avatar} user_nickname='Mateusz Wryczaa'/>
            <UserWithStatus status='OFFLINE' user_avatar={user_avatar} user_nickname='Mateusz Wryczaa'/>
            <UserWithStatus status='OFFLINE' user_avatar={user_avatar} user_nickname='Mateusz Wryczaa'/>
            <UserWithStatus status='OFFLINE' user_avatar={user_avatar} user_nickname='Mateusz Wryczaa'/>
            <UserWithStatus status='OFFLINE' user_avatar={user_avatar} user_nickname='Mateusz Wryczaa'/>
        </div>
    </div>
  )
}

export default CurrentlyOnline
