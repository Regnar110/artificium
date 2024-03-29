'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import login_image from '../../../../public/login_assets/login_illustration.png'
import MediaQuery from 'react-responsive'
const LoginIllustration = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
      setMounted(true);
  },[])
  return mounted ? 
    <MediaQuery minWidth={1024}>
        <div className='login_illustration relative h-screen w-full col-span-2'>
            <Image priority={true} fill={true} sizes='(min-width: 1024px) 100%' style={{objectFit:"cover"}} className='min-h-[100%] float-right' src={login_image} alt='register_image'/>
        </div>
    </MediaQuery>
  :
  null
}

export default LoginIllustration
