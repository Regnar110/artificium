'use client'
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const SignInPage = ({params}:{ params: { provider_slug:string}}) => {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (!(status === "loading") && !session) void signIn(params.provider_slug);
        if (session) window.close();
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