import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

let ioInstance: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
interface SocketProps {
    authUser:string
}
export const getSocketInstance = ({authUser}:SocketProps) => { // funkcja zwracająca instancję socketIo. Zapobiega ona tworzeniu wielu instancji w czasie używania aplikacji
    if(!ioInstance) {
        ioInstance = io("http://localhost:3001/",{
            query: {
                connected_user_id: authUser
            }
        }) as Socket<DefaultEventsMap, DefaultEventsMap> 
    }
    return ioInstance
}