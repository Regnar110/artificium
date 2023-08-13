'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
interface Props {
    children: JSX.Element[]
}
const LoginPageWrapper = ({children}:Props) => {
  const router = useRouter()
  const userSession = useAppSelector(state => isUserAuthenticated(state))
  useEffect(() => {
    console.log(localStorage)
    if(userSession === true) {
      router.push("/dashboard")
    }
    
  },[userSession])
  return userSession === false ? 
    <main className='login_page box-border bg-[#131619] min-h-[100vh] grid grid-cols-5 w-full'>
      {children.map(el => el)}
    </main>
  : 
  <PageLoader/>
}

export default LoginPageWrapper
