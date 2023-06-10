import React from 'react'
interface Props {
    children: JSX.Element[]
}
const LoginPageWrapper = ({children}:Props) => {
  return (
    <main className='login_page box-border bg-[#131619] min-h-[100vh] grid grid-cols-5 w-full'>
      {children.map(el => el)}
    </main>
  )
}

export default LoginPageWrapper
