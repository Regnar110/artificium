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


// Chatting windows będą zawierać :

// {
//     windowsType:string
//     selectedGroup: {
//         groupId:string
//         groupName:string
//         groupDescription: string
//         groupUsersIds:[]
//         groupAdminId:string
//         groupRecentMessages:[
//             {
//                 nickname:string
//                 avatar_id:string
//                 message:string
//             }
//             ...
//         ]
//     }
// }
// Będzie to całościowy stan po implementacji funkcjonalnosci.
// Dane te będą ściągane z API po tym jak  użytkownik kliknie na daną grupę.
// Recent Messages będą tablicą ostatnich 30 wiadomośći w czacie. Najstarsze będą usuwane