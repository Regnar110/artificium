import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

//Socket IO instance ( based on SINGLETON Pattern)
export class ioInstance {
    private static socketInstance:Socket<DefaultEventsMap, DefaultEventsMap> | null
    static activeSocketId: string | undefined = undefined
    private constructor() {} // prywatny konstruktor żeby zapobiec tworzeniu nowych instancji klasy. Ma to być umożliwione tylko przy pomocy metody getSocketInstance

    public static async getSocketInstance(userId:string) {
        if(!this.socketInstance) {
            this.socketInstance = io("http://localhost:3001/", {
                reconnection:false,
                query:{
                    userId
                }
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
            } else {
                return this.socketInstance
            }
    }

    public static getActiveSocket() {
        return this.socketInstance as Socket<DefaultEventsMap, DefaultEventsMap>
    }

    public static closeSocketInstanceConnection() { 
        if(this.socketInstance) {
            this.socketInstance.disconnect()
            this.activeSocketId = undefined
            this.socketInstance= null
        } 
    }
}
