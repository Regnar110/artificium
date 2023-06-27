import React from 'react'
import Image from 'next/image'
import dummy_avatar from '../../../../../public/Dashboard/UserPanel/UserHeader/Avatar.png'
import header_dropdown from '../../../../../public/Dashboard/UserPanel/UserHeader/header_dropdown.svg'
const UserHeader = () => {
  return (
    <div id='user_panel_header' className='user_header w-full font-plus_jakarta_sans flex justify-between items-center pb-8 border-b-[1px] border-[#131619]'>
        <div className='avatar relative flex rounded-full w-full gap-x-3 justify-center items-center'>
            <div className='avatar_image relative w-[50px]'>
                <Image src={dummy_avatar} className='object-contain' alt='user_avatar'/>                
            </div>

            <div className='user_nick w-full flex flex-col'>
                <span className='nick text-white text-[14px] xl:text-[16px]'>Mateteusz Wrycza</span>
                <span className='account_status text-[#B6F09C] text-[10px] xl:text-[12px]'>Free account</span>   
            </div>
        </div>
        <div className='header_dropdown_icon relative w-[15px]'>
            <Image src={header_dropdown} alt='dropdown'/>
        </div>
      
    </div>
  )
}

export default UserHeader
