'use client'
import artificium_icon from '../../../../../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../../../../../public/Dashboard/UserBoard/chat.svg'
import library from '../../../../../../public/Dashboard/UserBoard/library.svg'
import React, {useState} from 'react'
import ChattingWindow from './ChattingWindow'

type ClickedWindowTypes = "artificium" | "chat" | "library"

const ChatingWindowsWrapper = () => {
    
    const [ windowClicked, setWindowClicked ] = useState<ClickedWindowTypes>("artificium")
    const onWindowClick = (targetId:ClickedWindowTypes) => {
        console.log(targetId)
        setWindowClicked(targetId)
    }

    return (
        <div className='chatting_windows_icons font-plus_jakarta_sans flex gap-10'>
            <ChattingWindow window_slug='artificium' window_icon={artificium_icon} window_name='Artificium' onClick={onWindowClick} isClicked={windowClicked==="artificium" ? true:false}/>
            <ChattingWindow window_slug='chat' window_icon={chat} window_name='Chat' onClick={onWindowClick} isClicked={windowClicked==="chat" ? true:false}/>
            <ChattingWindow window_slug='library' window_icon={library} window_name='Library' onClick={onWindowClick} isClicked={windowClicked==="library" ? true:false}/>   
        </div>        
    )
}

export default ChatingWindowsWrapper
