import React, { useState } from 'react'
import ChatWrapper from './Components/Chat/ChatWrapper'
import FriendsListWrapper from './Components/UserList/FriendsListWrapper/FriendsListWrapper'
const ChatPanel = () => {
  const [friendsVisible, setFriendsVisible] = useState<boolean>(true)
  return (
    <section className='relative flex w-full h-full overflow-hidden rounded-lg mt-5'>
      <ChatWrapper friendsVisibility={friendsVisible}/>
      <FriendsListWrapper friendsVisible setFriendsVisible={setFriendsVisible}/>
    </section>
  )
}

export default ChatPanel
