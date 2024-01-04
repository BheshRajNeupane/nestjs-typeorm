import { MigrationInterface, QueryRunner } from "typeorm"
import { Logger } from '@nestjs/common';

export class  $npmConfigName1704286756942 implements MigrationInterface {
   private readonly logger = new Logger( $npmConfigName1704286756942.name)

    public async up(queryRunner: QueryRunner): Promise<void> {
       // this.logger.log('Up')
        await queryRunner.query('UPDATE item set public = 1');
    }

    public async down(): Promise<void> {
        //this.logger.log('Down')
    }

}
