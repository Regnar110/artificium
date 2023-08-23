import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

// Między wywołaniami w aplikacji ioInstance traci swoją waetość??
// interface Props {
//     resetExisting:boolean
// }
// export var ioInstance: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
// export const getSocketInstance = ({resetExisting}:Props) => {
//     if(ioInstance && resetExisting){
//         console.log("RESETTINg EXISTING SOCKET INSTANCE TO NULL")
//         console.log(ioInstance)
//         ioInstance = null
//         return
//     } else {
//         console.log("GETTING SOCKET") // funkcja zwracająca instancję socketIo. Zapobiega ona tworzeniu wielu instancji w czasie używania aplikacji
//         if(!ioInstance) {
//             console.log("NOWA Io instancja")
//             ioInstance = io("http://localhost:3001/",{
//                 reconnection:false,
//                 // socket io jest inicjalizowany z przekazaniem id użytkownika instancji celem umożliwienia jego rozpoznania
//             }) as Socket<DefaultEventsMap, DefaultEventsMap> 
//             return ioInstance
//         } else {
//             console.log("IO JUŻ JEST ZAINICJALiZOWANE")
//             // console.log(ioInstance)
//             return ioInstance 
//         }        
//     }
//     // console.log(ioInstance)

// }

//Socket IO instance ( based on SINGLETON Pattern)
export class ioInstance {
    private static socketInstance:Socket<DefaultEventsMap, DefaultEventsMap> | null
    static activeSocketId: string | undefined = undefined
    private constructor() {} // prywatny konstruktor żeby zapobiec tworzeniu nowych instancji klasy. Ma to być umożliwione tylko przy pomocy metody getSocketInstance

    public static async getSocketInstance() {
        if(!this.socketInstance) {
            this.socketInstance = io("http://localhost:3001/", {
                reconnection:false,
            })

            // Poniżej czekamy ąż socketInstance będzie miało wartość pola connected true
            const isSocketConnected = await new Promise(resolve => {
                if(this.socketInstance!.connected) {
                  resolve(true)
                } else {
                  this.socketInstance!.once('connect', () => resolve(true))
                }
              })
              this.activeSocketId = this.socketInstance.io.engine.id
              if(isSocketConnected) return this.socketInstance // jezeli isSocketConnected === true zwracamy instancję
        }
        return this.socketInstance
    }

    public static closeSocketInstanceConnection() { 
        if(this.socketInstance) {
            this.socketInstance.disconnect()
            this.activeSocketId = undefined
            this.socketInstance= null
        } 
    }
}
