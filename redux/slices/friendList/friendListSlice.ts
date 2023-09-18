import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FriendList = []

export const friendListSlice = createSlice({
    name: 'friendList',
    initialState,
    reducers: {

        injectUserToFriendList: (state, action:PayloadAction<AuthenticatedUser>) => {
            // TO DO: Do stanu zostaje wstrzyknięte pole obiektu isOnline. Nie jest nam ono do niczego potrzbne. Usunąć.
            console.log("INJECTING USER TO FRIENDLIST")
            console.log(action.payload)
            const userToInject = action.payload
            state.push(userToInject)
        },
        removeUserFromFriendList: (state, action:PayloadAction<string>) => {
            console.log("REMOVING USER FROM FRIENDLIST")
            return state.filter(user => user._id !== action.payload)

        }
    }
}) 

export const { injectUserToFriendList, removeUserFromFriendList} = friendListSlice.actions

export default friendListSlice.reducer
//SELEKTORY

export const showFriendList = (state:RootState) => state.friendList