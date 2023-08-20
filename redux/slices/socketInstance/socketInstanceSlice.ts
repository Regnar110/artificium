import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const initialState:Partial<Socket<DefaultEventsMap, DefaultEventsMap>> = {}

export const socketInstanceSlice = createSlice({
    name: 'socketInstance',
    initialState,
    reducers: {

        injectSocketInstance: (state, action:PayloadAction<Socket<DefaultEventsMap, DefaultEventsMap>>) => {
            state = Object.assign(state, {
                ...state,
                windowType:action.payload
            })
        },
        clearSocketInstance: () => initialState
    }
}) 

export const { injectSocketInstance, clearSocketInstance } = socketInstanceSlice.actions

export default socketInstanceSlice.reducer

//SELEKTORY

export const getActiveSocket = (state:RootState) => state.socketInstance
