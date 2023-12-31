import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config';
import { Item } from "../items/entities/item.entity";
@Module({
imports : [

    TypeOrmModule.forRootAsync({
        inject:[ConfigService],
        useFactory:( configService:ConfigService) =>({
          type:'postgres',
          host:configService.getOrThrow('POSTGRES_HOST') ,
          port:configService.getOrThrow('POSTGRES_PORT'),
          database:configService.getOrThrow('POSTGRES_DATABASE'),
          username:configService.getOrThrow('POSTGRES_USER'),
          password:configService.getOrThrow('POSTGRES_PASSWORD'),
          autoLoadEntites:true,
          synchronize:configService.getOrThrow('POSTGRES_SYNCHRONIZE'),
          
          entities: [Item]
        }),
    })
]



})
export class DatabaseModule {}
