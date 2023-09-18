'use client'
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { signOut } from "next-auth/react";
import { signOutUser } from "@/redux/slices/userSession/userSessionSlice";
import { userAccessRequest } from "../UserAccessRequest";
import { persistor } from "@/redux/store/store";
import { ioInstance } from "../SocketInstance/socketInstance";
import { resetGroups } from "@/redux/slices/chattingWindows/chattingWindowsSlice";
import { _emit_USER_IS_OFFLINE, unsubscribeFriendListListeners } from "../SocketFriendListHandlers/SocketFriendListHandlers";

interface Props {
    userProvider: "google" | "artificium",
    authUser:string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
    groupId?:String,
}
export const authUserSignOut = async ({userProvider, authUser, dispatch, groupId}:Props) => {
    // persistor nam potrzebny do wyczyszczenia z pamięci podręcznej przegladarki danych zalogowanego użytkownika celem prawidłowego jego wylogowania i zakończenia jego sesji.
    // dalej będzie używana metoda purge obiektu persistor, która czyści dane z utrwalonego stanu w pamięci podręcznej przegladarki
    // Najpierw będziemy przywracać stan userSession do initialState a potem czyścimy pamięc podręczną.

    // UWAGA!!  Bez powyższego rozwiązania po przywróceniu tylko stanu do initialState przy ponownym wyrenderowaniu komponentu, który będzie powodowany
    // w trakcie realizacji funkcjonalności, userSession zostanie ponownie wypełniony danymi z pamięci podręcznej, czyli tak jak byśmy w ogóle nie wylogowali użytkownika!

    const logoutRequest = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse, {authUser:string}>("userLogout", {authUser})
    if(logoutRequest.status === 200) { // jeżeli status zalogowania użytkownika w dokumencie mongoDB zmienił się na false
        // PONIŻEJ OPERACJE PO STRONIE KLIENTA - ZMIANA STANU APLIKACJI
        const socket = ioInstance.getActiveSocket()
        // JEŻELI UŻYTKOWNIK BYŁ W TRAKCIE WYLOGOWYWANIA W JAKIEJŚĆ GRUPIE TO ZOSTAJE Z NIEJ USUNIĘTY.
        if(groupId) {
            socket.emit("LEAVE_GROUP_ROOM", groupId, authUser)
            

            // RESETUJEMY STAN WYBRANYCH PRZEZ UZYTKOWNIKA GRUP I OKIEN CZATÓW. MA TO NA CELU WYMUSZENIE PRZY ODŚWIEŻENIU LUB PONOWNYM ZALOGOWANIU DO APLIKACJI WYBRANIE PONOWNIE GRUPY
            // - ELIMINUJE TO KILKA BŁĘDÓW, KTÓRE BYŁY WYWOŁYWANE PRZEZ KILKUKROTNE WYWOŁYWANIE JOIN_GROUP_ROOM ( PRZEZ RE-RENDER KOMPONENTU GROUPS )
            dispatch(resetGroups())            
        }

        _emit_USER_IS_OFFLINE(socket, authUser)
        unsubscribeFriendListListeners(socket, authUser)
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