'use client'
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { signOut } from "next-auth/react";
import { signOutUser } from "@/redux/slices/userSession/userSessionSlice";
import { userAccessRequest } from "../UserAccessRequest";
import { turnOnNotification } from "@/app/AppComponents/ToastNotifications/TurnOnNotification";
import { Session } from "next-auth";

import { persistor } from "@/redux/store/store";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { getSocketInstance, ioInstance } from "../SocketInstance/socketInstance";

interface Props {
    userProvider: "google" | "artificium",
    userSession:boolean,
    authUser:string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}
export const authUserSignOut = async ({userProvider, userSession, authUser, dispatch}:Props) => {
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
        turnOnNotification({response:logoutRequest})
    } else {
        turnOnNotification({response:logoutRequest})
    }
}