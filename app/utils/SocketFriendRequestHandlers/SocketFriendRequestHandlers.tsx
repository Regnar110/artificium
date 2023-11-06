import { ioInstance } from "../SocketInstance/socketInstance"

class SocketFriendRequestHandlers {
    

    static  _emit_SEND_FRIEND_REQUEST =(fromId:string, toId:String) => {
        const socket = ioInstance.getActiveSocket()
        socket.emit("SEND_FRIEND_REQUEST", fromId, toId)
    }

    static _on_INCOMING_FRIEND_REQUEST = () => {
        const socket = ioInstance.getActiveSocket()
        socket.on("INCOMING_FRIEND_REQUEST", (...args) => {
            console.log("INCOMING FRIEND REQUEST!")
            console.log(args)
        })
    }

    static unsubscribeFriendRequestListeners = () => {
        const socket = ioInstance.getActiveSocket()
        socket.off("INCOMING_FRIEND_REQUEST")
    }
}

export const {_emit_SEND_FRIEND_REQUEST, _on_INCOMING_FRIEND_REQUEST, unsubscribeFriendRequestListeners} = SocketFriendRequestHandlers