'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
interface Props {
    children: JSX.Element[]
}
const LoginPageWrapper = ({children}:Props) => {
  const router = useRouter()
  const userSession = useAppSelector(state => isUserAuthenticated(state))
  const [DOMStatus, setDOMStatus] = useState<boolean>(false)
  useEffect(() => {
    if(userSession === true) {
      setDOMStatus(false)
      router.push("/dashboard")
    } else {
      setDOMStatus(true)
    }
    
  },[userSession])
  return DOMStatus ? 
    <main className='login_page box-border bg-[#131619] min-h-[100vh] grid grid-cols-5 w-full'>
      {children.map(el => el)}
    </main>
  : 
  <PageLoader/>
}

export default LoginPageWrapper
