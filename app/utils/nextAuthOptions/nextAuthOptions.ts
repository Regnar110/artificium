
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { userAccessRequest } from "../UserAccessRequest";
import { ioInstance } from "../SocketInstance/socketInstance";
import store from "@/redux/store/store";
import { injectSocketInstance } from "@/redux/slices/socketInstance/socketInstanceSlice";
import { AuthUserStoreInjection } from "../AuthUserStoreInjection/AuthUserStoreInjection";
import { injectUser } from "@/redux/slices/userSession/userSessionSlice";

export const nextAuthOptions:NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_KEY as string,
            authorization: {
              params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code",
              
              },
            },
  
          }),
    ],
    callbacks: {
      // async signIn({ user, account, profile }) {

        // const socket = await ioInstance.getSocketInstance()
        // console.log("NEXT AUTH SOCKET ID")
        // console.log(socket.id)
        //   const userData = { // tworzmy obiekt użytkownika na wypadek gdy jest on nowym użytkownikiem. Obiekt ten posłuży w razie co do rejestracji w bazie
        //     ...user,
        //     nickname: (user.name as string).replace(/\s/g, ''),
        //     provider:"google",
        //     socket:socket!.id
        //   } as RegisterFormData
        //   delete userData.image
        //   delete userData.id
        //   delete userData.name
          
          // console.log("NEW CREATED USER DATA:")
          // console.log(userData)
          // console.log("SOCKET ID")
          // console.log(socket.io.engine.id)
          // console.log("SOCKET CONNECTED TO:")
          // console.log(socket.connected)

      //     let logInResponse = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
      //     if(logInResponse.status === 200) {
      //       console.log("54: UDAŁO SIĘ ZALOGOWAĆ UZYTKOWNIKA GOOGLE")
      //       console.log(logInResponse.body)
      //       AuthUserStoreInjection({
      //         user: logInResponse.body,
      //         dispatch: store.dispatch
      //       })

      //       // store.dispatch(injectUser(logInResponse.body))

      //       user = logInResponse.body
      //       console.log("Nowy user to")
      //       console.log(user)
      //       return true
      //     } else {
      //       // console.log("57: NIE UDAŁO SIĘ ZALOGOWAĆ UZYTKOWNIKA GOOGLE. KOŃCZENIE POŁĄCZENIA SOCKET")
      //       ioInstance.closeSocketInstanceConnection()
      //       return false
      //     }
      // },
      // async session({session,user}) {
      //   console.log("SESJA")
      //   console.log(session)
      //   return session
      // }
      //TUTAJ MUSIMY ZMIENIĆ ŻEBY NAJPIER BYŁO NAWIĄZYWANE POŁACZENIE Z SOCKET.iO A POTEM PRÓBA LOGOWANIA UŻYTKOWNIKA!
        // async session({session}) {
        //   console.log("WYWOŁANE SESJI LOGOWANIA")
        //   // po wywołaniu sign in i "zalogowaniu się" wywoływany ejst ten callback który ma zwrócić sesję.
        //   // Przed jej zwróceniem ustalamy
        //   const userData = { // tworzmy obiekt użytkownika na wypadek gdy jest on nowym użytkownikiem. Obiekt ten posłuży w razie co do rejestracji w bazie
        //     ...session.user,
        //     nickname: (session.user?.name as string).replace(/\s/g, ''),
        //     provider:"google",
        //   } as RegisterFormData
        //   //usuwamy właściwiości obiektu, które nie są zgodne z typem obiektu RegisterFormData i są nam nie potrzebne
          // delete userData.image
          // delete userData.id
          // delete userData.name

        //   let socket = getSocketInstance()
        //   const isSocketConnected = await new Promise(resolve => {
        //     if(socket.connected) {
        //       resolve(true)
        //     } else {
        //       socket.once('connect', () => resolve(true)) // jeżeli socket zostanie połączony natychmiast zwracamy true
        //     }
        //   })
        //   // console.log("isSocketConnected to: " + isSocketConnected)

        //   switch (isSocketConnected) {
        //     // Jeżeli socket jest połączony
        //     case true: 
        //       // console.log("51: isSocketConnected to: TRUE")
        //       // store.dispatch(injectSocketInstance(socket))
        //       // logujemy uzytkownika.
        //       let logInResponse = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
        //       if(logInResponse.status === 200) {
        //         console.log("54: UDAŁO SIĘ ZALOGOWAĆ UZYTKOWNIKA GOOGLE")
        //         // console.log(socket.id)
        //         session.user = {
        //           ...logInResponse,
        //           socket_id:socket.id
        //         }
        //       } else {
        //         console.log("57: NIE UDAŁO SIĘ ZALOGOWAĆ UZYTKOWNIKA GOOGLE")
        //         socket.disconnect()
        //         session.user = logInResponse
        //       }
        //       break;
        //     // Jeżeli socket nie jest połączony
        //     case false: 
        //       // console.log("isSocketConnected to: FALSE")
        //       const errorResponse = {
        //         error_message:"CLIENT ERROR: Failed to establish connection with server socket io",
        //         client_message:"Failed to establish a stable connection to the server",
        //         status: 510
        //       }
        //       session.user = errorResponse
        //       break;
        //   }
        //   // console.log("ZWRÓCONA SESJA TO:")
        //   // console.log(session)
        //   //   // zwracamy sesję, która w toku działania funkcji staje się obiektem powodzenia lub błędu UserAccessSuccessResponse lub UserAccessErrorResponse
        //     return session

        //   //Ogólnie w tej funkcji zwracamy zawsze sesję. Ale w drodze uwierzytelniania sprawdzamy czy:
        //     // użytkownik istnieje i dane są zgodne
        //     // oraz czy użytkownik nie istnieje i wymaga rejestacji
        //     // żeby użytkownik sesji zalogował się i uzyskał dostęp do reszty aplikacji
        //     // musi on mieć utworzoną sesję GOOGLE oraz(!!!) zostać sprawdzony w db czy istnieje lub w niej zarejestrowany
        //     // Za każdym razem w odpowiedzi otrzymamy odpowiednią odpowiedź w postaci obiektu z kodem reprezentującym status naszego żądania
        //     // Jeżeli jest 200 - użytkownik jest uwierzytelniony, jeżeli 500 - coś poszło nie tak po stronie serwera - brak zgody na dostęp do aplikacji
        // }
    },
    // session: {
    //   strategy:"jwt"
    // }
}