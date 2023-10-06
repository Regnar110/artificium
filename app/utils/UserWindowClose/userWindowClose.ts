import { _emit_USER_IS_OFFLINE } from "../SocketFriendListHandlers/SocketFriendListHandlers"
import { _emit_LEAVE_GROUP_ROOM } from "../SocketGroupRoomHandlers.ts/SocketGroupRoomHandlers"
import { ioInstance } from "../SocketInstance/socketInstance"

export const userWindowClose = (authUserId:string, authUserFriends:string[], groupId?:string) => {
    const socket = ioInstance.getActiveSocket()
    _emit_USER_IS_OFFLINE(socket, authUserId, authUserFriends)
    groupId && _emit_LEAVE_GROUP_ROOM(socket, groupId, authUserId)
}