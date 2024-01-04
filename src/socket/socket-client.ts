import { Injectable, OnModuleInit } from '@nestjs/common';
import { io , Socket } from 'socket.io-client'

@Injectable()
export class SocketClient implements OnModuleInit{
     public socketClient : Socket

     constructor(){
         this.socketClient = io('http://127.0.0.1:3001');

     }

     onModuleInit(){
           this.registerConsumerEvents();
     }

     private registerConsumerEvents(){
         //connection
          this.socketClient.on('connect' , ()=>{
             console.log('Connected to WebSocket Getway..!');
            })

            //newMessage emit
            this.socketClient.emit('newMessage' , { msg: 'hey , how are you?'})

            // listening 
            this.socketClient.on('onMessage' , (payload:any)=>{
                console.log(payload.content);
                
            })
         
     }

}