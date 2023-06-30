import React from 'react'
import Image from 'next/image'
import settings_icon from '../../../../../../public/Dashboard/UserPanel/Settings/settings.svg'
const BottomSettings = () => {
  return (
    <div className='user_panel_settings text-white flex w-full justify-between'>
      <div className='get_premium'></div>
      <div className='relative settings w-[20px] h-[20px] flex'>
        <span>Settings</span>
        <Image fill style={{objectFit:"contain"}} src={settings_icon} alt='settings'/>
      </div>
    </div>
  )
}

export default BottomSettings
