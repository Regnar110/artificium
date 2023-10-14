import React from 'react'
import Image from 'next/image'
import explore_groups from '../../../../../public/controller/explore_groups.svg'
import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
const ExploreGroups = () => {
  return (
    <CustomHoverTooltip title={"Search groups"} placement='right'>
        <div id='controller_add_group' className='bg-[#1A1D21] cursor-pointer flex justify-center items-center rounded-full transition-all  hover:bg-[#7C35F1] hover:rounded-2xl on w-fit p-4'>
        <Image className='w-[30px]' src={explore_groups} alt='add_group'/>
        </div>
    </CustomHoverTooltip>
  )
}

export default ExploreGroups
