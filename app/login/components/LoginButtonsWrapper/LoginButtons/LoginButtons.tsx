'use client'

import Button from '@mui/material/Button'
import React from 'react'
import Image from 'next/image'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import apple from '../../../../../public/buttons/login_buttons/apple.svg'

const LoginButtons = () => {
  return (
    <div className='buttons_container flex gap-8'>
        <Button className='px-5 bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
        <Image src={google} alt='google'/>
        Sign In with Google
        </Button>
        <Button className='px-5 bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
        <Image src={apple} alt='google'/>
        Sign In with Apple
        </Button>              
    </div>
  )
}

export default LoginButtons
