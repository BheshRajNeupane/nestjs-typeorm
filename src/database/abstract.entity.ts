import { PrimaryGeneratedColumn } from 'typeorm';


export class AbstractEnity<T>{
    @PrimaryGeneratedColumn()
    id:number;

    constructor(entity:Partial<T>){
        Object.assign(this , entity);
    }
}