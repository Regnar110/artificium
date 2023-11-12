import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Partial<ServerGetMailsResponse>  = {}
// Stan przechowujący tylko 10 maili. Za każdym kliknięciem paginacji, będą ściągane kolejne 10 elementów.
export const mailBoxSlice = createSlice({
    name: 'mailBox',
    initialState,
    reducers: {
        injectMails: (state, action:PayloadAction<ServerGetMailsResponse>) => {
            // TO DO: Do stanu zostaje wstrzyknięte pole obiektu isOnline. Nie jest nam ono do niczego potrzbne. Usunąć.
            state = Object.assign(state, action.payload)
        },

        resetMails: () => initialState
    }
}) 

export const { injectMails, resetMails} = mailBoxSlice.actions

export default mailBoxSlice.reducer
//Selektory

export const getMails = (state:RootState) => state.mailBox.mails as Mail[]
export const getMailsPageCount = (state:RootState) => state.mailBox.pageCount as number
export const getTotalMails = (state:RootState) => state.mailBox.totalMails as number