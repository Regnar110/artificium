import { addActiveUserToGroup, injectNewActiveUsers, removeUserFromgroup } from "@/redux/slices/chattingWindows/chattingWindowsSlice";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

class SocketGroupRoomHandlers {

    static _emit_JOIN_GROUP_ROOM(socket: Socket<DefaultEventsMap, DefaultEventsMap>, selectedGroupId:string, user:AuthenticatedUser) {
        socket.emit("JOIN_GROUP_ROOM", selectedGroupId, user)
    }

    static _emit_LEAVE_GROUP_ROOM = (socket: Socket<DefaultEventsMap, DefaultEventsMap>, selectedGroupId:string, userId:string) => {
        socket.emit("LEAVE_GROUP_ROOM", selectedGroupId , userId)
    }
    
    static _on_GROUP_USER_LEAVE =(socket: Socket<DefaultEventsMap, DefaultEventsMap>, dispatch:any) => {
        socket.on("GROUP_USER_LEAVE", (...args) => {
            console.log("GROUP_USER_LEAVE")
            console.log(args[0])
            dispatch(removeUserFromgroup(args[0]))
        })
    }

    static _on_GROUP_USER_JOIN = (socket: Socket<DefaultEventsMap, DefaultEventsMap>, dispatch:any) => {
        socket.on("GROUP_USER_JOIN", (...args) => {
            console.log("GROUP_USER_JOIN")
            console.log(args[0])
            dispatch(addActiveUserToGroup(args[0]))
        })
    }

    static _on_CURRENT_ACTIVE_USERS = (socket: Socket<DefaultEventsMap, DefaultEventsMap>, dispatch:any) => {
        socket.on("CURRENT_ACTIVE_USERS", (...args) => {
            const current_active_users = args[0] as AuthenticatedUser[]
            console.log("CURRENT_ACTIVE_USERS")
            console.log(current_active_users)
            dispatch(injectNewActiveUsers(current_active_users))
        })            
    }

    static unsubscribeGroupRoomListeners = (socket: Socket<DefaultEventsMap, DefaultEventsMap>,selectedGroupId:string) => {
        console.log(socket)
        socket.off(selectedGroupId)
        socket.off("CURRENT_ACTIVE_USERS")
        socket.off("GROUP_USER_LEAVE")
        socket.off("GROUP_USER_JOIN")
    }
}
export const { _emit_JOIN_GROUP_ROOM, _emit_LEAVE_GROUP_ROOM, _on_CURRENT_ACTIVE_USERS, _on_GROUP_USER_JOIN, _on_GROUP_USER_LEAVE, unsubscribeGroupRoomListeners } = SocketGroupRoomHandlers