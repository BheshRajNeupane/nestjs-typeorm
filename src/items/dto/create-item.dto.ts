import { CreatelistingDto} from './create-listening.dto';
import { CreateTagDto } from './create-tag.dto';


export class CreateItemDto {
    name:string;
    public:boolean;
    listing:CreatelistingDto;
    tags :CreateTagDto[]
}
