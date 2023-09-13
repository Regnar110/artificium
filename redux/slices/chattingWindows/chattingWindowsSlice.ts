import { ioInstance } from "@/app/utils/SocketInstance/socketInstance";
import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState:ChattingWindowsType = {
    windowType:"artificium",
    selectedGroup:{}
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
        
        selectGroup: (state, action:PayloadAction<Group>)=> {
            state = Object.assign(state, {
                ...state,
                selectedGroup:action.payload
            })
            ioInstance.changeSocketRoom(action.payload._id)
        },

        //AKCJA WYWOŁANA GDY DODAJEMY DO AKTUALNEJ GRUPY NOWEGO UŻYTKOWNIKA. ( GDY JESTEŚMY AKTUALNIE W TEJ GRUPIE )
        addActiveUserToGroup: (state, action:PayloadAction<AuthenticatedUser>) => {
            console.log("DODAJE UŻYTKOWNIKA DO GRUPPY")
            console.log(state.selectedGroup)
            const newSelectedGroup = {
                ...state.selectedGroup,
                active_users: [...state.selectedGroup.active_users, action.payload]
            }
            state = Object.assign(state, {
                ...state,
                selectedGroup: newSelectedGroup
            })
        },

        //AKCJA WYWOŁANA GDY USUWAMY Z AKTUALNEJ GRUPY NOWEGO UŻYTKOWNIKA. ( GDY JESTEŚMY AKTUALNIE W TEJ GRUPIE )
        removeUserFromgroup: (state, action:PayloadAction<string>) => {
            console.log(action.payload)
            console.log(typeof action.payload)
            console.log("USUWANIE Z GRUPY")
            const newSelectedGroup = {
                ...state.selectedGroup,
                active_users: state.selectedGroup.active_users!.filter(user => user._id != action.payload)
            }

            console.log(newSelectedGroup)

            state = Object.assign(state, {
                ...state,
                selectedGroup:newSelectedGroup
            })
        },
        //AKCJA WYWOŁYWANA GDY ZMIENIMY GRUPĘ NA INNĄ I OTRZYMAMY Z SERWERA AKTUALNĄ LISTĘ ACTIVE_USERS - TUTAJ WBIJAMY JĄ DO STANU GRUPY
        injectNewActiveUsers: (state, action:PayloadAction<AuthenticatedUser[]>) => {
            const selectedGroupWNewUsers = {
                ...state.selectedGroup,
                active_users:action.payload
            }
            state = Object.assign(state, {
                ...state,
                selectedGroup:selectedGroupWNewUsers
            })
        },


        resetGroups: (state) => initialState

    }
}) 

export const { selectWindow, selectGroup, addActiveUserToGroup, removeUserFromgroup, injectNewActiveUsers, resetGroups } = chattingWindowsSlice.actions

export default chattingWindowsSlice.reducer

//SELEKTORY

export const getChat = (state:RootState) => state.chattingWindows.selectedGroup
export const getGroup = (state:RootState) => state.chattingWindows.selectedGroup
export const isGroupSelected = (state:RootState):boolean => state.chattingWindows.selectedGroup._id ? true : false


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