'use client'
import React from 'react'

const LoginHeaders = () => {
  return (
    <div className='login_headers flex flex-col gap-y-4 text-center sm:text-left'>
        <span className='font-plus_jakarta_sans text-[30px] sm:text-[36px] font-extralight text-white'>Let's get <span className='font-plus_jakarta_sans text-[36px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'>creative!</span></span>
        <span className='text-[#9B9C9E] font-plus_jakarta_sans text-[15px] sm:text-[18px] font-medium'>Log in to Artificium to start creating magic.</span>  
    </div>
  )
}

export default LoginHeaders
