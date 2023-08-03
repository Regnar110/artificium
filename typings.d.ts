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
    provider: "artificium" | "google"
}

interface ProviderLoginData {
    email:string
    provider:string
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

interface AuthenticatedUser {
    _id: string,
    email: string,
    nickname: string,
    provider: "artificium" | "google",
    avatar_id: string,
    user_friends_ids: string[],
    user_groups_ids: string[]
}

type Providers = "artificium" | "google"


//CHATTING WINDOWS

interface ChattingWindowsType {
    windowType:"artificium" | "chat" | "library",
    selectedGroup:string
}


//GROUPS

interface Group {
    _id:string,
    group_admin:string
    group_name:string
    group_description:string
    group_users:string[]
    group_invite_slugId:string
}