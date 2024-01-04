import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Listing } from './src/items/entities/listing.entity';
import { Comment } from './src/items/entities/comment.entity';
import { Tag } from './src/items/entities/tags.entity';
ConfigService
import{ Item} from './src/items/entities/item.entity';

config();

const configService = new ConfigService();

export default new DataSource({

    type:'postgres',
          host:configService.getOrThrow('POSTGRES_HOST') ,
          port:configService.getOrThrow('POSTGRES_PORT'),
          database:configService.getOrThrow('POSTGRES_DATABASE'),
          username:configService.getOrThrow('POSTGRES_USER'),
          password:configService.getOrThrow('POSTGRES_PASSWORD'),
          synchronize:configService.getOrThrow('POSTGRES_SYNCHRONIZE'),
          
         entities: [Item,Listing, Comment , Tag],
         migrations:['migrations/**']

})

