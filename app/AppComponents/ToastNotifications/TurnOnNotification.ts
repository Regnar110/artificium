import toast from "react-hot-toast"

interface Props {
    response: UserAccesSuccessResponse | UserAccessErrorResponse
}
export const turnOnNotification = ({response}:Props) => {
    switch (response.status) {
        case 200:
            toast.success(response.client_message)
            break;
        case 510:
            toast.error(response.client_message)
            break;
    }
}