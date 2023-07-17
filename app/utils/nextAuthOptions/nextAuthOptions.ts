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
        async signIn({ user, account, profile }) { // logika sing in tutaj!
            // PO zalogowaniu się użytkownika w providerze będziemy sprawdzać czy taki użytkownik istnieje już w bazie.
            // Jeżeli nie istnieje to wtedy będziemy go do tej bazy wpychać oraz kolekcjonować od niego pozostałe wymagane do rejstracji dane
            user.nickname = "SDadssd"
            let isAllowedToSignIn:boolean = false
            console.log(user, account, profile)
            const authenticatedUserData:RegisterFormData = {
                email:user.email as string,
                nickname: user.name as string,
                register_terms: true
                
            }
            const response = await userAccessRequest<UserAccesSuccessResponse | UserAccessErrorResponse , RegisterFormData>("googleIdentityLogin", authenticatedUserData)
            console.log(response)
            return true
        },
    }
}