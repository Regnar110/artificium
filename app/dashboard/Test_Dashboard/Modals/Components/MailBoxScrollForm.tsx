
import React from 'react'
interface Props {
    children: JSX.Element | JSX.Element[]
}
const MailBoxScrollForm = ({children}:Props) => {
    const childComponents = Array.isArray(children) ? children : [children]
  return (
    <form id='MailBoxScrollForm' className='px-1 py-1 flex flex-col h-[300px] overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent'>
        {childComponents.map(el=>el)}
    </form>
  )
}

export default MailBoxScrollForm
