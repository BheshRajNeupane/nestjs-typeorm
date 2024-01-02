import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config';
import { Item } from "../items/entities/item.entity";
import { Listing } from '../items/entities/listing.entity';
import { Comment } from '../items/entities/comment.entity';
import { Tag } from '../items/entities/tags.entity';



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
          
         entities: [Item,Listing, Comment , Tag]
        }),
    })
]



})
export class DatabaseModule {}
