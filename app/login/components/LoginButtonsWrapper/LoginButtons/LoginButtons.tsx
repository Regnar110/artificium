'use client'
import React, { useEffect } from 'react'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import { useSession, signOut } from "next-auth/react"
import { NextAuthProviderLoginPopUpCenter } from '@/app/utils/NextAuthProviderLoginPopUpCenter/NextAuthProviderLoginPopUpCenter'
import { AuthUserStoreInjection } from '@/app/utils/AuthUserStoreInjection/AuthUserStoreInjection'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import ProviderLoginButton from '@/app/AppComponents/ProviderLoginButton/ProviderLoginButton'
import { useRouter } from 'next/navigation'
import { turnOnNotification } from '@/app/AppComponents/ToastNotifications/TurnOnNotification'
import { getUserProvider } from '@/redux/slices/userSession/userSessionSlice'
import { getActiveSocket } from '@/redux/slices/socketInstance/socketInstanceSlice'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
const LoginButtons = async () => {
  const userProvider = useAppSelector(getUserProvider)
  const socketInstance = await ioInstance.getSocketInstance()
  const {data:session} = useSession()
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    if(session) router.push('/dashboard')

  },[session])

  //LOGIKA PRZENIESIONA do provider-sign-in page.tsx
  return (
    <div className='flex flex-col overflow-hidden'>
      <button onClick={() => {
        socketInstance!.disconnect()
        ioInstance.closeSocketInstanceConnection()
        }}>SOCKET OUT</button>
      <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <ProviderLoginButton providerAction={() => userProvider && userProvider === "google" ? signOut() : NextAuthProviderLoginPopUpCenter('/provider-sign-in/google', "Google user login")} providerLogo={google} providerName='Google'/>
      </div>
    </div>
  )
}

export default LoginButtons
