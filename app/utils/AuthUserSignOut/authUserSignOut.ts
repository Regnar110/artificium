'use client'
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { signOut } from "next-auth/react";
import { signOutUser } from "@/redux/slices/userSession/userSessionSlice";
import { userAccessRequest } from "../UserAccessRequest";
import { turnOnNotification } from "@/app/AppComponents/ToastNotifications/TurnOnNotification";
import { Session } from "next-auth";

interface Props {
    providerSession:Session,
    userSession:boolean,
    authUser:string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}
export const authUserSignOut = async ({providerSession, userSession, authUser, dispatch}:Props) => {
    const logoutRequest = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse, {authUser:string}>("userLogout", {authUser})
    if(logoutRequest.status === 200) { // jeżeli status zalogowania użytkownika w dokumencie mongoDB zmienił się na false
        // PONIŻEJ OPERACJE PO STRONIE KLIENTA - ZMIANA STANU APLIKACJI
        if(providerSession === null) {
            //UŻYTKOWNIK NIE ZALOGOWANY PRZEZ PROVIDERA. Sprawdzamy dalej, czy jest zalogowany rpzy pomocy formularza
            if(userSession) { 
              // Użytkownik zalogowany przez formularz - wylogowujemy go
              localStorage.clear()
              dispatch(signOutUser())
            } else {
              // użytkownik nie jest zalogowany w ogóle. Opuszczamy funkcję
              return
            }
          } else {
            //Wylogowanie użytkownika zalogowanego za pośrednictwem providera
            await (async ()=> {
              localStorage.clear()
              dispatch(signOutUser())
            })() 
            await signOut({ callbackUrl: 'http://localhost:3000/login' })

          }
        turnOnNotification({response:logoutRequest})
    } else {
        turnOnNotification({response:logoutRequest})
    }
}