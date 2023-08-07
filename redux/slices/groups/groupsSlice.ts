import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Root } from "postcss";

const initialState: Group[]  = []

export const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        injectInitialGroups: (state, action:PayloadAction<Group[]>) => {
            state = Object.assign(state, action.payload)
        },
        addNewGroup: (state, action:PayloadAction<Group>) => {
            state = Object.assign(state, [
                ...state,
                action.payload
            ])
        }
    }
}) 

export const { injectInitialGroups, addNewGroup } = groupsSlice.actions
export default groupsSlice.reducer

// SELEKTORY

export const getStoredGroups = (state:RootState) => state.groups