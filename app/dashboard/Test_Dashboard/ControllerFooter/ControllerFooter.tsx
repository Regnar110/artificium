import CustomHoverTooltip from '@/app/AppComponents/CustomHoverTolltip/CustomHoverTooltip'
import React from 'react'
import Image from 'next/image'
import settings_wheel from '../../../../public/controller/settings_wheel.svg'
const ControllerFooter = () => {
  return (
    <CustomHoverTooltip title={"User settings"} placement='right'>
      <footer id='controller_footer' className='absolute cursor-pointer w-fit font-plus_jakarta_sans text-[#9B9C9E] text-[20px] bottom-0 flex justify-end items-center gap-3 p-5'>
              <span className='w-fit'>Settings</span>
              <Image className='w-[20px] cursor-pointer' src={settings_wheel} alt='settings'/>
          
      </footer>
    </CustomHoverTooltip>
  )
}

export default ControllerFooter
