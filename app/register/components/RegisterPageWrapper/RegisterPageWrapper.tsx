'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
interface Props {
    children: JSX.Element[]
}
const RegisterPageWrapper = ({children}:Props) => {
  const router = useRouter()
  const userSession = useAppSelector(state => isUserAuthenticated(state))
  useEffect(() => {
    if(userSession === true) {
      router.push("/dashboard")
    }
  },[userSession])
    
  return userSession === false?
    <main className='bg-[#131619] grid box-border grid-cols-5 min-h-[100vh]'>
      {children.map(el=>el)}
    </main>
    :
    <PageLoader/>
}

export default RegisterPageWrapper
