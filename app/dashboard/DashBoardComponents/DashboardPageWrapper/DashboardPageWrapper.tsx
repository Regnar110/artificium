'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
    children: JSX.Element[]
}

const DashboardPageWrapper = ({children}:Props) => {
    const router = useRouter()
    const userSession = useAppSelector(state => isUserAuthenticated(state))
    const [DOMStatus, setDOMStatus] = useState<boolean>(false)
    useEffect(() => {
      if(userSession === true) {
        setDOMStatus(true)
      } else {
        router.push("/login")
        setDOMStatus(false)
      }
      
    },[userSession])
  return DOMStatus ?
    <main className='dashboard box-border text-black bg-[#131619] w-full  flex justify-center items-center p-5 gap-3 min-h-[screen]'>
      {children.map(el => el)}
    </main>
  :
  <PageLoader/>
}

export default DashboardPageWrapper
