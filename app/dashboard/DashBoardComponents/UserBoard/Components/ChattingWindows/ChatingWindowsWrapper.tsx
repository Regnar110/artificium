'use client'
import artificium_icon from '../../../../../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../../../../../public/Dashboard/UserBoard/chat.svg'
import library from '../../../../../../public/Dashboard/UserBoard/library.svg'
import React, {useEffect, useState} from 'react'
import ChattingWindow from './ChattingWindow'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { selectWindow } from '@/redux/slices/chattingWindows/chattingWindowsSlice'

type ClickedWindowTypes = "artificium" | "chat" | "library"
const ChatingWindowsWrapper = () => {
    const dispatch = useAppDispatch()
    const [ windowClicked, setWindowClicked ] = useState<ClickedWindowTypes>("artificium")
    const onWindowClick = (targetId:ClickedWindowTypes) => {
        dispatch(selectWindow(targetId))
        setWindowClicked(targetId)
    }

    return (
        <div className='chatting_windows_icons font-plus_jakarta_sans flex  gap-10 relative '>
            <ChattingWindow window_slug='artificium' window_icon={artificium_icon} window_name='Artificium' onClick={onWindowClick} isClicked={windowClicked==="artificium" ? true:false}/>
            <ChattingWindow window_slug='chat' window_icon={chat} window_name='Chat' onClick={onWindowClick} isClicked={windowClicked==="chat" ? true:false}/>
            <ChattingWindow window_slug='library' window_icon={library} window_name='Library' onClick={onWindowClick} isClicked={windowClicked==="library" ? true:false}/>   
        </div>        
    )
}

export default ChatingWindowsWrapper
