import { Column , Entity , PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEnity } from '../../database/abstract.entity';


@Entity()
export class Listing  extends AbstractEnity<Listing>{

   @Column()
   description:string;
   
   @Column()
   rating:number;

//    constructor(listing : Partial<Listing>){
//        Object.assign(this , listing)
//    }






}
