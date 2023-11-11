import { PayloadAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import userSessionReducer from '../slices/userSession/userSessionSlice'
import chattingWindowsReducer from '../slices/chattingWindows/chattingWindowsSlice'
import groupsReducer from '../slices/groups/groupsSlice'
import onlineFriendListReducer from '../slices/friendList/onlineFriendListSlice'
import offlineFriendListReducer from '../slices/friendList/offlineFriendListSlice'
import dashboardUI_controllerReducer from '../slices/dashboardUI_controller/dashboardUI_controller'
import mailBoxReducer from '../slices/mailBox/mailBoxSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
  } from 'redux-persist'
  const persistConfig = {

    key: 'root',
    storage: storage,
    whitelist: ["userSession"] 
  }

  // APP REDUCER KTÓRY REPREZENTUJE POJEDYŃCZĄ FUNKCJĘ REDUCERA KTÓRY ZAWIERA ZMIXOWANE REDUCERY.
  // APP REDUCER I JEGO STAN JEST ZALEZNY OD RESETOWALNEGO ROOT REDUCERA I WYNIKU JEGO DZIAŁANIA.
  const appReducer = combineReducers({
    // TOP-LEVEL REDUCERY
    dashboardUI_controller:dashboardUI_controllerReducer,
    userSession: userSessionReducer,
    chattingWindows: chattingWindowsReducer,
    groups: groupsReducer,
    onlineFriendList: onlineFriendListReducer,
    offlineFriendList: offlineFriendListReducer,
    mailBox: mailBoxReducer
  })

  // RESETOWALNY ROOT REDUCER, KTÓRY PRZY WOWAŁNIU AKCJI WYLOGOWYWANIA UŻYTKOWNIKA PRZYWRACA CAŁY STAN APLIKACJI DO UNDEFINED (CZYLI RESETUJE GO)
  // MA TO NA CELU ZAPOBIEGNIĘCIE NP W MOZILLA FIREFOX CACHOWANIA SIĘ STANU I NP. TWORZENIU SIĘ PODWÓJNYCH, POTRÓJNYCH LIST DANYCH Z KONKRETNEGO STANU ZE WZGLĘDU NA ICH
  // NAKŁĄDANIE SIĘ NP. PRZY PONNOWNYM ZALOGOWANIU
  export const resetableRootReducers = (state:any, action:PayloadAction) => {
    if(action.type === 'userSession/signOutUser'){
      return appReducer(undefined, action)
    }
    return appReducer(state, action)
  }
  const persistedReducer = persistReducer(persistConfig, resetableRootReducers)
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  setupListeners(store.dispatch)
// persistStore() zwraca nam obiekt typu Persistor, który reprezentuje utrwalony w pamięci podręcznej przeglądarki stan.
export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch