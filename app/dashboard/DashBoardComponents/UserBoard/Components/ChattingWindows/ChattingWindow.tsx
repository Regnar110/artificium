import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ChatWindowProps {
    window_slug:string;
    window_icon:StaticImageData
    window_name:string
}
const ChattingWindow = ({window_slug, window_icon, window_name}:ChatWindowProps) => {
  return (
    <div id={window_slug} className='artificium_chat w-fit flex flex-col justify-center items-end gap-x-5'>
        <div className='flex gap-3 w-fit pt-6 pb-3'>
        <Image className='w-[25px]' src={window_icon} alt='artificium_icon'/>
        <span className='font-bold text-[#9B9C9E]'>{window_name}</span>                
        </div>
        <div className='chat_color_underline h-[9px] relative -bottom-1 w-full bg-[#B6F09C] rounded-2xl'></div>
    </div>
  )
}

export default ChattingWindow
