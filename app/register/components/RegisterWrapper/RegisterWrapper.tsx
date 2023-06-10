import React from 'react'
interface Props {
    children:JSX.Element[]
}
const RegisterWrapper = ({children}:Props) => {
  return (
    <div className='register_wrapper relative w-full h-full flex flex-col col-span-5 lg:col-span-3'>
      {children.map(el=>el)}
    </div>
  )
}

export default RegisterWrapper
// register_wrapper max-w-[1024px] h-[100%] md:h-[100vh] lg:h-auto lg:w-full flex flex-col items-center lg:items-start lg:grid  col-span-5 lg:col-span-3 xl:col-span-3 lg:grid-rows-none