'use client'
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { signOut } from "next-auth/react";
import { signOutUser } from "@/redux/slices/userSession/userSessionSlice";
import { userAccessRequest } from "../UserAccessRequest";
import { persistor } from "@/redux/store/store";
import { ioInstance } from "../SocketInstance/socketInstance";

interface Props {
    userProvider: "google" | "artificium",
    authUser:string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}
export const authUserSignOut = async ({userProvider, authUser, dispatch}:Props) => {
    // persistor nam potrzebny do wyczyszczenia z pamięci podręcznej przegladarki danych zalogowanego użytkownika celem prawidłowego jego wylogowania i zakończenia jego sesji.
    // dalej będzie używana metoda purge obiektu persistor, która czyści dane z utrwalonego stanu w pamięci podręcznej przegladarki
    // Najpierw będziemy przywracać stan userSession do initialState a potem czyścimy pamięc podręczną.

    // UWAGA!!  Bez powyższego rozwiązania po przywróceniu tylko stanu do initialState przy ponownym wyrenderowaniu komponentu, który będzie powodowany
    // w trakcie realizacji funkcjonalności, userSession zostanie ponownie wypełniony danymi z pamięci podręcznej, czyli tak jak byśmy w ogóle nie wylogowali użytkownika!

    const logoutRequest = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse, {authUser:string}>("userLogout", {authUser})
    if(logoutRequest.status === 200) { // jeżeli status zalogowania użytkownika w dokumencie mongoDB zmienił się na false
        // PONIŻEJ OPERACJE PO STRONIE KLIENTA - ZMIANA STANU APLIKACJI
        dispatch(signOutUser())
        if(userProvider === "google") {
          await signOut()
        }
        await persistor.purge()
        ioInstance.closeSocketInstanceConnection()
    }
    return logoutRequest
}        









// if(userProvider === "artificium") {
        //     //UŻYTKOWNIK NIE ZALOGOWANY PRZEZ PROVIDERA GOOGLE. Sprawdzamy dalej, czy jest zalogowany rpzy pomocy formularza
        //     if(userSession) { 
        //       // Użytkownik zalogowany przez formularz - wylogowujemy go
              
              

        //       //zamykamy połączenie z socketem
        //       ioInstance.closeSocketInstanceConnection()
        //       await persistor.purge()
        //     } else {
        //       // użytkownik nie jest zalogowany w ogóle. Opuszczamy funkcję
        //       return
        //     }
        //   } else if(userProvider === "google") {
        //     //Wylogowanie użytkownika zalogowanego za pośrednictwem providera

        //     //redirect : false sprawia że strona po wykonaniu signOut nie jest reloadowana
        //     await signOut()
            
            
        //     await (async ()=> {
        //       dispatch(signOutUser())
        //       ioInstance.closeSocketInstanceConnection()
        //       await persistor.purge()
        //     })() 
        //   }