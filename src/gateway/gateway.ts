import { 
    WebSocketGateway ,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,

} from '@nestjs/websockets';
import { OnModuleInit } from '@nestjs/common';
import { Server  }  from 'socket.io'


@WebSocketGateway()
export class MyWebSocketGateWay implements OnModuleInit{
    @WebSocketServer()   // server
    server:Server

     onModuleInit(){
       this.server.on('connection' , (socket)=>{
           console.log("user connected with  connection id" , socket.id);
       })
    }

    @SubscribeMessage('newMessage')
    onMewMessage( @MessageBody() body:any){
       this.server.emit('onMessage' , {
           msg:'New message',
           content: body
       })
        
    }
    // @SubscribeMessage('newMessage'){
    //   onMessage(client: Socket, body: string){
    //    this.server.emit('onMessage' , {
    //        msg:'New message',
    //        content: body
    //    })   
    // }
 //}
}