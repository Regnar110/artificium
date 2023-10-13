import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import group_icon from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
const GroupField = () => {
  return (
    <div className='group_field flex justify-center items-center'>
        <CustomHoverTooltip title={"Grupa Testowa 1"} placement='right'>
        <div className='user cursor-pointer flex justify-center items-center w-fit p-4'>
            <Image className=' w-[30px]' src={group_icon} alt="artificium_logo"/>
        </div>   
        </CustomHoverTooltip>
    </div>
  )
}

export default GroupField
