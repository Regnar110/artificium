import React from 'react'

interface Props {
    children:JSX.Element[]
}
const ModalGlassContainer = ({children}:Props) => {
  return (
    <section className={`bg-[#ffffff13] backdrop-blur-md bg-opacity-20 drop-shadow-lg p-5 max-w-[600px] flex flex-col justify-center items-center gap-8 rounded-md font-plus_jakarta_sans`}>
      {children.map(child=>child)}
    </section>
  )
}

export default ModalGlassContainer
