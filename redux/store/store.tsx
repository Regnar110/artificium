import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSessionReducer from '../slices/userSession/userSessionSlice'
import chattingWindowsReducer from '../slices/chattingWindows/chattingWindowsSlice'
import groupsReducer from '../slices/groups/groupsSlice'
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
  } from 'redux-persist'
  const persistConfig = {

    key: 'root',
    storage: storage,
    blacklist: [],// stan, który nie będzie cachowany w pamięci podręcznej przeglądarki. Jedynym stanem, który będzie się "Zapamiętywał" będzie user i localbasker ponieważ categories i products mogą się zmieniać dynamicznie jeżeli np ktoś doda nowe produkty
    whitelist: ["userSession"] 
  }

  export const rootReducers = combineReducers({
    userSession: userSessionReducer,
    chattingWindows: chattingWindowsReducer,
    groups: groupsReducer
  })
  const persistedReducer = persistReducer(persistConfig, rootReducers)
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
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch