import React from 'react'

interface Props {
    children:JSX.Element | JSX.Element[]
    stickyHeader:string
    scrollActive?:boolean
}
const ModalScrollContainer = ({children, stickyHeader, scrollActive=true}:Props) => {
    const childElements = Array.isArray(children) ? children : [children]
  return (
    <section className='grid_scroll_mailbox bg-[#0D0F10] h-full rounded-md px-1'>
    <h5 className='bg-[#0D0F10] text-[#9B9C9E] text-[16px] w-full px-4 py-2'>{stickyHeader}</h5>
    <article className={`scrollable_mailbox_container px-1 py-1 flex flex-col h-[300px] ${scrollActive ?'overflow-x-hidden overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10] scrollbar-track-transparent':"overflow-hidden"}`}>
        {childElements.map(el=>el)}
    </article>

  </section>
  )
}

export default ModalScrollContainer
