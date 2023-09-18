import { injectUserToFriendList, removeUserFromFriendList } from "@/redux/slices/friendList/friendListSlice";
import store from "@/redux/store/store";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
type SOCKET = Socket<DefaultEventsMap, DefaultEventsMap>
class SocketFriendListHandlers {
    
    static _emit_USER_IS_OFFLINE = (socket:SOCKET, authUser:string) => socket.emit("USER_IS_OFFLINE", authUser)
    static _emit_USER_IS_ONLINE = (socket:SOCKET, user_object:AuthenticatedUser) => socket.emit("USER_IS_ONLINE", user_object)

    static _on_AUTHUSER_ID_USER_IS_ONLINE = (socket:SOCKET, authUser_id:string) => socket.on(`${authUser_id}_USER_IS_ONLINE`, (...args)=> {
        console.log("ON USER ID SOCKET - FIRNED CAME ONLINE")
        const onlineUser = args[0] as AuthenticatedUser
        store.dispatch(injectUserToFriendList(onlineUser))
    })

    static _on_AUTHUSER_ID_USER_IS_OFFLINE = (socket:SOCKET, authUser_id:string) => socket.on(`${authUser_id}_USER_IS_OFFLINE`, (...args)=> {
        console.log("ON USER ID SOCKET - FIRNED CAME OFFLINE")
        const offlineUserId = args[0] as string
        store.dispatch(removeUserFromFriendList(offlineUserId))
    })

    static unsubscribeFriendListListeners = (socket:SOCKET, authUser_id:string) =>{
        socket.off(`${authUser_id}USER_IS_OFFLINE`)
        socket.off(`${authUser_id}USER_IS_ONLINE`)
    }
}

export const {_emit_USER_IS_OFFLINE, _emit_USER_IS_ONLINE, _on_AUTHUSER_ID_USER_IS_OFFLINE, _on_AUTHUSER_ID_USER_IS_ONLINE, unsubscribeFriendListListeners} = SocketFriendListHandlers