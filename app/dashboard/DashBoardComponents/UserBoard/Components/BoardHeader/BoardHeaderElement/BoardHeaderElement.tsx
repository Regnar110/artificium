import React from 'react'

interface BoardHeaderElementProps {
    header:string;
    description:string
}
const BoardHeaderElement = ({header, description}:BoardHeaderElementProps) => {
  return (
    <div className='header max-w-[300px]'>
        <h1 className='text-[25px]'>{header}</h1>
        <span className='text-[16px] text-[#9B9C9E]'>{description}</span>
    </div>
  )
}

export default BoardHeaderElement
