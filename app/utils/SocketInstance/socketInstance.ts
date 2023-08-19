import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export let ioInstance: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
interface SocketProps {
    authUser?:string // PARAMETR WYMAGANY!!
}
export const getSocketInstance = ({authUser}:SocketProps) => {
    console.log(ioInstance)
    console.log("GETTING SOCKET") // funkcja zwracająca instancję socketIo. Zapobiega ona tworzeniu wielu instancji w czasie używania aplikacji
    if(!ioInstance) {
        debugger;
        console.log("NOWA Io instancja")
        ioInstance = io("http://localhost:3001/",{
            reconnection:false,
             // socket io jest inicjalizowany z przekazaniem id użytkownika instancji celem umożliwienia jego rozpoznania
            query: {
                connected_user_id: authUser
            }
        }) as Socket<DefaultEventsMap, DefaultEventsMap> 
        console.log(ioInstance)
        return ioInstance
    } else {
        console.log("IO JUŻ JEST ZAINICJALiZOWANE")
        console.log(ioInstance)
        return ioInstance
    }
}