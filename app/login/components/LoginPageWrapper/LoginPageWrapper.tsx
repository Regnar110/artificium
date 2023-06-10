'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import React, { useEffect, useState } from 'react'
interface Props {
    children: JSX.Element[]
}
const LoginPageWrapper = ({children}:Props) => {
  const [DOMStatus, setDOMStatus] = useState<boolean>(false)
  useEffect(() => {
    setDOMStatus(true)
  },[])
  return DOMStatus ? 
    <main className='login_page box-border bg-[#131619] min-h-[100vh] grid grid-cols-5 w-full'>
      {children.map(el => el)}
    </main>
  : 
  <PageLoader/>
}

export default LoginPageWrapper
