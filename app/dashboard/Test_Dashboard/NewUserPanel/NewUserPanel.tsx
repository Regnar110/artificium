import React, { useEffect, useState } from 'react'
import Shoping from './Shoping/Shoping'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
import PrivateMessages from './PrivateMessages/PrivateMessages'

const NewUserPanel = () => {
  const [isRevealed, setPanelReveal ] = useState<boolean>(false)
  useEffect(() => {
    setPanelReveal(true)
    return () => {
      setPanelReveal(false)
    }
  })
  return (
    <section className={`bg-[#131619] ${isRevealed === true ? "left-0":"left-[-280px]"} transition-all duration-300 min-w-[280px] w-full md:w-[280px] relative  flex flex-col items-center gap-y-3  h-[100vh]`}>
      <div className='user_panel_scroll_section pt-5 pb-8 px-6 overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent h-full flex flex-col gap-y-3 '>
        <Shoping/>
        <PrivateMessages />
      </div>

      <ControllerFooter/>
    </section>
  )
}

export default NewUserPanel
