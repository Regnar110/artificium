'use client'

import Button from '@mui/material/Button'
import React from 'react'
import Image from 'next/image'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import apple from '../../../../../public/buttons/login_buttons/apple.svg'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { useSession, signIn, signOut } from "next-auth/react"

const LoginButtons = () => {
  const { data:session } = useSession()
  return (
    <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <Button onClick={() => session? signIn():signOut()} className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
          <Image className='w-fit' src={google} alt='google'/>
          Sign In with Google
        </Button>
        <Button className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
          <Image className='w-fit' src={apple} alt='google'/>
          Sign In with Apple
        </Button>              
    </div>
  )
}

export default LoginButtons
