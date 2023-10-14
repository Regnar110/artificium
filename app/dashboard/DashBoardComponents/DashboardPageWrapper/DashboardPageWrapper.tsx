'use client'
import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
import { useAppSelector } from '@/redux/hooks/typedHooks'
import { getUserId, isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
  children: JSX.Element[]
}

const DashboardPageWrapper = ({children}:Props) => {
    const router = useRouter()
    const [DOMStatus, setDOMStatus] = useState<boolean>(false)
    const userSession = useAppSelector(isUserAuthenticated)
    const userId = useAppSelector(getUserId)
    useEffect(() => {
        if(userSession === true) { // sprawdzamy czy sesja użytkownika aplikacji została umieszczona w storew
          setDOMStatus(true) // umożliwiamy dostęp do części aplikacji

          //Tutaj następuje uruchomienie nowego połączenia z socket io gdy użytkownik np. nie wyloguje się z aplikacji.
          // Refresh strony powoduje zamknięcie połączenia z socket io. Tutaj otwieramy nowe.
          if(!ioInstance.activeSocketId) (async()=>ioInstance.getSocketInstance(userId))();

          
        } else {
          setDOMStatus(false)
          router.push("/login")
        }

    },[userSession])
  return DOMStatus ?
    <main className='dashboard box-border text-black bg-[#1A1D21] w-full flex justify-start items-start gap-0 min-h-[screen] overflow-hidden'>
      {children.map(el => el)}
    </main>
  :
  <PageLoader/>
}

export default DashboardPageWrapper


// dashboard box-border text-black bg-[#131619] w-full flex justify-center items-center gap-3 min-h-[screen] overflow-hidden - OLDD CLASSNAMES


// STARY DASH
// 'use client'
// import PageLoader from '@/app/AppComponents/PageLoader/PageLoader'
// import { ioInstance } from '@/app/utils/SocketInstance/socketInstance'
// import { useAppSelector } from '@/redux/hooks/typedHooks'
// import { getUserId, isUserAuthenticated } from '@/redux/slices/userSession/userSessionSlice'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// interface Props {
//   children: JSX.Element[]
// }

// const DashboardPageWrapper = ({children}:Props) => {
//     const router = useRouter()
//     const [DOMStatus, setDOMStatus] = useState<boolean>(false)
//     const userSession = useAppSelector(isUserAuthenticated)
//     const userId = useAppSelector(getUserId)
//     useEffect(() => {
//         if(userSession === true) { // sprawdzamy czy sesja użytkownika aplikacji została umieszczona w storew
//           setDOMStatus(true) // umożliwiamy dostęp do części aplikacji

//           //Tutaj następuje uruchomienie nowego połączenia z socket io gdy użytkownik np. nie wyloguje się z aplikacji.
//           // Refresh strony powoduje zamknięcie połączenia z socket io. Tutaj otwieramy nowe.
//           if(!ioInstance.activeSocketId) (async()=>ioInstance.getSocketInstance(userId))();

          
//         } else {
//           setDOMStatus(false)
//           router.push("/login")
//         }

//     },[userSession])
//   return DOMStatus ?
//     <main className='dashboard box-border text-black bg-[#1A1D21] w-full flex justify-start items-center gap-0 min-h-[screen] overflow-hidden'>
//       {children.map(el => el)}
//     </main>
//   :
//   <PageLoader/>
// }

// export default DashboardPageWrapper
