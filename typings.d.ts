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

// LOGIN and REGISTER

interface RegisterFormData {
    email: string, 
    nickname: string, 
    register_password?: string, 
    register_password_repeat?: string, 
    register_terms: boolean
}

interface UserAccesSuccessResponse {
    body:any;
    client_message:string;
    status:200
}

interface UserAccessErrorResponse {
    error_message:string;
    client_message:string;
    status: 500 | 510
}