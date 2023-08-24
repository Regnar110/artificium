import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { ioInstance } from "../SocketInstance/socketInstance"
import { userAccessRequest } from "../UserAccessRequest"
import { injectUser } from "@/redux/slices/userSession/userSessionSlice";
interface ProviderLogInProps {
    sessionData: any,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}

export const authUserLogIn = async ({sessionData, dispatch}:ProviderLogInProps) => {
    const socket = await ioInstance.getSocketInstance()
    const userData = { // tworzmy obiekt użytkownika na wypadek gdy jest on nowym użytkownikiem. Obiekt ten posłuży w razie co do rejestracji w bazie
        ...sessionData,
        nickname: (sessionData.name as string).replace(/\s/g, ''),
        provider:"google",
      } as RegisterFormData
      delete userData.image
      delete userData.id
      delete userData.name
      let logInResponse = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
      logInResponse.status === 200 && dispatch(injectUser(logInResponse.body))
      return logInResponse
}