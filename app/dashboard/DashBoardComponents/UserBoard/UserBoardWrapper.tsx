import { useAppSelector } from '@/redux/hooks/typedHooks'
import { currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
import React from 'react'


interface Props {
    children: JSX.Element[]
}
const UserBoardWrapper = ({children}:Props) => {
  const {type ,status} = useAppSelector(currentUIState).controller_panel
  return (
    <section className={`text-white relative  w-[100%] h-[100vh]  place-items-center flex flex-col justify-center ${(type === "user" || type ==="group") && status===true ? "opacity-30 md:opacity-100": "opacity-100"}`}>
      {children.map(el=>el)}
    </section>
  )
}

export default UserBoardWrapper
