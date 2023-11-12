import { userAccessRequest } from "@/app/utils/UserAccessRequest"
import { injectMails } from "@/redux/slices/mailBox/mailBoxSlice"
import store from "@/redux/store/store"

export const initializeMailBox = async (userId:String, newMailsOffset:number, endOffset:number) => {
    const mails = await userAccessRequest<any, {userId:String, newMailsOffset:number, endOffset:number}>('getUserMails', {userId, newMailsOffset, endOffset}) as ServerGetMailsResponse
    store.dispatch(injectMails(mails))
}