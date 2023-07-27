import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState:ChattingWindowsType = {
    windowType:"artificium",
    selectedGroup:""
}

export const chattingWindowsSlice = createSlice({
    name: 'chattingWindows',
    initialState,
    reducers: {
        selectWindow: (state, action:PayloadAction<"artificium" | "chat" | "library">) => {
            state = Object.assign(state, {
                ...state,
                windowType:action.payload
            })
        },
        selectGroup: (state, action:PayloadAction<string>)=> {
            state = Object.assign(state, {
                ...state,
                selectedGroup:action.payload
            })
        }
    }
}) 

export const { selectWindow, selectGroup } = chattingWindowsSlice.actions

export default chattingWindowsSlice.reducer

//SELEKTORY

export const getChat = (state:RootState) => {
    return state.chattingWindows
}
