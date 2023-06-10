'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import React, { useEffect, useState } from 'react'
interface Props {
    children: JSX.Element[]
}
const RegisterPageWrapper = ({children}:Props) => {
  const [DOMStatus, setDOMStatus] = useState<boolean>(false)
  useEffect(() => {
    setDOMStatus(true)
  },[])
  return DOMStatus?
    <main className='bg-[#131619] grid box-border grid-cols-5 min-h-[100vh]'>
      {children.map(el=>el)}
    </main>
  :
  <PageLoader/>
}

export default RegisterPageWrapper
