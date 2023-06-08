'use client'

import React from 'react'
import Image from 'next/image'
import login_image from '../../../../public/login_assets/login_illustration.png'
const LoginIllustration = () => {
  return (
    <div className='login_illustration relative w-full justify-self-end float-right h-fit'>
        <Image
        className='float-right object-contain w-fit' 
        src={login_image}
        alt='login_image'
        />
    </div>
  )
}

export default LoginIllustration
