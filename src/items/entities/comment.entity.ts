
import { AbstractEnity } from '../../database/abstract.entity';
import { Item } from './item.entity';
import { Column ,
    Entity ,
     PrimaryGeneratedColumn ,
     ManyToOne,
    
   } from 'typeorm';


@Entity()
export class Comment extends AbstractEnity<Comment>{
    @Column()
    content:string;

   @ManyToOne(()=>Item , (item)=> item.comments)
   item:Item
    
   }