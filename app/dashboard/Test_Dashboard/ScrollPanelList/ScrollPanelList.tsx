import React from 'react'

interface Props {
    header:string,
    children:JSX.Element[],
    className?:string
}
const ScrollPanelList = ({header, children, className}:Props) => {
  return (
    <div className={`scroll_panel_list h-full flex flex-col overflow-hidden pt-5 px-6 ${className && className}`}>
        <h3 className='scroll_list_header pl-2 text-[14px]'>{header.toUpperCase()}</h3>
        <div className='scrollable_elements_wrapper overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
            {children.map(component => (
                <div className='scroll_element flex hover:bg-[#363A3D] rounded-sm px-2 py-2 cursor-pointer'>
                    {component}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ScrollPanelList
