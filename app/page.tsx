'use client'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { nextAuthOptions } from './utils/nextAuthOptions/nextAuthOptions'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default async function Testing() {

  const {data:session} = useSession()
  if(!session) {
    redirect("/login")
  }
  return (
    <div className='w-full'>
      This is protected site
    </div>
  )
}
