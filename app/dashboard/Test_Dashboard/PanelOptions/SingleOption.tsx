import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
    text:string,
    icon:StaticImageData
    callback?:(...args:any) => void
}
const SingleOption = ({text, icon, callback}:Props) => {
  return (
    <div className='group_chat_choice cursor-pointer hover:text-white hover:bg-[#363A3D] transition-all p-2 rounded-sm flex items-center gap-x-3' onClick={callback}>
        <Image className='w-[17px]' src={icon} alt='artificium'/>
        <span className='font-semibold w-fit hover:text-white transition-all '>{text}</span>         
    </div>
  )
}

export default SingleOption
