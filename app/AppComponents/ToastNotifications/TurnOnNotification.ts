import toast from "react-hot-toast"
import { renderGroupActionToast } from "./Custom/GroupActionToast"
import { renderMailboxActionToast } from "./Custom/MailBoxActionToast"

interface Props {
    type: USER_APP_ACCESS | USER_GROUP_JOIN | USER_GROUP_LEAVE | USER_IS_ONLINE | USER_IS_OFFLINE | INCOMING_FRIEND_REQUEST
    response?: any
    action_notification?: {
        message:string,
        group_name:string
        body?:any
    }
}
export const turnOnNotification = ({type, response, action_notification}:Props) => {
    if(type === "USER_APP_ACCESS" && response) {
        switch (response.status) {
            case 200:
                toast.success(response.client_message)
                break;
            case 510:
                toast.error(response.client_message)
                break;
        }
    } else if((type === "USER_GROUP_JOIN" || "USER_GROUP_LEAVE") && action_notification) {
        const {message, body:user, group_name} = action_notification
        toast.custom(renderGroupActionToast(message, user, group_name), {
            position:"bottom-right",
            duration:3000,
            style:{
                animation: "ease-in-out"
            }
        })
    } else if((type === "USER_IS_ONLINE" || "USE_IS_OFFLINE") && action_notification) {
        const {message, body:user, group_name} = action_notification
        console.log("TOAST USER IS ON OR OFF")
        console.log(action_notification)
        toast.custom(renderGroupActionToast(message, user, group_name), {
            position:"bottom-right",
            duration:3000,
            style:{
                animation: "ease-in-out"
            }
        })
    } 
    else if(type === "INCOMING_FRIEND_REQUEST" && response) {
        const {client_message, body} = response
        switch(response.status) {
            case 200:
                toast.custom(renderMailboxActionToast(client_message, body.fromNickName, body.topic), {
                    position:"bottom-right",
                    duration:3000,
                    style:{
                        animation: "ease-in-out"
                    }
                })
        }
    }

}