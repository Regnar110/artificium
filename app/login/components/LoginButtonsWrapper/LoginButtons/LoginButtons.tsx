'use client'
import React, { useEffect } from 'react'
import google from '../../../../../public/buttons/login_buttons/google.svg'
import { useSession, signOut } from "next-auth/react"
import { NextAuthProviderLoginPopUpCenter } from '@/app/utils/NextAuthProviderLoginPopUpCenter/NextAuthProviderLoginPopUpCenter'
import { AuthUserStoreInjection } from '@/app/utils/AuthUserStoreInjection/AuthUserStoreInjection'
import { useAppDispatch } from '@/redux/hooks/typedHooks'
import ProviderLoginButton from '@/app/AppComponents/ProviderLoginButton/ProviderLoginButton'
import { useRouter } from 'next/navigation'
import { turnOnNotification } from '@/app/AppComponents/ToastNotifications/TurnOnNotification'
const LoginButtons = () => {
  const {data:session} = useSession()
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    if(session) {
      const user = session.user as UserAccesSuccessResponse | UserAccessErrorResponse
      user.status === 510 || user.status === 500 ? signOut() : AuthUserStoreInjection({ user: user.body, dispatch})
      user.status === 200 ? router.push('/dashboard') : null 
      console.log(session)
    }

  },[session])
  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='buttons_container flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <ProviderLoginButton providerAction={() => session ? signOut() : NextAuthProviderLoginPopUpCenter('/provider-sign-in/google', "Google user login")} providerLogo={google} providerName='Google'/>
      </div>
    </div>
  )
}

export default LoginButtons
