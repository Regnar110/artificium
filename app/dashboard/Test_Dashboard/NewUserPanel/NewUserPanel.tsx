import React, { useEffect, useState } from 'react'
import Shoping from './Shoping/Shoping'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
import PrivateMessages from './PrivateMessages/PrivateMessages'
import FriendListSwitch from './FriendListSwitch/FriendListSwitch'

const NewUserPanel = () => {
  const [isRevealed, setPanelReveal ] = useState<boolean>(false)
  useEffect(() => {
    setPanelReveal(true)
    return () => {
      setPanelReveal(false)
    }
  })
  return (
    <section className={`bg-[#131619] ${isRevealed === true ? "left-0":"left-[-250px]"} transition-all duration-300 min-w-[170px] md:min-w-[200px] lg:min-w-[250px] w-[170px] md:w-[200px] lg:w-[250px] relative  flex flex-col items-center gap-y-3  h-[100vh]`}>
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
