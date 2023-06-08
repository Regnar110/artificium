import React from 'react'
interface Props {
    children: JSX.Element[]
}
const LoginPageWrapper = ({children}:Props) => {
  return (
    <main className='login_page bg-[#131619] grid grid-cols-2 w-full'>
      {children.map(el => el)}
    </main>
  )
}

export default LoginPageWrapper
