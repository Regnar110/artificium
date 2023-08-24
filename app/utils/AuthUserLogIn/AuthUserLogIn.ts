import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { ioInstance } from "../SocketInstance/socketInstance"
import { userAccessRequest } from "../UserAccessRequest"
import { injectUser } from "@/redux/slices/userSession/userSessionSlice";
interface ProviderLogInProps {
    sessionData: any,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}
export const authUserLogIn = async ({sessionData, dispatch}:ProviderLogInProps) => {
  console.log("AUTH USER LOG IN FUNCTION")
  console.log(sessionData)
    const socket = await ioInstance.getSocketInstance()
    console.log("AUTH USER LOGIN SOCKET ID")
    console.log(socket.id)
    const userData = { // tworzmy obiekt użytkownika na wypadek gdy jest on nowym użytkownikiem. Obiekt ten posłuży w razie co do rejestracji w bazie
        ...sessionData,
        nickname: (sessionData.name as string).replace(/\s/g, ''),
        provider:"google",
        socket:socket.id
      } as RegisterFormData
      delete userData.image
      delete userData.id
      delete userData.name
      let logInResponse = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
          if(logInResponse.status === 200) {
            console.log("54: UDAŁO SIĘ ZALOGOWAĆ UZYTKOWNIKA GOOGLE")
            console.log(logInResponse.body)
            dispatch(injectUser(logInResponse.body))
            
          } else {
            console.log("57: NIE UDAŁO SIĘ ZALOGOWAĆ UZYTKOWNIKA GOOGLE. KOŃCZENIE POŁĄCZENIA SOCKET")
          }
}