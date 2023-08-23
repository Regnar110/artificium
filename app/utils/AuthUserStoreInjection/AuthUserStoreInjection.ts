import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { injectUser } from "@/redux/slices/userSession/userSessionSlice";
import store from "@/redux/store/store";

interface InjectionProps {
    user: Partial<AuthenticatedUser>;
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}

export const AuthUserStoreInjection = ({user, dispatch}:InjectionProps) => {
    console.log("DIspatched user is")
    console.log(user)
    dispatch(injectUser(user))

}
        //Funkcja do której będzie przekazywany obiekt użytkownika z logowania
        // Po jego przekazaniu będzie on wsadzany do store jako uwierzytelniony użytkownik.
        // To da prawo użytkownikowi do przejścia do dalszej części aplikacji