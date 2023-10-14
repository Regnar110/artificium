import React from 'react'

import Image from 'next/image'
import turbo_icon from '../../../../../public/controller/shopping.svg'
import shop from '../../../../../public/controller/shop.svg'
const Shoping = () => {
  return (
    <div id='user_panel_shopping' className='flex flex-col gap-y-5 text-[#9B9C9E] font-plus_jakarta_sans'>
        <div className='cursor-pointer offer flex flex-row-reverse justify-end gap-x-3 text-[22px] hover:bg-[#363A3D]  px-4 py-2 rounded-sm'>
            <span className='font-semibold w-fit'>Turbo</span>
            <Image className='w-[20px]' src={turbo_icon} alt='buy turbo'/>            
        </div>
        <div className='cursor-pointer offer flex flex-row-reverse justify-end gap-x-3 text-[22px] hover:bg-[#363A3D]  px-4 py-2 rounded-sm'>
            <span className='font-semibold w-fit'>Marketplace</span>
            <Image className='w-[20px]' src={shop} alt='buy turbo'/>            
        </div>
        
      
    </div>
  )
}

export default Shoping

