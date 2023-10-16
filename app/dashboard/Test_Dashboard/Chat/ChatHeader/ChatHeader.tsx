import React from 'react'
import Image from 'next/image'
import group_header_icon from '../../../../../public/controller/group_header_icon.svg'
import share from '../../../../../public/controller/share.svg'
import notification_settings from '../../../../../public/controller/notification_settings.svg'
import pinned_msgs from '../../../../../public/controller/pinned_msgs.svg'
import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
const ChatHeader = () => {
  return (
    <section className='w-full flex justify-between items-center shadow-sm shadow-black text-[#9B9C9E] px-5 py-3'>
        <div id='header_tittles' className=" flex items-center gap-x-3 text-[14px]">
            <Image className='w-[25px]' src={group_header_icon} alt='chat header icon'/>
            <h3 className='w-fit text-white font-semibold'>Grupa Testowa 1</h3>
            <div className='vertical_brakline w-[1px] h-[25px] bg-[#9B9C9E]'/>
            <h5 className='w-fit'>Grupa ta została stworzona celem testowania UI aplikacji</h5>
        </div>
        <div id='header_social_icons' className='w-fit flex gap-x-3 relative'>
        <CustomHoverTooltip title={"Pinned messages"} placement='right'>
            <Image className='cursor-pointer w-[25px]' src={pinned_msgs} alt='chat header icon'/> 
        </CustomHoverTooltip>
        <CustomHoverTooltip title={"Notification settings"} placement='right'>
            <Image className='cursor-pointer w-[25px]' src={notification_settings} alt='chat header icon'/> 
        </CustomHoverTooltip>
        <CustomHoverTooltip title={"Share"} placement='right'>
            <Image className='cursor-pointer w-[25px]' src={share} alt='chat header icon'/> 
        </CustomHoverTooltip>
 

        </div>
    </section>
  )
}

export default ChatHeader
