import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FriendList = []

export const onlineFriendListSlice = createSlice({
    name: 'onlineFriendList',
    initialState,
    reducers: {

        ONLINE_initializeOnlineUsers: (state, action:PayloadAction<Friend[]>) => {

            const online_users = action.payload
            state.push(...online_users)
        },

        ONLINE_injectUserToFriendList: (state, action:PayloadAction<Friend>) => {
            // const mutable_user = structuredClone(action.payload)
            // mutable_user.isOnline = true
            // state.push(mutable_user)
            const migrated_user = {...action.payload, isOnline:true}
            return [...state, migrated_user]
        },
        ONLINE_removeUserFromFriendList: (state, action:PayloadAction<string>) => {
            console.log("REMOVING USER FROM FRIENDLIST")
            return state.filter(user => user._id !== action.payload)

        }
    }
}) 

export const { ONLINE_injectUserToFriendList, ONLINE_removeUserFromFriendList, ONLINE_initializeOnlineUsers} = onlineFriendListSlice.actions

export default onlineFriendListSlice.reducer
//SELEKTORY

export const getOnlineUsers = (state:RootState) => state.onlineFriendList