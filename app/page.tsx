import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { nextAuthOptions } from './utils/nextAuthOptions/nextAuthOptions'
import { redirect } from 'next/navigation'

export default async function Testing() {

  const session = await getServerSession(nextAuthOptions)

  if(!session) {
    redirect("/api/auth/signin")
  }
  return (
    <div className='w-full'>
      This is protected site
    </div>
  )
}
