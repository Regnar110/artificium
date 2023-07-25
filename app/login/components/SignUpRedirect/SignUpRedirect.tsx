'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const SignUpRedirect = () => {
  const router = useRouter();

  return (
    <div className='signup flex gap-3 relative justify-center justify-self-center font-semibold text-[#686B6E]'>
        Don't have an accont?
        <span onClick={() => router.push('/register')} className='font-plus_jakarta_sans cursor-pointer w-fit text-[16px] font-semibold text-transparent bg-clip-text gradient_dayblue_blue_green500'>
            Sign Up
        </span>
    </div>    
  )
}

export default SignUpRedirect
