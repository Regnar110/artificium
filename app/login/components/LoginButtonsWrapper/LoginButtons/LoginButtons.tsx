'use client'
import React, { useEffect } from 'react'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import { signOut, useSession } from "next-auth/react"
import { NextAuthProviderLoginPopUpCenter } from '@/app/utils/NextAuthProviderLoginPopUpCenter/NextAuthProviderLoginPopUpCenter'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import ProviderLoginButton from '@/app/AppComponents/ProviderLoginButton/ProviderLoginButton'
import { getUserProvider } from '@/redux/slices/userSession/userSessionSlice'
import { useRouter } from 'next/navigation'

const LoginButtons = async () => {
  const router = useRouter()
  const handleProviderLogIn = () => {
    // przekierowanie na stronę provider-sign-in/[provider_slug]
    // gdzie nastąpi logowanie przez providera
    router.push('/provider-sign-in/google')
  }
  const userProvider = useAppSelector(getUserProvider)
  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <ProviderLoginButton providerAction={() => userProvider && userProvider === "google" ? signOut() : handleProviderLogIn()} providerLogo={google} providerName='Google'/>
      </div>
    </div>
  )
}

export default LoginButtons
