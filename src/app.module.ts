import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';
import { GatewayModule } from './gateway/gateway.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true}),
    DatabaseModule,
    ItemsModule,
    GatewayModule,
    SocketModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
