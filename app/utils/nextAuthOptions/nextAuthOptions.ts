
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { userAccessRequest } from "../UserAccessRequest";

export const nextAuthOptions:NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_KEY as string,
            authorization: {
              params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
              }
            }
          }),
    ],
    callbacks: {
        async session({session}) {
          // po wywołaniu sign in i "zalogowaniu się" wywoływany ejst ten callback który ma zwrócić sesję.
          // Przed jej zwróceniem ustalamy
          const userData = { // tworzmy obiekt użytkownika na wypadek gdy jest on nowym użytkownikiem. Obiekt ten posłuży w razie co do rejestracji w bazie
            ...session.user,
            nickname: (session.user?.name as string).replace(/\s/g, ''),
            provider:"google",
          } as RegisterFormData
          //usuwamy właściwiości obiektu, które nie są zgodne z typem obiektu RegisterFormData i są nam nie potrzebne
          delete userData.image
          delete userData.id
          delete userData.name
          //logowanie - najpierw sprawdzimy czy konto z tym mailem istnieje już w bazie i czy provider się zgadza
          const response = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
          // tutaj powinniśmy otrzymać UserAccessSuccessResponse  w którym body jest obiektem użytkownika. Body przy udanym logowaniu powinno zawsze być obiektem użytkownika z bazy
          //mongo.

          // zwracamy jako obiekt user obiekt response z danymi dotyczącymi odpowiedzi z serwera.
            session.user = response
            return session

          //Ogólnie w tej funkcji zwracamy zawsze sesję. Ale w drodze uwierzytelniania sprawdzamy czy:
            // użytkownik istnieje i dane są zgodne
            // oraz czy użytkownik nie istnieje i wymaga rejestacji
            // żeby użytkownik sesji zalogował się i uzyskał dostęp do reszty aplikacji
            // musi on mieć utworzoną sesję GOOGLE oraz(!!!) zostać sprawdzony w db czy istnieje lub w niej zarejestrowany
            // Za każdym razem w odpowiedzi otrzymamy odpowiednią odpowiedź w postaci obiektu z kodem reprezentującym status naszego żądania
            // Jeżeli jest 200 - użytkownik jest uwierzytelniony, jeżeli 500 - coś poszło nie tak po stronie serwera - brak zgody na dostęp do aplikacji
        }
    }
}