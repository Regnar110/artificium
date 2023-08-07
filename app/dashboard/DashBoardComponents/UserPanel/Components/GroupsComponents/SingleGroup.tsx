import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface SingleGroupProps {
    onGroupClick: (e: React.FormEvent<HTMLDivElement>) => void
    group_title:string
    group_icon:StaticImageData
}
const SingleGroup = ({onGroupClick ,group_title, group_icon}:SingleGroupProps) => {
  return (
    <div id={group_title} onClick={(e)=>onGroupClick(e)} className='singe_group max-w-[100%] break-words bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
        <Image className='w-[30px]' src={group_icon} alt='group_icon'/>
        <span>{group_title}</span>
    </div>
  )
}

export default SingleGroup
