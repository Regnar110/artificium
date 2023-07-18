'use client'

import Button from '@mui/material/Button'
import React, { useEffect } from 'react'
import Image from 'next/image'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import apple from '../../../../../public/buttons/login_buttons/apple.svg'
import { useSession, signIn, signOut } from "next-auth/react"
import { NextAuthProviderLoginPopUpCenter } from '@/app/utils/NextAuthProviderLoginPopUpCenter/NextAuthProviderLoginPopUpCenter'

interface GoogleSessionUser {
  email:string;
  name:string;
  image:string
}
const LoginButtons = () => {
  const {data:session} = useSession()
  console.log(session)
  return (
    // provider-sign-in/google
    <div className='flex flex-col overflow-hidden'>
      <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
          <Button onClick={() => session ? signOut() : NextAuthProviderLoginPopUpCenter('/provider-sign-in/google', "Google user login")} className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
            <Image className='w-fit' src={google} alt='google'/>
            Sign in with Google
          </Button>
          <Button className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
            <Image className='w-fit' src={apple} alt='google'/>
            Sign In with Apple
          </Button>  
      </div>
    </div>
  )
}

export default LoginButtons
