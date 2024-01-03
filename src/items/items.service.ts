import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listing } from './entities/listing.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
import { Tag } from './entities/tags.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly itemsRepository: Repository<Item>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      rating: 0,
    });

    const tags = createItemDto.tags.map((tag) => new Tag(tag));

    const item = new Item({
      ...createItemDto,
      comments: [],
      tags,
      listing,
    });
    return this.entityManager.save(item);
  }

  async findAll() {
    return this.itemsRepository.find();
  }

  findOne(id: number) {
    return this.itemsRepository.findOne({
      where: { id },
      relations: { listing: true, comments: true, tags: true },
    });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    // const item = await this.itemsRepository.findOneBy({ id });
    // item.public = updateItemDto.public;

    // if (updateItemDto.comments) {
    //   const comments = updateItemDto.comments.map((c) => new Comment(c));
    //   item.comments = comments;
    // }

    // return await this.entityManager.save(item);

    await this.entityManager.transaction(async (entityManager) => {
       const item = await this.itemsRepository.findOneBy({id});
       item.public = updateItemDto.public;
      if (updateItemDto.comments) {
        const comments  = updateItemDto.comments.map((c) => new Comment(c));
      item.comments = comments;
       }
        return await this.entityManager.save(item)
        throw new Error() // to  testing transection
          
        const tagContent = `${Math.random()}`;
        const tag = new Tag({content : tagContent })
        await entityManager.save(tag)
    });
  }



  async remove(id: number) {
    await this.itemsRepository.delete(id);
  }
}
