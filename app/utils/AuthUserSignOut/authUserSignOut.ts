'use client'
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { signOut } from "next-auth/react";
import { signOutUser } from "@/redux/slices/userSession/userSessionSlice";

interface Props {
    userProvider:Providers
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}
export const authUserSignOut = async ({userProvider, dispatch}:Props) => {
    console.log(userProvider)
    if(userProvider === 'artificium') {
        dispatch(signOutUser())
    } else if(userProvider === 'google') {
        await signOut()
        dispatch(signOutUser())
    }
}