import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

// Między wywołaniami w aplikacji ioInstance traci swoją waetość??
export let ioInstance: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
export const getSocketInstance = () => {
    // console.log(ioInstance)
    console.log("GETTING SOCKET") // funkcja zwracająca instancję socketIo. Zapobiega ona tworzeniu wielu instancji w czasie używania aplikacji
    if(!ioInstance) {
        console.log("NOWA Io instancja")
        ioInstance = io("http://localhost:3001/",{
            reconnection:false,
             // socket io jest inicjalizowany z przekazaniem id użytkownika instancji celem umożliwienia jego rozpoznania
        }) as Socket<DefaultEventsMap, DefaultEventsMap> 
        return ioInstance
    } else {
        console.log("IO JUŻ JEST ZAINICJALiZOWANE")
        // console.log(ioInstance)
        return ioInstance 
    }
}