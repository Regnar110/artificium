import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FriendList = []

export const offlineFriendListSlice = createSlice({
    name: 'offlineFriendList',
    initialState,
    reducers: {

        OFFLINE_initializeOfflineUsers: (state, action:PayloadAction<Friend[]>) => {
            const offline_users = action.payload
            state.push(...offline_users)
        },

        OFFLINE_injectUserToFriendList: (state, action:PayloadAction<Friend>) => {
            // const mutable_user = structuredClone(action.payload)
            // mutable_user.isOnline = false
            // state.push(mutable_user)
            const migrated_user = {...action.payload, isOnline:false}
            return [...state, migrated_user]
        },
        
        OFFLINE_removeUserFromFriendList: (state, action:PayloadAction<string>) => {
            console.log("REMOVING USER FROM OFFLINE FRIENDLIST")
            return state.filter(user => user._id !== action.payload)

        }
    }
}) 

export const { OFFLINE_injectUserToFriendList, OFFLINE_removeUserFromFriendList, OFFLINE_initializeOfflineUsers} = offlineFriendListSlice.actions

export default offlineFriendListSlice.reducer
//SELEKTORY

export const getOfflineUsers = (state:RootState) => state.offlineFriendList