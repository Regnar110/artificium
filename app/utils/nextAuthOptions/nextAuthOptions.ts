
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { userAccessRequest } from "../UserAccessRequest";
import { getSocketInstance } from "../SocketInstance/socketInstance";

export const nextAuthOptions:NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_KEY as string,
            authorization: {
              params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
              }
            }
          }),
    ],
    callbacks: {
        async session({session}) {
          // po wywołaniu sign in i "zalogowaniu się" wywoływany ejst ten callback który ma zwrócić sesję.
          // Przed jej zwróceniem ustalamy
          const userData = { // tworzmy obiekt użytkownika na wypadek gdy jest on nowym użytkownikiem. Obiekt ten posłuży w razie co do rejestracji w bazie
            ...session.user,
            nickname: (session.user?.name as string).replace(/\s/g, ''),
            provider:"google",
          } as RegisterFormData
          //usuwamy właściwiości obiektu, które nie są zgodne z typem obiektu RegisterFormData i są nam nie potrzebne
          delete userData.image
          delete userData.id
          delete userData.name
          //logowanie - najpierw sprawdzimy czy konto z tym mailem istnieje już w bazie i czy provider się zgadza
          let response = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
          let modifiedResponse;
          if(response.status === 200) {
            // udało się zalgoować użytkownika po stronie serwera
            // Tworzymy nową instancję połączenia z serwerem Socket.io
            let socket = getSocketInstance({authUser: response.body._id})

            // Łączymy się z serwerem socket.io

            //Otrzymujmey odpowiedź z socketa odnośnie tego czy udało się połączyć czy nie ( true lub false)
            // Jeżeli odopowiedź jest false natychmiast zamykamy połaczenie, jeżeli true nie robimy nic.
            socket.on("connection_response", (data) => data === false ? socket.disconnect(): null)
            console.log(socket.connected)

            // Jeżeli socket.connect() zawiera pole connected z wartością false ( nie udało się połączyć )
            if(socket.connected === false) {
              // Jeżeli nie udał się nawiązać połączenia z socketem zwracamy obiekt błędu jako response oraz wylogowujemy użytkownika zmieniając jego status pola isOnline na false
              const logoutRequest = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse, {authUser:string}>("userLogout", {authUser: userData._id})
              response = {
                error_message:"CLIENT ERROR: Failed to establish connection with server socket io",
                client_message:"Failed to establish a stable connection to the server",
                status: 510
              }
              socket.close()    
              // session.user jest obiektem błędu 
              session.user = response
                   

              // Udało się połączyć z socketem.
            } else if (socket.connected === true) {
              // Obiekt response zawiera dane logowania uzytkownika
              // Pomyslknie zalogowany uzytkownik i pomyslnie utworzone połaczenie z socketem
              session.user = response       
            }
          } else {
            // Status logowania użytkownika po stronie serwera jest 500 lub 510.
            // session.user jest błędem po stronie serwera
            session.user = response 
          }
          console.log(session)
            // zwracamy sesję, która w toku działania funkcji staje się obiektem powodzenia lub błędu UserAccessSuccessResponse lub UserAccessErrorResponse
            return session

          //Ogólnie w tej funkcji zwracamy zawsze sesję. Ale w drodze uwierzytelniania sprawdzamy czy:
            // użytkownik istnieje i dane są zgodne
            // oraz czy użytkownik nie istnieje i wymaga rejestacji
            // żeby użytkownik sesji zalogował się i uzyskał dostęp do reszty aplikacji
            // musi on mieć utworzoną sesję GOOGLE oraz(!!!) zostać sprawdzony w db czy istnieje lub w niej zarejestrowany
            // Za każdym razem w odpowiedzi otrzymamy odpowiednią odpowiedź w postaci obiektu z kodem reprezentującym status naszego żądania
            // Jeżeli jest 200 - użytkownik jest uwierzytelniony, jeżeli 500 - coś poszło nie tak po stronie serwera - brak zgody na dostęp do aplikacji
        }
    }
}