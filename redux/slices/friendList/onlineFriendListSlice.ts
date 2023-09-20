import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FriendList = []

export const onlineFriendListSlice = createSlice({
    name: 'onlineFriendList',
    initialState,
    reducers: {

        ONLINE_injectUserToFriendList: (state, action:PayloadAction<Friend[]>) => {
            // TO DO: Do stanu zostaje wstrzyknięte pole obiektu isOnline. Nie jest nam ono do niczego potrzbne. Usunąć.
            const userToInject = action.payload
            state.push(...userToInject)
        },
        ONLINE_removeUserFromFriendList: (state, action:PayloadAction<string>) => {
            console.log("REMOVING USER FROM FRIENDLIST")
            return state.filter(user => user._id !== action.payload)

        }
    }
}) 

export const { ONLINE_injectUserToFriendList, ONLINE_removeUserFromFriendList} = onlineFriendListSlice.actions

export default onlineFriendListSlice.reducer
//SELEKTORY

export const getOnlineUsers = (state:RootState) => state.onlineFriendList