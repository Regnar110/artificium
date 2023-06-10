import React from 'react'

interface Props {
    children: JSX.Element[]
}
const LoginFunctionalityBlock = ({children}:Props) => {
  return (
    <div className='login_functionality_block  grid grid-row-6 row-span-2 justify-self-center place-content-center gap-10 my-10'>
      {children.map(el=>el)}
    </div>
  )
}

export default LoginFunctionalityBlock
