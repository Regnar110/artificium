'use client'
import React, { useEffect, useState } from 'react'
import UserHeader from './Components/UserHeader'
import General from './Components/General'
import Groups from './Components/Groups'
import BottomSettings from './Components/BottomSettings/BottomSettings'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserProvider, isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { authUserSignOut } from '@/app/utils/AuthUserSignOut/authUserSignOut'
import Image from 'next/image'
import slide_to from '../../../../public/buttons/slider_buttons/slide_right.svg'
const UserPanel = () => {
  const dispatch = useAppDispatch()
  const userProvider:Providers = useAppSelector(state => getUserProvider(state))
  const handleAppLogOut = () => authUserSignOut({userProvider, dispatch})
  const user = useAppSelector(state => isUserAuthenticated(state))

  // const [visible, setVisible] = useState<boolean>(true)
  useEffect(() => {
    console.log(user)
  },[user])

  // const handleShowAndHidePanel = (e) => {
  //   setVisible(!visible)

  // }

  return (
    <div className={`bg-[#0D0F10] min-w-[280px] w-[280px] relative h-screen flex flex-col gap-y-5 justify-between rounded-lg py-8 px-6 min-h-[681px]`}>
      <div className='flex-wrapper flex flex-col'>
        <button className='text-white text-[12px]' onClick={() => handleAppLogOut()}>Log out</button>
        <UserHeader/>
        <General/>
        <Groups/>        
      </div>
      <BottomSettings/>
      {/* <div onClick={e => handleShowAndHidePanel(e)} className='absolute_slider absolute cursor-pointer top-[50%] w-[30px] h-[70px] -right-4 flex justify-center items-center bg-[#000000b9] px-2 rounded-lg'>
        <Image src={slide_to} alt={"slide_panel"}/>
      </div> */}
    </div>
  )
}

export default UserPanel
