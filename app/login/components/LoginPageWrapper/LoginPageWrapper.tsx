'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import { authUserLogIn } from '@/app/utils/AuthUserLogIn/AuthUserLogIn'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
interface Props {
    children: JSX.Element[]
}
const LoginPageWrapper = ({children}:Props) => {
  const router = useRouter()
  const userSession = useAppSelector(state => isUserAuthenticated(state))
  const {data:session} = useSession()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(userSession === true) {
      console.log("USER SESSION TRUE")
      router.push("/dashboard")
    } else {
      if(session) {
        (async () => await authUserLogIn({sessionData:session?.user, dispatch}))();
        router.push('/dashboard')
      }
    }
    
  },[session])
  return userSession === false ? 
    <main className='login_page box-border bg-[#131619] min-h-[100vh] grid grid-cols-5 w-full'>
      {children.map(el => el)}
    </main>
  : 
  <PageLoader/>
}

export default LoginPageWrapper
