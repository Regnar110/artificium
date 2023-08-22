'use client'
import { AuthUserStoreInjection } from "@/app/utils/AuthUserStoreInjection/AuthUserStoreInjection";
import { useAppDispatch } from "@/redux/hooks/typedHooks";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignInPage = ({params}:{ params: { provider_slug:string}}) => {
    const { data: session, status } = useSession();
    const router = useRouter()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!(status === "loading") && !session) void signIn(params.provider_slug);
        if (session) {
            debugger;
            const user = session.user as UserAccesSuccessResponse | UserAccessErrorResponse
            user.status === 510 || user.status === 500 ? signOut() : AuthUserStoreInjection({ user: user.body, dispatch})
            user.status === 200 ? router.push('/dashboard') : null 
            console.log(session)
            window.close();

            //Przeniesione z login buttons
        }
    }, [session, status]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                left: 0,
                top: 0,
                background: "white",
            }}
        ></div>
    );
};

export default SignInPage;

// Strona, która wyświetla się w formie modalu za pośrednictwem NextAuthProviderLoginPopUpCenter. Służy ona do logowania się użytkownika przy pomocy okrślonego w
// provider_slug parametrze . Może to być google, apple, github lub inny dostawcva uznany przez NextAuth.
// Strona ta również weryfikuje czy ktoś kto ma już utworzoną sesję użytkownika nie próbuje sie na nowo zalogowac. Jeżeli tak by  było to okno typu modal zostnie natychmiast zamknięte.