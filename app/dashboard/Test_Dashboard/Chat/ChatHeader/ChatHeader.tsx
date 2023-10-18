import React from 'react'
import Image from 'next/image'
import group_header_icon from '../../../../../public/controller/group_header_icon.svg'
import share from '../../../../../public/controller/share.svg'
import notification_settings from '../../../../../public/controller/notification_settings.svg'
import pinned_msgs from '../../../../../public/controller/pinned_msgs.svg'
import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import friends_list from '../../../../../public/controller/friends_switch.svg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { UI_VIEW_CHANGE, currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'

interface Props {
    group_name:string,
    group_description:string
}

const ChatHeader = ({group_name, group_description}:Props) => {
    const dispatch = useAppDispatch()
    const friendListPanelStatus = useAppSelector(currentUIState).friendList_panel
    const tolltipPlacement = friendListPanelStatus === true ? "right":"left"
  return (
    <section className='w-full flex justify-between gap-x-10 items-center shadow-sm shadow-black text-[#9B9C9E] px-5 py-3 z-50'>
        <div id='header_tittles' className=" flex items-center gap-x-3 text-[14px] overflow-hidden">
            <Image className='w-[25px]' src={group_header_icon} alt='chat header icon'/>
            <h3 className='w-fit text-white font-semibold whitespace-nowrap'>{group_name}</h3>
            <div className='vertical_brakline w-[1px] h-[25px] bg-[#9B9C9E]'/>
            {/* <h5 className='w-fit truncate'>{group_description}</h5> */}
        </div>
        <div id='header_social_icons' className='w-fit flex gap-x-3 relative'>
        {/* disablePortal sprawia że rodzicem toltipa nie jest juz document.body a element nadrzędny w hierachi drzewa DOM.
        likwiduje to problem z używaniem placement props. */}
        <CustomHoverTooltip title={"Pinned messages"} PopperProps={{disablePortal:true}}  placement={tolltipPlacement}>
            <Image className='cursor-pointer w-[25px]' src={pinned_msgs} alt='chat header icon'/> 
        </CustomHoverTooltip>
        <CustomHoverTooltip title={"Notification settings"} PopperProps={{disablePortal:true}} placement={tolltipPlacement}>
            <Image className='cursor-pointer w-[25px]' src={notification_settings} alt='chat header icon'/> 
        </CustomHoverTooltip>
        <CustomHoverTooltip title={"Share"} PopperProps={{disablePortal:true}}  placement={tolltipPlacement}>
            <Image className='cursor-pointer w-[25px]' src={share} alt='chat header icon'/> 
        </CustomHoverTooltip>
        <CustomHoverTooltip title={"Friends"} PopperProps={{disablePortal:true}}   placement={tolltipPlacement}>
            <Image onClick={() => dispatch(UI_VIEW_CHANGE({UI:"friendList_panel", status:!friendListPanelStatus}))} className='cursor-pointer w-[25px]' src={friends_list} alt='chat header icon'/> 
        </CustomHoverTooltip>
        </div>
    </section>
  )
}

export default ChatHeader
