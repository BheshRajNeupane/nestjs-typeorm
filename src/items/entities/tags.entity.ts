import { AbstractEnity } from '../../database/abstract.entity';
import { Entity , ManyToMany  , Column} from 'typeorm';

@Entity()
export class Tag extends AbstractEnity<Tag> {
    @Column()
    content:string





}