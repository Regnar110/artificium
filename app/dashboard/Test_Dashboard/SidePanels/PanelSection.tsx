import React from 'react'

interface Props {
    children:JSX.Element[]
    status:boolean,
}
const PanelSection = ({children, status, }:Props) => {
  return (
    <section className={`panel_section bg-[#131619] relative shadow-2xl transition-all duration-300  shadow-black ${status === true ? "right-0 min-w-[200px]  md:w-[100%]":"right-full w-[0px]"} max-w-[70%] md:max-w-[200px] lg:max-w-[250px] flex flex-col justify-between items-center gap-y-3  h-[100vh]`}>
        {children.map(el=>el)}
    </section>
  )
}

export default PanelSection
