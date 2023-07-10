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
        <div className='register_ilustration relative w-full flex justify-end items-end col-span-2 h-[100%]'>
            <Image priority={true} fill={true} style={{objectFit:"cover"}} src={register_image_small} alt='register_image'/>
        </div>
    </MediaQuery>
  :
  null
}

export default RegisterIllustration
