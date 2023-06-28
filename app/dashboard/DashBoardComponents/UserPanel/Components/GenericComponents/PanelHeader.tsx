import React from 'react'
interface PanelHeaderProps {
    title:string
}
const PanelHeader = ({title}:PanelHeaderProps) => {
  return <h1 className='text-[14px] xl:text-[16px] text-[#686B6E] font-semibold'>{title}</h1>
}

export default PanelHeader
