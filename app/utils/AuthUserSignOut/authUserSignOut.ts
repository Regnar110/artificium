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
import { turnOnNotification } from "@/app/AppComponents/ToastNotifications/TurnOnNotification";
import { _emit_LEAVE_GROUP_ROOM } from "../SocketGroupRoomHandlers.ts/SocketGroupRoomHandlers";

interface Props {
    userProvider: "google" | "artificium",
    authUser:string,
    authUserFriends:string[]
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
    groupId?:string,
    sendRequestWithBeaconAPI?:boolean
}
export const authUserSignOut = async ({userProvider, authUser, authUserFriends, dispatch, groupId, sendRequestWithBeaconAPI=false}:Props) => {
    //DLACZEGO GDY SOCKET JEST ZDEFINIOWANY PO ZA BLOKIEM IF PONIŻEJ DZIAŁA POPRAWNIE Z EMITERAMI. A JEŻELI EJST W SRODKU IF TO WYWOŁU SIĘ TYLKO PIERWSZY NAPOTKANY EMIT??
    var socket = ioInstance.getActiveSocket()
    _emit_USER_IS_OFFLINE(socket, authUser, authUserFriends, groupId!)
    if(groupId) {
        _emit_LEAVE_GROUP_ROOM(socket, groupId, authUser)
        // RESETUJEMY STAN WYBRANYCH PRZEZ UZYTKOWNIKA GRUP I OKIEN CZATÓW. MA TO NA CELU WYMUSZENIE PRZY ODŚWIEŻENIU LUB PONOWNYM ZALOGOWANIU DO APLIKACJI WYBRANIE PONOWNIE GRUPY
        // - ELIMINUJE TO KILKA BŁĘDÓW, KTÓRE BYŁY WYWOŁYWANE PRZEZ KILKUKROTNE WYWOŁYWANIE JOIN_GROUP_ROOM ( PRZEZ RE-RENDER KOMPONENTU GROUPS )
        // NIEKATYWNE ZE WZGLĘDU N DOODANIE RESETOWALNEGO ROOT REDUCERA - DO PRZETESTOWANIA!!!!
        // dispatch(resetGroups())            
    }
    // persistor nam potrzebny do wyczyszczenia z pamięci podręcznej przegladarki danych zalogowanego użytkownika celem prawidłowego jego wylogowania i zakończenia jego sesji.
    // dalej będzie używana metoda purge obiektu persistor, która czyści dane z utrwalonego stanu w pamięci podręcznej przegladarki
    // Najpierw będziemy przywracać stan userSession do initialState a potem czyścimy pamięc podręczną.

    // UWAGA!!  Bez powyższego rozwiązania po przywróceniu tylko stanu do initialState przy ponownym wyrenderowaniu komponentu, który będzie powodowany
    // w trakcie realizacji funkcjonalności, userSession zostanie ponownie wypełniony danymi z pamięci podręcznej, czyli tak jak byśmy w ogóle nie wylogowali użytkownika!
    if(!sendRequestWithBeaconAPI) {
        const logoutRequest = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse, {authUser:string}>("userLogout", {authUser})
        if(logoutRequest.status === 200) {
            // jeżeli status zalogowania użytkownika w dokumencie mongoDB zmienił się na false
            // PONIŻEJ OPERACJE PO STRONIE KLIENTA - ZMIANA STANU APLIKACJI
            // JEŻELI UŻYTKOWNIK BYŁ W TRAKCIE WYLOGOWYWANIA W JAKIEJŚĆ GRUPIE TO ZOSTAJE Z NIEJ USUNIĘTY.
            unsubscribeFriendListListeners(socket, authUser)
            dispatch(signOutUser())
            if(userProvider === "google") {
                await signOut()
            }
            await persistor.purge()
            ioInstance.closeSocketInstanceConnection()
        }      
        return logoutRequest  
    } else if(sendRequestWithBeaconAPI === true) {
        const beaconData = new FormData()
        beaconData.append('authUser', JSON.stringify(authUser))
        navigator.sendBeacon(`http://localhost:3001/userLogout`, beaconData)
    }


}        
