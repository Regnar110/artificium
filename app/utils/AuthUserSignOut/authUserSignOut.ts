'use client'
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { AuthUserStoreInjection } from "../AuthUserStoreInjection/AuthUserStoreInjection";
import { signOut } from "next-auth/react";

interface Props {
    userProvider:string
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}
export const authUserSignOut = ({userProvider, dispatch}:Props) => {
    if(userProvider === 'artificium') {
        AuthUserStoreInjection({user:{}, dispatch})
    } else if(userProvider === 'google') {
        AuthUserStoreInjection({user:{}, dispatch})
        signOut()
    }
}