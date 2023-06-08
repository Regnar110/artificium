import React from 'react'

interface Props {
    children:JSX.Element[]
}
const LoginButtonsWrapper = ({children}:Props) => {
  return (
    <div className='login_buttons flex flex-col gap-10'>
      {children.map(el=>el)}
    </div>
  )
}

export default LoginButtonsWrapper
