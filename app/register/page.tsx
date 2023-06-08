'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import register_image_big from '../../public/register_assets/register_image_big.png'
import register_image_small from '../../public/register_assets/register_image_small.png'
import ArtificiumAbsoluteLogo from '../AppComponents/ArtificiumAbsoluteLogo/ArtificiumAbsoluteLogo'

import MediaQuery from 'react-responsive'
const Register = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    useEffect(() =>{
        setMounted(true)
    })
  return mounted ?
    <main className='bg-[#131619] grid box-border grid-cols-4'>
        <div className='register_wrapper w-full col-span-2 grid grid-rows-2'>
            <div className='login_redirect_with_logo row-span-1 relative flex justify-between w-full'>
              <ArtificiumAbsoluteLogo position='relative' positionCordinates='top-5 left-5'/>   
            </div>
            <div className='register_functionality_block row-span-1 w-[70%] justify-self-center'>
                <header className='register_header text-[40px] font-plus_jakarta_sans text-[#fff]'>
                Connect with your team and bring your creative ideas to life.
                </header>
                <div className=''></div>                
            </div>

        </div>

        <div className='register_illustration relative flex w-fit justify-self-end float-right h-fit col-span-2'>
            <span className='font-plus_jakarta_sans relative top-5 right-5 text-[16px] font-semibold text-transparent gradient_dayblue_blue_green500 w-full h-fit'>
                Log in
            </span>

            {/* MQ trzeba wyeksportować do osobnego komponentu, który będzie renderowany po stronie klienta ze sprawdzeniem przy użyciu useEffect czy jest już zamontowany */}
            <MediaQuery minWidth={1280}>
                <Image
                className='float-right object-contain w-full h-[100vh]' 
                src={register_image_big}
                alt='login_image'
                />                
            </MediaQuery>
            <MediaQuery maxWidth={1279}>
            <Image
                className='float-right object-contain w-full h-[100vh]' 
                src={register_image_small}
                alt='login_image'
                />         
            </MediaQuery>

        </div>
        
    </main>
  :
  null
}

export default Register
