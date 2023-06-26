'use client'
import React, {useState} from 'react'

interface WrapperProps {
    children:JSX.Element[]
}
const ChatingWindowsWrapper = ({children}:WrapperProps) => {
    
    const [ windowClicked, setWindowClicked ] = useState<"artificium" | "chat" | "library" | "">("")

    return (
        <div className='chatting_windows_icons font-plus_jakarta_sans flex gap-10'>
            {children.map(el=>el)}
            {/* {children.map((el,i) =>{
                const checkSelectResult = el.props.id === windowClicked ? true:false
                const clonedElement = React.cloneElement(el, {key:i})
                console.log(clonedElement)
                return clonedElement
            })} */}
        </div>        
    )
}

export default ChatingWindowsWrapper
