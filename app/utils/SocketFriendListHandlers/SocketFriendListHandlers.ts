import { OFFLINE_injectUserToFriendList, OFFLINE_removeUserFromFriendList } from "@/redux/slices/friendList/offlineFriendListSlice";
import { ONLINE_injectUserToFriendList, ONLINE_removeUserFromFriendList } from "@/redux/slices/friendList/onlineFriendListSlice";
import store from "@/redux/store/store";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
type SOCKET = Socket<DefaultEventsMap, DefaultEventsMap>
class SocketFriendListHandlers {
    
    static _emit_USER_IS_OFFLINE = (socket:SOCKET, authUserId:string) => socket.emit("USER_IS_OFFLINE", authUserId)
    static _emit_USER_IS_ONLINE = (socket:SOCKET, authUserId:string) => socket.emit("USER_IS_ONLINE", authUserId)

    static _on_AUTHUSER_ID_USER_IS_ONLINE = (socket:SOCKET, authUser_id:string) => socket.on(`${authUser_id}_USER_IS_ONLINE`, (...args)=> {
        console.log("ON USER ID SOCKET - FIRNED CAME ONLINE")
        const onlineUser = args[0] as AuthenticatedUser
        store.dispatch(OFFLINE_removeUserFromFriendList(onlineUser._id)) // USUWAMY UŻYTKOWNIKA ZLISTY ONLINE
        store.dispatch(ONLINE_injectUserToFriendList([onlineUser])) // DODAJEMY GO DO LISTY ONLINE
    })

    static _on_AUTHUSER_ID_USER_IS_OFFLINE = (socket:SOCKET, authUser_id:string) => socket.on(`${authUser_id}_USER_IS_OFFLINE`, (...args)=> {
        console.log("ON USER ID SOCKET - FIRNED CAME OFFLINE")
        const offlineUserId = args[0] as string
        const {_id:storeUserToMigrate} = store.getState().onlineFriendList.find((friend:Friend) => friend._id === offlineUserId) as Friend
        store.dispatch(ONLINE_removeUserFromFriendList(offlineUserId))
        store.dispatch(OFFLINE_injectUserToFriendList(storeUserToMigrate))
    })

    static unsubscribeFriendListListeners = (socket:SOCKET, authUser_id:string) =>{
        socket.off(`${authUser_id}USER_IS_OFFLINE`)
        socket.off(`${authUser_id}USER_IS_ONLINE`)
    }
}

export const {_emit_USER_IS_OFFLINE, _emit_USER_IS_ONLINE, _on_AUTHUSER_ID_USER_IS_OFFLINE, _on_AUTHUSER_ID_USER_IS_ONLINE, unsubscribeFriendListListeners} = SocketFriendListHandlers