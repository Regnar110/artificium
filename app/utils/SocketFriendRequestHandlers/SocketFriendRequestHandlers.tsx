import { ioInstance } from "../SocketInstance/socketInstance"

class SocketFriendRequestHandlers {
    

    static  _emit_SEND_FRIEND_REQUEST =(fromId:string, toId:String) => {
        const socket = ioInstance.getActiveSocket()
        socket.emit("SEND_FRIEND_REQUEST", fromId, toId)
    }

}

export const {_emit_SEND_FRIEND_REQUEST} = SocketFriendRequestHandlers