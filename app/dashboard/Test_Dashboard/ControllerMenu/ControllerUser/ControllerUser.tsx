import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import artificium_logo from '../../../../../public/logo/artificium_logo.png'
const ControllerUser = () => {
  return (
    <section id='controller_user' className=' flex flex-col gap-y-3 justify-center items-center'>
        <CustomHoverTooltip title={"User Panel"} placement='right'>
        <div className='user cursor-pointer flex justify-center items-center rounded-full bg-[#1A1D21] transition-all  hover:bg-[#7C35F1] hover:rounded-2xl on w-fit p-4'>
            <Image className=' w-[30px]' src={artificium_logo} alt="artificium_logo"/>
        </div>   
        </CustomHoverTooltip>
        <div className='section_bottom_break_line w-[60%] h-[1px] bg-[#32363b]'/>
    </section>          
  )
}

export default ControllerUser
