import React from 'react'
import Image from 'next/image'
import globe_green from '../../../../../../public/controller/globe_green.svg'
import link from '../../../../../../public/controller/link.svg'
const InviteStringGenerator = () => {
  return (
    <article className='bg-[#131619] p-5 flex items-center rounded-md'>
        <div className='image_with_text flex gap-x-4'>
            <Image src={globe_green} className='w-[20px]' alt='green globe'/>
            <span className='text-[16px] text-white'>Generate an invitation link</span>            
    </div>
        <button className='invite_link_generate_btn text-[#9B9C9E] font-bold flex justify-center items-center gap-x-2 px-5 py-3 bg-[#363A3D] w-fit whitespace-nowrap rounded-lg'>
            <Image src={link} className='w-[20px]' alt='create link'/>
            Create link
        </button>
    </article>
  )
}
export default InviteStringGenerator
