import { _emit_USER_IS_OFFLINE } from "../SocketFriendListHandlers/SocketFriendListHandlers"
import { _emit_LEAVE_GROUP_ROOM } from "../SocketGroupRoomHandlers.ts/SocketGroupRoomHandlers"
import { ioInstance } from "../SocketInstance/socketInstance"
import { userAccessRequest } from "../UserAccessRequest"

export const userWindowClose = (authUserId:string, authUserFriends:string[], groupId?:string) => {

    userAccessRequest<void, {authUser:string, user_friends:string[], groupId:string|undefined}>('userUnactive', {authUser:authUserId, user_friends:authUserFriends, groupId:groupId})
    // const socket = ioInstance.getActiveSocket()
    // _emit_USER_IS_OFFLINE(socket, authUserId, authUserFriends)
    // _emit_LEAVE_GROUP_ROOM(socket, groupId!, authUserId)
}