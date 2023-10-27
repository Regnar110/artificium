import React from 'react'

interface Props {
    top_title:string,
    subtitle:string,
    modalIsOpen:boolean
    setModal: (new_status: boolean) => void
}
const ModalHeader = ({top_title, subtitle, modalIsOpen, setModal}:Props) => {
  return (
    <header className='header_and_close w-full flex flex-col'>
        <div className='header_text_with_button flex justify-between'>
        <h1 className='text-white text-[28px] whitespace-nowrap w-fit'>{top_title}</h1>
        <button className='text-red-500 text-[20px] font-extrabold w-fit cursor-pointer' onClick={()=> {setModal(!modalIsOpen)}}>x</button>                 
        </div>
        <span className='text-[#9B9C9E] text-[16px]'>{subtitle}</span>          
    </header>
  )
}

export default ModalHeader
