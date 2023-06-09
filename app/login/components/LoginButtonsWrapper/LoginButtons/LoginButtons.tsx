'use client'

import Button from '@mui/material/Button'
import React, { useEffect } from 'react'
import Image from 'next/image'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import apple from '../../../../../public/buttons/login_buttons/apple.svg'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from 'next/navigation'

interface GoogleSessionUser {
  email:string;
  name:string;
  image:string
}
const LoginButtons = () => {
  const {data:session} = useSession()

  useEffect(() => {
    if(session?.user) sessionNexthAuthRegister(session.user)
  },[session])

  const sessionNexthAuthRegister = async (sessionUser:GoogleSessionUser) => {
    console.log(sessionUser)
    const response = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", sessionUser)
    console.log(response)
  }
  return (
    <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <Button onClick={() => !session ? signIn() : signOut()} className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
          <Image className='w-fit' src={google} alt='google'/>
          {session ? "Sign out with Google": "Sign in with Google"}
        </Button>
        <Button className='px-5 whitespace-nowrap bg-[#1A1D21] text-[14px] text-[#686B6E] font-plus_jakarta_sans font-semibold flex gap-3 h-[48px]' variant='text' aria-label='google_login'>
          <Image className='w-fit' src={apple} alt='google'/>
          Sign In with Apple
        </Button>              
    </div>
  )
}

export default LoginButtons
