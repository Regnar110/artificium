'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignInRedirect = () => {
  const router = useRouter()
  return <span onClick={()=> router.push("login")} className='text-[16px] w-full text-center text-white'>Already have an account?<span className='font-plus_jakarta_sans cursor-pointer text-[16px] font-bold text-transparent bg-clip-text gradient_dayblue_blue_green500'> Log in</span></span>
}

export default SignInRedirect
