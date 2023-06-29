import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import user_avatar from '../../../../../../../public/Dashboard/UserBoard/user_avatar.png'
const ChatWindow = () => {
  return (
    <div id='chat_window' className='relative flex h-full flex-col gap-5 overflow-scroll overflow-x-hidden scrollbar scrollbar-w-[3px] scrollbar-thumb-[#0D0F10] scrollbar-track-[#131619]'>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
        <ChatMessage user_avatar={user_avatar} user_nickname='Mateusz Wrycza' message='Loremfasjfkasfjkaskjfjkasfkalksflasfkhlkasflaslhfkhlkasfhalhfslhasflkhaflhasfhlkafllhkasflk'/>
    </div>
  )
}

export default ChatWindow
