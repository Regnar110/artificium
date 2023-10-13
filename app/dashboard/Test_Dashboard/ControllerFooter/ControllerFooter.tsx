import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import settings_wheel from '../../../../public/controller/settings_wheel.svg'
const ControllerFooter = () => {
  return (
    <footer id='controller_footer' className='flex justify-center items-center pb-5'>
        <CustomHoverTooltip title={"User settings"} placement='right'>
            <Image className='w-[20px] cursor-pointer' src={settings_wheel} alt='settings'/>
        </CustomHoverTooltip>
    </footer>
  )
}

export default ControllerFooter
