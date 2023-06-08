import React from 'react'
interface Props {
    children:JSX.Element[]
}
const LoginSection = ({children}:Props) => {
  return (
    <div className='login_section relative flex flex-col justify-center items-center  w-full'>
      {children.map(el=>el)}
    </div>
  )
}

export default LoginSection
