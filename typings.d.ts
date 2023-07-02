// ChatSendForm.tsx
interface SendMessageHandlerProps {
    e:React.FormEvent<HTMLButtonElement>
    message_text:string;
    user_data: { // nie pobieramy statusu użytkownika ponieważ z założenia jest on online
        user_nickname:string
    }
}

//REDUX TYPINGS

interface ClientBoundedProviderProps {
    children: React.ReactNode
}