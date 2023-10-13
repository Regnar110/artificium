import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import add_group_icon from '../../../../../public/controller/add_group_icon.svg'
const CreateGroup = () => {
  return (
    <CustomHoverTooltip title={"Create Group"} placement='right'>
        <div id='controller_add_group' className='bg-[#1A1D21] cursor-pointer flex justify-center items-center rounded-full transition-all  hover:bg-[#7C35F1] hover:rounded-2xl on w-fit p-4'>
        <Image className='w-[30px]' src={add_group_icon} alt='add_group'/>
        </div>
  </CustomHoverTooltip>
  )
}

export default CreateGroup
