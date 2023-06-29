'use client'
import artificium_icon from '../../../../../../public/Dashboard/UserBoard/artificium_icon.svg'
import chat from '../../../../../../public/Dashboard/UserBoard/chat.svg'
import library from '../../../../../../public/Dashboard/UserBoard/library.svg'
import React, {useEffect, useState} from 'react'
import ChattingWindow from './ChattingWindow'
import { renderFN } from '@/app/actions'
import { StaticImageData } from 'next/image'

type ClickedWindowTypes = "artificium" | "chat" | "library"
// interface Props {
//     renderItemsProps: {
//         window_slug:"artificium",
//         window_icon: StaticImageData,
//         window_name:"Artificium"
//       }[],
//       renderFn: (item:{ window_slug:"artificium",window_icon: StaticImageData, window_name:"Artificium"}, isClicked:boolean) =>Promise<JSX.Element>
// }
const ChatingWindowsWrapper = () => {
    renderFN("dddd")
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

// const ChatingWindowsWrapper = ({renderItemsProps, renderFn}:Props) => {
//     const [ windowClicked, setWindowClicked ] = useState<ClickedWindowTypes>("artificium")
//     const [ mounted, setIsMounted ] = useState<boolean>(false)
//     const onWindowClick = (targetId:ClickedWindowTypes) => {
//         console.log(targetId)
//         setWindowClicked(targetId)
//     }

//     useEffect(() => {
//         setIsMounted(true)
//         // w związku z tym że funkcja renderFn jest funkcją akcji servera nie może być ona renderowana przy montowaniu i renderowaniu komponentu od razu.
//         // Dlatego żeby ominąć ten błąd najpierw czekamy aby komponent sie zamontował. Potem asynchronicznie renderujemy żądaną zawartość.
//     },[])
//     console.log(renderItemsProps)
//     return mounted ?
//         <div className='chatting_windows_icons font-plus_jakarta_sans flex gap-10'>
//             {
//                 renderItemsProps.map(async (item, index) => await renderFn(item, true))
//             }
//         </div>        
//     :null
// }

export default ChatingWindowsWrapper
