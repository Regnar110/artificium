'use client'
import React from 'react'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import { signOut } from "next-auth/react"
import { NextAuthProviderLoginPopUpCenter } from '@/app/utils/NextAuthProviderLoginPopUpCenter/NextAuthProviderLoginPopUpCenter'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import ProviderLoginButton from '@/app/AppComponents/ProviderLoginButton/ProviderLoginButton'
import { getUserProvider } from '@/redux/slices/userSession/userSessionSlice'

const LoginButtons = async () => {
  const userProvider = useAppSelector(getUserProvider)
  //LOGIKA PRZENIESIONA do provider-sign-in page.tsx
  // const socketInstance = await ioInstance.getSocketInstance()
  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <ProviderLoginButton providerAction={() => userProvider && userProvider === "google" ? signOut() : NextAuthProviderLoginPopUpCenter('/provider-sign-in/google', "Google user login")} providerLogo={google} providerName='Google'/>
      </div>
    </div>
  )
}

export default LoginButtons
