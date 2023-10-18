import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import settings_wheel from '../../../../public/controller/settings_wheel.svg'
import logout from '../../../../public/controller/logout.svg'
import UserHeader from '../../DashBoardComponents/UserPanel/Components/UserHeader'
import { turnOnNotification } from '@/app/AppComponents/ToastNotifications/TurnOnNotification'
import { authUserSignOut } from '@/app/utils/AuthUserSignOut/authUserSignOut'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserObject } from '@/redux/slices/userSession/userSessionSlice'
import { getChat } from '@/redux/slices/chattingWindows/chattingWindowsSlice'
import { useRouter } from 'next/navigation'
const ControllerFooter = () => {
  const dispatch = useAppDispatch()
  const router = useRouter();
  const {_id:authUser, provider:userProvider, user_friends_ids:authUserFriends,} = useAppSelector(getUserObject)
  const {_id:groupId } = useAppSelector(getChat)
  const logOut = async() => {
    const logoutResponse = await authUserSignOut({userProvider, authUser, authUserFriends, dispatch, groupId})
    logoutResponse!.status === 200 ? router.push('/login') : null
    turnOnNotification({type:"USER_APP_ACCESS", response:logoutResponse})
}
  return (
    
      <footer id='controller_footer' className='bg-[#0D0F10] h-[95px] pt-5 pb-8 px-2 md:px-4 lg:px-6 cursor-pointer w-full text-[#9B9C9E] text-[20px] bottom-0 flex justify-end items-center gap-3'>
        <UserHeader/>
        <CustomHoverTooltip title={"User settings"} placement='right'>
          <Image className='w-[25px] cursor-pointer' src={settings_wheel} alt='settings'/>  
        </CustomHoverTooltip>
        <CustomHoverTooltip title={"Log out"} placement='right'>
          <Image className='w-[20px] cursor-pointer' src={logout} alt='support call'
          onClick={logOut}
          />  
        </CustomHoverTooltip>
      </footer>
  )
}

export default ControllerFooter
