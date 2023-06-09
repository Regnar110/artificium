'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import MediaQuery from 'react-responsive'
import register_image_small from '../../../../public/register_assets/register_image_small.png'
const RegisterIllustration = () => {
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true);
    },[])
  return mounted ?
    <MediaQuery minWidth={1024}>
        <div className='register_ilustration w-full col-span-2'>
            <Image priority={true} className='float-right h-[100vh]' src={register_image_small} alt='register_image'/>
        </div>
    </MediaQuery>
  :
  null
}

export default RegisterIllustration
