import { Module } from '@nestjs/common';
import { MyWebSocketGateWay} from './gateway'
@Module({
    providers: [MyWebSocketGateWay]
})

export class GatewayModule{}