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
    const [DOMStatus, setDOMStatus] = useState<boolean>(false)
    const userSession = useAppSelector(isUserAuthenticated)
    useEffect(() => {
      console.log(localStorage)
        if(userSession === true) { // sprawdzamy czy sesja użytkownika aplikacji została umieszczona w storew
          setDOMStatus(true) // umożliwiamy dostęp do części aplikacji
        } else {
          setDOMStatus(false)
          router.push("/login")
        }
    },[userSession])
  return DOMStatus ?
    <main className='dashboard box-border text-black bg-[#131619] w-full flex justify-center items-center gap-3 min-h-[screen] overflow-hidden'>
      {children.map(el => el)}
    </main>
  :
  <PageLoader/>
}

export default DashboardPageWrapper
