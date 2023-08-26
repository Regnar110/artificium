import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { ioInstance } from "../SocketInstance/socketInstance"
import { userAccessRequest } from "../UserAccessRequest"
import { injectUser } from "@/redux/slices/userSession/userSessionSlice";
interface ProviderLogInProps {
    sessionData: any,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>;
}

export const authUserLogIn = async ({sessionData, dispatch}:ProviderLogInProps) => {
    // Logując się tworzymy nową instancję socket.io
    let userData:any;
    let logInResponse:UserAccesSuccessResponse | UserAccessErrorResponse;
    if(sessionData.image) { // LOGOWANIE PRZEZ PROVIDERA
        // Tworzymy obiekt wysyłany do API dla użytkownika logującego się przez Providera.
        // Obiekt jest typu RegisterFormData ponieważ zawsze przesyłamy obiekt jak by uzytkownik się rejestrował. API potrem sprawdza czy taki użytkownik już istnieje
        // Jeżeli tak, to zwraca jego obiekt, a jeżeli nie to po prostu go rejestruje w bazie za pomocą tego obiektu
        userData = {
            ...sessionData,
            nickname: (sessionData.name as string).replace(/\s/g, ''),
            provider: "google"
        } as RegisterFormData
        logInResponse = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
    } else { // LOGOWANIE PRZEZ FORMULARZ
        logInResponse = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , LoginFormData>("login", sessionData )
    }
    if(logInResponse.status === 200) {
        dispatch(injectUser(logInResponse.body))
        //inicjalizujemy połączenie z socketem po stronie serwera przesyłając mu również id użytkownika który się łączy
        await ioInstance.getSocketInstance(logInResponse.body._id)
    } 
    return logInResponse
}