import toast from "react-hot-toast"
import { renderGroupActionToast } from "./Custom/GroupActionToast"

interface Props {
    type: USER_APP_ACCESS | USER_GROUP_JOIN | USER_GROUP_LEAVE
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
        const {message, body:user} = action_notification
        toast.custom(renderGroupActionToast(message, user, action_notification.group_name), {
            position:"bottom-right",
            duration:3000,
            style:{
                animation: "ease-in-out"
            }
        })
    }

}