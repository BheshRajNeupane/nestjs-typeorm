 import { Column ,
     Entity ,
      PrimaryGeneratedColumn ,
      OneToMany,
      JoinColumn,
      JoinTable,
      OneToOne,
      ManyToMany
    } from 'typeorm';
import { Listing } from './listing.entity';
import { AbstractEnity } from '../../database/abstract.entity';
import { Comment } from './comment.entity';
import { Tag } from './tags.entity';


@Entity()
export class Item extends AbstractEnity<Item> {

   @Column()
   name:string;

   @Column({default:true})
   public:boolean

   
   @OneToOne(()=>Listing , { cascade:true})
   @JoinColumn()
   listing:Listing;

   @OneToMany(()=> Comment , (comments)=> comments.item , { cascade:true})
   comments:Comment[]
   
  @ManyToMany(()=> Tag , { cascade:true})
  @JoinTable()
  tags:Tag[]


//    constructor(item : Partial<Item>){
//        Object.assign(this , item)
//    }

}
