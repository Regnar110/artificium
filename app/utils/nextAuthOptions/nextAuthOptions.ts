import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from 'next-auth/providers/apple'
import { redirect } from "next/navigation";
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
        async signIn({ user, account, profile }) {
            const userData = { // tworzmy obiekt użytkownika na wypadek gdy jest on nowym użytkownikiem. Obiekt ten posłuży w razie co do rejestracji w bazie
              ...user,
              nickname: (profile!.name as string).replace(/\s/g, ''),
              provider:account?.provider,
            } as RegisterFormData
            console.log(user.email)
            //usuwamy właściwiości obiektu, które nie są zgodne z typem obiektu RegisterFormData
            delete userData.image
            delete userData.id
            delete userData.name
            console.log(userData)
            //logowanie - najpierw sprawdzimy czy konto z tym mailem istnieje już w bazie i czy provider się zgadza
            const response = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", userData)
            // tutaj powinniśmy otrzymać UserAccessSuccessResponse  w którym body jest obiektem użytkownika. Body przy udanym logowaniu powinno zawsze być obiektem użytkownika z bazy
            //mongo.
            user = response.body
            return true
        },
        async session({session, token, user}) {
          console.log(token)
          return session
        }
    }
}