'use client'
import { Provider } from "react-redux"
import { store } from "../store/store"

// Jako że w NextJs13 każdy komponent domyślnie jest komponentem serverowym tworzymy własny provider, który zawsze będzie przywiązany do strony klienta. 
// Umożliwi to ominięcie błędów związanych z próbą inicjalizacji reduxa po stronie servera co jest nie możliwe ze względu na środowisko

export const ClientBoundedProvider = ({children}:ClientBoundedProviderProps) => {
    return <Provider store={store}>{children}</Provider>
}