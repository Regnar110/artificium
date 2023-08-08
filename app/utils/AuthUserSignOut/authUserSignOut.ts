'use client'
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { signOut } from "next-auth/react";
import { signOutUser } from "@/redux/slices/userSession/userSessionSlice";
import { userAccessRequest } from "../UserAccessRequest";
import { turnOnNotification } from "@/app/AppComponents/ToastNotifications/TurnOnNotification";

interface Props {
    userProvider:Providers,
    authUserId:string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}
export const authUserSignOut = async ({userProvider, authUserId, dispatch}:Props) => {
    console.log(userProvider)
    const logoutRequest = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse, {authUserId:string}>("userLogout", {authUserId})
    if(logoutRequest.status === 200) {
        dispatch(signOutUser())
        turnOnNotification({response:logoutRequest})
        if(userProvider === 'google') await signOut()
    } else {
        turnOnNotification({response:logoutRequest})
    }
}