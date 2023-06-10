import React from 'react'

interface Props {
    children:JSX.Element[]
}

const RegisterFunctionalityBlock = ({children}:Props) => {
  return (
    <div className='register_functionality_block h-fit w-[90%] place-content-center self-center xl:w-[70%] justify-self-center flex flex-col gap-y-10'>
      {children.map(el=>el)}
    </div>
  )
}

export default RegisterFunctionalityBlock
