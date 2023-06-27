import React from 'react'
import Image from 'next/image'
import green_group from '../../../../../public/Dashboard/UserPanel/Groups/green.svg'
import new_group from '../../../../../public/Dashboard/UserPanel/Groups/new_group.svg'
const Groups = () => {
  return (
    <div className='groups_container flex flex-col gap-y-4'>
      <h1 className='text-[16px] text-[#686B6E] font-semibold'>General</h1>
      <div className='groups flex flex-col gap-y-6 max-h-[300px] overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-green-500 scrollbar-track-gray-100'>
        <div className='singe_group bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
            <Image className='w-[30px]' src={green_group} alt='group_icon'/>
            <span>Orbital Oddysey</span>
        </div>
        <div className='singe_group bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
            <Image className='w-[30px]' src={green_group} alt='group_icon'/>
            <span>Orbital Oddysey</span>
        </div>
        <div className='singe_group bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
            <Image className='w-[30px]' src={green_group} alt='group_icon'/>
            <span>Orbital Oddysey</span>
        </div>
        <div className='singe_group bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
            <Image className='w-[30px]' src={green_group} alt='group_icon'/>
            <span>Orbital Oddysey</span>
        </div>
        <div className='singe_group bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
            <Image className='w-[30px]' src={green_group} alt='group_icon'/>
            <span>Orbital Oddysey</span>
        </div>
        <div className='singe_group bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
            <Image className='w-[30px]' src={green_group} alt='group_icon'/>
            <span>Orbital Oddysey</span>
        </div>
        <div className='singe_group bg-gradient-to-r hover:from-neutral-900 hover:via-neutral-800 to-transparent transition-all flex font-plus_jakarta_sans justify-center items-center gap-x-5 text-[#E8E9E9] text-[14px] xl:text-[16px] font-semibold p-3 rounded-lg'>
            <Image className='w-[30px]' src={green_group} alt='group_icon'/>
            <span>Orbital Oddysey</span>
        </div>
      </div>
      <div className='add_new_group text-[#686B6E] text-[16px] flex justify-center items-center gap-x-5'>
        <Image className='w-[30px]' src={new_group} alt='new_Group_button'/>
        <span>Add new group</span>
      </div>
    </div>
  )
}

export default Groups
