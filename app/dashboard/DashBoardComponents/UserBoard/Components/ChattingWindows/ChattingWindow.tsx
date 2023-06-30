import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ChatWindowProps {
    window_slug:"artificium" | "chat" | "library";
    window_icon:StaticImageData
    window_name:string;
    onClick: (targetId: "artificium" | "chat" | "library") => void
    isClicked:boolean
}
const ChattingWindow = ({window_slug, window_icon, window_name, onClick, isClicked}:ChatWindowProps) => {
  return (
    <div onClick={() => onClick(window_slug)} id={window_slug} className='artificium_chat cursor-pointer w-fit flex flex-col justify-center items-end gap-x-5'>
        <div className='flex gap-3 w-fit pt-6 pb-3'>
        <Image className='w-[25px]' src={window_icon} alt='artificium_icon'/>
        <span className={`font-bold ${isClicked? "text-white" : "text-[#9B9C9E]"} transition-all`}>{window_name}</span>                
        </div>
        <div className={`chat_color_underline h-[9px] relative -bottom-1 w-full ${isClicked? "bg-[#B6F09C]" : "bg-[#b7f09c00]"} transition-all rounded-2xl`}></div>
    </div>
  )
}

export default ChattingWindow
