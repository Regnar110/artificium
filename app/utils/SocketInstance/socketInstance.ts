import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

let ioInstance: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
interface SocketProps {
    authUser:string
}
export const getSocketInstance = ({authUser}:SocketProps) => { // funkcja zwracająca instancję socketIo. Zapobiega ona tworzeniu wielu instancji w czasie używania aplikacji
    
    if(!ioInstance) {
        console.log("NOWA Io instancja")
        ioInstance = io("http://localhost:3001/",{ // socket io jest inicjalizowany z przekazaniem id użytkownika instancji celem umożliwienia jego rozpoznania
            query: {
                connected_user_id: authUser
            }
        }) as Socket<DefaultEventsMap, DefaultEventsMap> 
    } else {
        console.log("IO JUŻ JEST ZAINICJALiZOWANE")
    }
    return ioInstance
}