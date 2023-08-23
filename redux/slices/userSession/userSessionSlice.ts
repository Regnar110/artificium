import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Root } from "postcss";

const initialState: Partial<AuthenticatedUser>  = {}

export const userSessionSlice = createSlice({
    name: 'userSession',
    initialState,
    reducers: {
        injectUser: (state, action:PayloadAction<Partial<AuthenticatedUser>>) => {
            state = Object.assign(state, action.payload)
            console.log(state._id)
        },
        signOutUser: () => initialState
    }
}) 

export const { injectUser, signOutUser} = userSessionSlice.actions

export default userSessionSlice.reducer
//SELEKTORY
export const getUserObject = (state:RootState):Partial<AuthenticatedUser> => {
    return state.userSession
}
export const isUserAuthenticated = (state:RootState):boolean => {
    // Na bazie tego selektora aplikacja będzie miała wiedzę na temat tego czy uzytkownik jest zalogowany i czy ma prawo uzyskać dostęp
    // do dalszych części aplikacji.
    return state.userSession._id ? true : false
}

export const getUserProvider = (state:RootState):"artificium"|"google" => {
    return state.userSession.provider!
}

export const getUserId = (state:RootState):string => {
    return state.userSession._id!
}