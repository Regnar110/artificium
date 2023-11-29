import { ioInstance } from "../SocketInstance/socketInstance"
import { turnOnNotification } from "@/app/AppComponents/ToastNotifications/TurnOnNotification"

class SocketFriendRequestHandlers {
    

    static  _emit_SEND_FRIEND_REQUEST =(fromId:string, fromUserNick:string, email:string, toId:String) => {
        const socket = ioInstance.getActiveSocket()
        socket.emit("SEND_FRIEND_REQUEST", fromId, fromUserNick, email, toId)
    }

    static _on_INCOMING_FRIEND_REQUEST = () => {
        // Jest to listener który służy do odbierania przychodzących maili z friend requestami. Ponadto jeżeli wysłanie requestu się nie udało ten listener równierz odbiera
        // response z obiektem błędu, tyle że tym razem otrzymuje go wysyłający a nie użytkownik, do którego miał trafić FR
        const socket = ioInstance.getActiveSocket()
        socket.on("INCOMING_FRIEND_REQUEST", (...args) => {
            turnOnNotification({type:"INCOMING_FRIEND_REQUEST", response:args[0]})
            console.log("INCOMING FRIEND REQUEST!")
            console.log(args[0])
        })
    }

    static _emit_ACCEPT_REQUEST = (mail_id:string, resSenderId:string, fromUserNick:string, toId:string) => {
        const socket = ioInstance.getActiveSocket()
        socket.emit("INCOMING_ACCEPT_FR", mail_id, resSenderId, fromUserNick, toId)
    }

    static _emit_REJECT_REQUEST = (mail_id:string, resSenderId:string, fromUserNick:string, toId:string) => {
        const socket = ioInstance.getActiveSocket();
        socket.emit("INCOMING_REJECT_FR", mail_id, resSenderId, fromUserNick, toId)
    }

    static _on_INCOMING_REJECTED_FR = () => {
        const socket = ioInstance.getActiveSocket();
        socket.on("INCOMING_REJECTED_FR", (...args) => {
            console.log("REJECTED_FR")
            console.log(args)
        })
    }

    static _on_INCOMING_ACCEPTED_FR = () => {
        const socket = ioInstance.getActiveSocket();
        socket.on("INCOMING_ACCEPTED_FR", (...args) => {
            console.log("ACCEPTED FR")
            console.log(args)
        })
    }

    static unsubscribeFriendRequestListeners = () => {
        const socket = ioInstance.getActiveSocket()
        socket.off("INCOMING_FRIEND_REQUEST")
    }
}

export const {_emit_SEND_FRIEND_REQUEST, _on_INCOMING_FRIEND_REQUEST, _emit_ACCEPT_REQUEST, _emit_REJECT_REQUEST, unsubscribeFriendRequestListeners} = SocketFriendRequestHandlers