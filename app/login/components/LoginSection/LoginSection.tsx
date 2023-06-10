import React from 'react'
interface Props {
    children:JSX.Element[]
}
const LoginSection = ({children}:Props) => {
  return (
    <div className='login_section relative col-span-5 lg:col-span-3 flex flex-col items-center w-full'>
      {children.map(el=>el)}
    </div>
  )
}

export default LoginSection
