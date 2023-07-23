'use client'
import React, { useEffect } from 'react'
import UserHeader from './Components/UserHeader'
import General from './Components/General'
import Groups from './Components/Groups'
import BottomSettings from './Components/BottomSettings/BottomSettings'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserProvider, isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { authUserSignOut } from '@/app/utils/AuthUserSignOut/authUserSignOut'

const UserPanel = () => {
  const dispatch = useAppDispatch()
  const userProvider:Providers = useAppSelector(state => getUserProvider(state))
  const handleAppLogOut = () => authUserSignOut({userProvider, dispatch})
  const user = useAppSelector(state => isUserAuthenticated(state))
  useEffect(() => {
    console.log(user)
  },[user])
  return (
    <div className='bg-[#0D0F10] h-screen min-w-[280px] w-[280px] flex flex-col gap-y-5 justify-between rounded-lg py-8 px-6 min-h-[681px]'>
      <div className='flex-wrapper flex flex-col'>
        <button className='text-white text-[12px]' onClick={() => handleAppLogOut()}>Log out</button>
        <UserHeader/>
        <General/>
        <Groups/>        
      </div>
      <BottomSettings/>
    </div>
  )
}

export default UserPanel
