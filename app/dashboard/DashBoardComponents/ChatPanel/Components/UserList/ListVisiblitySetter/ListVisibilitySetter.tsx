import React from 'react'
import Image from 'next/image'
import hide from '../../../../../../../public/buttons/slider_buttons/slide_right.svg'

interface Props {
    friendsVisible: boolean
    setFriendsVisible:React.Dispatch<React.SetStateAction<boolean>>
}
const ListVisibilitySetter = ({friendsVisible, setFriendsVisible}:Props) => {
  return (
    <div onClick={() => setFriendsVisible(!friendsVisible)} className='absolute_hide_button absolute cursor-pointer w-[30px] h-[80px] bg-[#000] px-1 right-0 top-[50%] flex justify-center items-center rounded-lg'>
        <Image className={`${friendsVisible === true ? "rotate-0": "rotate-180"} w-fit`} src={hide} alt={"hide friends"}/>
        <span className='friends_visibility font-plus_jakarta_sans text-[16px] text-[#fff] w-[80px] h-[10px] rotate-90'>Friends</span>
    </div>
  )
}

export default ListVisibilitySetter
