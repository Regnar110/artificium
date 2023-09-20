import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSessionReducer from '../slices/userSession/userSessionSlice'
import chattingWindowsReducer from '../slices/chattingWindows/chattingWindowsSlice'
import groupsReducer from '../slices/groups/groupsSlice'
import onlineFriendListReducer from '../slices/friendList/onlineFriendListSlice'
import offlineFriendListReducer from '../slices/friendList/offlineFriendListSlice'
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

  export const rootReducers = combineReducers({
    userSession: userSessionReducer,
    chattingWindows: chattingWindowsReducer,
    groups: groupsReducer,
    onlineFriendList: onlineFriendListReducer,
    offlineFriendList: offlineFriendListReducer
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
// persistStore() zwraca nam obiekt typu Persistor, który reprezentuje utrwalony w pamięci podręcznej przeglądarki stan.
export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch