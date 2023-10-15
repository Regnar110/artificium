import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import group_icon from '../../../../public/controller/test_group_icon.png'
import ControllerFooter from '../ControllerFooter/ControllerFooter'
const GroupPanel = () => {
    const [isRevealed, setPanelReveal ] = useState<boolean>(false)
    useEffect(() => {
      setPanelReveal(true)
      return () => {
        setPanelReveal(false)
      }
    })
  return (
    <section className={`bg-[#131619] ${isRevealed === true ? "left-0":"left-[-280px]"} text-[#9B9C9E] font-plus_jakarta_sans transition-all duration-300 min-w-[280px] w-full md:w-[280px] relative  flex flex-col items-center gap-y-3  h-[100vh]`}>
      <div id='group_panel_content' className=' flex w-full h-full justify-between items-center pt-5 pb-8 px-6 overflow-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10]'>

      </div>

      <ControllerFooter/>
    </section>
  )
}

export default GroupPanel
