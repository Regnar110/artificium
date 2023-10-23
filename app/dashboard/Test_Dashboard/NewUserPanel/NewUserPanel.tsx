import React from 'react'
import Shoping from './Shoping/Shoping'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
import PrivateMessages from './PrivateMessages/PrivateMessages'
import FriendListSwitch from './FriendListSwitch/FriendListSwitch'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'

const NewUserPanel = () => {
  const {type, status} = useAppSelector(currentUIState).controller_panel
  return (
    <section className={`bg-[#131619] relative shadow-2xl transition-all duration-300  shadow-black ${status === true && type === "user" ? "right-0 w-[80%] md:w-full":"right-full w-[0px]"} w-[80%] md:max-w-[200px] lg:max-w-[250px] flex flex-col items-center gap-y-3  h-[100vh] z-40`}>
      <div className='user_panel_scroll_section pt-5 px-3 md:px-4 lg:px-6 overflow-hidden h-full flex flex-col gap-y-2 text-[14px] md:text-[16px] lg:text-[18px]'>
        <Shoping/>
        <FriendListSwitch/>
        <PrivateMessages />
      </div>

      <ControllerFooter/>
    </section>
  )
}

export default NewUserPanel
