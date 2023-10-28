import React from 'react'

interface Props {
    header?:string,
    children: JSX.Element[]
}
const PanelOptions = ({header, children}:Props) => {
  return (
    <div className='flex flex-col gap-y-5 w-full h-fit pt-5 px-6 text-[18px] items-center text-[#9B9C9E]'>
        {header&& <h5 className='pl-2  text-[14px]'>{header?.toUpperCase()}</h5>}
        {children.map(el=>el)}
    </div>
  )
}

export default PanelOptions
