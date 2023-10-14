import { RootState } from "@/redux/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface UI_CONTROLLER {
    controller_panel:{
        status:boolean,
        type:"user" | "group" | undefined
    }, // PANEL BOCZNY ZARAZ OBOK KONTROLERA UI
    friendList_panel:boolean, // PANEL LISTY ZNAJOMYCH PO PRAWEJ STRONY WIDOKU
    chat_window:boolean, // OKNO CZATU WYŚWIETLANE MIĘDZY DWOMA POWYŻSZYMI.
}
type DASHBOARD_UI_TYPES = "controller_panel" | "friendList_panel" | "chat_window"
const initialState:UI_CONTROLLER = {
    controller_panel:{
        status:false,
        type:undefined
    },
    friendList_panel:true,
    chat_window:false,
}


export const dashboardUI_controller = createSlice({
    name: 'dashboardUI_controller',
    initialState,
    reducers: {
        UI_VIEW_CHANGE: (state, action:PayloadAction<{UI:DASHBOARD_UI_TYPES, status:boolean, type?:"user"|"group"}>) => {
            const {UI, status, type} = action.payload
            switch(UI) {
                case "controller_panel":
                    return {
                        ...state,
                        controller_panel:{
                            status,
                            type
                        }
                    }
                case "friendList_panel":
                    return {
                        ...state,
                        friendList_panel:status
                    }
                case "chat_window":
                    return {
                        ...state,
                        chat_window:status
                    }
            }
        }
    }
}) 

export const { UI_VIEW_CHANGE } = dashboardUI_controller.actions

export default dashboardUI_controller.reducer

export const currentUIState = (state:RootState) => state.dashboardUI_controller