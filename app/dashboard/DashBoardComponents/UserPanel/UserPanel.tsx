'use client'
import React, { useEffect } from 'react'
import UserHeader from './Components/UserHeader'
import General from './Components/General'
import Groups from './Components/Groups'
import BottomSettings from './Components/BottomSettings/BottomSettings'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId, isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { authUserSignOut } from '@/app/utils/AuthUserSignOut/authUserSignOut'
import { userAccessRequest } from '@/app/utils/UserAccessRequest'
import { injectInitialGroups } from '@/redux/slices/groups/groupsSlice'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'


const UserPanel = () => {
  // przy pobraniu instancji przekazujemy {} ponieważ domyślnie jeżeli użytkownik ma dostęp do tego komponentu to jest już sprawdzony
  // i zalogowany a także nawiązał połączenie z instancją socket.io na serwerze. Dzięki temu nie musimy inicjalizowac nowej instancji z użyciem identyfikatora authUser.
  const dispatch = useAppDispatch()
  const authUser = useAppSelector(getUserId)
  const logOut = async() => {
    await authUserSignOut({providerSession: providerSession.data as Session, userSession, authUser, dispatch})
  }
  const userSession = useAppSelector(isUserAuthenticated)
  const providerSession = useSession()
  useEffect(() => {
    // tutaj ściągamy z serwera( a ten z bazy danych ) najświeższe grupy
    const getGroups = async () => { 
      const response = await userAccessRequest<Group[] | UserAccessErrorResponse, any>('getUserGroups', {user_id: authUser})
      if('status' in response && response.status) {
        console.log(response)
      } else {
        dispatch(injectInitialGroups(response as Group[]))
      }
      return response
    }
    getGroups()

    // nie uzależniamy montowania komponentu od stanu grup. Tutaj tylko inicjalizujemy jego początkową wartość.
    //Komponent Groups(niżej) będzie bazował na tym początkowym stanie i będzie się on re-renderował gdy zostanie dodana nowa grupa.
  },[userSession, providerSession])
  // authUserSignOut({userProvider, authUserId, dispatch})
  return (
    <div className={`bg-[#0D0F10] min-w-[280px] w-full md:w-[280px] relative h-screen flex flex-col gap-y-5 justify-between rounded-lg py-8 px-6 min-h-[681px] overflow-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-thumb-[#0D0F10]  `}>
      <div className='flex-wrapper flex flex-col'>
        <button className='text-white text-[12px]' onClick={() => logOut()}>Log out</button>
        <UserHeader/>
        <General/>
        <Groups/>        
      </div>
      <BottomSettings/>
    </div>
  )
}

export default UserPanel
