import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FriendList = []

export const offlineFriendListSlice = createSlice({
    name: 'offlineFriendList',
    initialState,
    reducers: {

        OFFLINE_injectUserToFriendList: (state, action:PayloadAction<Friend[]>) => {
            // TO DO: Do stanu zostaje wstrzyknięte pole obiektu isOnline. Nie jest nam ono do niczego potrzbne. Usunąć.
            const userToInject = action.payload
            state.push(...userToInject)
        },
        
        OFFLINE_removeUserFromFriendList: (state, action:PayloadAction<string>) => {
            console.log("REMOVING USER FROM OFFLINE FRIENDLIST")
            return state.filter(user => user._id !== action.payload)

        }
    }
}) 

export const { OFFLINE_injectUserToFriendList, OFFLINE_removeUserFromFriendList} = offlineFriendListSlice.actions

export default offlineFriendListSlice.reducer
//SELEKTORY

export const getOfflineUsers = (state:RootState) => state.offlineFriendList