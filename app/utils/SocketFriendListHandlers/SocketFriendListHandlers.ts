import { turnOnNotification } from "@/app/AppComponents/ToastNotifications/TurnOnNotification";
import { resetGroups } from "@/redux/slices/chattingWindows/chattingWindowsSlice";
import { OFFLINE_injectUserToFriendList, OFFLINE_removeUserFromFriendList } from "@/redux/slices/friendList/offlineFriendListSlice";
import { ONLINE_injectUserToFriendList, ONLINE_removeUserFromFriendList } from "@/redux/slices/friendList/onlineFriendListSlice";
import store from "@/redux/store/store";
class SocketFriendListHandlers {
    
    static _emit_USER_IS_OFFLINE = (socket:SOCKET, authUserId:string, friends_array:string[], groupId?:string,) => {
        socket.emit("USER_IS_OFFLINE", authUserId, friends_array)
        // switch(groupId) {
        //     case groupId:
        //         socket.emit("LEAVE_GROUP_ROOM", groupId, authUserId)
        //         store.dispatch(resetGroups())
        //         break;
        //     default:
        //         break;  
        // }
    }
    static _emit_USER_IS_ONLINE = (socket:SOCKET, authUserId:string,  friends_array:string[]) => {
        socket.emit("USER_IS_ONLINE", authUserId, friends_array)
    }

    static _on_AUTHUSER_ID_USER_IS_ONLINE = (socket:SOCKET, authUser_id:string) => socket.on(`${authUser_id}_USER_IS_ONLINE`, (...args:any[])=> {
        debugger;
        console.log("ON USER ID SOCKET - FIRNED CAME ONLINE")
        const onlineUser = args[0] as AuthenticatedUser // TUTAJ DOSTAJEMY OBIEKT UŻYTKOWNIKA KTÓRY SIĘ ZALOGOWAŁ
        const friend_to_migrate = store.getState().offlineFriendList.find((friend:Friend) => friend._id === onlineUser._id) as Friend

        store.dispatch(OFFLINE_removeUserFromFriendList(onlineUser._id)) // USUWAMY UŻYTKOWNIKA ZLISTY OFFLINE
        store.dispatch(ONLINE_injectUserToFriendList(friend_to_migrate)) // DODAJEMY GO DO LISTY ONLINE
        turnOnNotification({
            type:"USER_IS_ONLINE", 
            action_notification: {
                message:`is now online`,
                group_name:"ARTIFICIUM",
                body:onlineUser
            }
        })
    })

    static _on_AUTHUSER_ID_USER_IS_OFFLINE = (socket:SOCKET, authUser_id:string) => socket.on(`${authUser_id}_USER_IS_OFFLINE`, (...args:any[])=> {
        console.log("ON USER ID SOCKET - FIRNED CAME OFFLINE")
        const offlineUser = args[0] as AuthenticatedUser
        const friend_to_migrate = store.getState().onlineFriendList.find((friend:Friend) => friend._id === offlineUser._id) as Friend
        store.dispatch(ONLINE_removeUserFromFriendList(offlineUser._id))
        store.dispatch(OFFLINE_injectUserToFriendList(friend_to_migrate))
        turnOnNotification({
            type:"USER_IS_OFFLINE", 
            action_notification: {
                message:`is now offline`,
                group_name:"ARTIFICIUM",
                body:offlineUser
            }
        })
    })

    static unsubscribeFriendListListeners = (socket:SOCKET, authUser_id:string) =>{
        socket.off(`${authUser_id}USER_IS_OFFLINE`)
        socket.off(`${authUser_id}USER_IS_ONLINE`)
    }
}

export const {_emit_USER_IS_OFFLINE, _emit_USER_IS_ONLINE, _on_AUTHUSER_ID_USER_IS_OFFLINE, _on_AUTHUSER_ID_USER_IS_ONLINE, unsubscribeFriendListListeners} = SocketFriendListHandlers