import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState: Partial<AuthenticatedUser>  = {}

export const userSessionSlice = createSlice({
    name: 'userSession',
    initialState,
    reducers: {
        injectUser: (state, action:PayloadAction<AuthenticatedUser>) => {
            state = Object.assign(state, action.payload)
        },
        signOutUser: () => initialState
    }
}) 

export const { injectUser, signOutUser} = userSessionSlice.actions

export default userSessionSlice.reducer
//SELEKTORY

export const isUserAuthenticated = (state:RootState):boolean => {
    // Na bazie tego selektora aplikacja będzie miała wiedzę na temat tego czy uzytkownik jest zalogowany i czy ma prawo uzyskać dostęp
    // do dalszych części aplikacji.
    return state.userSession._id ? true : false
}

export const showUserObject = (state:RootState):Partial<AuthenticatedUser> => {
    return state.userSession
}